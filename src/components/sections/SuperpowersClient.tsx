"use client";

import { motion } from "framer-motion";

interface Superpower {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

const superpowers: Superpower[] = [
  {
    name: "Python",
    description: "Data analysis, automation, web back‑ends with FastAPI.",
  },
  {
    name: "Go",
    description: "High‑performance services, concurrency, cloud native tooling.",
  },
  {
    name: "Framer Motion (JS)",
    description: "Smooth UI animations for delightful experiences.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function SuperpowersClient() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {superpowers.map((sp) => (
        <motion.div
          key={sp.name}
          className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          variants={item}
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">{sp.name}</h3>
          <p className="text-gray-700">{sp.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
