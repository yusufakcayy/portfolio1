"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { useTranslations } from "next-intl";

const PROJECTS = [
  {
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Recharts"],
    githubUrl: "https://github.com/yusufakcayy",
    liveUrl: "#",
  },
  {
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    githubUrl: "https://github.com/yusufakcayy",
    liveUrl: "#",
  },
  {
    tags: ["React Native", "Expo", "Firebase", "Zustand"],
    githubUrl: "https://github.com/yusufakcayy",
    liveUrl: "#",
  },
  {
    tags: ["Next.js", "Socket.io", "TipTap", "PostgreSQL"],
    githubUrl: "https://github.com/yusufakcayy",
    liveUrl: "#",
  },
  {
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    githubUrl: "https://github.com/yusufakcayy",
    liveUrl: "#",
  },
  {
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/yusufakcayy",
    liveUrl: "#",
  },
];

export function Projects() {
  const t = useTranslations("projects");

  return (
    <Section id="work" crossNav className="bg-muted/30">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-heading tracking-tight"
            >
              {t("title")} <span className="text-primary">{t("subtitle")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              {t("description")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={t(`items.${index}.title`)}
                  description={t(`items.${index}.description`)}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
