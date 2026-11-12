"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function ServicesProcessSection() {
  return (
    <section className="py-16 sm:py-24" aria-label="Engineering Process">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F75B00]" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-brand-muted">
                Our Process
              </span>
            </div>
            <h2 
              style={{ fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-brand-ink tracking-tight"
            >
              How I work,{" "}
              <span className="italic font-serif font-light text-[#F75B00]">
                start to finish
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-brand-muted max-w-xs font-sans font-light leading-relaxed hidden sm:block">
              Structured sprints, transparent updates, and predictable delivery from day one.
            </p>
            <div className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/15 bg-brand-surface flex items-center justify-center text-brand-ink shadow-2xs">
              <ArrowDown className="w-4 h-4 text-[#F75B00]" />
            </div>
          </div>
        </div>

        {/* Bento Grid (Matching reference image layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* STEP 01: Tall Left Column (spans 4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl bg-brand-surface p-7 sm:p-8 border border-neutral-200/80 dark:border-white/10 shadow-lg group">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#F75B00] font-semibold tracking-wider uppercase">
                Step 01
              </span>
              <h3 
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="text-2xl font-bold tracking-tight text-brand-ink"
              >
                Discovery &amp; Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                Requirement mapping, technical architecture, and database schema planning.
              </p>
            </div>

            {/* Lifestyle Image with clean badge */}
            <div className="relative mt-6 aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/50 dark:border-white/10">
              <Image
                src="/images/about/founder-video-still.jpg"
                alt="Discovery & Blueprint"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                ● Architecture Spec • Sprint 0
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Steps 02, 03 and 04 (spans 8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
            
            {/* Upper Row: Step 02 & Step 03 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* STEP 02: Design Systems */}
              <div className="rounded-3xl bg-brand-surface p-6 sm:p-7 border border-neutral-200/80 dark:border-white/10 shadow-lg flex flex-col justify-between space-y-4 group">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-[#F75B00] font-semibold tracking-wider uppercase">
                    Step 02
                  </span>
                  <h3 
                    style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                    className="text-xl font-bold tracking-tight text-brand-ink"
                  >
                    UI/UX Design Systems
                  </h3>
                  <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                    Figma prototypes, design tokens, and validated interaction flows.
                  </p>
                </div>

                {/* Minimal Visual Widget */}
                <div className="relative h-28 rounded-2xl bg-neutral-950 p-4 border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-neutral-300">Design Tokens</span>
                    <span className="text-neutral-500">→</span>
                    <span className="text-[11px] font-mono text-[#F75B00]">React Components</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* STEP 03: Production Engineering */}
              <div className="rounded-3xl bg-brand-surface p-6 sm:p-7 border border-neutral-200/80 dark:border-white/10 shadow-lg flex flex-col justify-between space-y-4 group">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-[#F75B00] font-semibold tracking-wider uppercase">
                    Step 03
                  </span>
                  <h3 
                    style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                    className="text-xl font-bold tracking-tight text-brand-ink"
                  >
                    Production Engineering
                  </h3>
                  <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                    Type-safe Next.js code, cloud APIs, and rapid sprint velocity.
                  </p>
                </div>

                {/* Clean Image / Visual */}
                <div className="relative h-28 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/50 dark:border-white/10">
                  <Image
                    src="/images/about/tablet-mockup.jpg"
                    alt="Production Engineering"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white">
                    Next.js 14 • 60 FPS
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: Step 04 (Wide Card spanning bottom) */}
            <div className="rounded-3xl bg-[#0E1217] text-white p-7 sm:p-9 border border-white/10 shadow-xl relative overflow-hidden group">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                <div className="md:col-span-7 space-y-2">
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                    Step 04
                  </span>

                  <h3 
                    style={{
                      fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
                      color: "#ffffff",
                    }}
                    className="text-2xl sm:text-3xl font-bold tracking-tight !text-white leading-snug"
                  >
                    Launch &amp; 30-Day QA Warranty
                  </h3>

                  <p 
                    style={{
                      fontFamily: "var(--font-aventa), sans-serif",
                      color: "rgba(255, 255, 255, 0.72)",
                    }}
                    className="text-xs sm:text-sm text-neutral-300 font-sans font-light leading-relaxed"
                  >
                    Core Web Vitals validation, zero downtime deployment, and 30-day post-launch support.
                  </p>
                </div>

                {/* Clean Checklist Card */}
                <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                    <span className="text-white font-semibold">Checklist</span>
                    <span className="text-emerald-400">100% Passed</span>
                  </div>

                  <div className="space-y-2 text-xs text-neutral-200 font-sans font-light">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Sub-second LCP Load Time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Cross-Browser Compatibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>30-Day Post-Launch Warranty</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
