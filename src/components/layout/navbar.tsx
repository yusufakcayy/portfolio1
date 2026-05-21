"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/routing";
import { Languages } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("work"), href: "#work" },
    { name: t("experience"), href: "#experience" },
    { name: t("contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "tr" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300">
      <div
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border border-border shadow-md"
            : "bg-background/50 backdrop-blur-sm border border-transparent"
        )}
      >
        <Link 
          href="#home" 
          className="text-2xl font-bold tracking-tighter font-heading hover:opacity-80 transition-opacity"
        >
          <span className="text-foreground">Yusuf</span> <span className="text-primary">Akçay</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center gap-1.5 px-3"
            aria-label="Change language"
          >
            <Languages className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase">{locale}</span>
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {mounted && (
              theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            )}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-2 left-0 w-full bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-lg py-4 px-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground p-3 rounded-xl hover:bg-secondary transition-colors text-center"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

