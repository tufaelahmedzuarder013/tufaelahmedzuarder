"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Target, Eye } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MissionVisionCodeArtwork } from "./MissionVisionCodeArtwork";

export function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const isVision = activeTab === "vision";

  return (
    <section className="py-20 sm:py-28 relative bg-white dark:bg-[#0A0F0D] overflow-hidden border-t border-brand-ink/5 dark:border-white/5">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#EFC320]/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F75B00]/6 rounded-full blur-[140px]" />
      </div>

      <Container>
        {/* Section Header & Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <Eyebrow>{"// PHILOSOPHY & DIRECTION"}</Eyebrow>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-ink tracking-[0.03em] [word-spacing:0.18em] leading-[1.2]">
              Purpose-driven engineering.
            </h2>
          </div>

          {/* Interactive My Vision / My Mission Toggle Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-brand-soft border border-brand-ink/10 dark:border-white/10 self-start md:self-auto backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab("vision")}
              className={`relative px-5 py-2.5 rounded-full text-[16px] font-sans font-normal transition-all duration-300 flex items-center gap-2 cursor-pointer btn-aventa ${
                isVision
                  ? "!text-white text-white shadow-sm btn-white-text"
                  : "text-brand-muted hover:text-brand-ink"
              }`}
            >
              {isVision && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span
                style={isVision ? { color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 } : undefined}
                className={`relative z-10 flex items-center gap-1.5 font-sans font-normal text-[16px] ${isVision ? "!text-white text-white" : ""}`}
              >
                <Eye className={`w-4 h-4 ${isVision ? "!text-white text-white stroke-white" : ""}`} />
                <span className={isVision ? "!text-white text-white" : ""}>My Vision</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("mission")}
              className={`relative px-5 py-2.5 rounded-full text-[16px] font-sans font-normal transition-all duration-300 flex items-center gap-2 cursor-pointer btn-aventa ${
                !isVision
                  ? "!text-white text-white shadow-sm btn-white-text"
                  : "text-brand-muted hover:text-brand-ink"
              }`}
            >
              {!isVision && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span
                style={!isVision ? { color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 } : undefined}
                className={`relative z-10 flex items-center gap-1.5 font-sans font-normal text-[16px] ${!isVision ? "!text-white text-white" : ""}`}
              >
                <Target className={`w-4 h-4 ${!isVision ? "!text-white text-white stroke-white" : ""}`} />
                <span className={!isVision ? "!text-white text-white" : ""}>My Mission</span>
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Main Hero Card Container                                                  */}
        {/* ========================================================================= */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-white dark:bg-[#0E1512] border border-brand-ink/10 dark:border-white/10 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_28px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* ================= LEFT COLUMN: Statement & Core Pillars ================= */}
            <div className="lg:col-span-7 p-7 sm:p-12 lg:p-14 flex flex-col justify-between z-10">
              <div>
                {/* Clean Headline: "My Vision" / "My Mission" */}
                <div className="relative mb-6 select-none">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-heading font-normal text-3xl sm:text-5xl lg:text-6xl text-brand-ink tracking-tight leading-tight"
                    >
                      {isVision ? "My Vision" : "My Mission"}
                    </motion.h3>
                  </AnimatePresence>

                  {/* Warm Artistic Underline Sketch */}
                  <div className="w-24 sm:w-36 h-1.5 mt-2 rounded-full bg-gradient-to-r from-[#F75B00] via-[#EFC320] to-[#F75B00]" />
                </div>

                {/* Main Narrative Paragraph */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                  >
                    <p className="font-sans text-base sm:text-lg lg:text-xl text-[#101820] dark:text-[#E2E8F0] leading-relaxed mb-8 max-w-xl">
                      {isVision
                        ? "To establish an international benchmark in digital product engineering—empowering forward-thinking brands by crafting bespoke, impactful web architectures and cohesive design systems that build lasting market authority and scale effortlessly."
                        : "To bridge the gap between creative visual artistry and complex full-stack engineering—delivering sub-second speed, thoughtful UI/UX precision, and resilient codebases tailored for real-world conversion and high-velocity business growth."}
                    </p>

                    {/* 3 Value Pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                      {(isVision
                        ? [
                          {
                            title: "Global Benchmark",
                            desc: "World-class visual fidelity & UX elegance",
                          },
                          {
                            title: "Scale Without Friction",
                            desc: "Future-proof cloud & web architectures",
                          },
                          {
                            title: "Continuous Innovation",
                            desc: "Next-gen tech stack, 60fps kinetic flows",
                          },
                        ]
                        : [
                          {
                            title: "Sub-Second Speed",
                            desc: "100/100 Core Web Vitals & ultra-fast TTFB",
                          },
                          {
                            title: "Design System Rigor",
                            desc: "Pixel-perfect Figma tokens to code parity",
                          },
                          {
                            title: "Measurable Impact",
                            desc: "Conversion-led funnels that drive revenue",
                          },
                        ]
                      ).map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-brand-ink/5 dark:border-white/10 shadow-xs"
                        >
                          <div className="flex items-center gap-1.5 text-neutral-900 dark:text-[#F75B00] mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#F75B00]" />
                            <span className="font-heading font-bold text-xs text-brand-ink">
                              {item.title}
                            </span>
                          </div>
                          <p className="font-sans text-[11px] text-[#101820]/80 dark:text-neutral-300 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Metadata & Interactive Toggle Pill */}
              <div className="border-t border-brand-ink/10 dark:border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Brand Signature */}
                <div>
                  <span className="font-heading font-medium text-sm text-brand-ink block tracking-wider">
                    TUFAEL AHMED ZUARDER
                  </span>
                </div>

                {/* Interactive Toggle Pill Button with White Circle Badge */}
                <button
                  type="button"
                  onClick={() => setActiveTab(isVision ? "mission" : "vision")}
                  style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                  className="inline-flex items-center gap-2 px-[20px] py-[10px] rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] font-sans font-normal text-[16px] shadow-md hover:shadow-xl hover:shadow-[#F75B00]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer self-start sm:self-auto group btn-aventa"
                >
                  <span
                    style={{ color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                    className="!text-white text-white font-sans font-normal text-[16px] btn-label-text btn-label-white"
                  >
                    {isVision ? "SWIPE TO MY MISSION" : "SWIPE TO MY VISION"}
                  </span>
                  <span
                    style={{ backgroundColor: "#ffffff", color: "#101820" }}
                    className="w-5 h-5 rounded-full bg-white shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0 btn-circle-icon text-[#101820]"
                  >
                    <ArrowRight
                      color="#101820"
                      stroke="#101820"
                      strokeWidth={2.5}
                      className="w-3 h-3 stroke-[2.5] !text-[#101820] !stroke-[#101820]"
                      style={{ color: "#101820", stroke: "#101820" }}
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: 100% Code-Rendered Artwork ================= */}
            <div className="lg:col-span-5 relative bg-white dark:bg-[#0B1411] p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden min-h-[380px] sm:min-h-[460px] border-t lg:border-t-0 lg:border-l border-brand-ink/10 dark:border-white/10">
              {/* Ambient Radial Glow centered behind artwork */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#F75B00]/15 to-[#EFC320]/15 blur-3xl pointer-events-none" />

              {/* Pure Code 3D Artwork */}
              <MissionVisionCodeArtwork
                isVision={isVision}
                onToggle={() => setActiveTab(isVision ? "mission" : "vision")}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
