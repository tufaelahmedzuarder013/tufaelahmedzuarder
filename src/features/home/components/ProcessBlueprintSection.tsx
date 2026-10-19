"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  ArrowRight,
  Database,
  Cloud,
  ShieldCheck,
  CreditCard,
  Lock,
  Palette,
  Zap,
  Smartphone,
  Code2,
  Cpu,
  Globe2,
  Gauge,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

interface StackItem {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  tag?: string;
  activeByDefault?: boolean;
}

interface ProcessStage {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  tagline: string;
  summary: string;
  keyDeliverables: { title: string; tag: string }[];
  metricLabel: string;
  metricValue: string;
  stackItems: StackItem[];
}

const STAGES: ProcessStage[] = [
  {
    id: "discovery",
    stepNumber: "01",
    badge: "STAGE 01 • STRATEGY & ARCHITECTURE",
    title: "Discovery & Blueprint Mapping",
    tagline: "Planning before coding to eliminate 100% of technical debt.",
    summary:
      "Deep forensic dive into your product vision, target audience, and business KPIs. I map database schemas and low-latency cloud infrastructure before writing a single line of production code.",
    keyDeliverables: [
      { title: "Architecture & Data Schema", tag: "PostgreSQL" },
      { title: "Full-Funnel Wireframing", tag: "UX Flow" },
      { title: "Milestones & Scope Lock", tag: "48h SLA" },
    ],
    metricLabel: "Planning Precision",
    metricValue: "48h Scope Lock",
    stackItems: [
      {
        id: "d1",
        icon: Database,
        iconBg: "bg-amber-500/15",
        iconColor: "text-amber-600 dark:text-amber-400",
        title: "PostgreSQL & Prisma Schema",
        subtitle: "Relational data modeling with zero redundancy",
      },
      {
        id: "d2",
        icon: Cloud,
        iconBg: "bg-blue-500/15",
        iconColor: "text-blue-600 dark:text-blue-400",
        title: "Cloud Infrastructure & Edge CDN",
        subtitle: "Global low-latency serverless routing",
      },
      {
        id: "d3",
        icon: Layers,
        iconBg: "bg-[#F75B00]/15",
        iconColor: "text-[#F75B00]",
        title: "Product Scope & Wireframe Blueprint",
        subtitle: "User journey mapping optimized for conversion velocity",
        tag: "FEATURED",
        activeByDefault: true,
      },
      {
        id: "d4",
        icon: CreditCard,
        iconBg: "bg-emerald-500/15",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        title: "Stripe & Checkout Webhooks",
        subtitle: "Automated billing & secure subscription pipelines",
      },
      {
        id: "d5",
        icon: Lock,
        iconBg: "bg-purple-500/15",
        iconColor: "text-purple-600 dark:text-purple-400",
        title: "Zero-Trust Auth & API Guards",
        subtitle: "Session protection with CSRF & rate-limiting",
      },
    ],
  },
  {
    id: "design-system",
    stepNumber: "02",
    badge: "STAGE 02 • UI/UX & MOTION DESIGN",
    title: "Design System & 60FPS Micro-Physics",
    tagline: "Pixel-perfect visual luxury engineered for natural human touch.",
    summary:
      "Constructing end-to-end design token systems with fluid typography, elevation depths, and kinetic spring physics. Every micro-interaction feels alive, responsive, and locked at 60 FPS.",
    keyDeliverables: [
      { title: "Atomic Design Tokens", tag: "Figma 1:1" },
      { title: "Kinetic Spring Physics", tag: "60 FPS" },
      { title: "Adaptive Dark / Light Luxury", tag: "WCAG AAA" },
    ],
    metricLabel: "Frame Rate Standard",
    metricValue: "60 FPS Locked",
    stackItems: [
      {
        id: "ds1",
        icon: Palette,
        iconBg: "bg-pink-500/15",
        iconColor: "text-pink-600 dark:text-pink-400",
        title: "Color Tokens & Fluid Typography",
        subtitle: "Harmonious HSL scale with AAA contrast compliance",
      },
      {
        id: "ds2",
        icon: Zap,
        iconBg: "bg-[#F75B00]/15",
        iconColor: "text-[#F75B00]",
        title: "GPU-Accelerated Spring Physics",
        subtitle: "Micro-interactions engineered for tactile feedback",
        tag: "FEATURED",
        activeByDefault: true,
      },
      {
        id: "ds3",
        icon: Smartphone,
        iconBg: "bg-cyan-500/15",
        iconColor: "text-cyan-600 dark:text-cyan-400",
        title: "Fluid Touch Gestures",
        subtitle: "Natural swipe sheets, drawers & spring carousels",
      },
      {
        id: "ds4",
        icon: Layers,
        iconBg: "bg-emerald-500/15",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        title: "Adaptive Dark Luxury",
        subtitle: "Seamless theme switching without layout flash",
      },
    ],
  },
  {
    id: "development",
    stepNumber: "03",
    badge: "STAGE 03 • FULL-STACK DEVELOPMENT",
    title: "Bulletproof Next.js 14 Engineering",
    tagline: "Modern architectures crafted with strict TypeScript & clean code.",
    summary:
      "Transforming wireframes into lightning-fast Next.js applications using React Server Components, Server Actions, and modular state management with 100% strict type safety.",
    keyDeliverables: [
      { title: "Next.js App Router & RSC", tag: "Edge Ready" },
      { title: "Strict Type Safety", tag: "TypeScript" },
      { title: "Sub-Second Data Mutations", tag: "< 240ms" },
    ],
    metricLabel: "Average TTFB",
    metricValue: "< 240ms Latency",
    stackItems: [
      {
        id: "dev1",
        icon: Code2,
        iconBg: "bg-blue-500/15",
        iconColor: "text-blue-600 dark:text-blue-400",
        title: "Next.js 14 App Router & RSC",
        subtitle: "Zero-bundle client components with streaming SSR",
      },
      {
        id: "dev2",
        icon: ShieldCheck,
        iconBg: "bg-[#F75B00]/15",
        iconColor: "text-[#F75B00]",
        title: "Strict TypeScript & Zod Validation",
        subtitle: "End-to-end type safety from database to browser",
        tag: "FEATURED",
        activeByDefault: true,
      },
      {
        id: "dev3",
        icon: Cpu,
        iconBg: "bg-purple-500/15",
        iconColor: "text-purple-600 dark:text-purple-400",
        title: "Server Actions & Cache Revalidation",
        subtitle: "Instantaneous optimistic UI with zero network latency",
      },
      {
        id: "dev4",
        icon: Globe2,
        iconBg: "bg-emerald-500/15",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        title: "Multi-Region Cloud Hosting",
        subtitle: "Automated edge scaling on Vercel & AWS",
      },
    ],
  },
  {
    id: "launch",
    stepNumber: "04",
    badge: "STAGE 04 • AUDIT & PRODUCTION LAUNCH",
    title: "Lighthouse 100 & Production Go-Live",
    tagline: "Rigorous stress tests, automated CI/CD, and SEO dominance.",
    summary:
      "Before release, the platform undergoes exhaustive benchmarking: 100/100 Core Web Vitals optimization, asset preloading, automated CI/CD pipelines, and multi-device parity testing.",
    keyDeliverables: [
      { title: "Lighthouse 100/100 Audit", tag: "Perfect" },
      { title: "Zero-Downtime Deployment", tag: "CI/CD" },
      { title: "30-Day Post-Launch Care", tag: "Included" },
    ],
    metricLabel: "Core Web Vitals",
    metricValue: "100/100 Perfect",
    stackItems: [
      {
        id: "l1",
        icon: Gauge,
        iconBg: "bg-[#F75B00]/15",
        iconColor: "text-[#F75B00]",
        title: "100/100 Core Web Vitals Audit",
        subtitle: "Perfect scores across Performance, Accessibility & SEO",
        tag: "FEATURED",
        activeByDefault: true,
      },
      {
        id: "l2",
        icon: Rocket,
        iconBg: "bg-emerald-500/15",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        title: "Automated GitHub CI/CD Pipeline",
        subtitle: "Instant preview deployments with rollback protection",
      },
      {
        id: "l3",
        icon: Smartphone,
        iconBg: "bg-blue-500/15",
        iconColor: "text-blue-600 dark:text-blue-400",
        title: "Cross-Device Parity Testing",
        subtitle: "Flawless rendering on iOS, Android, macOS & Windows",
      },
      {
        id: "l4",
        icon: CheckCircle2,
        iconBg: "bg-amber-500/15",
        iconColor: "text-amber-600 dark:text-amber-400",
        title: "30-Day Founder Support & Care",
        subtitle: "Dedicated monitoring, bug fixing & analytics calibration",
      },
    ],
  },
];

export function ProcessBlueprintSection() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [activeItemIdx, setActiveItemIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const stage = STAGES[activeStageIdx];

  // Reset active item when stage changes
  useEffect(() => {
    setActiveItemIdx(0);
  }, [activeStageIdx]);

  // Automated cycling: switches one card after another every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveItemIdx((prev) => (prev + 1) % stage.stackItems.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [stage.stackItems.length, isPaused]);

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-white dark:bg-[#0A0F0D] overflow-hidden border-t border-brand-ink/5 dark:border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#EFC320]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#F75B00]/5 rounded-full blur-[140px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <Eyebrow>{"// SPRINT ARCHITECTURE & METHODOLOGY"}</Eyebrow>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-ink tracking-[0.03em] [word-spacing:0.18em] leading-[1.2]">
              How great products get engineered.
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-muted mt-3 max-w-xl">
              A transparent, battle-tested 4-step framework turning complex ideas into high-converting web platforms.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-brand-muted uppercase tracking-wider">
              Stage {activeStageIdx + 1} of 4
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              {STAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStageIdx(idx);
                    setActiveItemIdx(0);
                  }}
                  aria-label={`Jump to stage ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStageIdx === idx
                      ? "w-7 bg-gradient-to-r from-[#F75B00] to-[#EFC320]"
                      : "w-2 bg-brand-ink/15 dark:bg-white/15 hover:bg-brand-ink/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 4 Interactive Stage Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {STAGES.map((s, idx) => {
            const isActive = activeStageIdx === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiveStageIdx(idx);
                  setActiveItemIdx(0);
                }}
                className={`relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-left transition-all duration-300 cursor-pointer border group ${
                  isActive
                    ? "bg-[#FFFBF8] dark:bg-[#121614] border-[#F75B00]/60 shadow-[0_12px_36px_-10px_rgba(247,91,0,0.22)]"
                    : "bg-brand-soft/60 hover:bg-brand-soft border-brand-ink/5 dark:border-white/5 opacity-75 hover:opacity-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProcessBorder"
                    className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl border-2 border-[#F75B00] pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-heading font-extrabold text-xl sm:text-2xl block transition-colors ${
                      isActive ? "text-[#F75B00]" : "text-brand-muted2 group-hover:text-brand-ink"
                    }`}
                  >
                    {s.stepNumber}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isActive ? "bg-[#F75B00] animate-pulse" : "bg-brand-ink/15 dark:bg-white/15"
                    }`}
                  />
                </div>

                <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-ink line-clamp-1 mb-1">
                  {s.title}
                </h3>
                <span className="font-mono text-[10px] text-brand-muted2 uppercase tracking-wider block">
                  {s.metricValue}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* Main Stage Bento Box                                                      */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* Main Stage Bento Box                                                      */}
        {/* ========================================================================= */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-white dark:bg-[#0E1512] border border-brand-ink/10 dark:border-white/10 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_28px_80px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* ================= LEFT COLUMN: Clean, Uncluttered Stage Summary ================= */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-[#F75B00] bg-[#F75B00]/10 border border-[#F75B00]/25 uppercase mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#F75B00]" />
                    <span>{stage.badge}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-ink tracking-[0.02em] leading-tight mb-3">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#F75B00] font-semibold mb-4">
                    {stage.tagline}
                  </p>

                  {/* Concise summary without clutter */}
                  <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                    {stage.summary}
                  </p>

                  {/* Compact, clean deliverable chips */}
                  <div className="space-y-2.5 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brand-muted2 block font-semibold">
                      Key Sprint Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {stage.keyDeliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-white/5 border border-brand-ink/10 dark:border-white/10 shadow-xs text-xs font-medium text-brand-ink"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F75B00] shrink-0" />
                          <span>{item.title}</span>
                          <span className="px-1.5 py-0.5 rounded bg-[#F75B00]/10 text-[#F75B00] font-mono text-[10px] font-bold">
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Actions with updated Button Badge matching Image 2 */}
              <div className="border-t border-brand-ink/10 dark:border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="font-mono text-xs text-brand-muted">
                  Next: {STAGES[(activeStageIdx + 1) % 4].title}
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStageIdx((prev) => (prev + 1) % STAGES.length);
                      setActiveItemIdx(0);
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-[20px] py-[10px] rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-[#F75B00]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
                  >
                    <span>Next Stage</span>
                    <span className="w-5 h-5 rounded-full bg-white text-[#F75B00] shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0">
                      <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </button>

                  <Button href="/contact" variant="ghost" size="sm">
                    Book a Sprint
                  </Button>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: Interactive 3D Stacked Cards (Clean Background & Auto-Switching) ================= */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="lg:col-span-6 relative bg-white dark:bg-[#0B1411] p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden min-h-[460px] border-t lg:border-t-0 lg:border-l border-brand-ink/10 dark:border-white/10"
            >
              {/* Concentric ambient background rings */}
              <div className="absolute w-[440px] h-[440px] rounded-full border border-brand-ink/5 dark:border-white/5 pointer-events-none" />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-brand-ink/10 dark:border-white/10 pointer-events-none" />
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#F75B00]/10 to-[#EFC320]/10 blur-3xl pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md border border-brand-ink/10 dark:border-white/15 text-brand-ink dark:text-white font-mono text-[10px] uppercase tracking-wider font-semibold shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#F75B00]" />
                <span>INTERACTIVE ARCHITECTURE STACK</span>
              </div>

              {/* Stack Cascade Container */}
              <div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center space-y-[-10px] sm:space-y-[-14px]"
                  >
                    {stage.stackItems.map((item, idx) => {
                      const Icon = item.icon;
                      const isFocused = idx === activeItemIdx;

                      return (
                        <motion.div
                          key={item.id}
                          layout
                          onClick={() => {
                            setActiveItemIdx(idx);
                            setIsPaused(true);
                          }}
                          whileHover={{ scale: isFocused ? 1.05 : 0.99 }}
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          className={`w-full rounded-2xl sm:rounded-3xl p-4 sm:p-4.5 transition-all duration-500 cursor-pointer flex items-center justify-between gap-3.5 select-none ${
                            isFocused
                              ? "bg-white dark:bg-[#161D19] border-2 border-[#F75B00] shadow-[0_20px_45px_-8px_rgba(247,91,0,0.28)] z-30 scale-105 opacity-100 filter-none"
                              : "bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-neutral-200/60 dark:border-white/10 shadow-none z-10 opacity-35 hover:opacity-75 blur-[1.5px] hover:blur-none scale-[0.97]"
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            {/* Icon Box */}
                            <div
                              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform ${
                                isFocused ? item.iconBg : "bg-neutral-100 dark:bg-white/10"
                              }`}
                            >
                              <Icon
                                className={`w-5 h-5 ${
                                  isFocused
                                    ? item.iconColor
                                    : "text-neutral-400 dark:text-white/40"
                                }`}
                              />
                            </div>

                            {/* Label & Details */}
                            <div className="min-w-0">
                              <h4
                                className={`font-sans font-bold text-xs sm:text-sm truncate transition-colors ${
                                  isFocused
                                    ? "text-brand-ink dark:text-white"
                                    : "text-brand-ink/70 dark:text-white/60"
                                }`}
                              >
                                {item.title}
                              </h4>
                              <p
                                className={`font-sans text-[11px] truncate transition-colors ${
                                  isFocused
                                    ? "text-brand-muted font-medium"
                                    : "text-neutral-400 dark:text-white/40"
                                }`}
                              >
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Status Tag or Indicator */}
                          <div className="shrink-0 flex items-center gap-1">
                            {isFocused ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white font-mono text-[9px] font-bold tracking-wider uppercase shadow-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                ACTIVE
                              </span>
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-white/20" />
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Instruction Note with live progress indicator */}
              <div className="relative z-10 mt-3 flex items-center justify-center gap-2 font-mono text-[10px] text-brand-muted2 uppercase tracking-widest text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F75B00] animate-pulse" />
                <span>Auto-switching layers • Click any layer to focus</span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
