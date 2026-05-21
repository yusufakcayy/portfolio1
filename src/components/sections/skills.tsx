"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiFramer,
  SiFigma,
  SiPython,
  SiJavascript,
  SiGo,
  SiDocker
} from "react-icons/si";
import { Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

const SKILLS = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", bg: "bg-foreground/10" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", bg: "bg-[#339933]/10" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", bg: "bg-[#4169E1]/10" },
  { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]", bg: "bg-[#0055FF]/10" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/10" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]", bg: "bg-[#3776AB]/10" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10" },
  { name: "Go", icon: SiGo, color: "text-[#00ADD8]", bg: "bg-[#00ADD8]/10" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10" },
];

export function Skills() {
  const t = useTranslations("skills");

  const STATS = [
    { label: t("yearsExp"), value: 4, suffix: "+" },
    { label: t("projects"), value: 42, suffix: "+" },
    { label: t("clients"), value: 20, suffix: "" },
  ];

  return (
    <Section id="experience" className="relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Skills & Stats */}
          <div className="flex flex-col gap-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4"
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

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SKILLS.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className={`p-3 rounded-xl transition-colors ${skill.bg}`}>
                      <Icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex flex-col gap-2"
                >
                  <div className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <div className="p-3 bg-primary/10 rounded-xl">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading">{t("workExp")}</h3>
            </motion.div>

            <div className="flex flex-col gap-8 relative pl-4 md:pl-0">
              {/* Vertical line for timeline */}
              <div className="absolute left-[15px] md:left-[23px] top-2 bottom-2 w-px bg-border -z-10" />

              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 md:w-12 md:h-12 bg-background border border-border rounded-full flex items-center justify-center -translate-x-1/2">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
                      {t(`experiences.${index}.period`)}
                    </span>
                    <h4 className="text-xl font-bold text-foreground mb-1">{t(`experiences.${index}.role`)}</h4>
                    <p className="text-primary font-medium mb-4">{t(`experiences.${index}.company`)}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`experiences.${index}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
