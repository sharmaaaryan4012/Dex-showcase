"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MagneticLink } from "@/components/magnetic-link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "Overview", path: "#overview" },
  { name: "Voice Capture", path: "#capture" },
  { name: "Knowledge Graph", path: "#memory" },
  { name: "Security", path: "#security" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.saaryan.com/"
                data-cursor-hover
                className="font-mono text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors"
              >
                AS<span className="text-muted-foreground">.</span>
              </a>

              <span className="text-border-strong font-mono text-xs select-none">/</span>

              <Link
                href="/"
                data-cursor-hover
                aria-label="Dex Home"
                className="inline-flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/dex-logo.png"
                  alt="Dex"
                  width={64}
                  height={64}
                  loading="eager"
                  unoptimized
                  className="h-7 w-auto rounded-md ring-1 ring-black/10 dark:ring-white/15 shadow-xs"
                />
              </Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeToggle />

              <button
                onClick={() => setIsOpen((v) => !v)}
                type="button"
                data-cursor-hover
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="relative z-[60] flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
              >
                <span className="text-xs font-mono tracking-widest hidden sm:inline">
                  {isOpen ? "CLOSE" : "MENU"}
                </span>
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background text-foreground flex flex-col justify-center px-6 sm:px-12 py-20 overflow-y-auto overflow-x-hidden"
            initial={shouldReduce ? { opacity: 1 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0% 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] invert dark:invert-0 dark:opacity-[0.04] pointer-events-none" />
            <div className="absolute -top-1/3 -right-1/4 h-[36rem] w-[36rem] rounded-full bg-foreground/[0.04] blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-1/3 -left-1/4 h-[28rem] w-[28rem] rounded-full bg-foreground/[0.03] blur-[100px] pointer-events-none" />

            <span
              aria-hidden
              className="absolute right-6 sm:right-12 top-20 sm:top-24 font-display text-[7rem] sm:text-[13rem] font-medium text-foreground/[0.03] leading-none select-none pointer-events-none"
            >
              dex
            </span>

            <ul
              className="space-y-1 sm:space-y-2 relative z-10 shrink-0"
              onMouseLeave={() => setHovered(null)}
            >
              {navItems.map((item, i) => {
                const isDimmed = hovered !== null && hovered !== i;
                return (
                  <motion.li
                    key={item.name}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    onMouseEnter={() => setHovered(i)}
                  >
                    <MagneticLink strength={0.2} className="inline-block">
                      <a
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        data-cursor-hover
                        className={`group flex items-center gap-4 text-[clamp(1.75rem,7vh,3.75rem)] font-bold tracking-tight font-display transition-all duration-300 text-foreground/85 hover:text-foreground ${
                          isDimmed ? "opacity-25" : "opacity-100"
                        }`}
                      >
                        <span className="font-mono text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-foreground origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100" />
                        </span>
                      </a>
                    </MagneticLink>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="relative z-10 mt-10 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-border pt-6 shrink-0"
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + navItems.length * 0.06 }}
            >
              <div className="flex gap-3">
                <MagneticLink strength={0.5}>
                  <a
                    href="mailto:sharmaaaryan4012@gmail.com"
                    data-cursor-hover
                    aria-label="Email Aaryan Sharma"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </MagneticLink>
                <MagneticLink strength={0.5}>
                  <a
                    href="https://github.com/sharmaaaryan4012"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </MagneticLink>
                <MagneticLink strength={0.5}>
                  <a
                    href="https://www.linkedin.com/in/sharmaaaryan"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </MagneticLink>
              </div>
              <span className="font-display text-sm sm:text-base italic text-muted-foreground">
                Voice in. Context out.
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
