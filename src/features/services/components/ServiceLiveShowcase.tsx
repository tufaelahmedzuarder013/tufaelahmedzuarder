"use client";

import React from "react";
import {
  Sparkles,
  TrendingUp,
  Activity,
  CheckCircle2,
  Gauge,
  Zap,
  Layers,
  Palette,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Search,
} from "lucide-react";

interface ServiceLiveShowcaseProps {
  slug: string;
  title: string;
}

export function ServiceLiveShowcase({ slug, title }: ServiceLiveShowcaseProps) {
  return (
    <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center p-2 sm:p-4 select-none">
      {/* 3D Tilted Tablet Enclosure */}
      <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2D3330] via-[#1B211E] to-[#121614] border-2 border-neutral-600/70 shadow-[0_28px_60px_-15px_rgba(0,0,0,0.85)] [transform:perspective(1000px)_rotateX(10deg)_rotateY(-12deg)_rotateZ(3deg)] hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] transition-all duration-700 ease-out group-hover:shadow-[0_32px_70px_-15px_rgba(247,91,0,0.25)]">
        {/* Tablet Camera dot */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-800 border border-neutral-700 pointer-events-none" />

        {/* Inner Screen Surface with Live UI */}
        <div className="relative w-full h-full rounded-[18px] sm:rounded-[22px] bg-[#0A120F] border border-white/10 overflow-hidden p-3.5 sm:p-4.5 flex flex-col justify-between text-white font-sans text-xs">
          {/* Ambient Screen Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5FF]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F75B00]/10 rounded-full blur-2xl pointer-events-none" />

          {/* RENDER SPECIFIC SERVICE UI */}
          {slug === "web-development" && <WebDevLiveDashboard />}
          {slug === "ui-ux-design" && <UiUxLiveDashboard />}
          {slug === "performance-optimization" && <PerformanceLiveDashboard />}
          {slug !== "web-development" &&
            slug !== "ui-ux-design" &&
            slug !== "performance-optimization" && <MotionLiveDashboard title={title} />}
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 1. Web Development: AETERNA Analytics & SaaS Dashboard (Matches Image 2)
// =============================================================================
function WebDevLiveDashboard() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-heading font-extrabold text-[11px] sm:text-xs tracking-wider text-white">
            AETERNA <span className="text-white/40 font-mono">// DASHBOARD</span>
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-white/60">
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 font-semibold">
            EDGE V2
          </span>
          <span>$457.8K ARR</span>
        </div>
      </div>

      {/* Main Graph & Metrics */}
      <div className="my-auto py-2 space-y-2.5">
        {/* KPI Strip */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="block font-mono text-[9px] text-white/50">SPEED GAIN</span>
            <span className="font-heading font-bold text-xs sm:text-sm text-emerald-400">
              +300%
            </span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="block font-mono text-[9px] text-white/50">SYSTEM UPTIME</span>
            <span className="font-heading font-bold text-xs sm:text-sm text-[#00E5FF]">
              99.99%
            </span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="block font-mono text-[9px] text-white/50">ACTIVE USERS</span>
            <span className="font-heading font-bold text-xs sm:text-sm text-amber-300">
              34.8K
            </span>
          </div>
        </div>

        {/* Live Vector SVG Wave Chart */}
        <div className="relative h-20 sm:h-24 w-full rounded-xl bg-black/40 border border-white/10 p-2 overflow-hidden flex flex-col justify-end">
          <div className="absolute top-1.5 left-2 flex items-center gap-1.5 font-mono text-[9px] text-white/60">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span>Real-Time Concurrency Traffic</span>
          </div>

          <svg
            viewBox="0 0 280 60"
            className="w-full h-14 overflow-visible"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,45 Q35,15 70,30 T140,15 T210,35 T280,10 L280,60 L0,60 Z"
              fill="url(#waveGlow)"
            />
            <path
              d="M0,45 Q35,15 70,30 T140,15 T210,35 T280,10"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Responsive Architecture
        </span>
        <span className="text-emerald-400 font-bold">100% PRODUCTION READY</span>
      </div>
    </div>
  );
}

// =============================================================================
// 2. UI/UX Design: Design System & Tokens (Matches Image 3)
// =============================================================================
function UiUxLiveDashboard() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Palette className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span className="font-heading font-extrabold text-[11px] sm:text-xs tracking-wider text-white">
            DESIGN SYSTEM <span className="text-[#00E5FF] font-mono">v2.0</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F75B00]" />
        </div>
      </div>

      {/* Main Design System Showcase Cards */}
      <div className="my-auto py-2 space-y-2.5">
        {/* Typography & Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="block font-mono text-[9px] text-[#00E5FF]">TYPOGRAPHY TOKENS</span>
            <span className="font-heading font-black text-sm text-white block mt-0.5">
              Inter Font H1-H6
            </span>
            <span className="font-sans text-[10px] text-white/50 block mt-0.5">
              Fluid Responsive Scale
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <span className="block font-mono text-[9px] text-emerald-400">IMPACT METRIC</span>
            <span className="font-heading font-extrabold text-sm text-emerald-400">
              +180% Conversion
            </span>
            <span className="font-mono text-[9px] text-white/50">4.9 ★★★★★ User Rating</span>
          </div>
        </div>

        {/* Live UI Component Token Preview */}
        <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
            <span>Atomic UI Components</span>
            <span className="text-emerald-300 font-bold">120+ Components</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white font-bold text-[9px]"
            >
              Active Button
            </button>
            <span className="px-2 py-1 rounded-md bg-white/10 text-white/80 font-mono text-[9px]">
              Chip Token
            </span>
            <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[9px] ml-auto">
              WCAG AAA
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Token Count */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
        <span>Figma Tokens to Tailwind</span>
        <span className="text-cyan-400 font-bold">1:1 PIXEL PARITY</span>
      </div>
    </div>
  );
}

// =============================================================================
// 3. Performance & Core Web Vitals: 100/100 Lighthouse Report (Matches Image 4)
// =============================================================================
function PerformanceLiveDashboard() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Gauge className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-heading font-extrabold text-[11px] sm:text-xs tracking-wider text-white">
            LIGHTHOUSE <span className="text-emerald-400 font-mono">AUDIT REPORT</span>
          </span>
        </div>
        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
          PASSED ALL CHECKS
        </span>
      </div>

      {/* Circular 100 Score + Core Web Vitals Row */}
      <div className="my-auto py-2">
        <div className="grid grid-cols-12 gap-2.5 items-center">
          {/* Big Circular 100 Gauge */}
          <div className="col-span-5 p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center text-center">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1E2E28"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#06D6A0"
                  strokeWidth="3.5"
                  strokeDasharray="100, 100"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading font-black text-lg sm:text-xl text-emerald-400 leading-none">
                  100
                </span>
              </div>
            </div>
            <span className="font-heading font-bold text-[9px] text-white/80 mt-1 uppercase tracking-wider">
              PERFORMANCE
            </span>
          </div>

          {/* Core Web Vitals Metrics */}
          <div className="col-span-7 space-y-1.5 font-mono text-[10px]">
            <div className="p-1.5 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-white/60">LCP (Load)</span>
              <span className="text-emerald-400 font-bold">0.4s • Good</span>
            </div>
            <div className="p-1.5 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-white/60">INP (Response)</span>
              <span className="text-emerald-400 font-bold">18ms • Good</span>
            </div>
            <div className="p-1.5 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-white/60">Total Blocking</span>
              <span className="text-emerald-400 font-bold">0ms • Crisp</span>
            </div>
          </div>
        </div>

        {/* Micro stats */}
        <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[9px]">
          <div className="p-1.5 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-white/50">Speed Index</span>
            <span className="text-emerald-300 font-bold">99.8%</span>
          </div>
          <div className="p-1.5 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-white/50">Bounce Rate</span>
            <span className="text-emerald-300 font-bold">-65% Drop</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
        <span>Google SEO Benchmark</span>
        <span className="text-emerald-400 font-bold">100/100 ALL GREEN</span>
      </div>
    </div>
  );
}

// =============================================================================
// 4. Motion & 3D Interactive Experiences
// =============================================================================
function MotionLiveDashboard({ title }: { title: string }) {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-heading font-extrabold text-[11px] sm:text-xs tracking-wider text-white">
            KINETIC FLOWS <span className="text-amber-400 font-mono">60 FPS</span>
          </span>
        </div>
        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
          SPRING PHYSICS
        </span>
      </div>

      <div className="my-auto py-3 space-y-2.5 text-center">
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="block font-mono text-[9px] text-white/50">FRAME RATE</span>
            <span className="font-heading font-bold text-xs text-amber-300">60 FPS</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="block font-mono text-[9px] text-white/50">RENDER JANK</span>
            <span className="font-heading font-bold text-xs text-emerald-400">0ms Zero</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="block font-mono text-[9px] text-white/50">ENGAGEMENT</span>
            <span className="font-heading font-bold text-xs text-cyan-400">+240%</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-[10px] text-white/80">
          <span className="text-white/40 block mb-1">// Natural Haptic Micro-Interactions</span>
          <span className="text-[#00E5FF] font-bold">stiffness: 380, damping: 28</span>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
        <span>GPU Acceleration</span>
        <span className="text-amber-400 font-bold">SILKY 60 FPS</span>
      </div>
    </div>
  );
}
