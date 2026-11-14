"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface MethodologyStage {
  id: string;
  number: string;
  titleKey: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  layerColor: string;
  darkLayerColor: string;
  pinColor: string;
}

const STAGES: MethodologyStage[] = [
  {
    id: "stage-01",
    number: "01",
    titleKey: "TITLE 01",
    subtitle: "Discovery & System Architecture",
    description:
      "Comprehensive product discovery, user journeys, relational database schema modeling, and scalable cloud foundations engineered with zero technical debt.",
    deliverables: ["Product Discovery", "ERD Schemas", "Cloud Blueprint"],
    layerColor: "#FDE3D2",
    darkLayerColor: "rgba(253, 227, 210, 0.22)",
    pinColor: "#ECA985",
  },
  {
    id: "stage-02",
    number: "02",
    titleKey: "TITLE 02",
    subtitle: "Design Tokens & Spatial UI/UX",
    description:
      "Sub-pixel 1:1 Figma design systems, fluid typography scales, comprehensive token architecture, and accessible micro-interactions.",
    deliverables: ["Figma Design Tokens", "Component System", "UI Prototypes"],
    layerColor: "#FEC5A1",
    darkLayerColor: "rgba(254, 197, 161, 0.35)",
    pinColor: "#F99F6A",
  },
  {
    id: "stage-03",
    number: "03",
    titleKey: "TITLE 03",
    subtitle: "Full-Stack Core Engineering",
    description:
      "Production web applications engineered with Next.js 15, TypeScript, React Server Components, modular REST/GraphQL APIs, and type-safe server actions.",
    deliverables: ["Next.js 15 & TS", "Server Components", "Modular APIs"],
    layerColor: "#FA9B5E",
    darkLayerColor: "rgba(250, 155, 94, 0.52)",
    pinColor: "#FA842A",
  },
  {
    id: "stage-04",
    number: "04",
    titleKey: "TITLE 04",
    subtitle: "Speed & Core Web Vitals Tuning",
    description:
      "Fine-tuning edge caching strategies, asset pipeline compression, critical CSS rendering, and guaranteed 100/100 Lighthouse performance metrics.",
    deliverables: ["100/100 Web Vitals", "Edge Caching", "Sub-Second TTI"],
    layerColor: "#F87826",
    darkLayerColor: "rgba(248, 120, 38, 0.72)",
    pinColor: "#F86006",
  },
  {
    id: "stage-05",
    number: "05",
    titleKey: "TITLE 05",
    subtitle: "Automated CI/CD & Cloud Launch",
    description:
      "Scalable multi-region cloud deployment, continuous integration (CI/CD) pipelines, automated staging rollouts, and thorough production handover.",
    deliverables: ["Multi-Region Cloud", "Automated CI/CD", "Live Monitoring"],
    layerColor: "#F75B00",
    darkLayerColor: "#F75B00",
    pinColor: "#F75B00",
  },
];

export function ServicesMethodologySection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="py-20 sm:py-28 lg:py-32 bg-brand-bg relative overflow-hidden transition-colors duration-500 border-t border-neutral-200/60 dark:border-white/5"
      aria-label="5-Tier Engineering Architecture Infographic"
    >
      {/* Ambient background soft glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#F75B00]/8 via-[#FA9B5E]/5 to-transparent pointer-events-none opacity-40 blur-3xl" />

      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-7 h-[1.5px] bg-[#F75B00]/70 rounded-full" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-muted">
              Engineering Architecture
            </span>
            <span className="w-7 h-[1.5px] bg-[#F75B00]/70 rounded-full" />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-orlean), 'Orlean', var(--font-space-grotesk), sans-serif",
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-ink"
          >
            5-tier development lifecycle<span className="text-[#F75B00]">.</span>
          </h2>
          
          <p
            style={{
              fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
              fontSize: "17px",
              lineHeight: "25px",
            }}
            className="!text-[17px] !leading-[25px] text-brand-muted font-light max-w-lg mx-auto"
          >
            A battle-tested methodology engineered for velocity, zero technical debt, and maximum scalability.
          </p>
        </motion.div>

        {/* ================= CLEAN 2-COLUMN INFOGRAPHIC LAYOUT (Zero Overlaps, 100% Breathable) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: CONCENTRIC SWIRL INFOGRAPHIC GRAPHIC (Unclipped, Crisp, Dynamic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative select-none"
          >
            <div className="w-full max-w-[500px] aspect-[650/720] relative">
              <svg
                viewBox="0 0 650 720"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible drop-shadow-md"
              >
                <defs>
                  {/* Subtle layer elevation shadow */}
                  <filter id="swirl-layer-shadow" x="-8%" y="-8%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.09" floodColor="#000000" />
                  </filter>
                  
                  {/* Brand glow for central core (05) */}
                  <filter id="core-glow-filter" x="-25%" y="-25%" width="150%" height="150%">
                    <feDropShadow dx="0" dy="5" stdDeviation="14" floodOpacity="0.4" floodColor="#F75B00" />
                  </filter>
                </defs>

                {/* ================= LAYER 01 (Outermost: Soft Warm Peach) ================= */}
                <path
                  d="M 320 670
                     A 270 270 0 0 1 50 400
                     C 50 230 140 95 240 40
                     C 250 34 262 42 258 54
                     C 248 85 210 160 180 235
                     C 150 310 135 360 135 400
                     A 215 215 0 0 0 320 615
                     A 55 55 0 0 1 320 670 Z"
                  fill="#FDE3D2"
                  stroke="#ffffff"
                  strokeWidth={hoveredIdx === 0 ? "3" : "2"}
                  filter="url(#swirl-layer-shadow)"
                  className="cursor-pointer transition-all duration-300 dark:fill-[#FDE3D2]/25"
                  style={{
                    opacity: hoveredIdx === null || hoveredIdx === 0 ? 1 : 0.75,
                    transform: hoveredIdx === 0 ? "scale(1.02)" : "scale(1)",
                    transformOrigin: "320px 400px",
                  }}
                  onMouseEnter={() => setHoveredIdx(0)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                {/* ================= LAYER 02 ================= */}
                <path
                  d="M 320 615
                     A 215 215 0 0 1 105 400
                     C 105 260 180 135 345 80
                     C 356 76 366 86 362 98
                     C 348 135 305 195 275 265
                     C 245 330 230 370 230 400
                     A 160 160 0 0 0 320 560
                     A 55 55 0 0 1 320 615 Z"
                  fill="#FEC5A1"
                  stroke="#ffffff"
                  strokeWidth={hoveredIdx === 1 ? "3" : "2"}
                  filter="url(#swirl-layer-shadow)"
                  className="cursor-pointer transition-all duration-300 dark:fill-[#FEC5A1]/40"
                  style={{
                    opacity: hoveredIdx === null || hoveredIdx === 1 ? 1 : 0.75,
                    transform: hoveredIdx === 1 ? "scale(1.022)" : "scale(1)",
                    transformOrigin: "320px 400px",
                  }}
                  onMouseEnter={() => setHoveredIdx(1)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                {/* ================= LAYER 03 ================= */}
                <path
                  d="M 320 560
                     A 160 160 0 0 1 160 400
                     C 160 290 220 190 410 165
                     C 421 163 430 173 424 184
                     C 405 220 360 280 330 335
                     C 305 375 295 395 295 400
                     A 105 105 0 0 0 320 505
                     A 55 55 0 0 1 320 560 Z"
                  fill="#FA9B5E"
                  stroke="#ffffff"
                  strokeWidth={hoveredIdx === 2 ? "3" : "2"}
                  filter="url(#swirl-layer-shadow)"
                  className="cursor-pointer transition-all duration-300 dark:fill-[#FA9B5E]/60"
                  style={{
                    opacity: hoveredIdx === null || hoveredIdx === 2 ? 1 : 0.75,
                    transform: hoveredIdx === 2 ? "scale(1.025)" : "scale(1)",
                    transformOrigin: "320px 400px",
                  }}
                  onMouseEnter={() => setHoveredIdx(2)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                {/* ================= LAYER 04 ================= */}
                <path
                  d="M 320 505
                     A 105 105 0 0 1 215 400
                     C 215 315 270 260 470 275
                     C 481 276 488 287 482 297
                     C 465 325 420 355 380 375
                     C 355 388 345 395 345 400
                     A 50 50 0 0 0 320 450
                     A 55 55 0 0 1 320 505 Z"
                  fill="#F87826"
                  stroke="#ffffff"
                  strokeWidth={hoveredIdx === 3 ? "3" : "2"}
                  filter="url(#swirl-layer-shadow)"
                  className="cursor-pointer transition-all duration-300 dark:fill-[#F87826]/80"
                  style={{
                    opacity: hoveredIdx === null || hoveredIdx === 3 ? 1 : 0.75,
                    transform: hoveredIdx === 3 ? "scale(1.03)" : "scale(1)",
                    transformOrigin: "320px 400px",
                  }}
                  onMouseEnter={() => setHoveredIdx(3)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                {/* ================= LAYER 05 (Center Core: Deep Brand Orange) ================= */}
                <path
                  d="M 320 450
                     A 50 50 0 0 1 270 400
                     C 270 360 300 345 340 345
                     C 385 345 440 350 490 358
                     C 500 360 500 368 490 370
                     C 430 380 380 395 355 410
                     A 50 50 0 0 1 320 450 Z"
                  fill="#F75B00"
                  stroke="#ffffff"
                  strokeWidth={hoveredIdx === 4 ? "3.5" : "2.5"}
                  filter="url(#core-glow-filter)"
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    transform: hoveredIdx === 4 ? "scale(1.035)" : "scale(1)",
                    transformOrigin: "320px 400px",
                  }}
                  onMouseEnter={() => setHoveredIdx(4)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                {/* ================= NUMBERS ON VERTICAL AXIS (01 - 05 in White) ================= */}
                <g
                  fill="#ffffff"
                  style={{
                    fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    textAnchor: "middle",
                    pointerEvents: "none",
                  }}
                >
                  <text x="320" y="650" fontSize="18" className="drop-shadow-sm">01</text>
                  <text x="320" y="595" fontSize="18" className="drop-shadow-sm">02</text>
                  <text x="320" y="540" fontSize="18" className="drop-shadow-sm">03</text>
                  <text x="320" y="485" fontSize="18" className="drop-shadow-sm">04</text>
                  <text x="320" y="405" fontSize="20" className="drop-shadow-md">05</text>
                </g>

                {/* ================= LEADER LINES (Connecting Layer Tips to Circular Pins on Right Edge) ================= */}
                {/* Line 01 */}
                <path
                  d="M 240 40 C 350 30, 480 35, 610 45"
                  stroke="#ECA985"
                  strokeWidth={hoveredIdx === 0 ? "3.5" : "2.5"}
                  strokeLinecap="round"
                  strokeDasharray={hoveredIdx === 0 ? "none" : "5 5"}
                  className="transition-all duration-300"
                />
                <circle
                  cx="610"
                  cy="45"
                  r={hoveredIdx === 0 ? "7.5" : "6"}
                  stroke="#ECA985"
                  strokeWidth={hoveredIdx === 0 ? "3.5" : "2.5"}
                  fill="#ffffff"
                  className="transition-all duration-300"
                />

                {/* Line 02 */}
                <path
                  d="M 345 80 C 420 80, 500 130, 610 160"
                  stroke="#F99F6A"
                  strokeWidth={hoveredIdx === 1 ? "3.5" : "2.5"}
                  strokeLinecap="round"
                  strokeDasharray={hoveredIdx === 1 ? "none" : "5 5"}
                  className="transition-all duration-300"
                />
                <circle
                  cx="610"
                  cy="160"
                  r={hoveredIdx === 1 ? "7.5" : "6"}
                  stroke="#F99F6A"
                  strokeWidth={hoveredIdx === 1 ? "3.5" : "2.5"}
                  fill="#ffffff"
                  className="transition-all duration-300"
                />

                {/* Line 03 */}
                <path
                  d="M 410 165 C 470 170, 520 240, 610 280"
                  stroke="#FA842A"
                  strokeWidth={hoveredIdx === 2 ? "3.5" : "2.5"}
                  strokeLinecap="round"
                  strokeDasharray={hoveredIdx === 2 ? "none" : "5 5"}
                  className="transition-all duration-300"
                />
                <circle
                  cx="610"
                  cy="280"
                  r={hoveredIdx === 2 ? "7.5" : "6"}
                  stroke="#FA842A"
                  strokeWidth={hoveredIdx === 2 ? "3.5" : "2.5"}
                  fill="#ffffff"
                  className="transition-all duration-300"
                />

                {/* Line 04 */}
                <path
                  d="M 470 275 C 510 285, 540 360, 610 410"
                  stroke="#F86006"
                  strokeWidth={hoveredIdx === 3 ? "3.5" : "2.5"}
                  strokeLinecap="round"
                  strokeDasharray={hoveredIdx === 3 ? "none" : "5 5"}
                  className="transition-all duration-300"
                />
                <circle
                  cx="610"
                  cy="410"
                  r={hoveredIdx === 3 ? "7.5" : "6"}
                  stroke="#F86006"
                  strokeWidth={hoveredIdx === 3 ? "3.5" : "2.5"}
                  fill="#ffffff"
                  className="transition-all duration-300"
                />

                {/* Line 05 */}
                <path
                  d="M 490 360 C 530 365, 560 480, 610 540"
                  stroke="#F75B00"
                  strokeWidth={hoveredIdx === 4 ? "3.5" : "2.5"}
                  strokeLinecap="round"
                  strokeDasharray={hoveredIdx === 4 ? "none" : "5 5"}
                  className="transition-all duration-300"
                />
                <circle
                  cx="610"
                  cy="540"
                  r={hoveredIdx === 4 ? "7.5" : "6"}
                  stroke="#F75B00"
                  strokeWidth={hoveredIdx === 4 ? "3.5" : "2.5"}
                  fill="#ffffff"
                  className="transition-all duration-300"
                />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 5 SPACIOUS, BREATHABLE STAGE ROWS (Zero Collisions, 17px Aventa) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            {STAGES.map((stage, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={stage.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? "bg-white dark:bg-white/[0.04] shadow-md shadow-[#F75B00]/8 translate-x-1 sm:translate-x-2"
                      : "hover:bg-white/60 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Pin Node indicator matching image + vertical connecting stem */}
                  <div className="shrink-0 flex flex-col items-center pt-1">
                    <span
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full border-2 bg-white dark:bg-neutral-900 transition-all duration-300 ${
                        isHovered ? "scale-125 ring-4 ring-[#F75B00]/20" : ""
                      }`}
                      style={{ borderColor: stage.pinColor }}
                    />
                    {idx < STAGES.length - 1 && (
                      <span className="w-[1.5px] h-14 sm:h-16 bg-neutral-200 dark:bg-white/10 mt-2" />
                    )}
                  </div>

                  {/* Stage Content */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    
                    {/* Header Row: TITLE 01 + Subtitle */}
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3
                        style={{
                          fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
                        }}
                        className={`text-lg sm:text-xl font-bold tracking-[0.05em] uppercase transition-colors duration-200 ${
                          isHovered
                            ? "text-[#F75B00]"
                            : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {stage.titleKey}
                      </h3>

                      <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#F75B00]">
                        // {stage.subtitle}
                      </span>
                    </div>

                    {/* Description Paragraph (Strictly 17px Aventa per user instruction) */}
                    <p
                      style={{
                        fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
                        fontSize: "17px",
                        lineHeight: "25px",
                      }}
                      className="!text-[17px] !leading-[25px] !text-neutral-600 dark:!text-neutral-300 font-light"
                    >
                      {stage.description}
                    </p>

                    {/* Deliverables Tags */}
                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      {stage.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-md transition-colors duration-200 ${
                            isHovered
                              ? "bg-[#F75B00]/10 text-[#F75B00] dark:bg-[#F75B00]/20 dark:text-[#FFA048]"
                              : "bg-neutral-100 dark:bg-white/[0.04] text-neutral-500 dark:text-neutral-400"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 stroke-[2] shrink-0" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
