"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Paintbrush,
  Box,
  Shield,
  Rocket,
  Wallet,
  Gauge,
  Code2,
  Smartphone,
  CheckCircle,
  Infinity as InfinityIcon,
  Crosshair,
  Zap,
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
      className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] aspect-square p-2 sm:p-4 flex flex-col items-center justify-between cursor-pointer group select-none transition-transform duration-500 hover:scale-[1.02]"
    >

      <AnimatePresence mode="wait">
        {isVision ? (
          <motion.div
            key="vision-artwork"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full flex flex-col items-center justify-between"
          >
            {/* Top Row: Floating Dot and Tag */}
            <div className="w-full flex items-center justify-between z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F75B00] animate-pulse" />
              <span className="font-mono text-[10px] text-brand-muted2 uppercase tracking-wider font-semibold">
                ENDLESS LIFECYCLE
              </span>
            </div>

            {/* Center Orbital Graphic with SVG Paths & Live Badges */}
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[300px] flex items-center justify-center my-auto">
              {/* Concentric Orbital Circles with Directional SVG Arrows */}
              <svg
                viewBox="0 0 300 300"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible animate-[spin_60s_linear_infinite]"
              >
                {/* Outer Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  className="opacity-40"
                />
                {/* Middle Ring with directional arrows */}
                <circle
                  cx="150"
                  cy="150"
                  r="85"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  className="opacity-50"
                />
                {/* Arrowheads on orbit */}
                <polygon
                  points="150,62 155,67 145,67"
                  fill="#3B82F6"
                  transform="rotate(0 150 65)"
                />
                <polygon
                  points="235,150 230,145 230,155"
                  fill="#3B82F6"
                  transform="rotate(90 235 150)"
                />
                <polygon
                  points="150,235 145,230 155,230"
                  fill="#3B82F6"
                  transform="rotate(180 150 235)"
                />
                <polygon
                  points="65,150 70,155 70,145"
                  fill="#3B82F6"
                  transform="rotate(270 65 150)"
                />
              </svg>

              {/* Glowing Center 3D Sphere */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#00E5FF] via-[#F75B00] to-[#EFC320] p-1 shadow-[0_12px_36px_rgba(247,91,0,0.45),inset_0_2px_6px_rgba(255,255,255,0.6)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {/* Specular Highlight */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/40 via-transparent to-black/20" />
                {/* Center Glass Aura */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/20 to-black/10 backdrop-blur-sm flex items-center justify-center">
                  <InfinityIcon className="w-12 h-12 sm:w-14 sm:h-14 text-white stroke-[2.2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] animate-pulse" />
                </div>
              </div>

              {/* Orbiting Satellite Badges (Pure Live HTML/CSS) */}
              {/* Badge 1: Top Left - Paintbrush */}
              <div className="absolute top-2 left-6 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center">
                  <Paintbrush className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  UI/UX Craft
                </span>
              </div>

              {/* Badge 2: Top Right - 3D Box */}
              <div className="absolute top-2 right-6 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-500 flex items-center justify-center">
                  <Box className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  Next.js RSC
                </span>
              </div>

              {/* Badge 3: Right - Shield */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                  <Shield className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  Zero Debt
                </span>
              </div>

              {/* Badge 4: Bottom - Rocket */}
              <div className="absolute bottom-2 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-violet-500/15 text-violet-500 flex items-center justify-center">
                  <Rocket className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  60FPS Motion
                </span>
              </div>

              {/* Badge 5: Left - Wallet */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-[#F75B00]/15 text-[#F75B00] flex items-center justify-center">
                  <Wallet className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  High ROI
                </span>
              </div>
            </div>

            {/* Bottom Caption Pill */}
            <div className="w-full z-20 flex items-center justify-between px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#161F1A] border border-[#F75B00]/25 shadow-sm text-[11px] font-mono">
              <span className="text-brand-ink dark:text-white font-medium">
                Continuous Loop • Vision
              </span>
              <span className="text-[#F75B00] font-bold tracking-wider">
                CLICK TO FLIP
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="mission-artwork"
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: -3 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full flex flex-col items-center justify-between"
          >
            {/* Top Row: Floating Dot and Tag */}
            <div className="w-full flex items-center justify-between z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EFC320] animate-pulse" />
              <span className="font-mono text-[10px] text-brand-muted2 uppercase tracking-wider font-semibold">
                PRECISION TARGET
              </span>
            </div>

            {/* Center Target Graphic with Radar Concentric Rings */}
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[300px] flex items-center justify-center my-auto">
              {/* Concentric Radar Rings */}
              <svg
                viewBox="0 0 300 300"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              >
                <circle
                  cx="150"
                  cy="150"
                  r="125"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.2"
                  className="opacity-30"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="95"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.4"
                  className="opacity-45"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="65"
                  fill="none"
                  stroke="#F75B00"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="opacity-60"
                />
                {/* Crosshair guide lines */}
                <line
                  x1="150"
                  y1="15"
                  x2="150"
                  y2="285"
                  stroke="#F75B00"
                  strokeWidth="0.8"
                  strokeDasharray="3 5"
                  className="opacity-30"
                />
                <line
                  x1="15"
                  y1="150"
                  x2="285"
                  y2="150"
                  stroke="#F75B00"
                  strokeWidth="0.8"
                  strokeDasharray="3 5"
                  className="opacity-30"
                />
              </svg>

              {/* Glowing Center 3D Target Sphere */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#F75B00] via-[#FF7A00] to-[#EFC320] p-1 shadow-[0_12px_36px_rgba(247,91,0,0.5),inset_0_2px_6px_rgba(255,255,255,0.7)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/40 via-transparent to-black/20" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/20 to-black/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Crosshair className="w-12 h-12 text-white stroke-[2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                    <Zap className="w-5 h-5 text-amber-200 fill-current absolute" />
                  </div>
                </div>
              </div>

              {/* Orbiting Live Badges */}
              {/* Badge 1: Top Left - Speedometer */}
              <div className="absolute top-2 left-6 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center">
                  <Gauge className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  &lt; 200ms TTFB
                </span>
              </div>

              {/* Badge 2: Top Right - Code Bracket */}
              <div className="absolute top-2 right-6 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-500 flex items-center justify-center">
                  <Code2 className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  100% Type-Safe
                </span>
              </div>

              {/* Badge 3: Bottom Right - Device */}
              <div className="absolute bottom-2 right-6 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-500 flex items-center justify-center">
                  <Smartphone className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  iOS &amp; Android
                </span>
              </div>

              {/* Badge 4: Bottom Left - Green Verified */}
              <div className="absolute bottom-2 left-6 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-[#1A2420] border border-neutral-200/90 dark:border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-[10px] text-brand-ink dark:text-white">
                  100/100 Vitals
                </span>
              </div>
            </div>

            {/* Bottom Caption Pill */}
            <div className="w-full z-20 flex items-center justify-between px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#161F1A] border border-[#F75B00]/25 shadow-sm text-[11px] font-mono">
              <span className="text-brand-ink dark:text-white font-medium">
                Precision Delivery • Mission
              </span>
              <span className="text-[#F75B00] font-bold tracking-wider">
                CLICK TO FLIP
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
