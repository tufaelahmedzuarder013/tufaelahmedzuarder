import React from "react";
import { EXPERIENCE_TIMELINE } from "../data/experience.data";

export function CareerTimeline() {
  return (
    <div className="relative max-w-2xl mx-auto pl-6 sm:pl-8 space-y-12 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-brand-violet before:via-brand-pink before:to-brand-blue before:opacity-30">
      {EXPERIENCE_TIMELINE.map((item, idx) => (
        <div key={idx} className="relative group">
          {/* Milestone Circle */}
          <span className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-brand-surface border-2 border-brand-violet ring-4 ring-brand-violet/10 group-hover:scale-125 transition-transform" />

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
      ))}
    </div>
  );
}
