"use client";

import * as React from "react";
import { Container } from "./container";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-background py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="font-heading text-xl font-bold">
              <span className="text-foreground">Yusuf</span> <span className="text-primary">Akçay</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/yusufakcayy" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/yusuf-akçay-0b74b5381?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
              <FaTwitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-muted-foreground">
            <p>{t("builtWith")} © {new Date().getFullYear()} Yusuf Akçay. {t("passion")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
