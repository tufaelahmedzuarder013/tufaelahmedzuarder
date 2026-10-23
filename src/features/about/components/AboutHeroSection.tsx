"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Linkedin, Github, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function AboutHeroSection() {
  return (
    <section className="relative pt-[150px] pb-[150px] overflow-hidden">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-center space-y-6 xl:pr-6"
          >
            {/* Sub-header / greeting */}
            <div className="inline-flex items-center gap-2">
              <span className="text-base sm:text-lg text-brand-muted font-normal tracking-wide">
                Hey there. I&apos;m
              </span>
            </div>

            {/* Massive Bold Name */}
            <div className="space-y-1">
              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-black text-brand-ink tracking-tight uppercase leading-[0.95]">
                TUFAEL AHMED
              </h1>
              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-black text-brand-ink tracking-tight uppercase leading-[0.95]">
                ZUARDER
              </h1>
            </div>

            {/* Short Bio Description */}
            <p className="text-base text-[#101820] dark:text-[#E2E8F0] leading-relaxed max-w-md">
              Helping brands stand out with thoughtful and compelling design solutions. Helping visionary founders transform ambitious ideas into modern, lightning-fast digital experiences.
            </p>

            {/* CTA Button with #F75B00 -> #EFC320 gradient */}
            <div className="pt-2">
              <Link
                href="/contact"
                style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] font-sans font-normal text-[16px] px-[20px] py-[10px] rounded-full transition-all duration-300 shadow-lg shadow-[#F75B00]/25 hover:shadow-xl hover:shadow-[#F75B00]/40 hover:-translate-y-0.5 active:translate-y-0 btn-aventa"
              >
                <span
                  style={{ color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                  className="text-[16px] font-sans font-normal tracking-tight !text-white text-white btn-label-text btn-label-white"
                >
                  Lets Talk Brief
                </span>
                <span
                  style={{ backgroundColor: "#ffffff", color: "#101820" }}
                  className="w-6 h-6 rounded-full bg-white shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0 btn-circle-icon text-[#101820]"
                >
                  <ArrowUpRight
                    color="#101820"
                    stroke="#101820"
                    strokeWidth={2.5}
                    className="w-3.5 h-3.5 stroke-[2.5] !text-[#101820] !stroke-[#101820]"
                    style={{ color: "#101820", stroke: "#101820" }}
                  />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ================= CENTER COLUMN (PORTRAIT CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-[390px] rounded-[2.5rem] p-3 sm:p-3.5 bg-[#e9edf1] dark:bg-[#161720] border border-neutral-300/60 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">

              {/* Inner Portrait Frame */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#f3f6f9] via-[#e6ebef] to-[#d6dde4] dark:from-[#20222f] dark:via-[#191a24] dark:to-[#101118]">
                <Image
                  src="/images/Tufael (3).png"
                  alt="Tufael Ahmed Zuarder"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlaid Right Floating Social Icons */}
                <div className="absolute top-5 right-5 flex flex-col gap-2.5 z-10">
                  <a
                    href={SITE_CONFIG.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Website"
                    className="w-10 h-10 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  >
                    <Globe className="w-4 h-4" />
                  </a>

                  <a
                    href={SITE_CONFIG.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>

                {/* Overlaid Bottom Availability Pill (Matches Screenshot) */}
                <div className="absolute bottom-4 inset-x-4 flex justify-center z-10">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/60 dark:border-white/10 shadow-lg">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F75B00] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F75B00]"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 tracking-tight">
                      Available For New Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-center space-y-8 xl:pl-6"
          >
            {/* Meta label */}
            <div className="space-y-0.5">
              <span className="block text-xs sm:text-sm font-medium text-brand-muted tracking-wide">
                Firm of the Year 2025
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-[#F75B00] uppercase tracking-wider">
                Front-end Developer
              </span>
            </div>

            {/* Big Bold Headline */}
            <div className="space-y-1">
              <h2 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-black text-brand-ink tracking-tight uppercase leading-[0.95]">
                DIGITAL
              </h2>
              <h2 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-black text-brand-ink tracking-tight uppercase leading-[0.95]">
                DESIGNER
              </h2>
            </div>

            {/* Social Proof / Avatars Cluster */}
            <div className="pt-2 flex flex-col space-y-3">
              <div className="flex items-center -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-brand-bg overflow-hidden relative bg-blue-100 dark:bg-blue-900/50">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Client avatar"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-bg overflow-hidden relative bg-emerald-100 dark:bg-emerald-900/50">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Client avatar"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-bg overflow-hidden relative bg-purple-100 dark:bg-purple-900/50">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                    alt="Client avatar"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-bg overflow-hidden relative bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  99+
                </div>
              </div>

              <div>
                <span className="block font-heading text-lg sm:text-xl font-bold text-brand-ink tracking-tight">
                  5K Clients World-Wide
                </span>
                <span className="block text-xs sm:text-sm text-brand-muted">
                  Loved by founders globally
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
