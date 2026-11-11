"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Lock, Search, ShieldCheck, Smartphone } from "lucide-react";
import { DeviceFrame } from "@/components/device-frame";
import { MagneticLink } from "@/components/magnetic-link";
import { PageTransition } from "@/components/page-transition";
import { RevealText } from "@/components/reveal-text";

type HeroScreenKey = "search" | "network" | "home";

const HERO_SCREENS: Record<
  HeroScreenKey,
  {
    label: string;
    eyebrow: string;
    title: string;
    description: string;
    lightSrc: string;
    darkSrc: string;
    alt: string;
  }
> = {
  search: {
    label: "Semantic Search",
    eyebrow: "QUERY · \"AI\"",
    title: "Search your AI relationship memory in plain English.",
    description:
      "Search by topic, company, or a half-remembered conversation. Dex matches exact names instantly and surfaces semantic connections across your entire contact manager.",
    lightSrc: "/search-light.png",
    darkSrc: "/search-dark.png",
    alt: "Dex AI personal CRM semantic search results on iOS",
  },
  network: {
    label: "Directory",
    eyebrow: "CONTACTS · SYNCED",
    title: "An intelligent contact manager, quietly organized.",
    description:
      "Dex keeps pace with your iPhone address book automatically, grouping every relationship cleanly without asking you to maintain a manual spreadsheet.",
    lightSrc: "/network-light.png",
    darkSrc: "/network-dark.png",
    alt: "Dex iOS CRM alphabetical contact manager directory",
  },
  home: {
    label: "Today",
    eyebrow: "HOME · BRIEFING READY",
    title: "Your iOS CRM, built for one-handed speed.",
    description:
      "Your next meeting sits right at the top while a tactile AI voice note composer waits effortlessly under your thumb.",
    lightSrc: "/home-light.png",
    darkSrc: "/home-dark.png",
    alt: "Dex iOS relationship manager home screen with calendar meeting card",
  },
};

const CAPTURE_STAGES = [
  {
    step: "01",
    tag: "VOICE TO CRM",
    title: "Instant AI voice capture",
    description:
      "One tap opens an uncluttered listening sheet made to get thoughts out while a conversation is still fresh.",
    lightSrc: "/idle-light.png",
    darkSrc: "/idle-dark.png",
    alt: "Dex iOS voice to CRM capture sheet",
    staggerClass: "lg:mt-0",
  },
  {
    step: "02",
    tag: "AI VOICE NOTES · 00:12.4",
    title: "Speak naturally about anyone",
    description:
      "Real-time acoustic levels track your voice as Dex extracts names, roles, interests, and context in one take.",
    lightSrc: "/recording-light.png",
    darkSrc: "/recording-dark.png",
    alt: "Dex iOS active AI voice note recording screen with waveform",
    staggerClass: "lg:mt-14",
  },
  {
    step: "03",
    tag: "ONE-TAP REVIEW",
    title: "Verify every contact update before saving",
    description:
      "Intelligent relationship matching links AI voice notes to Alex Chen automatically so you can confirm every extracted fact before saving.",
    lightSrc: "/hitl-light.png",
    darkSrc: "/hitl-dark.png",
    alt: "Dex iOS contact manager verification sheet for Alex Chen",
    staggerClass: "lg:mt-28",
  },
];

const MEMORY_BUCKETS = [
  {
    code: "01",
    label: "TOP OF MIND",
    horizon: "Immediate Priorities",
    detail:
      "Active launches, current focuses, and open threads from your last conversation, pinned right at the top of the card.",
    example: "On-Device AI: Leading CoreML inference latency optimizations for iOS 27",
  },
  {
    code: "02",
    label: "CONTEXT",
    horizon: "Pre-Meeting Intelligence",
    detail:
      "Upcoming calendar attendees automatically surface relevant history and follow-up hooks minutes before you sit down.",
    example: "Follow up on on-device benchmarks and coffee catch-up in Cupertino",
  },
  {
    code: "03",
    label: "SPARKS",
    horizon: "Personal Craft & Nuance",
    detail:
      "Memorable obsessions, weekend hobbies, and genuine conversation starters that turn small talk into real rapport.",
    example: "Espresso: Restoring a vintage La Marzocco Linea Mini at home",
  },
  {
    code: "04",
    label: "BACKGROUND",
    horizon: "Foundational Identity",
    detail:
      "Career history, alma mater, family, and city context organized neatly into a durable profile that compounds over years.",
    example: "Stanford: B.S. & M.S. in Computer Science (Systems track)",
  },
];

const PRODUCT_MARQUEE = [
  "AI VOICE NOTES",
  "PERSONAL CRM FOR IPHONE",
  "VOICE TO CRM CAPTURE",
  "AI RELATIONSHIP MEMORY",
  "INTELLIGENT CONTACT MANAGER",
  "PRE-MEETING BRIEFINGS",
  "PRIVATE BY DESIGN",
  "ZERO MANUAL ENTRY",
];

const SECURITY_PILLARS = [
  {
    index: "01",
    icon: Lock,
    eyebrow: "Local Resilience",
    heading: "Offline-first personal CRM memory.",
    body: "AI voice notes and contact details save locally the moment you hit stop, keeping your relationship manager fast and dependable across flights, elevators, or weak signal.",
    points: [
      "Local memory index remains searchable without an internet connection",
      "Queued voice captures upload and process automatically once back online",
      "Fast native retrieval keeps results instantaneous as your network grows",
    ],
  },
  {
    index: "02",
    icon: ShieldCheck,
    eyebrow: "Human Verification",
    heading: "You approve every relationship detail.",
    body: "An intelligent CRM should assist, never overwrite quietly. Every extracted name, role, and personal detail passes through a clean confirmation sheet before it lands.",
    points: [
      "Automatic duplicate prevention matches notes to existing people first",
      "Edit, remove, or reroute any extracted fact with a single tap",
      "Transparent match confidence before any contact manager record updates",
    ],
  },
  {
    index: "03",
    icon: Smartphone,
    eyebrow: "Native iPhone Craft",
    heading: "Built natively as an iOS CRM.",
    body: "Monochrome surfaces in Warm Cream and deep Obsidian mirror system preferences automatically, paired with pre-meeting briefings and Spotlight relationship search.",
    points: [
      "Tactile haptics and thumb-zone controls designed for one-handed use",
      "Search across your networking app directly from iPhone Spotlight",
      "Seamless Light and Dark appearances tuned for effortless legibility",
    ],
  },
];

export function DexLanding() {
  const [heroScreen, setHeroScreen] = useState<HeroScreenKey>("search");
  const activeHero = HERO_SCREENS[heroScreen];

  return (
    <PageTransition>
      <main className="bg-background text-foreground selection:bg-foreground selection:text-background">
        <h1 className="sr-only">
          Dex: The Intelligent Personal CRM and AI Relationship Manager for iPhone
        </h1>

        {/* --- SECTION 1: HERO --- */}
        <section
          id="overview"
          className="relative overflow-hidden border-b border-border scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
            {/* Top Product Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-12">
              <div className="inline-flex items-center gap-3 rounded-full border border-border-strong bg-surface px-3.5 py-1.5 shadow-xs">
                <div className="relative h-5 w-5 overflow-hidden rounded-md border border-border">
                  <Image
                    src="/dex-logo.png"
                    alt="Dex App Icon"
                    width={20}
                    height={20}
                    loading="eager"
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
                  Dex for iPhone
                </span>
              </div>

              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                <span>AI Personal CRM</span>
              </div>
            </div>

            {/* Asymmetric Above-the-Fold Hero: Typography Left + Massive Device Frame Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-8">
                <p className="font-display text-[clamp(2.85rem,6.5vw,5.75rem)] leading-[0.94] tracking-[-0.04em] font-semibold text-foreground">
                  <RevealText>Remember everyone.</RevealText>
                  <span className="block text-muted-foreground mt-1 md:mt-2">
                    <RevealText delay={0.14}>Say it once.</RevealText>
                  </span>
                </p>

                <p className="max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed tracking-[-0.01em]">
                  Dex is the AI personal CRM that turns thirty seconds of natural speech into
                  structured relationship memory: indexing every contact, commitment, and
                  personal spark without a single form field.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticLink strength={0.22}>
                    <a
                      href="#capture"
                      data-cursor-hover
                      className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                    >
                      Explore the Workflow <ArrowDown size={15} />
                    </a>
                  </MagneticLink>

                  <a
                    href="#memory"
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Knowledge Graph &rarr;
                  </a>
                </div>

                {/* Interactive App Screen Switcher */}
                <div className="pt-4 border-t border-border space-y-4 max-w-xl">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Live iPhone Preview
                    </span>
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
                      <Search size={12} />
                      <span>{activeHero.eyebrow}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(HERO_SCREENS) as HeroScreenKey[]).map((key) => {
                      const active = heroScreen === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setHeroScreen(key)}
                          data-cursor-hover
                          className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all border ${
                            active
                              ? "bg-accent text-accent-foreground border-accent"
                              : "bg-surface text-muted-foreground border-border-strong hover:text-foreground"
                          }`}
                        >
                          {HERO_SCREENS[key].label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {activeHero.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activeHero.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Monumental Hero iPhone Device Frame */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
                <div className="w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px]">
                  <DeviceFrame
                    lightSrc={activeHero.lightSrc}
                    darkSrc={activeHero.darkSrc}
                    alt={activeHero.alt}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MONOCHROME PRODUCT MARQUEE --- */}
        <div className="border-b border-border overflow-hidden bg-surface/60">
          <div className="flex whitespace-nowrap py-4 animate-marquee">
            {[...PRODUCT_MARQUEE, ...PRODUCT_MARQUEE].map((item, i) => (
              <span
                key={i}
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground px-7 inline-flex items-center gap-7"
              >
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden />
              </span>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: VOICE CAPTURE & REVIEW WORKFLOW --- */}
        <section id="capture" className="border-b border-border bg-surface/40 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                01 / VOICE TO CRM
              </p>
              <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.98] tracking-[-0.035em] font-semibold text-foreground">
                AI voice notes after coffee. Not a CRM form.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Speak naturally the moment a conversation ends. Dex converts voice to CRM
                records, extracts the details that matter, and waits for a single
                verification tap.
              </p>
            </div>

            {/* Cascading Trio of Massive Device Mockups */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 items-start">
              {CAPTURE_STAGES.map((stage) => (
                <article
                  key={stage.step}
                  className={`flex flex-col items-center md:items-start ${stage.staggerClass}`}
                >
                  <div className="w-full max-w-[300px] sm:max-w-[320px] md:max-w-full">
                    <DeviceFrame
                      lightSrc={stage.lightSrc}
                      darkSrc={stage.darkSrc}
                      alt={stage.alt}
                    />
                  </div>

                  <div className="mt-7 w-full max-w-[320px] md:max-w-none space-y-2 border-t border-border pt-5">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      <span>{stage.tag}</span>
                      <span>{stage.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: KNOWLEDGE GRAPH & BRIEFING --- */}
        <section id="memory" className="border-b border-border bg-background scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
              {/* Left Massive Briefing Card Device */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[320px] sm:max-w-[360px]">
                  <DeviceFrame
                    lightSrc="/briefing-light.png"
                    darkSrc="/briefing-dark.png"
                    alt="Dex iOS Alex Chen contact briefing card"
                  />
                </div>
              </div>

              {/* Right Editorial Hierarchy & Temporal Memory Buckets */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    02 / AI RELATIONSHIP MEMORY
                  </p>
                  <h2 className="font-display text-[clamp(2rem,4.8vw,3.75rem)] leading-[1.0] tracking-[-0.035em] font-semibold text-foreground">
                    AI Relationship Memory for the five minutes before you walk in.
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    Built as a calm intelligent relationship manager rather than a noisy
                    chronological feed, Dex organizes what you know by time horizon so
                    immediate context sits above timeless background.
                  </p>
                </div>

                <div className="divide-y divide-border border-y border-border">
                  {MEMORY_BUCKETS.map((bucket) => (
                    <div
                      key={bucket.code}
                      className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
                    >
                      <div className="sm:col-span-4 space-y-1">
                        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground font-semibold">
                          <span className="text-muted-foreground">{bucket.code}</span>{" "}
                          <span>{bucket.label}</span>
                        </h3>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {bucket.horizon}
                        </p>
                      </div>

                      <div className="sm:col-span-8 space-y-2">
                        <p className="text-sm text-foreground/90 leading-relaxed">
                          {bucket.detail}
                        </p>
                        <p className="font-mono text-[11px] text-muted-foreground border-l-2 border-border-strong pl-3">
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

        {/* --- SECTION 4: SECURITY & NATIVE CRAFT --- */}
        <section id="security" className="border-b border-border bg-surface/40 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="max-w-2xl mb-16 space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                03 / INTELLIGENT CRM SECURITY
              </p>
              <h2 className="font-display text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.02] tracking-[-0.03em] font-semibold text-foreground">
                Private relationship management, verified by you.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {SECURITY_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.index}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 sm:p-8 space-y-8 transition-colors hover:border-border-strong"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        <span>
                          {pillar.index} &middot; {pillar.eyebrow}
                        </span>
                        <Icon size={15} className="text-foreground" />
                      </div>

                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {pillar.heading}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>

                    <ul className="space-y-2.5 border-t border-border pt-5 text-xs text-muted-foreground leading-relaxed">
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

        {/* --- SECTION 5: PRODUCT CLOSING --- */}
        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                DEX FOR IPHONE &middot; THE AI PERSONAL CRM
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.0] tracking-[-0.035em] font-semibold text-foreground">
                The intelligent CRM that never loses the thread.
              </h2>
              <p className="text-base text-muted-foreground max-w-xl">
                A thoughtful relationship manager and networking app built for people who turn
                every conversation into lasting trust.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <MagneticLink strength={0.22}>
                <a
                  href="mailto:sharmaaaryan4012@gmail.com?subject=Dex%20iOS%20Inquiry"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Request Early Access <ArrowUpRight size={16} />
                </a>
              </MagneticLink>

              <MagneticLink strength={0.22}>
                <a
                  href="#overview"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-subtle"
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
