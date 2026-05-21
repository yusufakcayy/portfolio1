"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();

      // Hide success message after 4 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <Section id="contact" crossNav className="relative overflow-hidden py-16">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[60px] -z-10 pointer-events-none" />

      <Container>
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase"
            >
              {t("title")}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold font-heading tracking-tight"
            >
              {t("subtitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm max-w-xl mx-auto"
            >
              {t("description")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-lg shadow-primary/5 flex flex-col gap-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading">{t("info")}</h3>
                  <p className="text-xs text-muted-foreground">Feel free to reach out via any of these channels.</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: t("email"), value: "yakcay155@gmail.com", href: "mailto:yakcay155@gmail.com" },
                    { icon: Phone, label: t("phone"), value: "+90 555 143 20 23", href: "tel:+905551432023" },
                    { icon: MapPin, label: t("location"), value: "Konya, Turkey", href: null }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="flex-shrink-0 p-2.5 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <span className="text-sm font-medium">{item.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic"></p>
                </div>
              </div>
            </motion.div>

            {/* Glassmorphism Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7"
            >
              <form 
                onSubmit={handleSubmit}
                className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-lg shadow-primary/5 flex flex-col gap-5 relative"
              >
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 z-10 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl p-6 text-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                      <h3 className="text-xl font-bold font-heading mb-2">Message Sent!</h3>
                      <p className="text-sm text-muted-foreground">Thank you for your message. I will get back to you soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">{t("nameLabel")}</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t("placeholderName")}
                      className="w-full h-10 px-4 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">{t("emailLabel")}</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full h-10 px-4 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">{t("subjectLabel")}</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder={t("placeholderSubject")}
                    className="w-full h-10 px-4 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">{t("messageLabel")}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={t("placeholderMessage")}
                    className="w-full p-4 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none placeholder:text-muted-foreground/50 text-sm"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Sending..." : t("send")}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
