"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

interface HangingSocialItem {
  name: string;
  href: string;
  branchLeft: string; // percentage across the tree container width
  branchTop: string;  // percentage down the tree container height
  stringHeightMobile: number;
  stringHeightDesktop: number;
  swingDuration: number;
  swingAngle: number;
  hoverGlow: string;
  borderColor: string;
  badgeBg: string;
  icon: React.ReactNode;
}

const HANGING_SOCIALS: HangingSocialItem[] = [
  {
    name: "Facebook",
    href: SITE_CONFIG.socials.facebook,
    // Outer-left bough: hangs higher on mobile
    branchLeft: "26%",
    branchTop: "27%",
    stringHeightMobile: 64,
    stringHeightDesktop: 90,
    swingDuration: 4.8,
    swingAngle: 3.5,
    hoverGlow: "rgba(24, 119, 242, 0.45)",
    borderColor: "group-hover:border-[#1877F2]/70",
    badgeBg: "group-hover:bg-[#1877F2]/10",
    icon: (
      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: SITE_CONFIG.socials.instagram,
    // Inner-left upper bough: hangs lower on mobile so it never collides horizontally with Facebook
    branchLeft: "38%",
    branchTop: "20%",
    stringHeightMobile: 120,
    stringHeightDesktop: 110,
    swingDuration: 5.6,
    swingAngle: 4.0,
    hoverGlow: "rgba(225, 48, 108, 0.45)",
    borderColor: "group-hover:border-[#E1306C]/70",
    badgeBg: "group-hover:bg-[#E1306C]/10",
    icon: (
      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="15%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="100%" stopColor="#285AEB" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          fill="none"
          stroke="url(#igGradient)"
          strokeWidth="2.2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="url(#igGradient)"
          strokeWidth="2.2"
        />
        <circle cx="17.5" cy="6.5" r="1.3" fill="url(#igGradient)" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: SITE_CONFIG.socials.linkedin,
    // Inner-right upper bough: hangs lower on mobile
    branchLeft: "62%",
    branchTop: "21%",
    stringHeightMobile: 125,
    stringHeightDesktop: 115,
    swingDuration: 4.4,
    swingAngle: 3.6,
    hoverGlow: "rgba(10, 102, 194, 0.45)",
    borderColor: "group-hover:border-[#0A66C2]/70",
    badgeBg: "group-hover:bg-[#0A66C2]/10",
    icon: (
      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: SITE_CONFIG.socials.x,
    // Outer-right bough: hangs higher on mobile
    branchLeft: "74%",
    branchTop: "28%",
    stringHeightMobile: 62,
    stringHeightDesktop: 85,
    swingDuration: 5.0,
    swingAngle: 3.2,
    hoverGlow: "rgba(6, 214, 160, 0.45)",
    borderColor: "group-hover:border-[#06D6A0]/70",
    badgeBg: "group-hover:bg-[#06D6A0]/10",
    icon: (
      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-brand-ink" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function TreeHangingSocials() {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 select-none overflow-visible">
      {HANGING_SOCIALS.map((item) => (
        <div
          key={item.name}
          className="absolute pointer-events-none"
          style={{
            left: item.branchLeft,
            top: item.branchTop,
            transform: "translateX(-50%)",
          }}
        >
          {/* Pendulum motion container swinging from top center */}
          <motion.div
            style={{ transformOrigin: "top center" }}
            animate={{
              rotate: [-item.swingAngle, item.swingAngle, -item.swingAngle],
            }}
            transition={{
              duration: item.swingDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center pointer-events-none"
          >
            {/* Realistic Branch Attachment Knot & Sprouting Leaves */}
            <div className="relative flex items-center justify-center -mb-0.5">
              {/* Branch vine loop svg */}
              <svg className="w-6 h-3 text-emerald-400 pointer-events-none" viewBox="0 0 24 12" fill="none">
                {/* Branch wrap vine */}
                <path
                  d="M 2 4 C 8 1, 16 1, 22 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="stroke-emerald-500 dark:stroke-emerald-400"
                />
                {/* Mini leaf sprouting from the branch knot */}
                <path
                  d="M 12 3 C 14 0, 18 1, 19 3 C 18 5, 14 5, 12 3 Z"
                  fill="#22c55e"
                  className="drop-shadow-xs"
                />
                <path
                  d="M 12 3 C 10 0, 6 1, 5 3 C 6 5, 10 5, 12 3 Z"
                  fill="#16a34a"
                />
              </svg>

              {/* Glowing anchor bead */}
              <span className="absolute top-1.5 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.9)] border border-emerald-200" />
            </div>

            {/* Suspended thread / string ("suta") with mobile & desktop heights */}
            <div
              className="w-[1.5px] bg-gradient-to-b from-emerald-400 via-emerald-300/60 to-zinc-400 dark:to-zinc-300 relative h-[var(--str-mobile)] sm:h-[var(--str-desktop)]"
              style={{
                // @ts-expect-error CSS variable
                "--str-mobile": `${item.stringHeightMobile}px`,
                "--str-desktop": `${item.stringHeightDesktop}px`,
              }}
            >
              {/* Tiny knot in the thread */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-emerald-300/70" />
            </div>

            {/* Brass / Glass eyelet ring connecting thread to card */}
            <div className="relative flex items-center justify-center -mb-1 z-10">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full border-[1.5px] border-emerald-400/90 bg-white/40 dark:bg-[#0C2B24]/80 backdrop-blur-xs shadow-xs" />
            </div>

            {/* Clickable Hanging Card */}
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${item.name} profile`}
              title={`Visit ${item.name}`}
              whileHover={{
                scale: 1.1,
                y: -3,
                boxShadow: `0 12px 28px ${item.hoverGlow}`,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`pointer-events-auto cursor-pointer group relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-[#0C2B24]/95 backdrop-blur-xl border border-brand-ink/15 dark:border-emerald-400/25 shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 ${item.borderColor} ${item.badgeBg}`}
            >
              {/* Hole punch graphic at top center of card */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-surface dark:bg-[#061A16] border border-brand-ink/20" />

              {/* Brand Icon */}
              <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6">
                {item.icon}
              </span>

              {/* Platform Name Label */}
              <span className="font-heading text-[10px] sm:text-xs md:text-[13px] font-semibold text-brand-ink tracking-wide group-hover:text-brand-violet transition-colors select-none">
                {item.name}
              </span>

              {/* Little interactive indicator leaf dot */}
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400/80 group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            </motion.a>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
