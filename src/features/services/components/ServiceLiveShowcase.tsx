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
  Smartphone,
  Layers,
  Rocket,
  Users,
  Database,
  FileText,
  Award,
  TrendingUp,
  Activity,
  ShieldCheck,
  BarChart3,
  Sliders,
  ArrowUpRight,
  Eye,
  CreditCard,
} from "lucide-react";

interface ServiceLiveShowcaseProps {
  slug: string;
  title: string;
}

export function ServiceLiveShowcase({ slug, title }: ServiceLiveShowcaseProps) {
  return (
    <div className="w-full max-w-[520px] select-none bg-transparent">
      <div className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0D1815] border border-brand-ink/10 dark:border-white/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300">
        {slug === "web-development" && <WebDevLiveCodingShowcase />}
        {slug === "ui-ux-design" && <UiUxLiveCanvasShowcase />}
        {slug === "performance-optimization" && <PerformanceLiveAuditShowcase />}
        {slug === "motion-interaction" && <MotionLivePhysicsShowcase />}
        {slug === "custom-development" && <WebDevLiveCodingShowcase />}
        {slug === "mobile-app-development" && <MobileAppLiveShowcase />}
        {slug === "software-development" && <SoftwareArchLiveShowcase />}
        {slug === "saas-products-development" && <SaasProductsLiveShowcase />}
        {slug === "hr-management-system" && <HrSystemLiveShowcase />}
        {slug === "crm-system" && <CrmSystemLiveShowcase />}
        {slug === "cms-development" && <CmsLiveShowcase />}
        {slug === "branding" && <BrandingLiveShowcase />}
        {slug === "digital-marketing" && <DigitalMarketingLiveShowcase />}
        {slug === "graphic-design" && <GraphicDesignLiveShowcase />}
        {![
          "web-development",
          "ui-ux-design",
          "performance-optimization",
          "motion-interaction",
          "custom-development",
          "mobile-app-development",
          "software-development",
          "saas-products-development",
          "hr-management-system",
          "crm-system",
          "cms-development",
          "branding",
          "digital-marketing",
          "graphic-design",
        ].includes(slug) && <WebDevLiveCodingShowcase />}
      </div>
    </div>
  );
}

// =============================================================================
// 1. Full-Stack Web Development: Live Animated Coding IDE & Turbopack Compiler
// =============================================================================
function WebDevLiveCodingShowcase() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">("frontend");
  const [activeLine, setActiveLine] = useState(1);
  const [isCompiled, setIsCompiled] = useState(false);

  // Frontend snippet (React 19 / Next.js 15 App Router)
  const frontendLines = [
    {
      num: 1,
      tokens: [
        { text: "import", color: "text-[#F75B00] font-semibold" },
        { text: " { createSaaS } ", color: "text-neutral-200" },
        { text: "from", color: "text-[#F75B00] font-semibold" },
        { text: " \"@tufael/engine\";", color: "text-emerald-400" },
      ],
    },
    {
      num: 2,
      tokens: [
        { text: "// 1. Initialize Full-Stack Core Engine", color: "text-neutral-500 italic" },
      ],
    },
    {
      num: 3,
      tokens: [
        { text: "export default async function", color: "text-purple-400 font-semibold" },
        { text: " AppEngine() {", color: "text-neutral-200" },
      ],
    },
    {
      num: 4,
      tokens: [
        { text: "  const", color: "text-[#F75B00] font-semibold" },
        { text: " app = ", color: "text-neutral-200" },
        { text: "await", color: "text-[#F75B00] font-semibold" },
        { text: " createSaaS({", color: "text-cyan-400" },
      ],
    },
    {
      num: 5,
      tokens: [
        { text: "    framework:", color: "text-amber-300" },
        { text: " \"Next.js 15 App Router\",", color: "text-emerald-400" },
      ],
    },
    {
      num: 6,
      tokens: [
        { text: "    speed:", color: "text-amber-300" },
        { text: " \"Turbopack 38ms\",", color: "text-emerald-400" },
        { text: " ssr:", color: "text-amber-300" },
        { text: " true,", color: "text-[#F75B00]" },
      ],
    },
    {
      num: 7,
      tokens: [
        { text: "    edgeLatency:", color: "text-amber-300" },
        { text: " \"< 20ms Global CDN\"", color: "text-emerald-400" },
      ],
    },
    {
      num: 8,
      tokens: [{ text: "  });", color: "text-neutral-200" }],
    },
    {
      num: 9,
      tokens: [
        { text: "  return", color: "text-purple-400 font-semibold" },
        { text: " <", color: "text-neutral-400" },
        { text: "EnterpriseSaaS", color: "text-cyan-400 font-bold" },
        { text: " live={true} 🚀 />;", color: "text-neutral-300" },
      ],
    },
    {
      num: 10,
      tokens: [{ text: "}", color: "text-neutral-200" }],
    },
  ];

  // Backend API snippet (Edge Route & High-speed Cache)
  const backendLines = [
    {
      num: 1,
      tokens: [
        { text: "import", color: "text-[#F75B00] font-semibold" },
        { text: " { NextResponse } ", color: "text-neutral-200" },
        { text: "from", color: "text-[#F75B00] font-semibold" },
        { text: " \"next/server\";", color: "text-emerald-400" },
      ],
    },
    {
      num: 2,
      tokens: [
        { text: "import", color: "text-[#F75B00] font-semibold" },
        { text: " { db } ", color: "text-neutral-200" },
        { text: "from", color: "text-[#F75B00] font-semibold" },
        { text: " \"@/lib/edge-db\";", color: "text-emerald-400" },
      ],
    },
    {
      num: 3,
      tokens: [
        { text: "// Sub-20ms Edge Telemetry API", color: "text-neutral-500 italic" },
      ],
    },
    {
      num: 4,
      tokens: [
        { text: "export async function", color: "text-purple-400 font-semibold" },
        { text: " GET() {", color: "text-neutral-200" },
      ],
    },
    {
      num: 5,
      tokens: [
        { text: "  const", color: "text-[#F75B00] font-semibold" },
        { text: " metrics = ", color: "text-neutral-200" },
        { text: "await", color: "text-[#F75B00] font-semibold" },
        { text: " db.telemetry.get();", color: "text-cyan-400" },
      ],
    },
    {
      num: 6,
      tokens: [
        { text: "  return", color: "text-purple-400 font-semibold" },
        { text: " NextResponse.json({", color: "text-cyan-400" },
      ],
    },
    {
      num: 7,
      tokens: [
        { text: "    uptime:", color: "text-amber-300" },
        { text: " \"99.99%\",", color: "text-emerald-400" },
        { text: " status:", color: "text-amber-300" },
        { text: " 200,", color: "text-[#F75B00]" },
      ],
    },
    {
      num: 8,
      tokens: [
        { text: "    cache:", color: "text-amber-300" },
        { text: " \"HIT (Global Edge)\"", color: "text-emerald-400" },
      ],
    },
    {
      num: 9,
      tokens: [{ text: "  });", color: "text-neutral-200" }],
    },
    {
      num: 10,
      tokens: [{ text: "}", color: "text-neutral-200" }],
    },
  ];

  const currentLines = activeTab === "frontend" ? frontendLines : backendLines;

  // Typing animation & compiling cycle
  useEffect(() => {
    setActiveLine(1);
    setIsCompiled(false);

    const lineInterval = setInterval(() => {
      setActiveLine((prev) => {
        if (prev < currentLines.length) {
          return prev + 1;
        } else {
          setIsCompiled(true);
          return prev;
        }
      });
    }, 280);

    return () => clearInterval(lineInterval);
  }, [activeTab, currentLines.length]);

  // Automatic periodic tab switch
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setActiveTab((prev) => (prev === "frontend" ? "backend" : "frontend"));
    }, 8500);

    return () => clearInterval(cycleTimer);
  }, []);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      {/* Top Header: IDE Window Controls & Status */}
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          {/* macOS Traffic Lights */}
          <div className="flex items-center gap-1.5 mr-0.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]/50" />
          </div>
          <Code2 className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Live IDE • Next.js 15
          </span>
        </div>

        {/* Live Compilation Badge */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F75B00]/15 border border-[#F75B00]/30 text-[#F75B00] font-mono text-[10px] font-semibold">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isCompiled ? "bg-emerald-500" : "bg-[#F75B00] animate-ping"
            }`}
          />
          {isCompiled ? "Hot Reload • 38ms" : "Turbopack Compiling..."}
        </div>
      </div>

      {/* Interactive Code Editor Surface */}
      <div className="relative my-3 h-56 rounded-2xl bg-[#080D0B] border border-brand-ink/10 dark:border-white/10 p-3 sm:p-3.5 overflow-hidden flex flex-col justify-between">
        {/* IDE Tabs Strip */}
        <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("frontend")}
              className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-medium transition-all ${
                activeTab === "frontend"
                  ? "bg-white/10 text-white font-bold border border-white/10 shadow-xs"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              AppEngine.tsx
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("backend")}
              className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-medium transition-all ${
                activeTab === "backend"
                  ? "bg-white/10 text-white font-bold border border-white/10 shadow-xs"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              api/deploy.ts
            </button>
          </div>

          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider hidden sm:inline-block">
            UTF-8 • TypeScript
          </span>
        </div>

        {/* Code Content with Line Numbers & Real-Time Typing */}
        <div className="space-y-[2px] font-mono text-[10px] sm:text-[11px] leading-[17px] overflow-hidden select-text">
          {currentLines.slice(0, activeLine).map((line, idx) => {
            const isCurrentTypingLine = idx === activeLine - 1 && !isCompiled;
            return (
              <div key={line.num} className="flex items-center gap-2">
                <span className="text-neutral-500 dark:text-neutral-600 select-none text-[9px] w-3 text-right shrink-0">
                  {line.num}
                </span>
                <div className="flex items-center flex-wrap">
                  {line.tokens.map((token, tIdx) => (
                    <span key={tIdx} className={token.color}>
                      {token.text}
                    </span>
                  ))}
                  {isCurrentTypingLine && (
                    <span className="inline-block w-1.5 h-3.5 bg-[#F75B00] animate-pulse ml-0.5 align-middle" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Compilation Toast Badge */}
        <div className="pt-1.5 flex items-center justify-between border-t border-white/5 text-[9px] font-mono">
          <div className="flex items-center gap-1.5">
            {isCompiled ? (
              <span className="text-emerald-400 font-semibold flex items-center gap-1 animate-fade-in">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ✓ Compiled in 38ms (Turbopack) • Zero Errors
              </span>
            ) : (
              <span className="text-[#F75B00] flex items-center gap-1">
                <RefreshCw className="w-3 h-3 animate-spin text-[#F75B00]" />
                Streaming code changes &amp; type-checking...
              </span>
            )}
          </div>
          <span className="text-neutral-400 font-semibold">Ready: 200 OK</span>
        </div>
      </div>

      {/* Live Tooling Status Strip (Exact match with other service cards) */}
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">STACK</span>
          <span className="font-bold text-[#F75B00]">Next.js 15 + TS</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">COMPILER</span>
          <span className="font-bold text-emerald-500">Turbopack 38ms</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">QUALITY</span>
          <span className="font-bold text-cyan-500">100% Type-Safe</span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Clean Architecture &amp; Scalable SaaS</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">PRODUCTION READY</span>
      </div>
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
      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
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
      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
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
      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Hardware Accelerated Transitions</span>
        <span className="text-amber-500 font-bold">SILKY 60 FPS</span>
      </div>
    </div>
  );
}

// =============================================================================
// 5. Mobile App Development: Interactive Device Simulator (iOS / Android)
// =============================================================================
function MobileAppLiveShowcase() {
  const [screen, setScreen] = useState<"feed" | "stats" | "profile">("feed");

  useEffect(() => {
    const timer = setInterval(() => {
      setScreen((prev) => (prev === "feed" ? "stats" : prev === "stats" ? "profile" : "feed"));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            React Native • NativeWind
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          iOS &amp; Android 60fps
        </div>
      </div>

      {/* Simulated Mobile Device Screen */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 overflow-hidden flex flex-col justify-between">
        {/* Dynamic Island / Notch */}
        <div className="mx-auto w-24 h-4 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-between px-2 text-[8px] font-mono text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>9:41 AM</span>
        </div>

        {/* Dynamic Screen View */}
        <div className="my-auto space-y-2">
          {screen === "feed" && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-heading font-bold text-white">
                <span>Enterprise Dashboard</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-normal">
                  Offline Sync ✓
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-sans leading-tight">
                Smooth gesture gestures with hardware acceleration on both platforms.
              </p>
            </div>
          )}

          {screen === "stats" && (
            <div className="grid grid-cols-2 gap-2 text-white font-mono text-[10px]">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-neutral-400 block text-[9px]">FRAME RATE</span>
                <span className="text-emerald-400 font-bold text-sm">60 FPS</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-neutral-400 block text-[9px]">LOCAL DB</span>
                <span className="text-cyan-400 font-bold text-sm">SQLite</span>
              </div>
            </div>
          )}

          {screen === "profile" && (
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#F75B00]/20 to-[#EFC320]/20 border border-[#F75B00]/30 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#F75B00] flex items-center justify-center font-bold text-xs">
                  TZ
                </div>
                <div>
                  <span className="block text-xs font-bold font-heading">Biometric Auth</span>
                  <span className="block text-[9px] text-neutral-300 font-mono">FaceID / TouchID Passed</span>
                </div>
              </div>
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
          )}
        </div>

        {/* Bottom App Navigation Bar */}
        <div className="flex items-center justify-around pt-1 border-t border-white/10 font-mono text-[9px] text-neutral-400">
          <button
            type="button"
            onClick={() => setScreen("feed")}
            className={screen === "feed" ? "text-[#F75B00] font-bold" : "hover:text-white"}
          >
            ● Home
          </button>
          <button
            type="button"
            onClick={() => setScreen("stats")}
            className={screen === "stats" ? "text-[#F75B00] font-bold" : "hover:text-white"}
          >
            ● Metrics
          </button>
          <button
            type="button"
            onClick={() => setScreen("profile")}
            className={screen === "profile" ? "text-[#F75B00] font-bold" : "hover:text-white"}
          >
            ● Security
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">PLATFORM</span>
          <span className="font-bold text-[#F75B00]">iOS + Android</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">ENGINE</span>
          <span className="font-bold text-emerald-500">React Native</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">OFFLINE</span>
          <span className="font-bold text-cyan-500">Instant Sync</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Cross-Platform Native Experience</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">STORE READY</span>
      </div>
    </div>
  );
}

// =============================================================================
// 6. Enterprise Software Development: Microservices Architecture & Telemetry
// =============================================================================
function SoftwareArchLiveShowcase() {
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(Math.floor(10 + Math.random() * 6));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Distributed Systems • Cluster
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          99.99% Uptime SLA
        </div>
      </div>

      {/* Cluster Node Visualizer */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between font-mono">
        {/* Node Pipeline Diagram */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-neutral-400 block text-[9px]">API GATEWAY</span>
            <span className="text-[#F75B00] font-bold">Edge Proxy</span>
            <span className="text-[9px] text-emerald-400 block mt-1">4ms</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-neutral-400 block text-[9px]">AUTH SERVICE</span>
            <span className="text-cyan-400 font-bold">JWT / RBAC</span>
            <span className="text-[9px] text-emerald-400 block mt-1">6ms</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-neutral-400 block text-[9px]">POSTGRES DB</span>
            <span className="text-emerald-400 font-bold">Replica Pool</span>
            <span className="text-[9px] text-emerald-400 block mt-1">2ms</span>
          </div>
        </div>

        {/* Live Telemetry Log Box */}
        <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-[10px] space-y-1">
          <div className="flex items-center justify-between text-neutral-400 text-[9px]">
            <span>Kafka Streaming Pipeline</span>
            <span className="text-emerald-400">14,200 events/sec</span>
          </div>
          <div className="text-neutral-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Zero backpressure detected across all worker shards.</span>
          </div>
        </div>

        {/* Real-Time Latency Meter */}
        <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/10 text-neutral-400">
          <span>Global P99 Latency</span>
          <span className="text-emerald-400 font-bold">{latency}ms (Ultra Fast)</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">SYSTEM</span>
          <span className="font-bold text-[#F75B00]">Microservices</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">LATENCY</span>
          <span className="font-bold text-emerald-500">&lt; 15ms Avg</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">SECURITY</span>
          <span className="font-bold text-cyan-500">SOC2 Ready</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>High-Throughput Enterprise Backend</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">ZERO DOWNTIME</span>
      </div>
    </div>
  );
}

// =============================================================================
// 7. SAAS Products Development: Multi-Tenant Billing & Stripe Telemetry
// =============================================================================
function SaasProductsLiveShowcase() {
  const [mrr, setMrr] = useState(24850);

  useEffect(() => {
    const timer = setInterval(() => {
      setMrr((prev) => prev + 199);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Rocket className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            SaaS Engine • Stripe Connect
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          MRR ${mrr.toLocaleString()}
        </div>
      </div>

      {/* SaaS Dashboard Preview */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between font-mono">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-neutral-400 text-[9px] block">MONTHLY RECURRING REVENUE</span>
            <span className="text-2xl font-black text-white font-heading">${mrr.toLocaleString()}</span>
          </div>
          <span className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
            +32% This Month
          </span>
        </div>

        {/* Live Stripe Webhook Feed */}
        <div className="space-y-1.5 text-[10px]">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-neutral-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>invoice.paid • Pro Plan ($199/mo)</span>
            </span>
            <span className="text-neutral-400 text-[9px]">Just now</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-neutral-300">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#F75B00]" />
              <span>team.member_added • 5 seats</span>
            </span>
            <span className="text-neutral-400 text-[9px]">2m ago</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/10 text-neutral-400">
          <span>Tenant Isolation: Strict Row-Level</span>
          <span className="text-emerald-400 font-bold">Zero Cross-Tenant Leak</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">BILLING</span>
          <span className="font-bold text-[#F75B00]">Stripe Connect</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">DEPLOY</span>
          <span className="font-bold text-emerald-500">Multi-Tenant</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">MVP LAUNCH</span>
          <span className="font-bold text-cyan-500">3-4 Weeks</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Turnkey Recurring Revenue Engine</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">READY TO SCALE</span>
      </div>
    </div>
  );
}

// =============================================================================
// 8. HR Management System: Live Workforce & Automated Payroll Runner
// =============================================================================
function HrSystemLiveShowcase() {
  const [payrollRunning, setPayrollRunning] = useState(false);

  const runPayroll = () => {
    setPayrollRunning(true);
    setTimeout(() => setPayrollRunning(false), 2000);
  };

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            HR Portal • PeopleOps
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          124 Employees Active
        </div>
      </div>

      {/* HR Screen Simulation */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between font-mono">
        <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-neutral-400 block text-[9px]">PRESENT TODAY</span>
            <span className="text-emerald-400 font-bold text-sm">98.4%</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-neutral-400 block text-[9px]">PENDING LEAVE</span>
            <span className="text-[#F75B00] font-bold text-sm">2 Requests</span>
          </div>
        </div>

        {/* 1-Click Payroll Run Button & Result */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-neutral-300 font-semibold">Monthly Payroll Cycle</span>
            <button
              type="button"
              onClick={runPayroll}
              className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white font-bold text-[9px] hover:scale-105 transition-transform"
            >
              {payrollRunning ? "Calculating Taxes..." : "Run 1-Click Payroll ⚡"}
            </button>
          </div>
          <p className="text-[9px] text-neutral-400">
            {payrollRunning
              ? "Running tax deductions, bonus calculations & PDF payslip generation..."
              : "✓ All 124 salary slips generated & compliance approved."}
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
          <span>Automated Timesheets</span>
          <span className="text-emerald-400 font-bold">100% Tax Compliant</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">PAYROLL</span>
          <span className="font-bold text-[#F75B00]">1-Click Runs</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">TIME SAVED</span>
          <span className="font-bold text-emerald-500">-80% Overhead</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">ACCESS</span>
          <span className="font-bold text-cyan-500">Role-Based RBAC</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Modern Enterprise Workforce Portal</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% COMPLIANCE</span>
      </div>
    </div>
  );
}

// =============================================================================
// 9. CRM System: Visual Drag & Drop Deal Kanban Pipeline
// =============================================================================
function CrmSystemLiveShowcase() {
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Sales Pipeline • CRM
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Pipeline $142,000
        </div>
      </div>

      {/* Visual Deal Pipeline Stages */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 overflow-hidden flex flex-col justify-between font-mono">
        <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <span className="text-neutral-400 block">QUALIFIED</span>
            <span className="text-[#F75B00] font-bold">$24,000</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <span className="text-neutral-400 block">PROPOSAL</span>
            <span className="text-amber-400 font-bold">$64,000</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <span className="text-neutral-400 block">CLOSED WON</span>
            <span className="text-emerald-400 font-bold">$54,000 🎉</span>
          </div>
        </div>

        {/* Animated Moving Deal Card */}
        <div className="p-3 rounded-xl bg-white/10 border border-[#F75B00]/40 transition-all duration-500 space-y-1.5 shadow-lg">
          <div className="flex items-center justify-between text-[11px] font-bold text-white">
            <span>Enterprise SaaS Contract</span>
            <span className="text-[#F75B00]">$45,000</span>
          </div>
          <div className="flex items-center justify-between text-[9px] text-neutral-400">
            <span>Acme Global Corporation</span>
            <span className="text-emerald-400 font-semibold">
              {stage === 0 && "Stage: Discovery Call"}
              {stage === 1 && "Stage: Proposal Review"}
              {stage === 2 && "Stage: Contract Signed ✓"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
          <span>Auto Lead Enrichment</span>
          <span className="text-emerald-400 font-bold">Zero Lead Leakage</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">VELOCITY</span>
          <span className="font-bold text-[#F75B00]">+220% Lift</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">PIPELINE</span>
          <span className="font-bold text-emerald-500">Drag &amp; Drop</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">CADENCE</span>
          <span className="font-bold text-cyan-500">Auto Emails</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Custom Sales Flow &amp; Lead Engine</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">MAXIMUM CONVERSION</span>
      </div>
    </div>
  );
}

// =============================================================================
// 10. CMS Development: Headless Studio & Instant Edge Revalidation
// =============================================================================
function CmsLiveShowcase() {
  const [published, setPublished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPublished((prev) => !prev);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Headless Studio • Next.js ISR
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          On-Demand Revalidate
        </div>
      </div>

      {/* Headless Studio Preview */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between font-mono">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-neutral-400">SCHEMA: LandingPage.json</span>
            <span className="text-[#F75B00] font-bold">Sanity / Strapi</span>
          </div>
          <div className="text-[11px] text-white font-sans font-bold">
            {published ? "Hero: 'Transform Your Business' (Live)" : "Draft: Editing copy in studio..."}
          </div>
        </div>

        {/* Live Edge CDN Toast */}
        <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
          <span>✓ Edge cache purged in 14ms across 34 global POPs.</span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
          <span>Non-Technical Authors</span>
          <span className="text-emerald-400 font-bold">Zero Code Edits</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">STUDIO</span>
          <span className="font-bold text-[#F75B00]">Sanity / Strapi</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">ISR CACHE</span>
          <span className="font-bold text-emerald-500">14ms Edge</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">BLOCKS</span>
          <span className="font-bold text-cyan-500">100% Modular</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Empower Marketing &amp; Editorial Teams</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">INSTANT PREVIEWS</span>
      </div>
    </div>
  );
}

// =============================================================================
// 11. Branding: Live Typography Hierarchy & Palette Swatch Generator
// =============================================================================
function BrandingLiveShowcase() {
  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Brand Identity • Kit
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F75B00]/15 border border-[#F75B00]/30 text-[#F75B00] font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F75B00] animate-pulse" />
          360° Brand Manual
        </div>
      </div>

      {/* Brand Design Swatches */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between font-mono">
        {/* Color Palette Row */}
        <div>
          <span className="text-[9px] text-neutral-400 uppercase tracking-wider block mb-1.5">
            Color Psychology &amp; Tokens
          </span>
          <div className="grid grid-cols-4 gap-1.5 text-center text-[8px]">
            <div className="p-2 rounded-lg bg-[#F75B00] text-white font-bold">#F75B00</div>
            <div className="p-2 rounded-lg bg-[#EFC320] text-neutral-900 font-bold">#EFC320</div>
            <div className="p-2 rounded-lg bg-[#0F201C] text-white font-bold border border-white/20">#0F201C</div>
            <div className="p-2 rounded-lg bg-neutral-100 text-neutral-900 font-bold">#F8F9FA</div>
          </div>
        </div>

        {/* Typography Pairing Card */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <span className="text-[9px] text-neutral-400 block">TYPE SYSTEM</span>
          <h4 className="font-heading text-sm font-black text-white tracking-wide">
            Outfit Display 800 + Inter 400
          </h4>
          <p className="text-[9px] text-neutral-300 font-sans">
            Carefully curated contrast ratios meeting strict WCAG AAA guidelines.
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
          <span>Master Assets</span>
          <span className="text-emerald-400 font-bold">Vector SVG + AI + PDF</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">PALETTE</span>
          <span className="font-bold text-[#F75B00]">WCAG AAA</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">TYPE SCALE</span>
          <span className="font-bold text-emerald-500">1.25 Major 3rd</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">ASSETS</span>
          <span className="font-bold text-cyan-500">100+ Exports</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Strategic Brand Architecture</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">TIMELESS IDENTITY</span>
      </div>
    </div>
  );
}

// =============================================================================
// 12. Digital Marketing: Live Google SERP #1 Ranker & ROAS Calculator
// =============================================================================
function DigitalMarketingLiveShowcase() {
  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Growth Marketing • Analytics
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          4.8x Ad ROAS
        </div>
      </div>

      {/* SERP Rank #1 Simulator */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between font-mono">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center gap-1.5 text-[9px] text-emerald-400">
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 font-bold">Rank #1 Google</span>
            <span className="text-neutral-400">https://yourdomain.com/</span>
          </div>
          <h4 className="font-heading text-xs font-bold text-cyan-400 leading-snug">
            Fast, Reliable &amp; Scalable Web Platform Solutions
          </h4>
          <p className="text-[9px] text-neutral-300 font-sans leading-tight">
            High-converting digital acquisition funnels with schema markup and sub-second delivery.
          </p>
        </div>

        {/* Real-Time Conversion Metrics */}
        <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-neutral-400 block text-[9px]">ORGANIC CLICKS</span>
            <span className="text-emerald-400 font-bold text-sm">+350% Lift</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-neutral-400 block text-[9px]">CONV RATE</span>
            <span className="text-[#F75B00] font-bold text-sm">8.4% Top Tier</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
          <span>Targeting: Commercial Intent</span>
          <span className="text-emerald-400 font-bold">Zero Wasted Ad Spend</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">SEO</span>
          <span className="font-bold text-[#F75B00]">Top 3 Rankings</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">ROAS</span>
          <span className="font-bold text-emerald-500">4.8x Avg</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">ANALYTICS</span>
          <span className="font-bold text-cyan-500">GA4 Verified</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>Data-Driven Client Acquisition</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">PROVEN ROI</span>
      </div>
    </div>
  );
}

// =============================================================================
// 13. Graphic Design: Layered Creative Artboard & Print Resolution Spec
// =============================================================================
function GraphicDesignLiveShowcase() {
  const [resolution, setResolution] = useState<"print" | "screen">("print");

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[420px]">
      <div className="flex items-center justify-between pb-2.5 border-b border-brand-ink/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-[#F75B00]" />
          <span className="font-mono text-xs font-bold text-brand-ink dark:text-white">
            Graphic Studio • Artboard
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          300 DPI CMYK Ready
        </div>
      </div>

      {/* Creative Artboard Simulation */}
      <div className="relative my-3 h-56 rounded-2xl bg-neutral-950 border border-brand-ink/10 dark:border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between font-mono">
        <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] text-neutral-400">
          <span>Artboard: Marketing_Campaign_Master</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setResolution("print")}
              className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                resolution === "print" ? "bg-[#F75B00] text-white" : "hover:text-white"
              }`}
            >
              300 DPI (Press)
            </button>
            <button
              type="button"
              onClick={() => setResolution("screen")}
              className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                resolution === "screen" ? "bg-white/20 text-white" : "hover:text-white"
              }`}
            >
              72 DPI (Web)
            </button>
          </div>
        </div>

        {/* Visual Layer Stack */}
        <div className="space-y-1.5 text-[10px]">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-neutral-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded bg-cyan-400" />
              <span>Layer: Vector Typography &amp; Layout</span>
            </span>
            <span className="text-emerald-400 text-[9px]">Vector Sharp</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-neutral-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded bg-[#F75B00]" />
              <span>Layer: Brand Iconography Suite</span>
            </span>
            <span className="text-neutral-400 text-[9px]">CMYK Profile</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
          <span>Bleed Margin: 3mm Strict</span>
          <span className="text-emerald-400 font-bold">100% Press Ready</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">PRINT</span>
          <span className="font-bold text-[#F75B00]">300 DPI CMYK</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">DIGITAL</span>
          <span className="font-bold text-emerald-500">Pixel-Perfect</span>
        </div>
        <div className="p-1.5 rounded-lg bg-brand-soft/60 dark:bg-white/5 border border-brand-ink/5 dark:border-white/10">
          <span className="text-brand-muted block text-[9px]">SPEED</span>
          <span className="font-bold text-cyan-500">48h Delivery</span>
        </div>
      </div>

      <div
        className="pt-2 mt-2 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between text-[11px] text-brand-muted dark:text-white/60"
        style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
      >
        <span>High-Impact Visual Assets</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">PRESS &amp; WEB READY</span>
      </div>
    </div>
  );
}

