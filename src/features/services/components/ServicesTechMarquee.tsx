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
      className="py-6 sm:py-8 border-y border-neutral-200/60 dark:border-white/10 overflow-hidden bg-brand-surface/30"
      aria-label="Technologies"
    >
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-10 sm:gap-16 animate-marquee-slow hover:[animation-play-state:paused]">
          {/* Loop 1 */}
          {TECH_PARTNERS.map((tech, idx) => (
            <div key={`t1-${idx}`} className="flex items-center gap-10 sm:gap-16 shrink-0">
              <span 
                style={{ fontFamily: "var(--font-orlean), sans-serif" }}
                className="text-lg sm:text-xl font-bold uppercase tracking-wider text-brand-ink/40 hover:text-brand-ink transition-colors cursor-default"
              >
                {tech}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/20" />
            </div>
          ))}

          {/* Loop 2 */}
          {TECH_PARTNERS.map((tech, idx) => (
            <div key={`t2-${idx}`} className="flex items-center gap-10 sm:gap-16 shrink-0">
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
    </section>
  );
}
