"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Layers,
  Building,
  CheckCircle2,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

/**
 * 7 Architectural Stages (from Ground Floor to Master Penthouse)
 * Matching the exact visual layout and SVG masks of the architectural drawing
 */
export const ARCHITECTURE_STEPS = [
  {
    number: 7,
    floorLabel: "07 ATTENTION TO DETAIL",
    elevation: "EL +0.0M • GROUND LEVEL",
    levelName: "Level 01: Detail & Execution",
    title: "Attention to Detail & Code Quality",
    subtitle: "Noticing the small things that make a massive difference in design and execution.",
    description:
      "Micro-details separate good websites from iconic digital products. We obsess over sub-pixel alignment, typography baseline grids, silky transition timing curves, and 100/100 Core Web Vitals performance before any release.",
    deliverables: [
      { label: "100/100 Core Web Vitals", tag: "Performance" },
      { label: "Sub-Pixel Fluid Geometry", tag: "Figma 1:1" },
      { label: "Cross-Device Parity Testing", tag: "QA SLA" },
      { label: "WCAG AAA Accessibility", tag: "Compliance" },
    ],
    mask: "M391 653H553V788H391Z M325 648H392V788H325Z M575 626H716V777H575Z M550 670H576V676H550Z",
    roomBox: { x: 325, y: 626, width: 391, height: 162 },
  },
  {
    number: 6,
    floorLabel: "06 COMMUNICATION",
    elevation: "EL +3.2M • COLLABORATION SUITE",
    levelName: "Level 02: Alignment & Collaboration",
    title: "Transparent Communication & Scope Lock",
    subtitle: "Clearly presenting and sharing ideas with clients, teams, and stakeholders.",
    description:
      "Engineering success requires transparent alignment. We provide daily async progress updates, interactive preview URLs on every Git commit, and an ironclad 48-hour scope lock to ensure zero surprises or budget drift.",
    deliverables: [
      { label: "48h Scope Lock Guarantee", tag: "Fixed Price" },
      { label: "Automated Preview Deploys", tag: "CI/CD" },
      { label: "Direct Founder Access", tag: "Slack / Discord" },
      { label: "Unambiguous Roadmaps", tag: "Milestones" },
    ],
    mask: "M194 550H336V684H194Z M336 550H551V650H336Z M336 650H391V684H336Z M38 554H194V677H38Z",
    roomBox: { x: 38, y: 550, width: 353, height: 134 },
  },
  {
    number: 5,
    floorLabel: "05 PROBLEM SOLVING",
    elevation: "EL +6.5M • FULL-STACK CORE",
    levelName: "Level 03: Architecture & Problem Solving",
    title: "Full-Stack Engineering & Problem Solving",
    subtitle: "Finding efficient and innovative solutions to complex technical challenges.",
    description:
      "Transforming high-level vision into scalable software. We architect normalized relational databases, high-throughput Next.js Server Actions, edge-cached APIs, and resilient state machines that handle massive traffic effortlessly.",
    deliverables: [
      { label: "Normalized PostgreSQL Schemas", tag: "Prisma ORM" },
      { label: "Sub-Second Server Actions", tag: "< 240ms" },
      { label: "Zero-Trust Session Guards", tag: "Security" },
      { label: "Multi-Region Cloud Hosting", tag: "AWS / Vercel" },
    ],
    mask: "M330 477H551V551H330Z M552 549H573V651H552Z M575 449H720V608H575Z M542 489H577V497H542Z",
    roomBox: { x: 330, y: 449, width: 390, height: 160 },
  },
  {
    number: 4,
    floorLabel: "04 CREATIVITY",
    elevation: "EL +9.8M • CREATIVE STUDIO",
    levelName: "Level 04: Spatial & Aesthetic Innovation",
    title: "Creative Innovation & Unique Aesthetics",
    subtitle: "Thinking outside the box to design unique, functional, and aesthetic spaces.",
    description:
      "Cookie-cutter templates kill brand authority. We engineer custom spatial layouts, distinctive typography treatments, bespoke iconography, and memorable visual metaphors that position your brand miles ahead of competitors.",
    deliverables: [
      { label: "Custom Spatial Layouts", tag: "Bespoke" },
      { label: "Harmonious Color Systems", tag: "HSL Tokens" },
      { label: "Adaptive Dark / Light Luxury", tag: "Zero Flash" },
      { label: "Signature Visual Language", tag: "Branding" },
    ],
    mask: "M190 363H331V498H190Z M331 388H553V478H331Z M42 382H190V498H42Z",
    roomBox: { x: 42, y: 363, width: 289, height: 135 },
  },
  {
    number: 3,
    floorLabel: "03 VISUALIZATION SKILLS",
    elevation: "EL +13.0M • MOTION ATELIER",
    levelName: "Level 05: Motion & Kinetic Physics",
    title: "Visualization & 60FPS Micro-Physics",
    subtitle: "The ability to communicate ideas through fluid motion, models, and renderings.",
    description:
      "Bringing interfaces to life with tactile physics. Every hover effect, gesture swipe, card reveal, and transition is powered by hardware-accelerated spring curves locked at 60 frames per second for silky natural touch.",
    deliverables: [
      { label: "GPU-Accelerated Springs", tag: "60 FPS" },
      { label: "Gesture Damping & Drawers", tag: "Tactile" },
      { label: "Smooth Scroll Transitions", tag: "Framer Motion" },
      { label: "Micro-Interaction Feedback", tag: "Sensory UX" },
    ],
    mask: "M394 250H538V389H394Z M296 325H395V389H296Z M575 271H722V405H575Z M536 310H577V317H536Z",
    roomBox: { x: 296, y: 250, width: 426, height: 155 },
  },
  {
    number: 2,
    floorLabel: "02 TECHNICAL KNOWLEDGE",
    elevation: "EL +16.2M • ENGINEERING LAB",
    levelName: "Level 06: Modern Technology Standards",
    title: "Technical Mastery & Next.js Architecture",
    subtitle: "Understanding of modern materials, construction, and resilient system engineering.",
    description:
      "Leveraging modern engineering standards: Next.js 14 App Router, React Server Components (RSC), strict end-to-end TypeScript validation, automated CI/CD pipelines, and zero-bundle hydration for blistering page speed.",
    deliverables: [
      { label: "Next.js 14 App Router & RSC", tag: "Edge Ready" },
      { label: "Strict TypeScript Safety", tag: "Zero Any" },
      { label: "Automated GitHub Actions", tag: "CI/CD" },
      { label: "Zod Schema Type Guards", tag: "Runtime Safe" },
    ],
    mask: "M201 172H395V326H201Z M49 187H201V322H49Z",
    roomBox: { x: 49, y: 172, width: 346, height: 154 },
  },
  {
    number: 1,
    floorLabel: "01 DESIGN THINKING (MASTER)",
    elevation: "EL +19.5M • PENTHOUSE SUITE",
    levelName: "Level 07: Master Product Strategy",
    title: "Design Thinking & Strategic Architecture",
    subtitle: "The overarching ability to imagine, conceptualize, and create meaningful solutions.",
    description:
      "At the summit of the sprint architecture sits Design Thinking. We fuse user psychology, business economics, and architectural elegance into a master product roadmap that maximizes user retention, conversions, and lifetime value.",
    deliverables: [
      { label: "Conversion Funnel Mapping", tag: "High ROI" },
      { label: "User Psychology Architecture", tag: "Retention" },
      { label: "Product Moat Construction", tag: "Strategic" },
      { label: "30-Day Founder Partnership", tag: "Included" },
    ],
    mask: "M299 48H470V220H395V173H299Z M244 136H278V174H244Z M480 0H591V64H480Z M469 65H706V207H469Z",
    roomBox: { x: 244, y: 0, width: 462, height: 220 },
  },
];

export const FOUNDATION_MASK =
  "M0 786H736V892H0Z M35 680H194V787H35Z M194 685H228V787H194Z M228 682H325V787H228Z M552 735H575V776H670V787H552Z";

export function ProcessBlueprintSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isJumpingRef = useRef(false);

  // Scroll tracking: As the user scrolls through the 350vh section,
  // the building dynamically constructs floor by floor!
  useEffect(() => {
    const handleScroll = () => {
      if (isJumpingRef.current) return;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = section.offsetHeight - windowHeight;

      // Distance scrolled into this section
      const scrolled = -rect.top;

      if (scrolled <= 0) {
        setActiveStepIndex(0);
        return;
      }

      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      // 7 steps: 0 to 6
      const stepIndex = Math.min(6, Math.floor(progress * 7));
      setActiveStepIndex(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToStep = (index: number) => {
    setActiveStepIndex(index);
    const section = sectionRef.current;
    if (!section) return;

    isJumpingRef.current = true;
    const totalScrollDistance = section.offsetHeight - window.innerHeight;
    const targetScrollTop =
      window.scrollY + section.getBoundingClientRect().top + (index / 6) * totalScrollDistance;

    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isJumpingRef.current = false;
    }, 600);
  };

  const currentStep = ARCHITECTURE_STEPS[activeStepIndex];

  return (
    <div
      ref={sectionRef}
      className="relative bg-white dark:bg-[#0A0F0D] border-t border-brand-ink/5 dark:border-white/5"
      // Long scroll runway so each floor stays in view comfortably while scrolling
      style={{ minHeight: "380vh" }}
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.10] -z-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(16,24,32,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,24,32,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      {/* Ambient background glowing orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#EFC320]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#F75B00]/8 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================================= */}
      {/* STICKY STAGE CONTAINER (Locks to screen as user scrolls)                  */}
      {/* ========================================================================= */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-center py-6 sm:py-8 lg:py-10">
        <Container>
          {/* Section Eyebrow Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <Eyebrow>{"// SPRINT ARCHITECTURE & METHODOLOGY"}</Eyebrow>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-ink dark:text-white tracking-[0.02em] leading-tight">
                Architectural Blueprint: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F75B00] to-[#EFC320]">Step-by-Step Build</span>
              </h2>
            </div>

            {/* Scroll Indicator / Level Badge */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs text-brand-muted uppercase tracking-wider hidden sm:inline">
                Scroll to Build Building:
              </span>
              <div className="px-3 py-1 rounded-full bg-[#F75B00]/10 border border-[#F75B00]/30 font-mono text-xs font-bold text-[#F75B00]">
                Floor {activeStepIndex + 1} of 7
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MAIN 2-COLUMN EXPERIENCE: Large Text (Left) + Building Reveal (Right)     */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white/70 dark:bg-[#0E1512]/90 backdrop-blur-xl rounded-[28px] sm:rounded-[36px] border border-brand-ink/10 dark:border-white/10 p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_70px_-20px_rgba(0,0,0,0.85)]">
            
            {/* ================= LEFT COLUMN: Large, Highly Legible Methodology Text ================= */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4"
                >
                  {/* Elevation & Level Tag */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-[#F75B00] bg-[#F75B00]/10 border border-[#F75B00]/30 uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#F75B00]" />
                      <span>{currentStep.floorLabel}</span>
                    </span>
                    <span className="font-mono text-xs text-brand-muted hidden sm:inline">
                      {currentStep.elevation}
                    </span>
                  </div>

                  {/* Big, Crisp, Easy-to-Read Title */}
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-ink dark:text-white tracking-[0.015em] leading-[1.2]">
                    {currentStep.title}
                  </h3>

                  {/* Subtitle / Core Principle */}
                  <p className="font-sans text-sm sm:text-base text-[#F75B00] font-semibold leading-relaxed">
                    {currentStep.subtitle}
                  </p>

                  {/* Detailed, Large Readable Methodology Description */}
                  <p className="font-sans text-sm sm:text-base lg:text-lg text-brand-ink/80 dark:text-zinc-200 leading-relaxed font-normal">
                    {currentStep.description}
                  </p>

                  {/* Deliverable Matrix Chips */}
                  <div className="pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-muted font-bold block mb-2.5">
                      Key Sprint Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {currentStep.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center justify-between p-2.5 px-3 rounded-xl bg-neutral-50 dark:bg-white/[0.04] border border-brand-ink/10 dark:border-white/10 text-xs sm:text-sm font-medium text-brand-ink dark:text-white"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <CheckCircle2 className="w-4 h-4 text-[#F75B00] shrink-0" />
                            <span className="truncate">{item.label}</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-[#F75B00]/10 text-[#F75B00] font-mono text-[10px] font-bold shrink-0 ml-2">
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floor Switcher Tabs & Progress Controller */}
              <div className="border-t border-brand-ink/10 dark:border-white/10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* 7 Floor Navigation Buttons */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {ARCHITECTURE_STEPS.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    const isPassed = idx <= activeStepIndex;
                    return (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => jumpToStep(idx)}
                        className={`w-8 sm:w-9 h-8 sm:h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 cursor-pointer border ${
                          isActive
                            ? "bg-gradient-to-tr from-[#F75B00] to-[#EFC320] text-white border-transparent shadow-md scale-110"
                            : isPassed
                            ? "bg-[#F75B00]/10 text-[#F75B00] border-[#F75B00]/30 hover:bg-[#F75B00]/20"
                            : "bg-neutral-100 dark:bg-white/5 text-brand-muted border-brand-ink/10 dark:border-white/10 hover:bg-neutral-200"
                        }`}
                        title={step.title}
                        aria-label={`Jump to floor ${step.number}`}
                      >
                        0{step.number}
                      </button>
                    );
                  })}
                </div>

                {/* Next / CTA Actions */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {activeStepIndex < 6 ? (
                    <button
                      type="button"
                      onClick={() => jumpToStep(activeStepIndex + 1)}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white font-sans font-medium text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                    >
                      <span>Next Floor</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <Button href="/contact" variant="primary" size="sm">
                      <span>Book a Sprint</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: The Architectural Building Artwork Reveal ================= */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[420px] lg:max-w-[460px] aspect-[736/892] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FBF7F2] dark:bg-[#131916] border border-brand-ink/10 dark:border-white/10 shadow-lg p-3 sm:p-4">
                
                {/* Architectural Building Construction SVG */}
                <svg
                  viewBox="0 0 736 892"
                  className="w-full h-full object-contain select-none pointer-events-none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <defs>
                    <image
                      id="architecture-building-art"
                      href="/images/architecture-building.png"
                      width={736}
                      height={892}
                    />

                    {/* Foundation ground mask */}
                    <clipPath id="building-foundation-clip" clipPathUnits="userSpaceOnUse">
                      <path d={FOUNDATION_MASK} />
                    </clipPath>

                    {/* Mask for each of the 7 floors */}
                    {ARCHITECTURE_STEPS.map((step) => (
                      <clipPath
                        key={step.number}
                        id={`building-floor-${step.number}-clip`}
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path d={step.mask} />
                      </clipPath>
                    ))}
                  </defs>

                  {/* 1. Foundation is permanently constructed at the bedrock */}
                  <use
                    href="#architecture-building-art"
                    clipPath="url(#building-foundation-clip)"
                  />

                  {/* 2. Each floor reveals sequentially as the user scrolls */}
                  {ARCHITECTURE_STEPS.map((step, idx) => {
                    const isConstructed = idx <= activeStepIndex;
                    const isCurrent = idx === activeStepIndex;

                    return (
                      <g
                        key={step.number}
                        opacity={isConstructed ? 1 : 0}
                        transform={isConstructed ? "translate(0, 0)" : "translate(0, 18)"}
                        style={{
                          transition: "opacity 450ms cubic-bezier(0.16, 1, 0.3, 1), transform 450ms cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <use
                          href="#architecture-building-art"
                          clipPath={`url(#building-floor-${step.number}-clip)`}
                        />

                        {/* Active Room Glowing Outline Indicator */}
                        {isCurrent && (
                          <rect
                            x={step.roomBox.x}
                            y={step.roomBox.y}
                            width={step.roomBox.width}
                            height={step.roomBox.height}
                            fill="none"
                            stroke="#F75B00"
                            strokeWidth="3.5"
                            strokeDasharray="8 6"
                            className="animate-pulse"
                            rx="8"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Floating Status Pill over the building */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/90 dark:bg-[#1A221E]/95 backdrop-blur-md border border-brand-ink/10 dark:border-white/10 shadow-sm text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F75B00] animate-ping" />
                    <span className="font-bold text-brand-ink dark:text-white">
                      FLOOR 0{currentStep.number} ACTIVE
                    </span>
                  </div>
                  <span className="text-brand-muted text-[11px]">
                    {Math.round(((activeStepIndex + 1) / 7) * 100)}% BUILT
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
}
