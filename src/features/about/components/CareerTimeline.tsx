import React from "react";
import { EXPERIENCE_TIMELINE } from "../data/experience.data";

export function CareerTimeline() {
  return (
    <div className="relative max-w-2xl mx-auto space-y-8">
      {EXPERIENCE_TIMELINE.map((item, idx) => (
        <div key={idx} className="relative flex gap-5 sm:gap-7 group">
          {/* Vertical Milestone Line & Dot */}
          <div className="flex flex-col items-center">
            <span className="w-3.5 h-3.5 rounded-full bg-brand-surface border-2 border-brand-violet ring-4 ring-brand-violet/15 group-hover:scale-125 transition-transform shrink-0 mt-1" />
            {idx < EXPERIENCE_TIMELINE.length - 1 && (
              <span className="w-0.5 flex-1 bg-gradient-to-b from-brand-violet/40 via-brand-pink/30 to-brand-blue/30 mt-2 min-h-[48px]" />
            )}
          </div>

          {/* Milestone Details */}
          <div className="pb-6">
            <span className="font-mono text-xs font-semibold text-brand-violet block mb-1">
              {item.period}
            </span>
            <h3 className="font-heading text-xl font-bold text-brand-ink">
              {item.title}
            </h3>
            <span className="font-mono text-xs text-brand-muted2 block mb-3">
              {item.organization}
            </span>
            <p className="text-sm text-brand-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
