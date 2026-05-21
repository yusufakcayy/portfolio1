
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

import SuperpowersClient from "./SuperpowersClient";

export function Superpowers({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 bg-gradient-to-b from-gray-100 to-gray-200", className)}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Superpowers</h2>
        <SuperpowersClient />
      </div>
    </section>
  );
}
