"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { GenerativeTree } from "@/components/ui/generative-tree";
import { TreeHangingSocials } from "./TreeHangingSocials";

const ROLES = [
  "Full-Stack Developer",
  "Performance Specialist",
  "Next.js Architect",
  "UI / UX Designer",
];

const MARQUEE_ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "UI / UX Design",
  "Performance",
  "MongoDB",
  "REST APIs",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-[calc(100vh-2rem)] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-4 overflow-hidden">
        {/* Background Grid Pattern & Radial Gradient Blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Subtle Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1414280d_1px,transparent_1px),linear-gradient(to_bottom,#1414280d_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_45%,#000_20%,transparent_75%)]" />

          {/* Left Top Emerald Orb */}
          <div className="absolute top-[8%] left-[6%] w-80 h-80 rounded-full bg-[#06D6A0]/20 blur-[90px] animate-pulse-slow" />

          {/* Right Top Brunswick Green Orb */}
          <div className="absolute top-[10%] right-[6%] w-72 h-72 rounded-full bg-[#0C4137]/35 blur-[85px] animate-pulse-slow" />

          {/* Center Glowing Soft Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(640px,92vw)] aspect-square rounded-full bg-gradient-to-tr from-[#06D6A0]/18 via-[#0C4137]/25 to-[#E6FBF6]/15 blur-[100px] opacity-70" />
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (lg: and above) - 100% UNCHANGED & EXACT ORIGINAL LAYOUT */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex flex-col justify-between flex-1 w-full">
          {/* Centered Generative Tree Animation & Hanging Cards */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[660px] pointer-events-none z-0 flex items-center justify-center overflow-visible select-none">
            <GenerativeTree
              transparent={true}
              size={1.08}
              particleAmount={0}
              speed={1}
              opacity={0.96}
              className="w-full h-full relative pointer-events-none"
            />
            <TreeHangingSocials />
          </div>

          {/* Asymmetric Split: Left Block UP, Right Block DOWN */}
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex items-center relative z-10 py-6 lg:py-8">
            <div className="w-full grid grid-cols-12 gap-8 items-start">
              {/* LEFT BLOCK (Shifted UP) */}
              <div className="col-span-6 flex flex-col items-start text-left -translate-y-12 xl:-translate-y-16">
                {/* Availability Status Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-ink/10 bg-brand-surface/90 backdrop-blur-sm shadow-brand-sm mb-6 hover:border-brand-emerald/40 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#06D6A0] ring-4 ring-[#06D6A0]/25" />
                  <span className="font-mono text-xs text-brand-ink2 font-medium tracking-wider [word-spacing:0.15em]">
                    Available for freelance · Sylhet, BD
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-heading text-5xl lg:text-6xl tracking-[0.05em] [word-spacing:0.25em] leading-[1.15] text-brand-ink mb-4 sm:mb-5">
                  <span className="block">Tufael Ahmed</span>
                  <span className="block mt-1 bg-gradient-to-r from-[#06D6A0] via-[#10B981] to-[#0C4137] dark:from-[#06D6A0] dark:via-[#5EEAD4] dark:to-[#E6FBF6] bg-clip-text text-transparent">
                    Zuarder
                  </span>
                </h1>

                {/* Rotating Role */}
                <div className="h-9 flex items-center">
                  <p className="font-heading text-xl lg:text-2xl text-brand-ink tracking-[0.05em] [word-spacing:0.2em]">
                    I&apos;m a{" "}
                    <span className="bg-gradient-to-r from-[#06D6A0] via-[#10B981] to-[#0C4137] dark:from-[#06D6A0] dark:via-[#5EEAD4] dark:to-[#E6FBF6] bg-clip-text text-transparent transition-all duration-300">
                      {ROLES[roleIndex]}
                    </span>
                  </p>
                </div>
              </div>

              {/* RIGHT BLOCK (Shifted DOWN) */}
              <div className="col-span-6 flex flex-col items-end text-right translate-y-[260px] xl:translate-y-[300px] space-y-5">
                {/* Lead Description */}
                <p className="font-sans text-base lg:text-[17px] text-brand-ink/85 max-w-[460px] leading-relaxed tracking-[0.025em] text-right">
                  Crafting beautiful, functional, and user-centered digital experiences with modern technologies, clean UI/UX, and a relentless focus on performance.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 justify-end">
                  <Link
                    href="/portfolio"
                    className="relative inline-flex items-center justify-center gap-2 font-heading text-base px-7 py-3.5 rounded-full bg-brand-gradient text-white shadow-brand-glow hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#06D6A0]/40 transition-all duration-300 group cursor-pointer tracking-[0.08em] [word-spacing:0.2em]"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1E2pbJ454dFjodVbZVz70LDtv_ih5RKtW/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-heading text-base px-7 py-3.5 rounded-full bg-brand-surface border border-brand-ink/10 text-brand-ink shadow-brand-sm hover:border-[#06D6A0] hover:text-[#06D6A0] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer tracking-[0.08em] [word-spacing:0.2em] dark:bg-white/[0.06] dark:backdrop-blur-xl dark:border-white/15 dark:text-white dark:hover:bg-white/[0.12] dark:hover:border-[#06D6A0]/60 dark:shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.12)]"
                  >
                    <span>Download Resume</span>
                    <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP BOTTOM CENTER BLOCK (Social Bar & Mouse Scroll Indicator) */}
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col items-center gap-3 pb-2 pt-2">
            {/* Social Icons Pill Card */}
            <div className="inline-flex items-center gap-2.5 p-2 px-3.5 rounded-2xl bg-brand-surface/90 backdrop-blur-md border border-brand-ink/10 shadow-brand-sm dark:bg-[#0C2B24]/80 dark:backdrop-blur-2xl dark:border-emerald-400/20 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50 dark:hover:bg-white/[0.12]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50 dark:hover:bg-white/[0.12]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50 dark:hover:bg-white/[0.12]"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50 dark:hover:bg-white/[0.12]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Mouse Scroll Indicator */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-4 h-7 rounded-full border-[1.5px] border-brand-ink/25 relative flex justify-center pt-1">
                <span className="w-1 h-1.5 rounded-full bg-[#06D6A0] animate-bounce" />
              </div>
              <span className="font-mono text-[9px] text-brand-muted2 uppercase tracking-[0.25em]">
                SCROLL
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (lg:hidden) - EXACT 3-STEP USER REQUESTED LAYOUT            */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col items-center justify-between flex-1 w-full px-4 sm:px-8 py-2 z-10 gap-5">
          {/* 1ST: Availability, Headline, Role */}
          <div className="flex flex-col items-center text-center w-full pt-2">
            {/* Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-ink/10 bg-brand-surface/90 backdrop-blur-sm shadow-brand-sm mb-3 hover:border-brand-emerald/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#06D6A0] ring-4 ring-[#06D6A0]/25" />
              <span className="font-mono text-[10px] sm:text-xs text-brand-ink2 font-medium tracking-wider [word-spacing:0.12em]">
                Available for freelance · Sylhet, BD
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl tracking-[0.04em] [word-spacing:0.18em] leading-[1.18] text-brand-ink mb-2">
              <span className="block">Tufael Ahmed</span>
              <span className="block mt-1 bg-gradient-to-r from-[#06D6A0] via-[#10B981] to-[#0C4137] dark:from-[#06D6A0] dark:via-[#5EEAD4] dark:to-[#E6FBF6] bg-clip-text text-transparent">
                Zuarder
              </span>
            </h1>

            {/* Rotating Role */}
            <div className="h-7 flex items-center justify-center">
              <p className="font-heading text-sm sm:text-base text-brand-ink tracking-[0.04em] [word-spacing:0.18em]">
                I&apos;m a{" "}
                <span className="bg-gradient-to-r from-[#06D6A0] via-[#10B981] to-[#0C4137] dark:from-[#06D6A0] dark:via-[#5EEAD4] dark:to-[#E6FBF6] bg-clip-text text-transparent transition-all duration-300">
                  {ROLES[roleIndex]}
                </span>
              </p>
            </div>
          </div>

          {/* 2ND: Tree & Hanging Social Cards */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[310px] sm:h-[350px] flex items-center justify-center pointer-events-none select-none my-1">
            <GenerativeTree
              transparent={true}
              size={1.06}
              particleAmount={0}
              speed={1}
              opacity={0.96}
              className="w-full h-full relative pointer-events-none"
            />
            <TreeHangingSocials />
          </div>

          {/* 3RD: Description, Buttons, Social Icons */}
          <div className="flex flex-col items-center text-center space-y-4 w-full pb-2">
            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-brand-ink/85 max-w-[380px] leading-relaxed tracking-[0.02em]">
              Crafting beautiful, functional, and user-centered digital experiences with modern technologies, clean UI/UX, and a relentless focus on performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 justify-center">
              <Link
                href="/portfolio"
                className="relative inline-flex items-center justify-center gap-2 font-heading text-xs sm:text-sm px-5 py-3 rounded-full bg-brand-gradient text-white shadow-brand-glow hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#06D6A0]/40 transition-all duration-300 group cursor-pointer tracking-[0.06em]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://drive.google.com/file/d/1E2pbJ454dFjodVbZVz70LDtv_ih5RKtW/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-heading text-xs sm:text-sm px-5 py-3 rounded-full bg-brand-surface border border-brand-ink/10 text-brand-ink shadow-brand-sm hover:border-[#06D6A0] hover:text-[#06D6A0] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer tracking-[0.06em] dark:bg-white/[0.06] dark:backdrop-blur-xl dark:border-white/15 dark:text-white dark:hover:bg-white/[0.12] dark:hover:border-[#06D6A0]/60"
              >
                <span>Download Resume</span>
                <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Social Icons Pill */}
            <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-2xl bg-brand-surface/90 backdrop-blur-md border border-brand-ink/10 shadow-brand-sm dark:bg-[#0C2B24]/80 dark:backdrop-blur-2xl dark:border-emerald-400/20">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#06D6A0] hover:border-[#06D6A0] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#06D6A0] dark:hover:border-[#06D6A0]/50"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Strip */}
      <div className="w-full border-y border-brand-ink/10 py-4 overflow-hidden bg-brand-surface whitespace-nowrap">
        <div className="inline-flex items-center gap-12 animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className="font-heading font-semibold text-lg text-brand-muted2 flex items-center gap-12"
            >
              <span>{item}</span>
              <span className="text-xs bg-brand-gradient bg-clip-text text-transparent">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
