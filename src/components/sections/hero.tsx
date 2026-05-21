"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Blur Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Floating Objects */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 -z-10 text-primary/30 hidden lg:block"
      >
        <Sparkles size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-1/4 -z-10 w-16 h-16 rounded-xl border border-primary/20 rotate-12 hidden lg:block backdrop-blur-md bg-background/30"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium bg-background/50 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              {t("badge")}
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground leading-tight">
              {t("title1")} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                {t("title2")}
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-[500px]">
              {t("description")}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <a href="#work" className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105">
                {t("explore")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105">
                <Download className="h-4 w-4" />
                {t("resume")}
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Card / Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[400px] aspect-[4/5] lg:ml-auto"
          >
            {/* Decorative Card Backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl rotate-6 transition-transform hover:rotate-12 duration-500 blur-sm" />
            <div className="absolute inset-0 bg-background border border-border rounded-3xl shadow-xl overflow-hidden flex flex-col">

              {/* Fake Window Controls */}
              <div className="h-10 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* Fake Code / Content Area */}
              <div className="flex-1 p-6 font-mono text-sm text-muted-foreground flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Sparkles className="w-40 h-40" />
                </div>

                <p><span className="text-purple-500">const</span> <span className="text-blue-500">developer</span> = {"{"}</p>
                <div className="pl-4 flex flex-col gap-2">
                  <p><span className="text-foreground">name:</span> <span className="text-green-500">"Yusuf Akçay"</span>,</p>
                  <p><span className="text-foreground">role:</span> <span className="text-green-500">"Full Stack Developer"</span>,</p>
                  <p><span className="text-foreground">skills:</span> [</p>
                  <div className="pl-4 flex flex-col gap-1 text-green-500">
                    <p>"React",</p>
                    <p>"Next.js",</p>
                    <p>"TypeScript",</p>
                    <p>"Tailwind CSS"</p>
                  </div>
                  <p>],</p>
                  <p><span className="text-foreground">passion:</span> <span className="text-green-500">"Full Stack Development"</span></p>
                </div>
                <p>{"};"}</p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-20 bg-background border border-border rounded-2xl p-4 shadow-lg flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{t("years")}</p>
                <p className="text-xs text-muted-foreground">{t("exp")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
