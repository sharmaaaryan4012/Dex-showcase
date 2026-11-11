"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useHydrated } from "@/lib/use-hydrated";

export interface DeviceFrameProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function DeviceFrame({
  lightSrc,
  darkSrc,
  alt,
  priority = false,
  className = "",
}: DeviceFrameProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useHydrated();

  const isDark = mounted ? resolvedTheme !== "light" : true;
  const activeSrc = isDark ? darkSrc : lightSrc;
  const preloadSrc = isDark ? lightSrc : darkSrc;

  // Keep the opposite theme screenshot warm in browser cache so Light/Dark swaps render instantaneously
  useEffect(() => {
    if (!mounted) return;
    const preloader = new window.Image();
    preloader.src = preloadSrc;
  }, [mounted, preloadSrc]);

  return (
    <div className={`relative select-none ${className}`}>
      {/* Left hardware buttons (Action + Volume Up/Down) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[2.5px] top-[15%] h-[3.6%] w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-500 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[2.5px] top-[22%] h-[6.8%] w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-500 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[2.5px] top-[31%] h-[6.8%] w-[3px] rounded-l-sm bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-500 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800"
      />

      {/* Right hardware button (Power) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[2.5px] top-[25%] h-[10.5%] w-[3px] rounded-r-sm bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-500 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800"
      />

      {/* Titanium exterior chassis */}
      <div className="relative rounded-[14.8%/6.85%] bg-gradient-to-b from-[#DFDDD6] via-[#F2F1EC] to-[#C8C6BE] dark:from-[#3A3A3D] dark:via-[#232326] dark:to-[#18181A] p-[2.6%] shadow-[0_38px_90px_-24px_rgba(17,17,17,0.28),0_12px_30px_-10px_rgba(17,17,17,0.14)] dark:shadow-[0_44px_110px_-24px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-black/10 dark:ring-white/15">
        {/* Inner OLED black bezel */}
        <div className="relative rounded-[13.4%/6.2%] bg-[#070708] p-[2.1%] ring-1 ring-black/60 dark:ring-white/[0.06]">
          {/* Active Retina viewport matching exact 1206x2622 iPhone aspect ratio */}
          <div className="relative aspect-[1206/2622] w-full overflow-hidden rounded-[12.2%/5.65%] bg-background">
            <Image
              src={activeSrc}
              alt={alt}
              width={1206}
              height={2622}
              unoptimized
              loading={priority ? "eager" : "lazy"}
              className="block h-full w-full object-cover transition-opacity duration-200"
            />

            {/* Measured Dynamic Island hardware cutout aligned with iOS 9:41 safe region */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[1.6%] z-20 flex h-[4.08%] w-[31.1%] -translate-x-1/2 items-center justify-end rounded-full bg-[#050505] px-[3.2%] shadow-[inset_0_0_2px_rgba(255,255,255,0.14)]"
            >
              <span className="h-[46%] aspect-square rounded-full bg-[radial-gradient(circle_at_35%_35%,#2B3750,#08090C_72%)] ring-1 ring-white/[0.08]" />
            </div>

            {/* Subtle top glass specular reflection */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-transparent to-white/[0.06] dark:to-white/[0.035]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
