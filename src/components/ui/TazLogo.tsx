"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TazLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showDot?: boolean;
}

export function TazLogo({
  className,
  size = "md",
  showDot = false,
}: TazLogoProps) {
  // Size mapping for height/width
  const sizeClasses = {
    sm: "h-5 w-auto",
    md: "h-6 sm:h-7 w-auto",
    lg: "h-8 sm:h-9 w-auto",
    xl: "h-10 sm:h-12 w-auto",
  };

  return (
    <div className={cn("inline-flex items-center gap-2 group select-none", className)}>
      <svg
        viewBox="0 0 116 32"
        fill="currentColor"
        className={cn(
          sizeClasses[size],
          "transition-transform duration-300 group-hover:scale-105"
        )}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="T A Z Logo"
        role="img"
      >
        {/* ======================================================== */}
        {/* GLYPH 1: T                                               */}
        {/* Geometric aesthetic matching 'M' from MDX:               */}
        {/* Smooth rounded outer top corners (r=3.5) with bold stem  */}
        {/* ======================================================== */}
        <g id="letter-T">
          {/* Top Bar with rounded top corners */}
          <path
            d="M 3.5,3.5 
               C 1.5,3.5 0,5 0,7 
               L 0,9.5 
               L 28,9.5 
               L 28,7 
               C 28,5 26.5,3.5 24.5,3.5 
               Z"
          />
          {/* Center Vertical Stem */}
          <rect x="11" y="9.5" width="6" height="19" rx="0.5" />
        </g>

        {/* ======================================================== */}
        {/* GLYPH 2: A                                               */}
        {/* Geometric arch aesthetic matching 'D'/'M' from MDX:      */}
        {/* Rounded top shoulders, solid vertical legs, crossbar     */}
        {/* ======================================================== */}
        <g id="letter-A">
          {/* Outer Shell with rounded top shoulders */}
          <path
            d="M 47.5,3.5 
               C 45.5,3.5 44,5 44,7 
               L 44,28.5 
               L 50,28.5 
               L 50,21 
               L 66,21 
               L 66,28.5 
               L 72,28.5 
               L 72,7 
               C 72,5 70.5,3.5 68.5,3.5 
               Z
               M 50,9.5 
               L 66,9.5 
               L 66,15.5 
               L 50,15.5 
               Z"
            fillRule="evenodd"
          />
        </g>

        {/* ======================================================== */}
        {/* GLYPH 3: Z                                               */}
        {/* Angular dynamic aesthetic matching 'X' from MDX:         */}
        {/* Bold horizontal top/bottom bars with high-energy diagonal */}
        {/* ======================================================== */}
        <g id="letter-Z">
          <path
            d="M 88,3.5 
               L 116,3.5 
               L 116,9.5 
               L 97.5,22.5 
               L 116,22.5 
               L 116,28.5 
               L 88,28.5 
               L 88,22.5 
               L 106.5,9.5 
               L 88,9.5 
               Z"
          />
        </g>
      </svg>

      {showDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#F75B00] animate-pulse" />
      )}
    </div>
  );
}
