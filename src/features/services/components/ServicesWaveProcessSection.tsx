"use client";

import React from "react";
import { motion } from "framer-motion";

interface WaveStep {
  num: string;
  title: string;
  description: string;
}

const WAVE_STEPS: WaveStep[] = [
  {
    num: "1",
    title: "Concept & Strategy",
    description: "Product discovery, technical specs, and user journey mapping.",
  },
  {
    num: "2",
    title: "UI/UX & Architecture",
    description: "Sub-pixel Figma design systems and scalable system architecture.",
  },
  {
    num: "3",
    title: "Build & Launch",
    description: "Clean Next.js engineering, speed audits, and cloud deployment.",
  },
];

export function ServicesWaveProcessSection() {
  return (
    <section
      className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-brand-bg relative overflow-hidden"
      aria-label="Workflow Process"
    >
      <div className="w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 mx-auto relative">
        {/* ================= SECTION HEADER (Matching Reference) ================= */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3">
          {/* Eyebrow with thin horizontal line accents */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-7 h-[1.5px] bg-[#F75B00]/70 rounded-full" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-muted">
              workflow
            </span>
            <span className="w-7 h-[1.5px] bg-[#F75B00]/70 rounded-full" />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-orlean), 'Orlean', var(--font-space-grotesk), sans-serif",
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-ink"
          >
            Process section<span className="text-[#F75B00]">.</span>
          </h2>
        </div>

        {/* ================= DESKTOP FLOWING WAVE TIMELINE (md+) ================= */}
        {/* Aspect ratio container ensures SVG and HTML text never drift apart on any screen width */}
        <div className="hidden md:block relative w-full aspect-[1200/440] max-h-[460px]">
          
          {/* ================= MASTER SVG: BOTH WAVE & HEXAGON BADGES LOCKED TOGETHER ================= */}
          <svg
            viewBox="0 0 1200 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
          >
            <defs>
              {/* Primary Crisp Wave Gradient */}
              <linearGradient id="waveStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F75B00" stopOpacity="0.25" />
                <stop offset="16%" stopColor="#F75B00" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#EFC320" stopOpacity="1" />
                <stop offset="84%" stopColor="#F75B00" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#EFC320" stopOpacity="0.2" />
              </linearGradient>

              {/* Faint Ambient Echo Line */}
              <linearGradient id="waveEchoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F75B00" stopOpacity="0.0" />
                <stop offset="18%" stopColor="#F75B00" stopOpacity="0.22" />
                <stop offset="50%" stopColor="#EFC320" stopOpacity="0.28" />
                <stop offset="84%" stopColor="#F75B00" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#F75B00" stopOpacity="0.0" />
              </linearGradient>

              {/* Soft Hexagon Glow Filter */}
              <filter id="hexGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle Echo / Shadow Line */}
            <path
              d="M 40 256 C 90 281, 140 286, 200 286 C 360 286, 440 126, 600 126 C 710 126, 780 276, 860 276 C 920 276, 965 206, 1000 206 C 1045 206, 1100 221, 1160 221"
              stroke="url(#waveEchoGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Primary Crisp Wave Path */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              d="M 40 250 C 90 275, 140 280, 200 280 C 360 280, 440 120, 600 120 C 710 120, 780 270, 860 270 C 920 270, 965 200, 1000 200 C 1045 200, 1100 215, 1160 215"
              stroke="url(#waveStrokeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* ================= NODE 1: HEXAGON ON TROUGH (x=200, y=280) ================= */}
            <g transform="translate(200, 280)">
              {/* Soft Glow */}
              <circle cx="0" cy="4" r="28" fill="#F75B00" opacity="0.18" filter="blur(8px)" />
              
              {/* Perfectly Rounded Hexagon Body (32px radius, centered at 0,0) */}
              <path
                d="M -3 -31 C -1 -33, 1 -33, 3 -31 L 26 -17 C 28 -16, 29 -14, 29 -12 L 29 12 C 29 14, 28 16, 26 17 L 3 31 C 1 33, -1 33, -3 31 L -26 17 C -28 16, -29 14, -29 12 L -29 -12 C -29 -14, -28 -16, -26 -17 Z"
                className="fill-white dark:fill-[#171727] stroke-neutral-200/90 dark:stroke-white/20"
                strokeWidth="1.5"
              />

              {/* Flag Icon (Mathematically centered at 0,0) */}
              <g transform="translate(-10, -10)" stroke="#F75B00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="rgba(247,91,0,0.15)" />
                <line x1="4" x2="4" y1="22" y2="15" />
              </g>
            </g>

            {/* ================= NODE 2: HEXAGON ON CREST (x=600, y=120) ================= */}
            <g transform="translate(600, 120)">
              {/* Soft Glow */}
              <circle cx="0" cy="4" r="28" fill="#F75B00" opacity="0.18" filter="blur(8px)" />

              {/* Rounded Hexagon Body */}
              <path
                d="M -3 -31 C -1 -33, 1 -33, 3 -31 L 26 -17 C 28 -16, 29 -14, 29 -12 L 29 12 C 29 14, 28 16, 26 17 L 3 31 C 1 33, -1 33, -3 31 L -26 17 C -28 16, -29 14, -29 12 L -29 -12 C -29 -14, -28 -16, -26 -17 Z"
                className="fill-white dark:fill-[#171727] stroke-neutral-200/90 dark:stroke-white/20"
                strokeWidth="1.5"
              />

              {/* Bar Chart Icon (Centered at 0,0) */}
              <g transform="translate(-10, -10)" stroke="#F75B00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </g>
            </g>

            {/* ================= NODE 3: HEXAGON ON RIGHT CREST (x=1000, y=200) ================= */}
            <g transform="translate(1000, 200)">
              {/* Soft Glow */}
              <circle cx="0" cy="4" r="28" fill="#F75B00" opacity="0.18" filter="blur(8px)" />

              {/* Rounded Hexagon Body */}
              <path
                d="M -3 -31 C -1 -33, 1 -33, 3 -31 L 26 -17 C 28 -16, 29 -14, 29 -12 L 29 12 C 29 14, 28 16, 26 17 L 3 31 C 1 33, -1 33, -3 31 L -26 17 C -28 16, -29 14, -29 12 L -29 -12 C -29 -14, -28 -16, -26 -17 Z"
                className="fill-white dark:fill-[#171727] stroke-neutral-200/90 dark:stroke-white/20"
                strokeWidth="1.5"
              />

              {/* Package Icon (Centered at 0,0) */}
              <g transform="translate(-10, -10)" stroke="#F75B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="m16 16 2 2 4-4" />
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                <path d="m7.5 4.27 9 5.15" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </g>
            </g>
          </svg>

          {/* ================= STEP 1: TEXT ABOVE CURVE (Left: ~4%, Top: ~15%) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute left-[3%] lg:left-[4%] top-[12%] flex items-center gap-4 z-10"
          >
            <div className="space-y-1.5 max-w-[210px] lg:max-w-[230px]">
              <h3
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="text-lg lg:text-xl font-bold text-brand-ink tracking-tight"
              >
                {WAVE_STEPS[0].title}
              </h3>
              <p
                style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                className="text-xs lg:text-[13px] text-brand-muted font-light leading-relaxed"
              >
                {WAVE_STEPS[0].description}
              </p>
            </div>

            {/* Giant Number 1 next to text */}
            <span
              style={{ fontFamily: "var(--font-orlean), sans-serif" }}
              className="text-7xl lg:text-8xl font-bold text-brand-ink/[0.08] dark:text-white/[0.07] select-none pointer-events-none leading-none -mt-2"
            >
              {WAVE_STEPS[0].num}
            </span>
          </motion.div>

          {/* ================= STEP 2: TEXT BELOW CREST (Left: ~37%, Top: ~62%) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute left-[36%] lg:left-[38%] top-[60%] flex items-center gap-4 z-10"
          >
            <div className="space-y-1.5 max-w-[210px] lg:max-w-[230px]">
              <h3
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="text-lg lg:text-xl font-bold text-brand-ink tracking-tight"
              >
                {WAVE_STEPS[1].title}
              </h3>
              <p
                style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                className="text-xs lg:text-[13px] text-brand-muted font-light leading-relaxed"
              >
                {WAVE_STEPS[1].description}
              </p>
            </div>

            {/* Giant Number 2 next to text */}
            <span
              style={{ fontFamily: "var(--font-orlean), sans-serif" }}
              className="text-7xl lg:text-8xl font-bold text-brand-ink/[0.08] dark:text-white/[0.07] select-none pointer-events-none leading-none -mt-2"
            >
              {WAVE_STEPS[1].num}
            </span>
          </motion.div>

          {/* ================= STEP 3: TEXT ABOVE VALLEY / TO THE LEFT OF NODE 3 (Exact User Red Box) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute left-[60%] lg:left-[62%] top-[12%] flex items-center gap-4 z-10"
          >
            <div className="space-y-1.5 max-w-[210px] lg:max-w-[230px]">
              <h3
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="text-lg lg:text-xl font-bold text-brand-ink tracking-tight"
              >
                {WAVE_STEPS[2].title}
              </h3>
              <p
                style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                className="text-xs lg:text-[13px] text-brand-muted font-light leading-relaxed"
              >
                {WAVE_STEPS[2].description}
              </p>
            </div>

            {/* Giant Number 3 next to text */}
            <span
              style={{ fontFamily: "var(--font-orlean), sans-serif" }}
              className="text-7xl lg:text-8xl font-bold text-brand-ink/[0.08] dark:text-white/[0.07] select-none pointer-events-none leading-none -mt-2"
            >
              {WAVE_STEPS[2].num}
            </span>
          </motion.div>

        </div>

        {/* ================= MOBILE CLEAN STACKED VIEW (< md) ================= */}
        <div className="md:hidden space-y-5">
          {WAVE_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="relative flex items-start gap-4 p-5 rounded-2xl bg-brand-surface border border-neutral-200/80 dark:border-white/10 shadow-sm overflow-hidden"
            >
              <span
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="absolute -top-2 right-4 text-6xl font-bold text-brand-ink/[0.06] dark:text-white/[0.05] select-none pointer-events-none"
              >
                {step.num}
              </span>

              {/* Mobile Hexagon SVG Badge */}
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-sm">
                  <path
                    d="M 45 8.5 C 48 6.5 52 6.5 55 8.5 L 85 25.5 C 88 27.5 90 31 90 34.5 L 90 65.5 C 90 69 88 72.5 85 74.5 L 55 91.5 C 52 93.5 48 93.5 45 91.5 L 15 74.5 C 12 72.5 10 69 10 65.5 L 10 34.5 C 10 31 12 27.5 15 25.5 Z"
                    className="fill-white dark:fill-[#171727] stroke-neutral-200/90 dark:stroke-white/20"
                    strokeWidth="2"
                  />
                </svg>
                <div className="relative z-10 flex items-center justify-center text-[#F75B00]">
                  {idx === 0 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="rgba(247,91,0,0.15)" />
                      <line x1="4" x2="4" y1="22" y2="15" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m16 16 2 2 4-4" />
                      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                      <path d="m7.5 4.27 9 5.15" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" x2="12" y1="22" y2="12" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="space-y-1 pt-1 relative z-10">
                <h3
                  style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                  className="text-lg font-bold text-brand-ink tracking-tight"
                >
                  {step.title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                  className="text-xs text-brand-muted font-light leading-relaxed"
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
