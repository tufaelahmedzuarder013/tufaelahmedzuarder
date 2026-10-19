"use client";

import React from "react";

const BRAND_LOGOS = [
  {
    name: "Logoipsum One",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 128 32">
        <path d="M12 4a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8zm0 4H4v16h8a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4z" />
        <text x="32" y="22" className="text-[17px] font-bold font-sans tracking-tight fill-current">Logoipsum</text>
      </svg>
    ),
  },
  {
    name: "Logoipsum Two",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 132 32">
        <polygon points="12,4 22,24 2,24" />
        <circle cx="12" cy="18" r="3" className="fill-brand-bg" />
        <text x="32" y="22" className="text-[17px] font-bold font-sans tracking-tight fill-current">logoipsum</text>
      </svg>
    ),
  },
  {
    name: "Logoipsum Three",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 134 32">
        <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="12" cy="16" r="4" fill="currentColor" />
        <text x="32" y="22" className="text-[17px] font-bold font-sans tracking-tight fill-current">Logoipsum</text>
      </svg>
    ),
  },
  {
    name: "Logoipsum Four",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 134 32">
        <path d="M12 4 L22 14 L12 24 L2 14 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="12" cy="14" r="3" fill="currentColor" />
        <text x="32" y="22" className="text-[17px] font-bold font-sans tracking-tight fill-current">Logoipsum</text>
      </svg>
    ),
  },
  {
    name: "Logoipsum Five",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 130 32">
        <rect x="3" y="6" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="12" cy="15" r="4" fill="currentColor" />
        <text x="32" y="22" className="text-[17px] font-bold font-sans tracking-tight fill-current">logoipsum</text>
      </svg>
    ),
  },
];

export function AboutBrandPartners() {
  return (
    <div className="w-full border-y border-neutral-200/80 dark:border-white/10 py-7 my-6 overflow-hidden bg-brand-bg/60 backdrop-blur-sm">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* Label on Left */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-xs sm:text-sm font-medium text-brand-muted2 uppercase tracking-wider block">
              Trusted by 20+
            </span>
            <span className="text-sm sm:text-base font-bold text-brand-ink tracking-tight block">
              best companies
            </span>
          </div>

          {/* Logos Row */}
          <div className="flex-1 w-full overflow-hidden flex items-center justify-between gap-8 flex-wrap sm:flex-nowrap sm:justify-around opacity-60 dark:opacity-40 hover:opacity-100 transition-opacity duration-300">
            {BRAND_LOGOS.map((brand, i) => (
              <div
                key={i}
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 flex items-center shrink-0 py-1"
                title={brand.name}
              >
                {brand.svg}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
