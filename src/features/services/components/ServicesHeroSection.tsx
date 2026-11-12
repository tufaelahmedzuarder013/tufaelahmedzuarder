"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Gauge } from "lucide-react";

export function ServicesHeroSection() {
  return (
    <section
      className="relative min-h-[82vh] sm:min-h-[88vh] pt-28 sm:pt-32 pb-20 sm:pb-24 flex items-center justify-center overflow-hidden bg-brand-bg"
      aria-label="Services Hero"
    >
      {/* ================= SCULPTED 3D CONCENTRIC SWIRL BACKDROP ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* Soft Ambient Brand Glow */}
        <div className="w-[380px] h-[380px] sm:w-[620px] sm:h-[620px] rounded-full bg-gradient-to-b from-[#F75B00]/12 via-[#EFC320]/10 to-transparent blur-[80px] dark:from-[#F75B00]/18 dark:via-[#EFC320]/12" />

        {/* 3D Layered Stepped Concentric Arcs (Masked softly at bottom like sculpted clay/glass) */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            maskImage: "radial-gradient(circle at 50% 44%, black 34%, rgba(0,0,0,0.45) 58%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 44%, black 34%, rgba(0,0,0,0.45) 58%, transparent 78%)",
          }}
        >
          {/* Outer Sculpted Swirl Ring + Orbital Dots */}
          <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[620px] md:h-[620px] rounded-full border-[22px] sm:border-[34px] border-[#F75B00]/[0.06] dark:border-[#F75B00]/[0.10] shadow-[inset_0_14px_28px_rgba(247,91,0,0.12),0_0_50px_rgba(239,195,32,0.08)] dark:shadow-[inset_0_14px_28px_rgba(247,91,0,0.22)] flex items-center justify-center">
            
            {/* Subtle luminous dots along the top rim */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90 dark:bg-white/40 shadow-xs" />
            <span className="absolute top-[6%] left-[24%] w-1.5 h-1.5 rounded-full bg-white/80 dark:bg-white/30" />
            <span className="absolute top-[6%] right-[24%] w-1.5 h-1.5 rounded-full bg-white/80 dark:bg-white/30" />
            <span className="absolute top-[22%] left-[7%] w-1 h-1 rounded-full bg-white/70 dark:bg-white/25" />
            <span className="absolute top-[22%] right-[7%] w-1 h-1 rounded-full bg-white/70 dark:bg-white/25" />

            {/* Middle Sculpted Step Ring */}
            <div
              className="w-[260px] h-[260px] sm:w-[410px] sm:h-[410px] md:w-[470px] md:h-[470px] translate-y-2 sm:translate-y-3 rounded-full flex items-center justify-center shadow-[inset_0_18px_32px_rgba(247,91,0,0.16),0_-2px_12px_rgba(255,255,255,0.75)] dark:shadow-[inset_0_18px_32px_rgba(247,91,0,0.25),0_-1px_10px_rgba(255,255,255,0.08)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,91,0,0.13) 0%, rgba(239,195,32,0.08) 45%, transparent 85%)",
              }}
            >
              {/* Inner Sculpted Step Ring */}
              <div
                className="w-[195px] h-[195px] sm:w-[310px] sm:h-[310px] md:w-[355px] md:h-[355px] translate-y-2 sm:translate-y-3 rounded-full flex items-center justify-center shadow-[inset_0_18px_30px_rgba(247,91,0,0.18),0_-2px_10px_rgba(255,255,255,0.85)] dark:shadow-[inset_0_18px_30px_rgba(247,91,0,0.28),0_-1px_8px_rgba(255,255,255,0.08)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(239,195,32,0.16) 0%, rgba(247,91,0,0.09) 48%, transparent 85%)",
                }}
              >
                {/* Core Inner Portal Ring */}
                <div
                  className="w-[135px] h-[135px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] translate-y-2 sm:translate-y-3 rounded-full bg-brand-bg/90 dark:bg-[#0B0B12]/90 shadow-[0_-4px_20px_rgba(247,91,0,0.12),inset_0_10px_24px_rgba(255,255,255,0.9)] dark:shadow-[0_-4px_20px_rgba(247,91,0,0.18),inset_0_8px_20px_rgba(255,255,255,0.04)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CENTERED HERO CONTENT ================= */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mx-auto flex flex-col items-center text-center">
        
        {/* Floating Tilted Glass Icon Card (Bottom Left) */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex absolute -bottom-10 left-4 lg:left-8 -rotate-12 z-10"
        >
          <div className="w-16 h-16 rounded-[18px] p-1.5 bg-white/80 dark:bg-white/[0.06] backdrop-blur-xl border border-white dark:border-white/15 shadow-[0_18px_40px_-10px_rgba(16,24,32,0.12)] dark:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#F75B00]/12 via-[#EFC320]/10 to-transparent border border-[#F75B00]/15 flex items-center justify-center text-[#F75B00]">
              <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
          </div>
        </motion.div>

        {/* Floating Tilted Glass Icon Card (Bottom Right) */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:flex absolute -bottom-8 right-4 lg:right-8 rotate-12 z-10"
        >
          <div className="w-16 h-16 rounded-[18px] p-1.5 bg-white/80 dark:bg-white/[0.06] backdrop-blur-xl border border-white dark:border-white/15 shadow-[0_18px_40px_-10px_rgba(16,24,32,0.12)] dark:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#EFC320]/14 via-[#F75B00]/10 to-transparent border border-[#F75B00]/15 flex items-center justify-center text-[#F75B00]">
              <Gauge className="w-6 h-6 stroke-[1.8]" />
            </div>
          </div>
        </motion.div>

        {/* Headline + Subtitle + Connected CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-5 sm:space-y-6"
        >
          {/* Uniform Clean Headline (Website Orlean Font, crisp ink color) */}
          <h1
            style={{
              fontFamily: "var(--font-orlean), 'Orlean', var(--font-space-grotesk), sans-serif",
              lineHeight: 1.32,
            }}
            className="text-3xl sm:text-5xl md:text-[54px] lg:text-[60px] font-medium tracking-tight leading-[1.32] text-brand-ink"
          >
            Design, engineering, growth
            <br />
            — all in one studio
          </h1>

          {/* Concise 2-Line Subtitle (Website Aventa Font) */}
          <p
            style={{
              fontFamily: "var(--font-aventa), 'Aventa', var(--font-plus-jakarta-sans), sans-serif",
            }}
            className="text-sm sm:text-base text-brand-muted max-w-md sm:max-w-lg mx-auto font-light leading-relaxed"
          >
            I help founders design intuitive UI/UX systems, build scalable Next.js applications, and launch products that perform.
          </p>

          {/* Signature Connected Pill + Circular Arrow Button */}
          <div className="pt-2 sm:pt-3">
            <Link
              href="/contact"
              className="group inline-flex items-center transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
                }}
                className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] !text-white text-white text-sm sm:text-[15px] font-normal shadow-[0_12px_30px_-6px_rgba(247,91,0,0.35)] group-hover:shadow-[0_16px_36px_-6px_rgba(247,91,0,0.5)] transition-all"
              >
                Get a consultation
              </span>
              <span className="-ml-2.5 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#0B0B12] border-2 border-[#F75B00] text-[#101820] dark:text-white flex items-center justify-center shadow-[0_8px_20px_rgba(247,91,0,0.18)] transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
