"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const ROLES = [
  "Full-Stack Developer",
  "UI / UX Designer",
  "Performance Specialist",
  "Next.js Architect",
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
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-12 overflow-hidden text-center">
        {/* Background Grid Pattern & Radial Gradient Blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Subtle Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1414280d_1px,transparent_1px),linear-gradient(to_bottom,#1414280d_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,#000_20%,transparent_75%)]" />

          {/* Left Top Violet Orb */}
          <div className="absolute top-[10%] left-[8%] w-80 h-80 rounded-full bg-violet-400/25 blur-[90px] animate-pulse-slow" />

          {/* Right Top Pink Orb */}
          <div className="absolute top-[12%] right-[8%] w-72 h-72 rounded-full bg-pink-400/20 blur-[85px] animate-pulse-slow" />

          {/* Center Glowing Soft Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(640px,92vw)] aspect-square rounded-full bg-gradient-to-tr from-brand-violet/15 via-brand-pink/15 to-brand-blue/15 blur-[100px] opacity-70" />
        </div>

        {/* Hero Content Container */}
        <div className="w-[min(920px,90vw)] mx-auto relative z-10 flex flex-col items-center">
          {/* Availability Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-ink/10 bg-brand-surface shadow-brand-sm mb-8 hover:border-brand-violet/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] ring-4 ring-[#22C55E]/20" />
            <span className="font-mono text-xs text-brand-ink2 font-medium tracking-wider [word-spacing:0.15em]">
              Available for freelance · Sylhet, BD
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl tracking-[0.06em] [word-spacing:0.35em] leading-[1.25] text-brand-ink mb-6">
            <span className="block">Tufael Ahmed</span>
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#4F46E5] bg-clip-text text-transparent">
              Zuarder
            </span>
          </h1>

          {/* Rotating Role */}
          <div className="h-9 mb-5 flex items-center justify-center">
            <p className="font-heading text-xl sm:text-2xl text-brand-ink tracking-[0.06em] [word-spacing:0.25em]">
              I&apos;m a{" "}
              <span className="bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#4F46E5] bg-clip-text text-transparent transition-all duration-300">
                {ROLES[roleIndex]}
              </span>
            </p>
          </div>

          {/* Lead Description */}
          <p className="font-sans text-base sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed tracking-[0.035em] [word-spacing:0.18em] mb-9">
            Crafting beautiful, functional, and user-centered digital experiences with modern technologies, clean UI/UX, and a relentless focus on performance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-9">
            <Link
              href="/portfolio"
              className="relative inline-flex items-center justify-center gap-2 font-heading text-sm sm:text-base px-7 py-3.5 rounded-full bg-brand-gradient text-white shadow-brand-glow hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-violet/40 transition-all duration-300 group cursor-pointer tracking-[0.08em] [word-spacing:0.2em]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1E2pbJ454dFjodVbZVz70LDtv_ih5RKtW/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-heading text-sm sm:text-base px-7 py-3.5 rounded-full bg-brand-surface border border-brand-ink/10 text-brand-ink shadow-brand-sm hover:border-brand-violet hover:text-brand-violet hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer tracking-[0.08em] [word-spacing:0.2em]"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-2.5 mb-14">
            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-2xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-1 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-2xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-1 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-11 h-11 rounded-2xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-1 transition-all duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label="Email"
              className="w-11 h-11 rounded-2xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-1 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll Cue */}
          <div className="flex flex-col items-center gap-2">
            {/* Mouse outline */}
            <div className="w-5 h-9 rounded-full border-[1.5px] border-brand-ink/20 relative flex justify-center pt-1.5">
              <span className="w-1 h-2 rounded-full bg-brand-violet animate-bounce" />
            </div>
            <span className="font-mono text-[10px] text-brand-muted2 uppercase tracking-[0.25em]">
              SCROLL
            </span>
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
