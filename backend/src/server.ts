import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

dotenv.config();

const server = Fastify({ logger: true });
const prisma = new PrismaClient();

// Register CORS
server.register(cors, { origin: "*" }); // Allow all for dev, restrict in prod

// Register JWT
server.register(jwt, {
  secret: process.env.JWT_SECRET || "super-secret-key-change-this-in-prod",
});

// Middleware to protect admin routes
async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ error: "Unauthorized access" });
  }
}

// ----------------------------------------------------
// PUBLIC ROUTES
// ----------------------------------------------------
server.get("/api/health", async () => {
  return { status: "ok", message: "API is running" };
});

server.get("/api/projects", async () => {
  const projects = await prisma.project.findMany({ orderBy: { orderIndex: 'asc' } });
  return projects;
});

server.post("/api/contact", async (request, reply) => {
  const { name, email, subject, message } = request.body as any;
  if (!name || !email || !message) {
    return reply.status(400).send({ error: "Missing required fields" });
  }

  const newMessage = await prisma.message.create({
    data: { name, email, subject, message },
  });

  return reply.send({ success: true, data: newMessage });
});

// ----------------------------------------------------
// AUTH ROUTE
// ----------------------------------------------------
server.post("/api/admin/login", async (request, reply) => {
  const { username, password } = request.body as any;

  if (!username || !password) return reply.status(400).send({ error: "Missing credentials" });

  const admin = await prisma.admin.findUnique({ where: { username } });
  if (!admin) return reply.status(401).send({ error: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return reply.status(401).send({ error: "Invalid credentials" });

  const token = server.jwt.sign({ id: admin.id, username: admin.username });
  return reply.send({ token });
});

// ----------------------------------------------------
// PROTECTED ADMIN ROUTES (Require JWT)
// ----------------------------------------------------

// Messages
server.get("/api/admin/messages", { preValidation: [authenticate] }, async () => {
  return await prisma.message.findMany({ orderBy: { createdAt: 'desc' } });
});

server.delete("/api/admin/messages/:id", { preValidation: [authenticate] }, async (request, reply) => {
  const { id } = request.params as any;
  await prisma.message.delete({ where: { id } });
  return reply.send({ success: true });
});

server.put("/api/admin/messages/:id/read", { preValidation: [authenticate] }, async (request, reply) => {
  const { id } = request.params as any;
  const message = await prisma.message.update({
    where: { id },
    data: { isRead: true },
  });
  return reply.send({ success: true, data: message });
});

// Projects
server.post("/api/admin/projects", { preValidation: [authenticate] }, async (request, reply) => {
  const data = request.body as any;
  const project = await prisma.project.create({ data });
  return reply.send({ success: true, data: project });
});

server.put("/api/admin/projects/:id", { preValidation: [authenticate] }, async (request, reply) => {
  const { id } = request.params as any;
  const data = request.body as any;
  const project = await prisma.project.update({ where: { id }, data });
  return reply.send({ success: true, data: project });
});

server.delete("/api/admin/projects/:id", { preValidation: [authenticate] }, async (request, reply) => {
  const { id } = request.params as any;
  await prisma.project.delete({ where: { id } });
  return reply.send({ success: true });
});

// Seed Initial Admin if none exists
async function seedAdmin() {
  const count = await prisma.admin.count();
  if (count === 0) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await prisma.admin.create({
      data: {
        username: "admin",
        password: hashedPassword,
      },
    });
    console.log("Default admin created: username: admin, password: admin123");
  }
}

// Start Server
const start = async () => {
  try {
    await seedAdmin();
    const port = parseInt(process.env.PORT || "5000", 10);
    await server.listen({ port, host: "0.0.0.0" });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
