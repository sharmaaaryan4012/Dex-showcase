"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { MagneticLink } from "@/components/magnetic-link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            <span className="text-foreground font-medium">AARYAN SHARMA</span>
            <span aria-hidden className="text-border-strong">/</span>
            <span>&copy; {new Date().getFullYear()} Dex. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <MagneticLink strength={0.45}>
              <a
                href="mailto:sharmaaaryan4012@gmail.com"
                data-cursor-hover
                aria-label="Email Aaryan Sharma"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Mail size={15} />
              </a>
            </MagneticLink>
            <MagneticLink strength={0.45}>
              <a
                href="https://github.com/sharmaaaryan4012"
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Github size={15} />
              </a>
            </MagneticLink>
            <MagneticLink strength={0.45}>
              <a
                href="https://www.linkedin.com/in/sharmaaaryan"
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Linkedin size={15} />
              </a>
            </MagneticLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
