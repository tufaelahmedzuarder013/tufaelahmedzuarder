"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  duration: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isBrandTint?: boolean;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    duration: "1 Week",
    title: "Research & Strategy",
    description:
      "We explore user pain points, business goals, and technical feasibility to uncover what your product truly needs to succeed.",
    icon: Search,
    isBrandTint: true,
  },
  {
    number: "2",
    duration: "2 Weeks",
    title: "Visual Design & UI/UX",
    description:
      "We build a clean, modern design system in Figma with intuitive navigation, custom design tokens, and engaging interactions.",
    icon: Palette,
    isBrandTint: false,
  },
  {
    number: "3",
    duration: "2-3 Weeks",
    title: "Development & Testing",
    description:
      "We engineer your application with Next.js, TypeScript, and Tailwind CSS—running multiple test rounds for speed, security, and fluid UX.",
    icon: Code2,
    isBrandTint: false,
  },
  {
    number: "4",
    duration: "1-2 Days",
    title: "Final Delivery & Launch",
    description:
      "We wrap it all up with 100/100 Core Web Vitals optimization, live production deployment, SEO verification, and full handover.",
    icon: Rocket,
    isBrandTint: true,
  },
];

export function AboutProcessSection() {
  return (
    <section className="about-process-section w-full py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-brand-bg transition-colors duration-500">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-radial-glow pointer-events-none opacity-30 blur-3xl" />

      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* HEADER BLOCK                                                              */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F75B00]/10 border border-[#F75B00]/25 text-[#F75B00] text-xs sm:text-sm font-sans font-medium tracking-wide mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F75B00] animate-pulse" />
            <span>How I Work</span>
          </div>

          <h2
            className="process-main-title text-center font-heading text-brand-ink tracking-tight mb-4"
          >
            My Process
          </h2>

          <p
            className="process-main-subtitle text-center text-brand-muted max-w-xl mx-auto font-sans"
          >
            A battle-tested 4-step workflow that transforms ambitious concepts into high-performing digital realities.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* STEPPED / ZIGZAG PROCESS FLOW (Exact match to reference image)             */}
        {/* ========================================================================= */}
        <div className="relative max-w-[1180px] mx-auto">
          {/* ======================================================================= */}
          {/* DESKTOP CONNECTING CURVED DASHED ARROWS (Hidden on mobile/tablet)       */}
          {/* ======================================================================= */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1180 820"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="process-arrowhead"
                  markerWidth="7"
                  markerHeight="7"
                  refX="5"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 7 3.5, 0 7"
                    fill="#F75B00"
                    opacity="0.8"
                  />
                </marker>
              </defs>

              {/* Arrow 1: From Step 1 to Step 2 (Curving Right & Down) */}
              <path
                d="M 400 120 C 650 120, 680 180, 680 230"
                stroke="#F75B00"
                strokeWidth="1.8"
                strokeDasharray="5 5"
                strokeOpacity="0.55"
                fill="none"
                markerEnd="url(#process-arrowhead)"
              />

              {/* Arrow 2: From Step 2 to Step 3 (Curving Left & Down) */}
              <path
                d="M 680 340 C 420 340, 360 420, 360 480"
                stroke="#F75B00"
                strokeWidth="1.8"
                strokeDasharray="5 5"
                strokeOpacity="0.55"
                fill="none"
                markerEnd="url(#process-arrowhead)"
              />

              {/* Arrow 3: From Step 3 to Step 4 (Curving Right & Down) */}
              <path
                d="M 500 580 C 760 580, 800 640, 800 680"
                stroke="#F75B00"
                strokeWidth="1.8"
                strokeDasharray="5 5"
                strokeOpacity="0.55"
                fill="none"
                markerEnd="url(#process-arrowhead)"
              />
            </svg>
          </div>

          {/* ======================================================================= */}
          {/* THE 4 CARDS IN CASCADING STAGGERED POSITIONS                           */}
          {/* ======================================================================= */}
          <div className="relative z-10 flex flex-col gap-8 lg:gap-0 lg:min-h-[820px]">
            {/* STEP 1: Top Left */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:w-[460px]">
              <ProcessCard step={PROCESS_STEPS[0]} index={0} />
            </div>

            {/* STEP 2: Upper Right */}
            <div className="lg:absolute lg:top-[170px] lg:right-0 lg:w-[470px]">
              <ProcessCard step={PROCESS_STEPS[1]} index={1} />
            </div>

            {/* STEP 3: Lower Left */}
            <div className="lg:absolute lg:top-[430px] lg:left-[100px] lg:w-[460px]">
              <ProcessCard step={PROCESS_STEPS[2]} index={2} />
            </div>

            {/* STEP 4: Bottom Right */}
            <div className="lg:absolute lg:top-[600px] lg:right-[30px] lg:w-[470px]">
              <ProcessCard step={PROCESS_STEPS[3]} index={3} />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CTA LINK                                                           */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-24 lg:mt-28 flex flex-col items-center text-center">
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
            }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] text-white font-sans px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#F75B00]/25 hover:shadow-xl hover:shadow-[#F75B00]/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="text-[16px] font-sans font-normal tracking-tight text-white select-none">
              Ready to start Step 1? Let&apos;s talk
            </span>
            <span className="w-7 h-7 rounded-full bg-white text-[#101820] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0 shadow-xs">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.4]" />
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        .about-process-section .process-main-title {
          font-family: var(--font-orlean), 'Orlean', sans-serif !important;
          font-size: 30px !important;
          font-weight: 400 !important;
          line-height: 1.2 !important;
          letter-spacing: 0.03em !important;
        }
        .about-process-section .process-main-subtitle {
          font-family: var(--font-aventa), 'Aventa', sans-serif !important;
          font-size: 18px !important;
          font-weight: 400 !important;
          line-height: 1.6 !important;
          letter-spacing: 0.015em !important;
        }
        .about-process-section .process-card-title {
          font-family: var(--font-orlean), 'Orlean', sans-serif !important;
          font-size: 25px !important;
          font-weight: 400 !important;
          line-height: 1.25 !important;
          letter-spacing: 0.025em !important;
        }
        .about-process-section .process-card-number {
          font-weight: 400 !important;
        }
        .about-process-section .process-card-desc {
          font-family: var(--font-aventa), 'Aventa', sans-serif !important;
          font-size: 18px !important;
          font-weight: 300 !important;
          line-height: 1.55 !important;
          letter-spacing: 0.01em !important;
        }
      `}</style>
    </section>
  );
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex items-stretch gap-5 sm:gap-6 transition-all duration-400 border shadow-sm hover:shadow-xl hover:-translate-y-1 ${
        step.isBrandTint
          ? "bg-[#FFF6EF] dark:bg-[#1E1916] border-[#F75B00]/25 dark:border-[#F75B00]/30 hover:border-[#F75B00]/50"
          : "bg-white dark:bg-[#121620] border-neutral-200/90 dark:border-white/10 hover:border-[#F75B00]/40"
      }`}
    >
      {/* ======================================================================= */}
      {/* VERTICAL CAPSULE PILL (Left Edge - Exact match to reference)            */}
      {/* ======================================================================= */}
      <div
        className={`w-10 sm:w-11 shrink-0 rounded-full flex items-center justify-center py-4 select-none transition-transform duration-300 group-hover:scale-105 ${
          step.isBrandTint
            ? "bg-[#F75B00] text-white shadow-md shadow-[#F75B00]/30"
            : "bg-[#101820] dark:bg-white/15 text-white shadow-sm"
        }`}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.08em",
            fontWeight: 500,
          }}
          className="whitespace-nowrap uppercase tracking-wider leading-none"
        >
          {step.duration}
        </span>
      </div>

      {/* ======================================================================= */}
      {/* CARD BODY CONTENT (Right of capsule)                                   */}
      {/* ======================================================================= */}
      <div className="flex-1 flex flex-col justify-center min-w-0 pr-2">
        {/* Top Row: Icon + Number & Title */}
        <div className="flex items-center gap-3 mb-2.5">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 ${
              step.isBrandTint
                ? "bg-[#F75B00]/15 text-[#F75B00]"
                : "bg-neutral-100 dark:bg-white/10 text-brand-ink group-hover:text-[#F75B00]"
            }`}
          >
            <Icon className="w-4 h-4 stroke-[2.2]" />
          </div>

          <h3
            className="process-card-title text-brand-ink tracking-tight font-heading group-hover:text-[#F75B00] transition-colors"
          >
            <span className="process-card-number mr-2 text-brand-ink">{step.number}</span>
            {step.title}
          </h3>
        </div>

        {/* Description Paragraph */}
        <p
          className="process-card-desc text-brand-muted font-sans"
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default AboutProcessSection;
