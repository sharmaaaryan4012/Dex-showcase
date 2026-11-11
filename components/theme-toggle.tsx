"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useHydrated } from "@/lib/use-hydrated";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHydrated();

  const isDark = mounted ? resolvedTheme !== "light" : true;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      data-cursor-hover
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        {isDark ? (
          <Sun size={13} className="transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon size={13} className="transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </span>
      {!compact && (
        <span className="hidden sm:inline">
          {mounted ? (isDark ? "Dark" : "Light") : "Dark"}
        </span>
      )}
    </button>
  );
}
