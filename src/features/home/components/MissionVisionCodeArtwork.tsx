"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Paintbrush,
  Box,
  Shield,
  Rocket,
  Gauge,
  Code2,
  Smartphone,
  CheckCircle,
  Infinity as InfinityIcon,
  Crosshair,
  Zap,
  RotateCw,
} from "lucide-react";

interface MissionVisionCodeArtworkProps {
  isVision: boolean;
  onToggle: () => void;
}

export function MissionVisionCodeArtwork({
  isVision,
  onToggle,
}: MissionVisionCodeArtworkProps) {
  return (
    <div
      onClick={onToggle}
      className="relative z-10 w-full max-w-[390px] sm:max-w-[430px] aspect-square p-2 sm:p-4 flex flex-col items-center justify-between cursor-pointer group select-none transition-transform duration-500 hover:scale-[1.01]"
      title="Click artwork to toggle Vision / Mission"
    >
      <AnimatePresence mode="wait">
        {isVision ? (
          <motion.div
            key="vision-artwork"
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.94, rotate: 2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full h-full flex flex-col items-center justify-between"
          >
            {/* Top Interactive Flip Action */}
            <div className="w-full flex items-center justify-end z-20 px-1 pt-0.5">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.1] text-[10px] font-sans font-medium text-brand-muted2 group-hover:text-[#F75B00] group-hover:border-[#F75B00]/40 transition-all duration-300">
                <span>Toggle</span>
                <RotateCw className="w-2.5 h-2.5 transition-transform duration-500 group-hover:rotate-180" />
              </div>
            </div>

            {/* Center Orbital Graphic with SVG Paths & Live Badges */}
            <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[350px] flex items-center justify-center my-auto">
              {/* Concentric Orbital Circles with Directional SVG Arrows */}
              <svg
                viewBox="0 0 300 300"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible animate-[spin_50s_linear_infinite]"
              >
                {/* Outermost Subtle Orbit Bounds Ring (Centered & Contained) */}
                <circle
                  cx="150"
                  cy="150"
                  r="140"
                  fill="none"
                  stroke="#F75B00"
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                  className="opacity-25 dark:opacity-35"
                />

                {/* Outer Dashed Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="122"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  className="opacity-35 dark:opacity-45"
                />

                {/* Middle Orbit Track */}
                <circle
                  cx="150"
                  cy="150"
                  r="92"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  className="opacity-50 dark:opacity-60"
                />

                {/* Inner Accent Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="62"
                  fill="none"
                  stroke="#F75B00"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  className="opacity-40 dark:opacity-50"
                />

                {/* Directional Arrowheads on Orbit (r=92) */}
                <polygon
                  points="150,55 156,60 144,60"
                  fill="#3B82F6"
                  transform="rotate(0 150 58)"
                />
                <polygon
                  points="242,150 237,144 237,156"
                  fill="#3B82F6"
                  transform="rotate(90 242 150)"
                />
                <polygon
                  points="150,242 144,237 156,237"
                  fill="#3B82F6"
                  transform="rotate(180 150 242)"
                />
                <polygon
                  points="58,150 63,156 63,144"
                  fill="#3B82F6"
                  transform="rotate(270 58 150)"
                />
              </svg>

              {/* Ambient Glowing Aura Behind Center Core */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#00E5FF]/25 via-[#F75B00]/25 to-[#EFC320]/25 blur-xl pointer-events-none animate-pulse" />

              {/* Glowing Center 3D Sphere */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#00E5FF] via-[#F75B00] to-[#EFC320] p-1 shadow-[0_12px_36px_rgba(247,91,0,0.45),inset_0_2px_6px_rgba(255,255,255,0.7)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {/* Specular Highlight */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/40 via-transparent to-black/25 pointer-events-none" />
                {/* Center Glass Aura */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/20 to-black/10 backdrop-blur-sm flex items-center justify-center">
                  <InfinityIcon className="w-12 h-12 sm:w-14 sm:h-14 text-white stroke-[2.2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] animate-pulse" />
                </div>
              </div>

              {/* ================= Orbiting Satellite Badges (Evenly Distributed in 4 Quadrants) ================= */}
              {/* Badge 1: Top-Left - UI/UX Craft */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1 left-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center shrink-0">
                  <Paintbrush className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  UI/UX Craft
                </span>
              </motion.div>

              {/* Badge 2: Top-Right - Next.js RSC */}
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-1 right-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
                  <Box className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  Next.js RSC
                </span>
              </motion.div>

              {/* Badge 3: Bottom-Right - Zero Tech Debt */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-1 right-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                  <Shield className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  Zero Debt
                </span>
              </motion.div>

              {/* Badge 4: Bottom-Left - 60FPS Motion */}
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-1 left-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0">
                  <Rocket className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  60FPS Motion
                </span>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="mission-artwork"
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.94, rotate: -2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full h-full flex flex-col items-center justify-between"
          >
            {/* Top Interactive Flip Action */}
            <div className="w-full flex items-center justify-end z-20 px-1 pt-0.5">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.1] text-[10px] font-sans font-medium text-brand-muted2 group-hover:text-[#F75B00] group-hover:border-[#F75B00]/40 transition-all duration-300">
                <span>Toggle</span>
                <RotateCw className="w-2.5 h-2.5 transition-transform duration-500 group-hover:rotate-180" />
              </div>
            </div>

            {/* Center Target Graphic with Radar Concentric Rings */}
            <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[350px] flex items-center justify-center my-auto">
              {/* Radar Rotating Beam Sweep Effect - Contained within outer radar perimeter */}
              <div className="absolute inset-2 sm:inset-2.5 rounded-full pointer-events-none animate-[spin_8s_linear_infinite] opacity-25 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(247,91,0,0.35)_360deg)]" />

              {/* Concentric Radar Rings */}
              <svg
                viewBox="0 0 300 300"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              >
                {/* Outermost Subtle Radar Range Ring (Centered & Contained) */}
                <circle
                  cx="150"
                  cy="150"
                  r="140"
                  fill="none"
                  stroke="#F75B00"
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                  className="opacity-25 dark:opacity-35"
                />

                {/* Outer Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="122"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.2"
                  className="opacity-30 dark:opacity-40"
                />

                {/* Middle Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="94"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.4"
                  className="opacity-45 dark:opacity-55"
                />

                {/* Inner Dashed Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="66"
                  fill="none"
                  stroke="#F75B00"
                  strokeWidth="1.4"
                  strokeDasharray="4 4"
                  className="opacity-60 dark:opacity-70"
                />

                {/* Crosshair Guide Lines */}
                <line
                  x1="150"
                  y1="14"
                  x2="150"
                  y2="286"
                  stroke="#F75B00"
                  strokeWidth="0.8"
                  strokeDasharray="3 5"
                  className="opacity-35 dark:opacity-45"
                />
                <line
                  x1="14"
                  y1="150"
                  x2="286"
                  y2="150"
                  stroke="#F75B00"
                  strokeWidth="0.8"
                  strokeDasharray="3 5"
                  className="opacity-35 dark:opacity-45"
                />

                {/* Corner Tick Reticles on Middle Ring (r=94) */}
                <circle cx="150" cy="56" r="2.2" fill="#3B82F6" className="opacity-70" />
                <circle cx="244" cy="150" r="2.2" fill="#3B82F6" className="opacity-70" />
                <circle cx="150" cy="244" r="2.2" fill="#3B82F6" className="opacity-70" />
                <circle cx="56" cy="150" r="2.2" fill="#3B82F6" className="opacity-70" />
              </svg>

              {/* Ambient Glowing Aura Behind Center Core */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#F75B00]/30 to-[#EFC320]/30 blur-xl pointer-events-none animate-pulse" />

              {/* Glowing Center 3D Target Sphere */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#F75B00] via-[#FF7A00] to-[#EFC320] p-1 shadow-[0_12px_36px_rgba(247,91,0,0.5),inset_0_2px_6px_rgba(255,255,255,0.7)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/45 via-transparent to-black/25 pointer-events-none" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/20 to-black/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Crosshair className="w-12 h-12 text-white stroke-[2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
                    <Zap className="w-5 h-5 text-amber-200 fill-current absolute" />
                  </div>
                </div>
              </div>

              {/* ================= Orbiting Satellite Badges (Evenly Distributed in 4 Quadrants - Never Overlapping) ================= */}
              {/* Badge 1: Top-Left - Speedometer (< 200ms TTFB) */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1 left-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center shrink-0">
                  <Gauge className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  &lt; 200ms TTFB
                </span>
              </motion.div>

              {/* Badge 2: Top-Right - Code Bracket (100% Type-Safe) */}
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-1 right-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  100% Type-Safe
                </span>
              </motion.div>

              {/* Badge 3: Bottom-Right - Device (iOS & Android) */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-1 right-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  iOS &amp; Android
                </span>
              </motion.div>

              {/* Badge 4: Bottom-Left - Green Verified (100/100 Vitals) */}
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-1 left-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#15201B]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[11px] text-brand-ink dark:text-white whitespace-nowrap">
                  100/100 Vitals
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
