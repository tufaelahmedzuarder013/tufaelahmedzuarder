"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  MousePointer2,
  Palette,
  Gauge,
  Zap,
  Flame,
  Code2,
  Check,
  RefreshCw,
  Coffee,
  CheckCheck,
} from "lucide-react";

import Image from "next/image";

interface ServiceLiveShowcaseProps {
  slug: string;
  title: string;
}

export function ServiceLiveShowcase({ slug, title }: ServiceLiveShowcaseProps) {
  return (
    <div className="w-full max-w-[520px] select-none bg-transparent">
      {slug === "web-development" ? (
        <div className="relative w-full flex items-center justify-center bg-transparent">
          <WebDevLiveCodingShowcase />
        </div>
      ) : (
        /* Other cards keep their clean app containers */
        <div className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0D1815] border border-brand-ink/10 dark:border-white/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300">
          {slug === "ui-ux-design" && <UiUxLiveCanvasShowcase />}
          {slug === "performance-optimization" && <PerformanceLiveAuditShowcase />}
          {slug === "motion-interaction" && <MotionLivePhysicsShowcase />}
          {slug !== "ui-ux-design" &&
            slug !== "performance-optimization" &&
            slug !== "motion-interaction" && <WebDevLiveCodingShowcase />}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// 1. Full-Stack Web Development: Exact 3D Isometric Character with Interactive Tilt
// =============================================================================
function WebDevLiveCodingShowcase() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Subtle 3D tilt response (-8 to +8 degrees)
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] aspect-[520/420] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-transform duration-200 ease-out cursor-pointer group"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) ${
          isHovered ? "scale(1.02)" : "scale(1)"
        }`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Exact 3D Render: Low-poly developer working at table with laptop */}
      <Image
        src="/images/services/developer_3d_desk.png"
        alt="Low poly 3D developer working at desk with laptop"
        width={520}
        height={420}
        priority
        className="w-full h-full object-cover select-none pointer-events-none rounded-2xl sm:rounded-3xl"
      />

      {/* Screen Glow (Laptop Active Code Reflection) */}
      <div className="absolute left-[24%] top-[34%] w-28 h-20 bg-cyan-400/20 rounded-full blur-xl pointer-events-none animate-pulse" />

      {/* Desk Lamp Ambient Warm Light */}
      <div className="absolute left-[15%] top-[12%] w-24 h-24 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />

      {/* Coffee Steam Animation Rising from Mug */}
      <div className="absolute left-[47%] top-[32%] pointer-events-none flex flex-col items-center opacity-70">
        <span
          className="w-1.5 h-3 rounded-full bg-white/50 blur-[1px] animate-bounce"
          style={{ animationDuration: "2.4s" }}
        />
      </div>

      {/* Subtle Specular Edge Border */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 dark:border-white/15 pointer-events-none" />
    </div>
  );
}

// =============================================================================
// 2. UI / UX & Product Design: Live Figma Canvas Simulation (Cursor Moves & Polishes UI)
// =============================================================================
function UiUxLiveCanvasShowcase() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => ((prev + 1) % 4) as 0 | 1 | 2 | 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      {/* Header with Figma Style Bar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Design Canvas • Figma v24
          </span>
        </div>

        {/* Active Collaborator Badge */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F75B00]/15 border border-[#F75B00]/30 text-[#F75B00] font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F75B00] animate-pulse" />
          Tufael (Designing)
        </div>
      </div>

      {/* Interactive Figma Canvas Area */}
      <div className="relative my-3 h-56 rounded-2xl bg-brand-soft/50 dark:bg-black/50 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex items-center justify-center">
        {/* Subtle Canvas Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />

        {/* The Card Component Being Designed Live */}
        <div
          className={`relative z-10 w-full max-w-[320px] rounded-xl p-3.5 transition-all duration-500 ${
            step === 0
              ? "bg-white dark:bg-neutral-900 border-2 border-dashed border-neutral-300 dark:border-neutral-700 shadow-none"
              : step === 1
              ? "bg-white dark:bg-neutral-900 border-2 border-[#F75B00]/50 shadow-md"
              : "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-[#F75B00]/40 shadow-[0_12px_30px_-8px_rgba(247,91,0,0.25)]"
          }`}
        >
          {/* Top Bar of the Card */}
          <div className="flex items-center justify-between mb-2">
            <span
              className={`font-mono text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded transition-all ${
                step === 0
                  ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"
                  : "bg-[#F75B00]/15 text-[#F75B00]"
              }`}
            >
              {step === 0 ? "Wireframe Component" : "Design System Token"}
            </span>

            {step >= 2 && (
              <span className="font-mono text-[9px] text-emerald-500 font-bold flex items-center gap-1 animate-fade-in">
                <Check className="w-2.5 h-2.5" /> WCAG AAA
              </span>
            )}
          </div>

          {/* Heading */}
          <div className="space-y-1 mb-2.5">
            <div
              className={`font-heading font-extrabold text-sm transition-all ${
                step === 0
                  ? "text-neutral-400 dark:text-neutral-600"
                  : "text-brand-ink dark:text-white"
              }`}
            >
              {step === 0 ? "Header Placeholder..." : "Intuitive Product UI"}
            </div>
            <div
              className={`font-sans text-[11px] leading-tight transition-all ${
                step === 0 ? "text-neutral-300 dark:text-neutral-700" : "text-brand-muted"
              }`}
            >
              {step === 0
                ? "Lorem ipsum dolor sit amet consectetur."
                : "Engineered for 100% clarity and seamless micro-interactions."}
            </div>
          </div>

          {/* Call to Action Button Being Styled */}
          <div className="flex items-center justify-between pt-1 border-t border-brand-ink/5 dark:border-white/5">
            <span className="font-mono text-[10px] text-brand-muted">
              {step >= 2 ? "Radius: 12px • Inter" : "Auto-Layout: 8pt"}
            </span>

            <button
              type="button"
              className={`px-3 py-1 rounded-lg font-heading font-bold text-[10px] transition-all duration-300 shadow-xs ${
                step === 0
                  ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"
                  : "bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white scale-105"
              }`}
            >
              {step >= 2 ? "Get Started 🚀" : "Button"}
            </button>
          </div>
        </div>

        {/* Animated Live Designer Cursor */}
        <div
          className="absolute z-20 pointer-events-none transition-all duration-700 ease-out flex items-start gap-1"
          style={{
            transform:
              step === 0
                ? "translate(50px, -20px)"
                : step === 1
                ? "translate(80px, 40px)"
                : step === 2
                ? "translate(-40px, -30px)"
                : "translate(90px, 45px)",
          }}
        >
          <MousePointer2 className="w-4 h-4 text-[#F75B00] fill-[#F75B00] -rotate-12 drop-shadow-md" />
          <span className="px-1.5 py-0.5 rounded-md bg-[#F75B00] text-white font-mono text-[9px] font-bold shadow-md whitespace-nowrap">
            {step === 0 && "Wireframing"}
            {step === 1 && "Styling Tokens"}
            {step === 2 && "Typography Scale"}
            {step === 3 && "Pixel-Perfect Ready"}
          </span>
        </div>
      </div>

      {/* Live Tooling Status Strip */}
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">TOKENS</span>
          <span className="font-bold text-[#F75B00]">120+ Synced</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">GRID</span>
          <span className="font-bold text-emerald-500">8pt Strict</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">PARITY</span>
          <span className="font-bold text-cyan-500">1:1 Code Match</span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-brand-muted dark:text-white/60">
        <span>Figma to Tailwind Tokens</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% DESIGN SYSTEM</span>
      </div>
    </div>
  );
}

// =============================================================================
// 3. Performance & Core Web Vitals: Live Audit Running -> Boosts 48 to 100/100
// =============================================================================
function PerformanceLiveAuditShowcase() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [score, setScore] = useState(48);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 0) {
      setScore(48);
      timer = setTimeout(() => setPhase(1), 2400);
    } else if (phase === 1) {
      const scoreTimer = setTimeout(() => setScore(79), 700);
      const scoreTimer2 = setTimeout(() => setScore(100), 1500);
      timer = setTimeout(() => setPhase(2), 2200);
      return () => {
        clearTimeout(scoreTimer);
        clearTimeout(scoreTimer2);
        clearTimeout(timer);
      };
    } else if (phase === 2) {
      timer = setTimeout(() => setPhase(0), 3800);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-emerald-500" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Google Lighthouse Benchmark
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[10px]">
          {phase === 0 && (
            <span className="text-rose-500 font-bold bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
              Sluggish Baseline
            </span>
          )}
          {phase === 1 && (
            <span className="text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 animate-spin" />
              Optimizing...
            </span>
          )}
          {phase === 2 && (
            <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              100/100 All Green
            </span>
          )}
        </div>
      </div>

      {/* Main Gauge + Metrics Showcase */}
      <div className="my-2.5 grid grid-cols-12 gap-3 items-center">
        {/* Circular Animated Lighthouse Gauge */}
        <div className="col-span-5 p-3 rounded-2xl bg-brand-soft/60 dark:bg-black/40 border border-brand-ink/10 dark:border-white/10 flex flex-col items-center justify-center text-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                className="text-brand-ink/10 dark:text-white/10"
                strokeWidth="3.5"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={score >= 90 ? "#10B981" : score >= 70 ? "#F59E0B" : "#EF4444"}
                strokeWidth="3.5"
                strokeDasharray={`${score}, 100`}
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={`font-heading font-black text-xl sm:text-2xl leading-none transition-colors duration-300 ${
                  score >= 90
                    ? "text-emerald-500"
                    : score >= 70
                    ? "text-amber-500"
                    : "text-rose-500"
                }`}
              >
                {score}
              </span>
            </div>
          </div>
          <span className="font-mono font-bold text-[9px] text-brand-muted mt-1 uppercase tracking-wider">
            {phase === 1 ? "TUNING..." : "PERFORMANCE"}
          </span>
        </div>

        {/* Live Metrics Column */}
        <div className="col-span-7 space-y-1.5 font-mono text-[10px]">
          <div className="p-2 rounded-lg bg-brand-soft/50 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10 flex items-center justify-between">
            <span className="text-brand-muted">LCP (Load Time)</span>
            <span
              className={`font-bold transition-colors ${
                phase === 2
                  ? "text-emerald-500"
                  : phase === 1
                  ? "text-amber-500"
                  : "text-rose-500"
              }`}
            >
              {phase === 2 ? "0.4s • Fast" : phase === 1 ? "1.2s • Tuning" : "4.6s • Poor"}
            </span>
          </div>

          <div className="p-2 rounded-lg bg-brand-soft/50 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10 flex items-center justify-between">
            <span className="text-brand-muted">JS Bundle Size</span>
            <span
              className={`font-bold transition-colors ${
                phase === 2 ? "text-emerald-500" : "text-amber-500"
              }`}
            >
              {phase === 2 ? "84 KB (Gzip)" : phase === 1 ? "320 KB" : "2.8 MB (Heavy)"}
            </span>
          </div>

          <div className="p-2 rounded-lg bg-brand-soft/50 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10 flex items-center justify-between">
            <span className="text-brand-muted">CLS (Visual Shift)</span>
            <span className="text-emerald-500 font-bold">0.00 • Zero</span>
          </div>
        </div>
      </div>

      {/* Live Pipeline Action Feedback */}
      <div className="p-2.5 rounded-xl bg-neutral-950 text-white font-mono text-[10px] border border-white/10 space-y-1">
        <div className="flex items-center justify-between text-white/50 text-[9px]">
          <span>Optimization Pipeline</span>
          <span>Next.js 15 Compiler</span>
        </div>

        {phase === 0 && (
          <div className="text-rose-400 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Unminified scripts &amp; uncompressed images detected.</span>
          </div>
        )}

        {phase === 1 && (
          <div className="text-amber-300 flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 animate-spin shrink-0 text-amber-400" />
            <span>Tree-shaking, AVIF compression &amp; Edge CDN routing...</span>
          </div>
        )}

        {phase === 2 && (
          <div className="text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
            <span>Sub-second 0.4s load time achieved! 100/100 Green.</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-brand-muted dark:text-white/60">
        <span>Core Web Vitals Pass</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">TOP 1% WORLDWIDE</span>
      </div>
    </div>
  );
}

// =============================================================================
// 4. Motion & 3D Interactive Experiences: Live Kinetic 60 FPS Physics Sandbox
// =============================================================================
function MotionLivePhysicsShowcase() {
  const [pulse, setPulse] = useState(false);
  const [motionIndex, setMotionIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse(true);
      setMotionIndex((prev) => (prev + 1) % 3);
      setTimeout(() => setPulse(false), 900);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const motionStates = [
    { title: "Magnetic Hover Physics", stiffness: 380, damping: 26, scale: 1.08, rotate: -2 },
    { title: "Spring Elastic Bounce", stiffness: 240, damping: 14, scale: 1.15, rotate: 3 },
    { title: "Kinetic Scroll Momentum", stiffness: 180, damping: 20, scale: 1.05, rotate: 0 },
  ];

  const current = motionStates[motionIndex];

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-500" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Kinetic Engine • 60 FPS
          </span>
        </div>

        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          60.0 FPS • 16.6ms
        </span>
      </div>

      {/* Physics Sandbox Surface */}
      <div className="relative my-3 h-56 rounded-2xl bg-brand-soft/50 dark:bg-black/50 border border-brand-ink/10 dark:border-white/10 p-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Expanding Ripple Rings on Pulse */}
        {pulse && (
          <div className="absolute w-28 h-28 rounded-full border-2 border-[#F75B00]/40 animate-ping pointer-events-none" />
        )}

        {/* Dynamic Spring Card */}
        <div
          className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-[#F75B00] via-[#EFC320] to-[#F75B00] text-white font-heading font-extrabold text-xs sm:text-sm shadow-xl flex items-center gap-2.5 transition-all duration-500 ease-out select-none"
          style={{
            transform: pulse
              ? `scale(${current.scale}) rotate(${current.rotate}deg)`
              : "scale(1) rotate(0deg)",
          }}
        >
          <Sparkles className="w-4 h-4 text-white animate-spin" />
          <span>{current.title}</span>
        </div>

        {/* Live Parameters Overlay */}
        <div className="absolute bottom-2.5 flex items-center gap-3 font-mono text-[9px] text-brand-muted dark:text-white/50">
          <span>
            stiffness: <strong className="text-brand-ink dark:text-white">{current.stiffness}</strong>
          </span>
          <span>
            damping: <strong className="text-brand-ink dark:text-white">{current.damping}</strong>
          </span>
          <span>
            render: <strong className="text-emerald-500">0ms Jank</strong>
          </span>
        </div>
      </div>

      {/* Real-time Hardware Acceleration Badges */}
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">ENGINE</span>
          <span className="font-bold text-amber-500">GPU Native</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">FRAMES</span>
          <span className="font-bold text-emerald-500">60 FPS Locked</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">A11Y</span>
          <span className="font-bold text-[#F75B00]">Reduced Motion</span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-brand-muted dark:text-white/60">
        <span>Hardware Accelerated Transitions</span>
        <span className="text-amber-500 font-bold">SILKY 60 FPS</span>
      </div>
    </div>
  );
}
