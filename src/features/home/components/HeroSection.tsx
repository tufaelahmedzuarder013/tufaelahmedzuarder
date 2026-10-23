"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
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

  // GSAP Kinetic Entrance Animation (mdx.so signature style)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const titles = document.querySelectorAll(".gsap-hero-title");
    const leads = document.querySelectorAll(".gsap-hero-lead");

    gsap.set(titles, {
      y: "115%",
      rotateZ: 2,
      opacity: 0,
    });

    gsap.set(leads, {
      y: 26,
      opacity: 0,
    });

    const tl = gsap.timeline({ delay: 0.18 });

    tl.to(titles, {
      y: "0%",
      rotateZ: 0,
      opacity: 1,
      duration: 1.15,
      stagger: 0.1,
      ease: "power4.out",
    }).to(
      leads,
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.7"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <section className="relative min-h-[calc(100vh-2rem)] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-4 overflow-hidden">
        {/* Background Grid Pattern & Radial Gradient Blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Subtle Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1414280d_1px,transparent_1px),linear-gradient(to_bottom,#1414280d_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_45%,#000_20%,transparent_75%)]" />

          {/* Left Top Brand Orb */}
          <div className="absolute top-[8%] left-[6%] w-80 h-80 rounded-full bg-[#F75B00]/15 blur-[90px] animate-pulse-slow" />

          {/* Right Top Gold Orb */}
          <div className="absolute top-[10%] right-[6%] w-72 h-72 rounded-full bg-[#EFC320]/15 blur-[85px] animate-pulse-slow" />

          {/* Center Glowing Soft Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(640px,92vw)] aspect-square rounded-full bg-gradient-to-tr from-[#F75B00]/12 via-[#EFC320]/10 to-transparent blur-[100px] opacity-70" />
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (lg: and above) - 100% UNCHANGED & EXACT ORIGINAL LAYOUT */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex flex-col justify-between flex-1 w-full pointer-events-none">
          {/* Generative Tree Canvas in background at z-0 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[660px] pointer-events-none z-0 flex items-center justify-center overflow-visible select-none">
            <GenerativeTree
              transparent={true}
              size={1.08}
              particleAmount={0}
              speed={1}
              opacity={0.96}
              className="w-full h-full relative pointer-events-none"
            />
          </div>

          {/* Hanging Social Cards in dedicated z-30 container so cards are 100% clickable */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[660px] pointer-events-none z-30 overflow-visible">
            <TreeHangingSocials />
          </div>

          {/* Asymmetric Split: pointer-events-none on outer flex wrapper so center click passes through to tree */}
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex items-center relative z-20 py-6 lg:py-8 pointer-events-none">
            <div className="w-full grid grid-cols-12 gap-8 items-start pointer-events-none">
              {/* LEFT BLOCK (Shifted UP) */}
              <div className="col-span-6 flex flex-col items-start text-left -translate-y-12 xl:-translate-y-16 pointer-events-auto">
                {/* Availability Status Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-ink/10 bg-brand-surface/90 backdrop-blur-sm shadow-brand-sm mb-6 hover:border-[#F75B00]/60 transition-colors pointer-events-auto">
                  <span className="w-2 h-2 rounded-full bg-[#F75B00] ring-4 ring-[#F75B00]/30" />
                  <span className="font-mono text-xs text-brand-ink2 font-medium tracking-wider [word-spacing:0.15em]">
                    Available for freelance · Sylhet, BD
                  </span>
                </div>

                {/* Main Headline with GSAP Kinetic Mask Reveal */}
                <h1 className="font-heading text-5xl lg:text-6xl tracking-[0.05em] [word-spacing:0.25em] leading-[1.15] text-brand-ink mb-4 sm:mb-5 select-none" data-no-gsap="true">
                  <span className="block overflow-hidden pb-1 -mb-1">
                    <span className="gsap-hero-title block will-change-transform">Tufael Ahmed</span>
                  </span>
                  <span className="block mt-1 overflow-hidden pb-1 -mb-1">
                    <span className="gsap-hero-title block bg-gradient-to-r from-[#F75B00] to-[#EFC320] bg-clip-text text-transparent will-change-transform">
                      Zuarder
                    </span>
                  </span>
                </h1>

                {/* Rotating Role */}
                <div className="h-9 flex items-center">
                  <p className="font-heading text-xl lg:text-2xl text-brand-ink tracking-[0.05em] [word-spacing:0.2em]">
                    I&apos;m a{" "}
                    <span className="bg-gradient-to-r from-[#F75B00] to-[#EFC320] bg-clip-text text-transparent transition-all duration-300">
                      {ROLES[roleIndex]}
                    </span>
                  </p>
                </div>
              </div>

              {/* RIGHT BLOCK (Shifted DOWN): pointer-events-none on container so empty area doesn't block, children have pointer-events-auto */}
              <div className="col-span-6 flex flex-col items-end text-right translate-y-[260px] xl:translate-y-[300px] space-y-5 pointer-events-none relative z-40">
                {/* Lead Description with GSAP Reveal */}
                <p data-no-gsap="true" className="gsap-hero-lead font-sans text-base lg:text-[17px] text-[#101820] dark:text-[#E2E8F0] font-medium max-w-[460px] leading-relaxed tracking-[0.025em] text-right pointer-events-auto">
                  Crafting beautiful, functional, and user-centered digital experiences with modern technologies, clean UI/UX, and a relentless focus on performance.
                </p>

                {/* Action Buttons: z-[80] pointer-events-auto to ensure zero obstruction */}
                <div className="flex flex-wrap items-center gap-3.5 justify-end relative z-[80] pointer-events-auto">
                  <Link
                    href="/portfolio"
                    style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                    className="relative z-[80] inline-flex items-center justify-center gap-2.5 font-sans font-normal text-[16px] px-[20px] py-[10px] rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] shadow-md hover:shadow-xl hover:shadow-[#F75B00]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer tracking-normal pointer-events-auto touch-manipulation btn-aventa"
                  >
                    <span
                      style={{ color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                      className="!text-white text-white font-sans font-normal text-[16px] btn-label-text btn-label-white"
                    >
                      View My Work
                    </span>
                    <span
                      style={{ backgroundColor: "#ffffff", color: "#101820" }}
                      className="w-6 h-6 rounded-full bg-white shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0 btn-circle-icon text-[#101820]"
                    >
                      <ArrowRight
                        color="#101820"
                        stroke="#101820"
                        strokeWidth={2.5}
                        className="w-3.5 h-3.5 stroke-[2.5] !text-[#101820] !stroke-[#101820]"
                        style={{ color: "#101820", stroke: "#101820" }}
                      />
                    </span>
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1E2pbJ454dFjodVbZVz70LDtv_ih5RKtW/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-[80] inline-flex items-center justify-center gap-2 font-sans font-normal text-[16px] px-[20px] py-[10px] rounded-full bg-brand-surface border border-brand-ink/10 text-brand-ink shadow-brand-sm hover:border-[#F75B00] hover:text-[#F75B00] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer tracking-normal dark:bg-white/[0.06] dark:backdrop-blur-xl dark:border-white/15 dark:text-white dark:hover:bg-white/[0.12] dark:hover:border-[#F75B00]/70 dark:shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.12)] pointer-events-auto touch-manipulation btn-aventa"
                  >
                    <span className="font-sans font-normal text-[16px]">Download Resume</span>
                    <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 pointer-events-none" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP BOTTOM CENTER BLOCK (Social Bar & Mouse Scroll Indicator): pointer-events-none on 1600px wrapper so it never blocks buttons above/behind it! */}
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-30 flex flex-col items-center gap-3 pb-2 pt-2 pointer-events-none">
            {/* Social Icons Pill Card: pointer-events-auto only on the actual pill */}
            <div className="inline-flex items-center gap-2.5 p-2 px-3.5 rounded-2xl bg-brand-surface/90 backdrop-blur-md border border-brand-ink/10 shadow-brand-sm dark:bg-[#1a1208]/80 dark:backdrop-blur-2xl dark:border-[#F75B00]/20 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-auto relative z-40">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 dark:hover:bg-white/[0.12] cursor-pointer pointer-events-auto"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 dark:hover:bg-white/[0.12] cursor-pointer pointer-events-auto"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 dark:hover:bg-white/[0.12] cursor-pointer pointer-events-auto"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] hover:-translate-y-0.5 transition-all duration-200 dark:bg-white/[0.06] dark:backdrop-blur-md dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 dark:hover:bg-white/[0.12] cursor-pointer pointer-events-auto"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Mouse Scroll Indicator */}
            <div className="flex flex-col items-center gap-1 pointer-events-auto">
              <div className="w-4 h-7 rounded-full border-[1.5px] border-brand-ink/25 relative flex justify-center pt-1">
                <span className="w-1 h-1.5 rounded-full bg-[#F75B00] animate-bounce" />
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
        <div className="flex lg:hidden flex-col items-center justify-center flex-1 w-full px-4 sm:px-8 py-2 z-10 gap-3 sm:gap-4 pointer-events-none">
          {/* 1ST: Availability, Headline, Role */}
          <div className="flex flex-col items-center text-center w-full pt-1 pointer-events-auto relative z-20">
            {/* Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-ink/10 bg-brand-surface/90 backdrop-blur-sm shadow-brand-sm mb-2.5 hover:border-[#F75B00]/60 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#F75B00] ring-4 ring-[#F75B00]/30" />
              <span className="font-mono text-[10px] sm:text-xs text-brand-ink2 font-medium tracking-wider [word-spacing:0.12em]">
                Available for freelance · Sylhet, BD
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl tracking-[0.04em] [word-spacing:0.18em] leading-[1.18] text-brand-ink mb-2 select-none" data-no-gsap="true">
              <span className="block overflow-hidden pb-1 -mb-1">
                <span className="gsap-hero-title block will-change-transform">Tufael Ahmed</span>
              </span>
              <span className="block mt-0.5 overflow-hidden pb-1 -mb-1">
                <span className="gsap-hero-title block bg-gradient-to-r from-[#F75B00] to-[#EFC320] bg-clip-text text-transparent will-change-transform">
                  Zuarder
                </span>
              </span>
            </h1>

            {/* Rotating Role */}
            <div className="h-7 flex items-center justify-center">
              <p className="font-heading text-sm sm:text-base text-brand-ink tracking-[0.04em] [word-spacing:0.18em]">
                I&apos;m a{" "}
                <span className="bg-gradient-to-r from-[#F75B00] to-[#EFC320] bg-clip-text text-transparent transition-all duration-300">
                  {ROLES[roleIndex]}
                </span>
              </p>
            </div>
          </div>

          {/* 2ND: Tree & Hanging Social Cards (comfortably proportioned height and subtle margin) */}
          <div className="relative w-full max-w-[340px] sm:max-w-[390px] h-[265px] sm:h-[295px] flex items-center justify-center pointer-events-none select-none -my-2 sm:-my-1 z-20 overflow-visible">
            <GenerativeTree
              transparent={true}
              size={1.08}
              particleAmount={0}
              speed={1}
              opacity={0.96}
              className="w-full h-full relative pointer-events-none"
            />
            {/* Hanging cards placed with pointer-events-auto cards */}
            <TreeHangingSocials />
          </div>

          {/* 3RD: Description, Buttons, Social Icons: relative z-30 pointer-events-none */}
          <div className="flex flex-col items-center text-center space-y-3.5 sm:space-y-4 w-full pb-1 relative z-30 pointer-events-none">
            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#101820] dark:text-[#E2E8F0] font-medium max-w-[380px] leading-relaxed tracking-[0.02em] pointer-events-auto">
              Crafting beautiful, functional, and user-centered digital experiences with modern technologies, clean UI/UX, and a relentless focus on performance.
            </p>

            {/* Action Buttons: z-[80] pointer-events-auto */}
            <div className="flex flex-wrap items-center gap-2.5 justify-center relative z-[80] pointer-events-auto">
              <Link
                href="/portfolio"
                style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                className="relative z-[80] inline-flex items-center justify-center gap-2.5 font-sans font-normal text-[16px] px-[20px] py-[10px] rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] shadow-md hover:shadow-xl hover:shadow-[#F75B00]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer tracking-normal pointer-events-auto touch-manipulation btn-aventa"
              >
                <span
                  style={{ color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                  className="!text-white text-white font-sans font-normal text-[16px] btn-label-text btn-label-white"
                >
                  View My Work
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
              </Link>

              <a
                href="https://drive.google.com/file/d/1E2pbJ454dFjodVbZVz70LDtv_ih5RKtW/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                className="relative z-[80] inline-flex items-center justify-center gap-2 font-sans font-normal text-[16px] px-[20px] py-[10px] rounded-full bg-brand-surface border border-brand-ink/10 text-brand-ink shadow-brand-sm hover:border-[#F75B00] hover:text-[#F75B00] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer tracking-normal dark:bg-white/[0.06] dark:backdrop-blur-xl dark:border-white/15 dark:text-white dark:hover:bg-white/[0.12] dark:hover:border-[#F75B00]/60 pointer-events-auto touch-manipulation btn-aventa"
              >
                <span className="font-sans font-normal text-[16px]">Download Resume</span>
                <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 pointer-events-none" />
              </a>
            </div>

            {/* Mobile Social Icons Pill */}
            <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-2xl bg-brand-surface/90 backdrop-blur-md border border-brand-ink/10 shadow-brand-sm dark:bg-[#1a1208]/80 dark:backdrop-blur-2xl dark:border-[#F75B00]/20 relative z-[80] pointer-events-auto">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 cursor-pointer pointer-events-auto"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 cursor-pointer pointer-events-auto"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 cursor-pointer pointer-events-auto"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="w-8 h-8 rounded-xl border border-brand-ink/10 bg-brand-surface shadow-xs flex items-center justify-center text-brand-muted hover:text-[#F75B00] hover:border-[#F75B00] transition-all duration-200 dark:bg-white/[0.06] dark:border-white/10 dark:text-zinc-200 dark:hover:text-[#F75B00] dark:hover:border-[#F75B00]/50 cursor-pointer pointer-events-auto"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Ultra-Smooth Marquee Strip */}
      <div className="marquee-container w-full border-y border-brand-ink/10 dark:border-white/10 py-4 sm:py-5 overflow-hidden bg-brand-surface dark:bg-[#0B0B12] whitespace-nowrap flex select-none">
        {/* Track 1 */}
        <div className="animate-marquee-slow flex shrink-0 items-center">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={`m1-${idx}`}
              style={{
                fontFamily: "var(--font-orlean), 'Orlean', sans-serif",
                fontSize: "23px",
                fontWeight: 400,
              }}
              className="hero-marquee-item font-heading font-normal text-[23px] text-brand-ink dark:text-white inline-flex items-center tracking-[0.03em]"
            >
              <span className="px-5 sm:px-7">{item}</span>
              <span className="text-xs sm:text-sm bg-gradient-to-r from-[#F75B00] to-[#EFC320] bg-clip-text text-transparent select-none">
                ✦
              </span>
            </span>
          ))}
        </div>

        {/* Track 2 (Seamless continuous loop) */}
        <div className="animate-marquee-slow flex shrink-0 items-center" aria-hidden="true">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={`m2-${idx}`}
              style={{
                fontFamily: "var(--font-orlean), 'Orlean', sans-serif",
                fontSize: "23px",
                fontWeight: 400,
              }}
              className="hero-marquee-item font-heading font-normal text-[23px] text-brand-ink dark:text-white inline-flex items-center tracking-[0.03em]"
            >
              <span className="px-5 sm:px-7">{item}</span>
              <span className="text-xs sm:text-sm bg-gradient-to-r from-[#F75B00] to-[#EFC320] bg-clip-text text-transparent select-none">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
