"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flag, BarChart3, PackageCheck } from "lucide-react";

interface WaveStep {
  num: string;
  title: string;
  description: string;
  icon: "flag" | "chart" | "package";
}

const WAVE_STEPS: WaveStep[] = [
  {
    num: "1",
    title: "Concept & Strategy",
    description: "Product discovery, technical specs, and user journey mapping.",
    icon: "flag",
  },
  {
    num: "2",
    title: "UI/UX & Architecture",
    description: "Sub-pixel Figma design systems and scalable system architecture.",
    icon: "chart",
  },
  {
    num: "3",
    title: "Build & Launch",
    description: "Clean Next.js engineering, speed audits, and cloud deployment.",
    icon: "package",
  },
];

function HexagonBadge({ icon }: { icon: WaveStep["icon"] }) {
  const renderIcon = () => {
    switch (icon) {
      case "flag":
        return <Flag className="w-5 h-5 text-[#F75B00] fill-[#F75B00]/15 stroke-[2]" />;
      case "chart":
        return <BarChart3 className="w-5 h-5 text-[#F75B00] stroke-[2.2]" />;
      case "package":
        return <PackageCheck className="w-5 h-5 text-[#F75B00] stroke-[2]" />;
    }
  };

  return (
    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center group">
      {/* Soft Brand Glow underneath Hexagon */}
      <div className="absolute inset-2 rounded-full bg-[#F75B00]/25 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Rounded Hexagon SVG */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_14px_26px_rgba(16,24,32,0.10)] dark:drop-shadow-[0_14px_26px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:scale-105"
      >
        <path
          d="M44 6.5 C47.7 4.4 52.3 4.4 56 6.5 L86.5 24.1 C90.2 26.2 92.5 30.2 92.5 34.5 L92.5 65.5 C92.5 69.8 90.2 73.8 86.5 75.9 L56 93.5 C52.3 95.6 47.7 95.6 44 93.5 L13.5 75.9 C9.8 73.8 7.5 69.8 7.5 65.5 L7.5 34.5 C7.5 30.2 9.8 26.2 13.5 24.1 Z"
          className="fill-white dark:fill-[#171727] stroke-neutral-200/80 dark:stroke-white/15"
          strokeWidth="1.5"
        />
      </svg>

      {/* Centered Icon */}
      <div className="relative z-10 flex items-center justify-center">
        {renderIcon()}
      </div>
    </div>
  );
}

export function ServicesWaveProcessSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-brand-bg overflow-hidden"
      aria-label="Workflow Process"
    >
      <div className="w-full max-w-[1320px] px-4 sm:px-6 lg:px-10 mx-auto">
        
        {/* ================= SECTION HEADER (Matching Reference) ================= */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20 space-y-3">
          {/* Eyebrow with flanking thin horizontal lines */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#F75B00]/60 rounded-full" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-brand-muted">
              workflow
            </span>
            <span className="w-6 h-[1.5px] bg-[#F75B00]/60 rounded-full" />
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
        <div className="hidden md:block relative w-full h-[380px] lg:h-[400px]">
          
          {/* Flowing S-Wave SVG Path */}
          <svg
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
          >
            <defs>
              <linearGradient id="waveStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F75B00" stopOpacity="0.15" />
                <stop offset="16%" stopColor="#F75B00" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#EFC320" stopOpacity="0.95" />
                <stop offset="84%" stopColor="#F75B00" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#EFC320" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="waveRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F75B00" stopOpacity="0.0" />
                <stop offset="20%" stopColor="#F75B00" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#EFC320" stopOpacity="0.22" />
                <stop offset="85%" stopColor="#F75B00" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#F75B00" stopOpacity="0.0" />
              </linearGradient>

              <filter id="waveGlow" x="-10%" y="-20%" width="120%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Soft Ambient Secondary Ribbon Wave */}
            <path
              d="M 20 205 C 90 235, 140 248, 200 248 C 360 248, 440 72, 600 72 C 720 72, 750 218, 860 218 C 935 218, 960 140, 1000 128 C 1045 114, 1110 112, 1180 120"
              stroke="url(#waveRibbonGrad)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Primary Crisp Gradient Wave */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              d="M 20 205 C 90 235, 140 248, 200 248 C 360 248, 440 72, 600 72 C 720 72, 750 218, 860 218 C 935 218, 960 140, 1000 128 C 1045 114, 1110 112, 1180 120"
              stroke="url(#waveStrokeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#waveGlow)"
            />

            {/* Secondary Fine Parallel Accent Hairline */}
            <path
              d="M 40 212 C 105 240, 150 254, 205 254 C 368 254, 448 80, 605 80 C 726 80, 756 225, 864 225 C 938 225, 965 148, 1005 135 C 1048 122, 1110 120, 1170 126"
              stroke="url(#waveStrokeGrad)"
              strokeOpacity="0.35"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          {/* ================= STEP 1: TEXT TOP-LEFT + HEXAGON AT TROUGH (16.66%, 77.5%) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute left-[4%] lg:left-[6%] top-[4%] w-[260px] lg:w-[290px]"
          >
            <div className="relative">
              {/* Giant Watermark Number 1 */}
              <span
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="absolute -top-6 right-2 text-8xl font-bold text-brand-ink/[0.06] dark:text-white/[0.05] select-none pointer-events-none leading-none"
              >
                {WAVE_STEPS[0].num}
              </span>

              <h3
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="relative z-10 text-xl font-bold text-brand-ink tracking-tight mb-2"
              >
                {WAVE_STEPS[0].title}
              </h3>
              <div
                style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                className="relative z-10 text-xs lg:text-[13px] text-brand-muted font-light leading-relaxed max-w-[230px]"
              >
                {WAVE_STEPS[0].description}
              </div>
            </div>
          </motion.div>

          {/* Node 1 Hexagon */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="absolute left-[16.666%] top-[77.5%] -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <HexagonBadge icon={WAVE_STEPS[0].icon} />
          </motion.div>

          {/* ================= STEP 2: HEXAGON AT CREST (50%, 22.5%) + TEXT BELOW ================= */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute left-[50%] top-[22.5%] -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <HexagonBadge icon={WAVE_STEPS[1].icon} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="absolute left-[38%] lg:left-[40%] top-[54%] w-[260px] lg:w-[290px]"
          >
            <div className="relative">
              {/* Giant Watermark Number 2 */}
              <span
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="absolute -top-6 right-2 text-8xl font-bold text-brand-ink/[0.06] dark:text-white/[0.05] select-none pointer-events-none leading-none"
              >
                {WAVE_STEPS[1].num}
              </span>

              <h3
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="relative z-10 text-xl font-bold text-brand-ink tracking-tight mb-2"
              >
                {WAVE_STEPS[1].title}
              </h3>
              <div
                style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                className="relative z-10 text-xs lg:text-[13px] text-brand-muted font-light leading-relaxed max-w-[230px]"
              >
                {WAVE_STEPS[1].description}
              </div>
            </div>
          </motion.div>

          {/* ================= STEP 3: HEXAGON AT UPPER-RIGHT (83.33%, 40%) + TEXT BELOW ================= */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute left-[83.333%] top-[40%] -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <HexagonBadge icon={WAVE_STEPS[2].icon} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="absolute left-[70%] lg:left-[72%] top-[62%] w-[250px] lg:w-[280px]"
          >
            <div className="relative">
              {/* Giant Watermark Number 3 */}
              <span
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="absolute -top-6 right-2 text-8xl font-bold text-brand-ink/[0.06] dark:text-white/[0.05] select-none pointer-events-none leading-none"
              >
                {WAVE_STEPS[2].num}
              </span>

              <h3
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="relative z-10 text-xl font-bold text-brand-ink tracking-tight mb-2"
              >
                {WAVE_STEPS[2].title}
              </h3>
              <div
                style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                className="relative z-10 text-xs lg:text-[13px] text-brand-muted font-light leading-relaxed max-w-[230px]"
              >
                {WAVE_STEPS[2].description}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ================= MOBILE CLEAN STACKED VIEW (< md) ================= */}
        <div className="md:hidden space-y-6">
          {WAVE_STEPS.map((step) => (
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

              <div className="shrink-0">
                <HexagonBadge icon={step.icon} />
              </div>

              <div className="space-y-1 pt-1 relative z-10">
                <h3
                  style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                  className="text-lg font-bold text-brand-ink tracking-tight"
                >
                  {step.title}
                </h3>
                <div
                  style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                  className="text-xs text-brand-muted font-light leading-relaxed"
                >
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
