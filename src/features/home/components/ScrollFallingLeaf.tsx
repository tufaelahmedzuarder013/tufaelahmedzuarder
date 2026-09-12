"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { Sparkles } from "lucide-react";

interface ScrollFallingLeafProps {
  containerRef: React.RefObject<HTMLElement>;
}

export function ScrollFallingLeaf({ containerRef }: ScrollFallingLeafProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth out the scroll progress for a buttery-soft natural float
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // 1. Vertical translation: starts from the tree canopy level (~14vh) to center (~46vh) then drifts down (~72vh)
  const yTranslate = useTransform(
    smoothProgress,
    [0, 0.12, 0.45, 0.72, 0.92, 1.0],
    ["14vh", "22vh", "46vh", "56vh", "70vh", "82vh"]
  );

  // 2. Horizontal sway: gentle natural fluttering in the wind (sinusoidal drift)
  const xTranslate = useTransform(
    smoothProgress,
    [0, 0.15, 0.35, 0.55, 0.75, 0.95, 1.0],
    ["0px", "-50px", "40px", "-25px", "30px", "-10px", "0px"]
  );

  // 3. Rotation: leaf tumbling and swaying gently
  const rotateZ = useTransform(
    smoothProgress,
    [0, 0.12, 0.3, 0.5, 0.7, 0.88, 1.0],
    [-28, 22, -14, 10, -6, 12, 0]
  );

  // 4. Subtle 3D tilt
  const rotateY = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1.0],
    [24, -18, 8, -10, 0]
  );

  // 5. Scale: starts small (0.15 - emerging like a leaf from branches) -> scales up to 1.02 -> then dissolves
  const scale = useTransform(
    smoothProgress,
    [0, 0.05, 0.22, 0.48, 0.72, 0.88, 0.96, 1.0],
    [0.15, 0.3, 0.78, 1.02, 1.0, 0.75, 0.45, 0.2]
  );

  // 6. Opacity of the whole leaf:
  // 0% - 4% = invisible / starts appearing
  // 12% - 72% = fully visible
  // 75% - 90% = smoothly fades out
  // 92% - 100% = 0 (completely hidden before next section)
  const leafOpacity = useTransform(
    smoothProgress,
    [0, 0.04, 0.15, 0.72, 0.86, 0.94, 1.0],
    [0, 0.6, 1, 1, 0.4, 0, 0]
  );

  // 7. Message content opacity: reveals after leaf has expanded enough
  const messageOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.35, 0.7, 0.84, 0.9],
    [0, 0, 1, 1, 0.3, 0]
  );

  // 8. Ethereal blur as it dissolves into mist before the next section
  const blurFilter = useTransform(
    smoothProgress,
    [0, 0.72, 0.88, 0.95],
    [0, 0, 6, 14]
  );
  const filterStyle = useMotionTemplate`blur(${blurFilter}px)`;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex items-start justify-center overflow-hidden select-none">
      <motion.div
        style={{
          top: 0,
          y: yTranslate,
          x: xTranslate,
          rotateZ,
          rotateY,
          scale,
          opacity: leafOpacity,
          filter: filterStyle,
        }}
        className="relative pointer-events-none flex items-center justify-center origin-center"
      >
        {/* Glow halo behind leaf */}
        <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-brand-violet/25 rounded-full blur-2xl pointer-events-none" />

        {/* Leaf Container Card */}
        <div className="relative w-[310px] sm:w-[380px] md:w-[440px] p-6 sm:p-7 rounded-[42px_8px_42px_8px] sm:rounded-[56px_12px_56px_12px] bg-gradient-to-br from-emerald-900/35 via-teal-950/40 to-indigo-950/45 dark:from-emerald-950/80 dark:via-zinc-950/90 dark:to-teal-950/75 backdrop-blur-2xl border border-emerald-400/35 dark:border-emerald-400/30 shadow-[0_20px_60px_-15px_rgba(5,150,105,0.35),0_0_35px_rgba(124,58,237,0.22),inset_0_1px_1px_rgba(255,255,255,0.25)] text-left overflow-hidden">
          
          {/* Authentic SVG Leaf Veins Backdrop */}
          <svg
            className="absolute inset-0 w-full h-full text-emerald-400/15 pointer-events-none"
            viewBox="0 0 400 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Primary Stem & Central Midrib Vein */}
            <path
              d="M 20 220 C 120 180, 240 100, 380 20"
              className="stroke-emerald-400/30 dark:stroke-emerald-300/35"
              strokeWidth="2.5"
            />
            {/* Lateral Branching Veins */}
            <path d="M 100 170 C 120 140, 160 135, 190 142" />
            <path d="M 150 145 C 130 180, 100 195, 70 205" />
            <path d="M 180 125 C 210 105, 260 105, 290 115" />
            <path d="M 230 100 C 205 135, 175 155, 140 165" />
            <path d="M 270 78 C 300 62, 335 62, 360 70" />
            <path d="M 310 55 C 285 90, 255 110, 215 125" />
          </svg>

          {/* Top Leaf Stem Accent */}
          <div className="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-emerald-400/20 blur-sm pointer-events-none" />

          {/* Leaf Message Body */}
          <motion.div
            style={{ opacity: messageOpacity }}
            className="relative z-10 flex flex-col gap-3"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-medium tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>LEAF NOTE · 🌿</span>
              </div>
              <Sparkles className="w-4 h-4 text-emerald-300/80 animate-pulse-slow" />
            </div>

            {/* Headline */}
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-[0.03em] leading-snug">
              Rooted in Code,{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-brand-violet bg-clip-text text-transparent">
                Growing with Purpose.
              </span>
            </h3>

            {/* Quote / Subtitle */}
            <p className="font-sans text-xs sm:text-sm text-zinc-200/90 leading-relaxed">
              Every digital experience begins like a seed. As you scroll down,
              discover how ideas branch into high-performance web architecture.
            </p>

            {/* Footer indicator inside leaf */}
            <div className="pt-2 border-t border-emerald-400/20 flex items-center justify-between text-[11px] font-mono text-emerald-200/75">
              <span>Scroll further to explore</span>
              <span className="tracking-widest">↓ ✦</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
