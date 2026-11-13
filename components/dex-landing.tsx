"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Lock, Mic, ShieldCheck, Smartphone, Sparkles, Check } from "lucide-react";
import { DeviceFrame } from "@/components/device-frame";
import { HeroVideo } from "@/components/hero-video";
import { MagneticLink } from "@/components/magnetic-link";
import { PageTransition } from "@/components/page-transition";
import { RevealText } from "@/components/reveal-text";

const HERO_STEPS = [
  {
    step: "01",
    name: "Speak",
    tag: "30S VOICE NOTE",
    desc: "Speak naturally outside the coffee shop or boardroom. Zero forms.",
    icon: Mic,
    offset: "ml-0",
  },
  {
    step: "02",
    name: "Process",
    tag: "ZERO TYPING",
    desc: "AI extracts names, firms, personal sparks, and commitments.",
    icon: Sparkles,
    offset: "sm:ml-8 lg:ml-10",
  },
  {
    step: "03",
    name: "Save",
    tag: "ONE-TAP APPROVAL",
    desc: "One tap confirms the update. Briefing ready before your next meeting.",
    icon: Check,
    offset: "sm:ml-16 lg:ml-20",
  },
];

const CAPTURE_STAGES = [
  {
    step: "01",
    tag: "VOICE TO MEMORY",
    title: "Instant voice capture",
    description:
      "One tap opens an uncluttered listening sheet built to capture raw thoughts right outside the coffee shop or boardroom.",
    lightSrc: "/idle-light.png",
    darkSrc: "/idle-dark.png",
    alt: "Dex iOS voice to memory capture sheet",
    staggerClass: "lg:mt-0",
  },
  {
    step: "02",
    tag: "VOICE NOTES · 00:12.4",
    title: "Speak naturally about anyone",
    description:
      "Real-time acoustic waveforms track your voice as Dex extracts names, companies, shared interests, and follow-ups in one take.",
    lightSrc: "/recording-light.png",
    darkSrc: "/recording-dark.png",
    alt: "Dex iOS active voice note recording screen with waveform",
    staggerClass: "lg:mt-14",
  },
  {
    step: "03",
    tag: "ONE-TAP APPROVAL",
    title: "Approve every detail in seconds",
    description:
      "Intelligent matching links notes to existing relationships automatically so you confirm extracted facts with a single tap before saving.",
    lightSrc: "/hitl-light.png",
    darkSrc: "/hitl-dark.png",
    alt: "Dex iOS contact verification sheet for Alex Chen",
    staggerClass: "lg:mt-28",
  },
];

const MEMORY_BUCKETS = [
  {
    code: "01",
    label: "TOP OF MIND",
    horizon: "Immediate Priorities",
    detail:
      "Active fundraising leads, open intros, and commitments from your last conversation, surfaced right at the top.",
    example: "On-Device AI: Leading CoreML inference latency optimizations for iOS",
  },
  {
    code: "02",
    label: "CONTEXT",
    horizon: "Pre-Meeting Intelligence",
    detail:
      "Upcoming calendar attendees automatically surface relevant history and conversation hooks minutes before you sit down.",
    example: "Follow up on seed round terms and coffee catch-up in Palo Alto",
  },
  {
    code: "03",
    label: "SPARKS",
    horizon: "Personal Craft & Nuance",
    detail:
      "Personal passions, weekend hobbies, and authentic conversation starters that turn transactional networking into real trust.",
    example: "Espresso: Restoring a vintage La Marzocco Linea Mini at home",
  },
  {
    code: "04",
    label: "BACKGROUND",
    horizon: "Foundational Identity",
    detail:
      "Career trajectory, alma mater, mutuals, and city context organized neatly into a compounding dossier that never decays.",
    example: "Stanford: B.S. & M.S. in Computer Science (Systems track)",
  },
];

const PRODUCT_MARQUEE = [
  "THE EXTERNAL BRAIN FOR YOUR NETWORK",
  "PERSONAL RELATIONSHIP MEMORY",
  "ZERO FORM ENTRY",
  "VOICE TO MEMORY",
  "PRE-MEETING BRIEFINGS",
  "BUILT FOR FOUNDERS & MBAS",
  "OFFLINE-FIRST RESILIENCE",
  "PRIVATE BY DESIGN",
];

const SECURITY_PILLARS = [
  {
    index: "01",
    icon: Lock,
    eyebrow: "Local Resilience",
    heading: "Offline-first relationship memory.",
    body: "Voice notes and contact context save locally the moment you stop speaking, keeping your external brain fast and dependable across flights, subway commutes, or weak signal.",
    points: [
      "Local memory index remains searchable without an internet connection",
      "Queued voice captures process automatically once back online",
      "Instant native retrieval as your network scales into thousands",
    ],
  },
  {
    index: "02",
    icon: ShieldCheck,
    eyebrow: "Human Verification",
    heading: "You approve every relationship detail.",
    body: "An external brain should assist, never guess quietly. Every extracted name, firm, and personal detail passes through a clean confirmation sheet before it lands.",
    points: [
      "Automatic duplicate prevention matches notes to existing contacts first",
      "Edit, remove, or reroute any extracted fact with a single tap",
      "Transparent match confidence before any memory record updates",
    ],
  },
  {
    index: "03",
    icon: Smartphone,
    eyebrow: "Native iPhone Craft",
    heading: "Built natively for iPhone.",
    body: "Monochrome surfaces in Warm Cream and deep Obsidian mirror system preferences automatically, paired with tactile haptics, lock-screen widgets, and Spotlight search.",
    points: [
      "Tactile haptics and thumb-zone controls designed for one-handed use",
      "Search across your entire network directly from iPhone Spotlight",
      "Seamless Light and Dark appearances tuned for effortless legibility",
    ],
  },
];

export function DexLanding() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageTransition>
      <main className="bg-background text-foreground selection:bg-foreground selection:text-background">
        <h1 className="sr-only">
          Dex: The External Brain for Your Network and Personal Relationship Memory for iPhone
        </h1>

        {/* --- SECTION 1: HERO MOTION (Sits Flush on Desktop & Mobile) --- */}
        <section
          id="overview"
          className="relative min-h-[calc(100svh-4rem)] flex flex-col justify-center scroll-mt-16 overflow-hidden py-6 sm:py-10 lg:py-12"
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            {/* Top Product Eyebrow Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-surface px-3.5 py-1.5 border border-border">
                <div className="relative h-4 w-4 overflow-hidden rounded-md">
                  <Image
                    src="/dex-logo.png"
                    alt="Dex App Icon"
                    width={16}
                    height={16}
                    loading="eager"
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-foreground font-medium">
                  Dex for iPhone
                </span>
              </div>

              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                <span>The External Brain for Your Network</span>
              </div>
            </div>

            {/* Asymmetric Hero Grid: Sits Flush Across Top */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Typography, Pitch, Staggered Steps, CTAs */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <p className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[0.96] tracking-[-0.04em] font-semibold text-foreground">
                    <RevealText>Remember everyone.</RevealText>
                    <span className="block text-muted-foreground mt-1">
                      <RevealText delay={0.14}>Say it once.</RevealText>
                    </span>
                  </p>
                </div>

                <p className="max-w-xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed tracking-[-0.01em] font-normal">
                  Dex is the external brain for your network. Turn thirty seconds of casual
                  speech after coffee or meetings into structured relationship memory: indexing
                  every connection, promise, and personal spark without a single form field.
                </p>

                {/* Staggered 3 Steps Presentation (Interactive & Cascading) */}
                <div className="space-y-2.5 pt-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    Workflow &middot; Click to inspect
                  </p>

                  <div className="space-y-2">
                    {HERO_STEPS.map((step, idx) => {
                      const isActive = activeStep === idx;
                      const StepIcon = step.icon;
                      return (
                        <div
                          key={step.step}
                          onClick={() => setActiveStep(idx)}
                          className={`${step.offset} transition-all duration-300 max-w-md`}
                        >
                          <button
                            type="button"
                            data-cursor-hover
                            className={`w-full text-left flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border transition-all ${
                              isActive
                                ? "bg-surface text-foreground border-foreground shadow-xs ring-1 ring-foreground/20"
                                : "bg-surface/40 text-muted-foreground border-border hover:text-foreground hover:bg-surface"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-semibold transition-colors ${
                                  isActive
                                    ? "bg-foreground text-background"
                                    : "bg-surface-subtle text-muted-foreground"
                                }`}
                              >
                                {step.step}
                              </span>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-display text-sm font-semibold tracking-tight text-foreground">
                                    {step.name}
                                  </span>
                                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                                    &middot; {step.tag}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground truncate">
                                  {step.desc}
                                </p>
                              </div>
                            </div>

                            <StepIcon
                              size={15}
                              className={`shrink-0 transition-transform ${
                                isActive ? "text-foreground scale-110" : "text-muted-foreground"
                              }`}
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                  <MagneticLink strength={0.22}>
                    <a
                      href="#capture"
                      data-cursor-hover
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-background transition-opacity hover:opacity-90"
                    >
                      Explore the Workflow <ArrowDown size={14} />
                    </a>
                  </MagneticLink>

                  <a
                    href="#memory"
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Relationship Memory &rarr;
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Video Frame (100% Real iOS App, Sits Flush) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
                <HeroVideo
                  activeStep={activeStep}
                  onStepChange={setActiveStep}
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- MONOCHROME PRODUCT MARQUEE --- */}
        <div className="overflow-hidden bg-surface/40 border-y border-border py-3.5">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...PRODUCT_MARQUEE, ...PRODUCT_MARQUEE].map((item, i) => (
              <span
                key={i}
                className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-muted-foreground px-6 sm:px-8 inline-flex items-center gap-6 sm:gap-8"
              >
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" aria-hidden />
              </span>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: VOICE CAPTURE & REVIEW WORKFLOW (Phone-Friendly) --- */}
        <section id="capture" className="scroll-mt-16 py-16 sm:py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24 space-y-4">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                01 / VOICE TO MEMORY
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[0.98] tracking-[-0.04em] font-semibold text-foreground">
                Voice notes after coffee. Not a database form.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
                Speak naturally the moment a conversation ends. Dex turns raw speech into lasting
                relationship context, extracts what matters, and waits for a single tap of
                confirmation.
              </p>
            </div>

            {/* Cascading Trio of Device Mockups (Responsive & Phone-Friendly) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 lg:gap-10 items-start">
              {CAPTURE_STAGES.map((stage) => (
                <article
                  key={stage.step}
                  className={`flex flex-col items-center md:items-start ${stage.staggerClass}`}
                >
                  <div className="w-full max-w-[240px] sm:max-w-[270px] md:max-w-[290px]">
                    <DeviceFrame
                      lightSrc={stage.lightSrc}
                      darkSrc={stage.darkSrc}
                      alt={stage.alt}
                    />
                  </div>

                  <div className="mt-8 w-full max-w-[270px] md:max-w-none space-y-2.5 pt-2">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      <span>{stage.tag}</span>
                      <span>{stage.step}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: RELATIONSHIP MEMORY & PRE-MEETING BRIEFING (Phone-Friendly) --- */}
        <section id="memory" className="bg-surface/30 scroll-mt-16 py-16 sm:py-24 md:py-32 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Briefing Card Device */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px]">
                  <DeviceFrame
                    lightSrc="/briefing-light.png"
                    darkSrc="/briefing-dark.png"
                    alt="Dex iOS Alex Chen contact briefing card"
                  />
                </div>
              </div>

              {/* Right Editorial Hierarchy & Temporal Memory Buckets */}
              <div className="lg:col-span-7 space-y-8 sm:space-y-10">
                <div className="space-y-4">
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    02 / PERSONAL RELATIONSHIP MEMORY
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.0] tracking-[-0.035em] font-semibold text-foreground">
                    The external brain for the five minutes before you walk in.
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                    Built for founders, MBA candidates, and active networkers who meet dozens of
                    people a week. Dex organizes context by time horizon so immediate follow-ups
                    sit right above timeless background.
                  </p>
                </div>

                <div className="divide-y divide-border border-y border-border">
                  {MEMORY_BUCKETS.map((bucket) => (
                    <div
                      key={bucket.code}
                      className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start"
                    >
                      <div className="sm:col-span-4 space-y-1">
                        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground font-semibold">
                          <span className="text-muted-foreground">{bucket.code}</span>{" "}
                          <span>{bucket.label}</span>
                        </h3>
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                          {bucket.horizon}
                        </p>
                      </div>

                      <div className="sm:col-span-8 space-y-1.5">
                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">
                          {bucket.detail}
                        </p>
                        <p className="font-mono text-[10px] text-muted-foreground border-l-2 border-foreground/30 pl-2.5">
                          {bucket.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: ARCHITECTURE & SECURITY (Phone-Friendly) --- */}
        <section id="security" className="scroll-mt-16 py-16 sm:py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                03 / ARCHITECTURE &amp; PRIVACY
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.0] tracking-[-0.035em] font-semibold text-foreground">
                Private relationship memory, verified by you.
              </h2>
            </div>

            {/* Clean Editorial Columns with Responsive Margins */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {SECURITY_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.index}
                    className="flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        <span>
                          {pillar.index} &middot; {pillar.eyebrow}
                        </span>
                        <Icon size={15} className="text-foreground" />
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                        {pillar.heading}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-4 border-t border-border text-xs text-muted-foreground leading-relaxed">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- SECTION 5: PRODUCT CLOSING (Phone-Friendly) --- */}
        <section className="border-t border-border bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-28 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 sm:gap-10">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                DEX FOR IPHONE &middot; THE EXTERNAL BRAIN FOR YOUR NETWORK
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.0] tracking-[-0.035em] font-semibold text-foreground">
                The external brain that never loses the thread.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-normal">
                Built for founders, MBA candidates, and super-connectors who turn every casual
                conversation into compounding trust.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <MagneticLink strength={0.22}>
                <a
                  href="mailto:sharmaaaryan4012@gmail.com?subject=Dex%20iOS%20Inquiry"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Request Early Access <ArrowUpRight size={15} />
                </a>
              </MagneticLink>

              <MagneticLink strength={0.22}>
                <a
                  href="#overview"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-xs sm:text-sm font-medium text-foreground transition-colors hover:bg-surface-subtle"
                >
                  Back to Top
                </a>
              </MagneticLink>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}