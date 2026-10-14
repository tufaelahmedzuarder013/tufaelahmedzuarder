"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  ArrowRight,
  Terminal,
  Zap,
  ShieldCheck,
  Smartphone,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

interface ProcessStep {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: { title: string; desc: string }[];
  metricLabel: string;
  metricValue: string;
  previewType: "blueprint" | "design" | "code" | "lighthouse";
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discovery",
    stepNumber: "01",
    badge: "STAGE 01 • STRATEGY & ARCHITECTURE",
    title: "Discovery & Blueprint Mapping",
    tagline: "Planning before coding to eliminate 100% of technical debt.",
    description:
      "Every project begins with a deep forensic dive into your product vision, target audience, and business KPIs. I map the database schema, select the lowest-latency cloud stack, and draft high-fidelity wireframes before writing a single line of production code.",
    deliverables: [
      {
        title: "Architecture & Data Schema",
        desc: "Scalable PostgreSQL/MongoDB modeling & cloud infrastructure design.",
      },
      {
        title: "Full-Funnel Wireframing",
        desc: "User journey mapping optimized for maximum conversion velocity.",
      },
      {
        title: "Sprint Milestones & Scope",
        desc: "Fixed timelines, clear deliverables, and zero scope ambiguity.",
      },
    ],
    metricLabel: "Planning Precision",
    metricValue: "48h Scope Lock",
    previewType: "blueprint",
  },
  {
    id: "design-system",
    stepNumber: "02",
    badge: "STAGE 02 • UI/UX & MOTION DESIGN",
    title: "Design System & 60FPS Micro-Physics",
    tagline: "Pixel-perfect visual luxury engineered for natural human touch.",
    description:
      "Using Figma, I construct an end-to-end design token system (colors, fluid typography, elevation depths, and kinetic easing curves). Micro-interactions and fluid physics are prototyped to ensure every hover, click, and page transition feels alive and instantaneous.",
    deliverables: [
      {
        title: "Atomic Design Tokens",
        desc: "1:1 parity between Figma components and production Tailwind CSS.",
      },
      {
        title: "Kinetic Spring Physics",
        desc: "GPU-accelerated micro-animations locked at buttery 60 FPS.",
      },
      {
        title: "Adaptive Dark / Light Luxury",
        desc: "Handcrafted palettes with WCAG AAA contrast accessibility.",
      },
    ],
    metricLabel: "Frame Rate Standard",
    metricValue: "60 FPS Locked",
    previewType: "design",
  },
  {
    id: "development",
    stepNumber: "03",
    badge: "STAGE 03 • FULL-STACK DEVELOPMENT",
    title: "Bulletproof Next.js 14 Engineering",
    tagline: "Modern architectures crafted with strict TypeScript & clean code.",
    description:
      "Transforming designs into blazingly fast Next.js applications using React Server Components, server actions, and modular state management. Every module is strictly typed, fully accessible, and engineered to withstand enterprise traffic surges with sub-second response times.",
    deliverables: [
      {
        title: "Next.js App Router & RSC",
        desc: "Server-side rendering & edge computing for instantaneous initial load.",
      },
      {
        title: "Strict Type Safety",
        desc: "100% TypeScript coverage with end-to-end Zod schema validation.",
      },
      {
        title: "Seamless API & DB Integrations",
        desc: "Stripe payments, headless CMS, WebSockets, and secure auth.",
      },
    ],
    metricLabel: "Average TTFB",
    metricValue: "< 240ms Latency",
    previewType: "code",
  },
  {
    id: "launch",
    stepNumber: "04",
    badge: "STAGE 04 • AUDIT & PRODUCTION LAUNCH",
    title: "Lighthouse 100 & Production Go-Live",
    tagline: "Rigorous stress tests, automated CI/CD, and SEO dominance.",
    description:
      "Before public launch, the codebase undergoes exhaustive benchmarking: 100/100 Core Web Vitals optimization, asset preloading, image compression, metadata SEO scaffolding, and multi-browser device testing across macOS, iOS, Windows, and Android.",
    deliverables: [
      {
        title: "Lighthouse 100/100 Audit",
        desc: "Green scores across Performance, Accessibility, Best Practices & SEO.",
      },
      {
        title: "Zero-Downtime Deployment",
        desc: "Automated Vercel/AWS CI/CD pipelines with rollback protection.",
      },
      {
        title: "30-Day Post-Launch Care",
        desc: "Dedicated monitoring, bug fixing, and traffic analytics calibration.",
      },
    ],
    metricLabel: "Core Web Vitals",
    metricValue: "100/100 Perfect",
    previewType: "lighthouse",
  },
];

export function ProcessBlueprintSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-brand-bg overflow-hidden border-t border-brand-ink/5 dark:border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#61CED9]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#06D6A0]/8 rounded-full blur-[140px]" />
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
              A transparent, battle-tested 4-step framework that turns ambitious ideas into high-converting, sub-second web platforms.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-brand-muted uppercase tracking-wider">
              Step {activeStepIndex + 1} of 4
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              {PROCESS_STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  aria-label={`Jump to step ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStepIndex === idx
                      ? "w-7 bg-gradient-to-r from-[#61CED9] to-[#06D6A0]"
                      : "w-2 bg-brand-ink/15 dark:bg-white/15 hover:bg-brand-ink/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 4 Interactive Step Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-left transition-all duration-300 cursor-pointer border group ${
                  isActive
                    ? "bg-white dark:bg-[#11211C] border-[#61CED9]/50 shadow-[0_16px_40px_-10px_rgba(97,206,217,0.22)]"
                    : "bg-brand-soft/70 hover:bg-brand-soft border-brand-ink/5 dark:border-white/5 opacity-75 hover:opacity-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProcessBorder"
                    className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl border-2 border-[#06D6A0] pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span
                    className={`font-heading font-extrabold text-xl sm:text-2xl block transition-colors ${
                      isActive
                        ? "text-[#06D6A0] dark:text-[#5EEAD4]"
                        : "text-brand-muted2 group-hover:text-brand-ink"
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isActive ? "bg-[#06D6A0] animate-pulse" : "bg-brand-ink/15 dark:bg-white/15"
                    }`}
                  />
                </div>

                <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-ink line-clamp-1 mb-1">
                  {step.title}
                </h3>
                <span className="font-mono text-[10px] text-brand-muted2 uppercase tracking-wider block">
                  {step.metricValue}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* Main Interactive Stage Showcase Bento                                      */}
        {/* ========================================================================= */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-white dark:bg-[#11211C] border border-brand-ink/10 dark:border-white/10 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_28px_80px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* ================= LEFT COLUMN: Stage Narrative & Deliverables ================= */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-14 flex flex-col justify-between z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Badge & Step Serial */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-[#06D6A0] bg-[#06D6A0]/10 border border-[#06D6A0]/25 uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#61CED9]" />
                      {activeStep.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-ink tracking-[0.02em] leading-tight mb-3">
                    {activeStep.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#06D6A0] dark:text-[#5EEAD4] font-semibold mb-5">
                    {activeStep.tagline}
                  </p>

                  {/* Description Paragraph */}
                  <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
                    {activeStep.description}
                  </p>

                  {/* 3 Core Deliverables */}
                  <div className="space-y-3 mb-8">
                    {activeStep.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 sm:p-4 rounded-2xl bg-brand-soft border border-brand-ink/5 dark:border-white/10 flex items-start gap-3.5 group/deliv hover:border-[#61CED9]/40 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-[#06D6A0]/15 text-[#06D6A0] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-ink mb-0.5">
                            {item.title}
                          </h4>
                          <p className="font-sans text-xs text-brand-muted leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Navigation & Sprint CTA */}
              <div className="border-t border-brand-ink/10 dark:border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-brand-muted">
                    Next: {PROCESS_STEPS[(activeStepIndex + 1) % 4].title}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)
                    }
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#61CED9] to-[#06D6A0] text-[#04241E] font-heading font-extrabold text-xs uppercase tracking-wider shadow-brand-glow hover:shadow-[#61CED9]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Button
                    href="/contact"
                    variant="ghost"
                    size="sm"
                  >
                    Book a Sprint
                  </Button>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: Interactive Live Sandbox Previews ================= */}
            <div className="lg:col-span-5 relative bg-gradient-to-br from-[#1C3831] via-[#112923] to-[#0A1A16] dark:from-[#0B1E19] dark:via-[#071713] dark:to-[#040C0A] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center overflow-hidden min-h-[420px] sm:min-h-[500px]">
              {/* Subtle Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

              {/* Ambient Glow */}
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#61CED9]/25 to-[#06D6A0]/25 blur-3xl pointer-events-none" />

              {/* Floating Stage Identifier */}
              <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] uppercase tracking-wider font-semibold shadow-xs flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#61CED9]" />
                <span>LIVE SANDBOX • {activeStep.previewType.toUpperCase()}</span>
              </div>

              {/* Live Preview Switcher based on Stage */}
              <div className="relative z-10 w-full max-w-[380px]">
                <AnimatePresence mode="wait">
                  {/* PREVIEW 1: Discovery Blueprint Nodes */}
                  {activeStep.previewType === "blueprint" && (
                    <motion.div
                      key="preview-blueprint"
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl text-white"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="font-mono text-[11px] text-[#61CED9]">
                          schema.architecture.ts
                        </span>
                      </div>

                      {/* Interactive Blueprint Nodes */}
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-xl bg-white/5 border border-[#61CED9]/30 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#61CED9]" />
                            <span className="font-bold text-white">Client Product Scope</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#06D6A0]/20 text-[#06D6A0] text-[10px]">
                            VALIDATED
                          </span>
                        </div>

                        <div className="pl-6 border-l-2 border-dashed border-[#06D6A0]/40 space-y-2">
                          <div className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between text-[11px]">
                            <span>├─ Next.js 14 App Router</span>
                            <span className="text-[#61CED9]">EDGE</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between text-[11px]">
                            <span>├─ PostgreSQL + Prisma</span>
                            <span className="text-emerald-400">SCHEMA V2</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between text-[11px]">
                            <span>└─ Stripe Webhooks API</span>
                            <span className="text-[#61CED9]">SECURE</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                        <span>Architecture Readiness</span>
                        <span className="text-[#06D6A0] font-bold">100% Locked</span>
                      </div>
                    </motion.div>
                  )}

                  {/* PREVIEW 2: Design Micro-Physics Interactive Tester */}
                  {activeStep.previewType === "design" && (
                    <motion.div
                      key="preview-design"
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl text-white text-center"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                        <span className="font-mono text-[11px] text-[#61CED9]">
                          spring.physics.simulator
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                          60.0 FPS
                        </span>
                      </div>

                      <p className="font-sans text-xs text-white/80 mb-5">
                        Interactive Spring Physics: Click the button to feel GPU-accelerated micro-interaction.
                      </p>

                      {/* Interactive Test Button */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setClickCount((c) => c + 1)}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#61CED9] to-[#06D6A0] text-[#04241E] font-heading font-extrabold text-sm uppercase tracking-wider shadow-[0_12px_30px_rgba(97,206,217,0.4)] flex items-center justify-center gap-2 cursor-pointer mb-5"
                      >
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Trigger Spring Physics ({clickCount})</span>
                      </motion.button>

                      <div className="grid grid-cols-2 gap-2 text-left font-mono text-[10px] text-white/70">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <span className="block text-white/40">STIFFNESS</span>
                          <span className="text-[#61CED9] font-bold">380 (Crisp)</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <span className="block text-white/40">DAMPING</span>
                          <span className="text-[#06D6A0] font-bold">28 (Zero Jitter)</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* PREVIEW 3: Full-Stack Code Terminal */}
                  {activeStep.previewType === "code" && (
                    <motion.div
                      key="preview-code"
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="p-5 sm:p-6 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 shadow-2xl text-white font-mono text-xs"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                        <span className="text-[#61CED9] text-[11px]">app/api/checkout/route.ts</span>
                        <span className="text-[10px] text-emerald-400">TypeScript 5.3</span>
                      </div>

                      <div className="space-y-1 text-[11px] leading-relaxed overflow-x-auto text-left">
                        <p className="text-white/40">{"// 100% Type-Safe Next.js Server Action"}</p>
                        <p>
                          <span className="text-purple-400">export async function</span>{" "}
                          <span className="text-[#61CED9]">POST</span>(req: Request) {"{"}
                        </p>
                        <p className="pl-4">
                          <span className="text-purple-400">const</span> body ={" "}
                          <span className="text-amber-300">await</span> req.json();
                        </p>
                        <p className="pl-4">
                          <span className="text-purple-400">const</span> validated ={" "}
                          <span className="text-emerald-400">OrderSchema.parse</span>(body);
                        </p>
                        <p className="pl-4 text-white/40">{"// Sub-second Stripe checkout session"}</p>
                        <p className="pl-4">
                          <span className="text-purple-400">return</span> Response.json({"{"}{" "}
                          <span className="text-[#61CED9]">ok</span>: <span className="text-purple-400">true</span>, latency:{" "}
                          <span className="text-emerald-400">&apos;18ms&apos;</span> {"}"});
                        </p>
                        <p>{"}"}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
                        <span>Compile Status</span>
                        <span className="text-[#06D6A0] font-bold">✓ Zero Type Errors</span>
                      </div>
                    </motion.div>
                  )}

                  {/* PREVIEW 4: Live Lighthouse 100/100 Audit */}
                  {activeStep.previewType === "lighthouse" && (
                    <motion.div
                      key="preview-lighthouse"
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl text-white text-center"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                        <span className="font-mono text-[11px] text-[#61CED9]">
                          Chrome DevTools • Lighthouse
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                          AUDIT PASS
                        </span>
                      </div>

                      {/* 4 Perfect 100 Circular Gauges */}
                      <div className="grid grid-cols-4 gap-2 mb-6">
                        {[
                          { label: "Performance", score: 100 },
                          { label: "Accessibility", score: 100 },
                          { label: "Best Practice", score: 100 },
                          { label: "SEO", score: 100 },
                        ].map((gauge, gIdx) => (
                          <div key={gIdx} className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full border-2 border-[#06D6A0] bg-[#06D6A0]/15 flex items-center justify-center font-heading font-extrabold text-sm text-[#06D6A0] shadow-[0_0_15px_rgba(6,214,160,0.4)] mb-1.5">
                              {gauge.score}
                            </div>
                            <span className="font-mono text-[9px] text-white/70 uppercase">
                              {gauge.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Vital stats */}
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left font-mono text-[11px] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">First Contentful Paint (FCP)</span>
                          <span className="text-[#06D6A0] font-bold">0.4s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Largest Contentful Paint (LCP)</span>
                          <span className="text-[#06D6A0] font-bold">0.8s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Cumulative Layout Shift (CLS)</span>
                          <span className="text-[#06D6A0] font-bold">0.00</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Sandbox Status */}
              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-mono text-[10px]">
                <span className="w-2 h-2 rounded-full bg-[#06D6A0] animate-pulse" />
                <span className="uppercase tracking-wider">PRODUCTION BENCHMARK</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Engineering Guarantees Ribbon                                      */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5 text-[#06D6A0]" />,
              title: "Zero Technical Debt",
              desc: "Clean, self-documenting code built to scale smoothly for years.",
            },
            {
              icon: <Zap className="w-5 h-5 text-[#61CED9]" />,
              title: "Sub-Second Velocity",
              desc: "Engineered to achieve 100/100 Core Web Vitals on every release.",
            },
            {
              icon: <Smartphone className="w-5 h-5 text-[#06D6A0]" />,
              title: "Cross-Device Parity",
              desc: "Tested meticulously across iOS, Android, macOS, and Windows.",
            },
            {
              icon: <Terminal className="w-5 h-5 text-[#61CED9]" />,
              title: "Direct Founder Access",
              desc: "Daily async updates, Loom walkthroughs, and zero middlemen.",
            },
          ].map((item, gIdx) => (
            <div
              key={gIdx}
              className="p-5 rounded-2xl bg-white dark:bg-[#11211C] border border-brand-ink/5 dark:border-white/10 shadow-xs flex items-start gap-3.5 hover:border-[#61CED9]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-soft border border-brand-ink/5 dark:border-white/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-brand-ink mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
