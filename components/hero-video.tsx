"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useHydrated } from "@/lib/use-hydrated";
import { DeviceFrame } from "@/components/device-frame";

export const WORKFLOW_SCREENS = [
  {
    step: "01",
    name: "Speak",
    tag: "30S VOICE NOTE",
    lightSrc: "/recording-light.png",
    darkSrc: "/recording-dark.png",
    alt: "Dex iOS active voice recording screen with real-time waveform",
  },
  {
    step: "02",
    name: "Process",
    tag: "ZERO TYPING",
    lightSrc: "/hitl-light.png",
    darkSrc: "/hitl-dark.png",
    alt: "Dex iOS review notes sheet with extracted facts and one-tap save",
  },
  {
    step: "03",
    name: "Save",
    tag: "ONE-TAP APPROVAL",
    lightSrc: "/briefing-light.png",
    darkSrc: "/briefing-dark.png",
    alt: "Dex iOS contact relationship memory briefing card",
  },
];

export interface HeroVideoProps {
  src?: string;
  activeStep?: number;
  onStepChange?: (step: number) => void;
  className?: string;
}

export function HeroVideo({
  src = "/hero-workflow.mp4",
  activeStep: controlledStep,
  onStepChange,
  className = "",
}: HeroVideoProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useHydrated();
  const isDark = mounted ? resolvedTheme !== "light" : true;

  const [internalStep, setInternalStep] = useState(0);
  const activeStep = controlledStep !== undefined ? controlledStep : internalStep;
  const currentScreen = WORKFLOW_SCREENS[activeStep] || WORKFLOW_SCREENS[0];

  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-cycle through the 3 real app steps if not controlled externally
  useEffect(() => {
    if (hasVideo || controlledStep !== undefined) return;
    const interval = setInterval(() => {
      setInternalStep((prev) => (prev + 1) % WORKFLOW_SCREENS.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [hasVideo, controlledStep]);

  // Preload real app screenshots
  useEffect(() => {
    if (!mounted) return;
    WORKFLOW_SCREENS.forEach((screen) => {
      const imgDark = new window.Image();
      imgDark.src = screen.darkSrc;
      const imgLight = new window.Image();
      imgLight.src = screen.lightSrc;
    });
  }, [mounted]);

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Explicitly sized container for Apple-tier flush alignment above the fold */}
      <div className="w-[250px] sm:w-[270px] lg:w-[295px] xl:w-[315px] transition-all duration-300">
        <DeviceFrame
          lightSrc={currentScreen.lightSrc}
          darkSrc={currentScreen.darkSrc}
          alt={currentScreen.alt}
          priority
        >
          {src && (
            <video
              ref={videoRef}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setHasVideo(true)}
              onError={() => setHasVideo(false)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                hasVideo ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
              }`}
            />
          )}

          {/* Real native iOS app screen (cross-faded between steps) */}
          <div className="relative h-full w-full">
            <Image
              src={isDark ? currentScreen.darkSrc : currentScreen.lightSrc}
              alt={currentScreen.alt}
              width={1206}
              height={2622}
              unoptimized
              priority
              className="block h-full w-full object-cover transition-opacity duration-300"
            />
          </div>
        </DeviceFrame>
      </div>

      {/* Screen step indicators */}
      <div className="mt-4 flex items-center gap-2">
        {WORKFLOW_SCREENS.map((screen, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={screen.step}
              type="button"
              onClick={() => {
                if (onStepChange) onStepChange(idx);
                else setInternalStep(idx);
              }}
              data-cursor-hover
              aria-label={`Show ${screen.name} step`}
              className={`h-1.5 transition-all rounded-full ${
                isActive
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}