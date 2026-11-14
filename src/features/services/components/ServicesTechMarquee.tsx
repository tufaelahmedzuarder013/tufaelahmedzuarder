"use client";

import React from "react";

const TECH_PARTNERS = [
  "Next.js 14",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
];

export function ServicesTechMarquee() {
  return (
    <section 
      className="py-6 sm:py-8 border-y border-neutral-200/60 dark:border-white/10 overflow-hidden bg-brand-surface/30 select-none relative"
      aria-label="Technologies"
    >
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* Continuous Seamless Infinite Marquee Track: Translates exactly -50% of the 2-track width */}
        <div className="flex w-max items-center animate-infinite-marquee hover:[animation-play-state:paused]">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center">
            {TECH_PARTNERS.concat(TECH_PARTNERS).map((tech, idx) => (
              <div key={`track1-${idx}`} className="flex items-center gap-10 sm:gap-16 pr-10 sm:pr-16 shrink-0">
                <span 
                  style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                  className="text-lg sm:text-xl font-bold uppercase tracking-wider text-brand-ink/40 hover:text-brand-ink transition-colors cursor-default"
                >
                  {tech}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/20" />
              </div>
            ))}
          </div>

          {/* Track 2 (Identical clone for seamless 0% -> -50% infinite loop) */}
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {TECH_PARTNERS.concat(TECH_PARTNERS).map((tech, idx) => (
              <div key={`track2-${idx}`} className="flex items-center gap-10 sm:gap-16 pr-10 sm:pr-16 shrink-0">
                <span 
                  style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                  className="text-lg sm:text-xl font-bold uppercase tracking-wider text-brand-ink/40 hover:text-brand-ink transition-colors cursor-default"
                >
                  {tech}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infiniteMarqueeAnimation {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-infinite-marquee {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: infiniteMarqueeAnimation 42s linear infinite;
        }
      `}</style>
    </section>
  );
}
