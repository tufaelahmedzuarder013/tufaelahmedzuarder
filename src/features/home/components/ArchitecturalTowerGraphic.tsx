"use client";

import React from "react";

interface ArchitecturalTowerGraphicProps {
  activeStepIndex: number;
}

/**
 * 7 Architectural Floors corresponding to ARCHITECTURE_STEPS (0 to 6):
 * Index 0 -> Floor 1: Ground Level / Detail & Quality (EL +0.0M)
 * Index 1 -> Floor 2: Collaboration Suite (EL +3.2M)
 * Index 2 -> Floor 3: Full-Stack Core (EL +6.5M)
 * Index 3 -> Floor 4: Creative Studio (EL +9.8M)
 * Index 4 -> Floor 5: Motion Atelier (EL +13.0M)
 * Index 5 -> Floor 6: Engineering Lab (EL +16.2M)
 * Index 6 -> Floor 7: Master Penthouse Suite (EL +19.5M)
 */
export function ArchitecturalTowerGraphic({ activeStepIndex }: ArchitecturalTowerGraphicProps) {
  // Floor configuration data for visual elevations and positions
  const floors = [
    {
      index: 0,
      level: "L1",
      elevation: "+0.0M",
      label: "GROUND ATRIUM",
      yTop: 610,
      yBottom: 705,
      height: 95,
      width: 320,
      x: 180,
    },
    {
      index: 1,
      level: "L2",
      elevation: "+3.2M",
      label: "COLLAB SUITE",
      yTop: 535,
      yBottom: 610,
      height: 75,
      width: 355,
      x: 145, // Cantilever left
    },
    {
      index: 2,
      level: "L3",
      elevation: "+6.5M",
      label: "FULL-STACK CORE",
      yTop: 460,
      yBottom: 535,
      height: 75,
      width: 320,
      x: 180,
    },
    {
      index: 3,
      level: "L4",
      elevation: "+9.8M",
      label: "CREATIVE STUDIO",
      yTop: 385,
      yBottom: 460,
      height: 75,
      width: 355,
      x: 180, // Cantilever right
    },
    {
      index: 4,
      level: "L5",
      elevation: "+13.0M",
      label: "MOTION ATELIER",
      yTop: 310,
      yBottom: 385,
      height: 75,
      width: 320,
      x: 180, // Exposed structural X-truss
    },
    {
      index: 5,
      level: "L6",
      elevation: "+16.2M",
      label: "ENGINEERING LAB",
      yTop: 235,
      yBottom: 310,
      height: 75,
      width: 320,
      x: 180, // Balcony setback
    },
    {
      index: 6,
      level: "L7",
      elevation: "+19.5M",
      label: "PENTHOUSE SUITE",
      yTop: 145,
      yBottom: 235,
      height: 90,
      width: 300,
      x: 190, // Crown penthouse + sky garden
    },
  ];

  return (
    <svg
      viewBox="0 0 680 880"
      className="w-full h-full object-contain select-none"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Architectural Tower Construction Blueprint"
    >
      <defs>
        {/* Architectural Glass Gradient (Built) */}
        <linearGradient id="tower-glass-built" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.30" />
          <stop offset="40%" stopColor="#0284C7" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0.35" />
        </linearGradient>

        {/* Warm Interior Lighting Glow */}
        <linearGradient id="tower-interior-warm" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F75B00" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#EFC320" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F75B00" stopOpacity="0.02" />
        </linearGradient>

        {/* Active Floor Glowing Accent */}
        <linearGradient id="tower-active-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F75B00" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#EFC320" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F75B00" stopOpacity="0.45" />
        </linearGradient>

        {/* Concrete / Steel Structural Slab Gradient */}
        <linearGradient id="tower-slab-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#334155" stopOpacity="1" />
          <stop offset="100%" stopColor="#1E293B" stopOpacity="1" />
        </linearGradient>

        {/* Dark Obsidian Structural Core */}
        <linearGradient id="tower-core-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F172A" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#1E293B" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
        </linearGradient>

        {/* Bedrock Strata Gradient */}
        <linearGradient id="tower-bedrock" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0.8" />
        </linearGradient>

        {/* Diagonal Glass Sheen Reflection */}
        <linearGradient id="tower-glass-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Blueprint Wireframe Fill for Unbuilt Floors */}
        <pattern id="tower-blueprint-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.12" />
        </pattern>
      </defs>

      {/* ========================================================================= */}
      {/* BACKGROUND ARCHITECTURAL GRID & AXES                                      */}
      {/* ========================================================================= */}
      <g opacity="0.4" className="text-brand-muted">
        {/* Vertical Centerline Axis */}
        <line x1="340" y1="30" x2="340" y2="760" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.2" />
        
        {/* Left Datum Guideline */}
        <line x1="120" y1="50" x2="120" y2="730" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
        {/* Right Datum Guideline */}
        <line x1="560" y1="50" x2="560" y2="730" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />

        {/* Architectural Coordinate Labels */}
        <text x="120" y="40" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.6">AXIS A</text>
        <text x="340" y="24" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.6">AXIS CL</text>
        <text x="560" y="40" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.6">AXIS B</text>
      </g>

      {/* ========================================================================= */}
      {/* FOUNDATION & BEDROCK (Permanently Anchored at Base)                       */}
      {/* ========================================================================= */}
      <g id="tower-foundation">
        {/* Sub-surface Bedrock Strata */}
        <rect x="100" y="705" width="480" height="110" fill="url(#tower-bedrock)" rx="6" />
        <line x1="80" y1="705" x2="600" y2="705" stroke="#F75B00" strokeWidth="2.5" strokeOpacity="0.7" />

        {/* Foundation Geological Piles / Anchors */}
        {[160, 240, 320, 400, 480, 520].map((pileX) => (
          <g key={pileX} opacity="0.35">
            <line x1={pileX} y1="705" x2={pileX} y2="800" stroke="#94A3B8" strokeWidth="4" strokeDasharray="4 2" />
            <circle cx={pileX} cy="800" r="3" fill="#F75B00" />
          </g>
        ))}

        {/* Plaza Paving & Entrance Steps */}
        <polygon points="260,705 420,705 440,725 240,725" fill="#334155" opacity="0.6" />
        <line x1="250" y1="712" x2="430" y2="712" stroke="#64748B" strokeWidth="1" />
        <line x1="240" y1="719" x2="440" y2="719" stroke="#64748B" strokeWidth="1" />

        {/* Plaza Lighting Bollards */}
        <circle cx="150" cy="700" r="3" fill="#EFC320" />
        <circle cx="150" cy="700" r="8" fill="#EFC320" opacity="0.25" />
        <line x1="150" y1="700" x2="150" y2="705" stroke="#64748B" strokeWidth="2" />

        <circle cx="530" cy="700" r="3" fill="#EFC320" />
        <circle cx="530" cy="700" r="8" fill="#EFC320" opacity="0.25" />
        <line x1="530" y1="700" x2="530" y2="705" stroke="#64748B" strokeWidth="2" />

        {/* Foundation Level Badge */}
        <text x="340" y="745" fill="#94A3B8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="2">
          STRUCTURAL BEDROCK FOUNDATION
        </text>
        <text x="340" y="760" fill="#64748B" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
          GRADE EL 0.00M • SUB-GRADE REINFORCED CONCRETE
        </text>
      </g>

      {/* ========================================================================= */}
      {/* 7 ARCHITECTURAL FLOORS (Ground Lobby to Master Penthouse)                 */}
      {/* ========================================================================= */}
      {floors.map((floor) => {
        const isConstructed = floor.index <= activeStepIndex;
        const isActive = floor.index === activeStepIndex;

        return (
          <g
            key={floor.level}
            id={`tower-floor-${floor.index}`}
            className="transition-all duration-500 ease-out"
            style={{
              opacity: isConstructed ? 1 : 0.45,
              transform: isConstructed ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 400ms ease, transform 400ms ease",
            }}
          >
            {/* ------------------------------------------------------------- */}
            {/* FLOOR TYPE A: BUILT FLOOR (Fully Rendered Glass & Concrete)    */}
            {/* ------------------------------------------------------------- */}
            {isConstructed ? (
              <g>
                {/* 1. Interior Ambient Glow */}
                <rect
                  x={floor.x}
                  y={floor.yTop}
                  width={floor.width}
                  height={floor.height}
                  fill={isActive ? "url(#tower-active-glow)" : "url(#tower-interior-warm)"}
                />

                {/* 2. Glass Curtain Wall Facade */}
                <rect
                  x={floor.x}
                  y={floor.yTop}
                  width={floor.width}
                  height={floor.height}
                  fill="url(#tower-glass-built)"
                  stroke={isActive ? "#F75B00" : "#0284C7"}
                  strokeWidth={isActive ? "2" : "1"}
                  strokeOpacity={isActive ? "0.9" : "0.5"}
                />

                {/* 3. Diagonal Glass Sheen */}
                <rect
                  x={floor.x}
                  y={floor.yTop}
                  width={floor.width}
                  height={floor.height}
                  fill="url(#tower-glass-sheen)"
                  style={{ mixBlendMode: "overlay" }}
                />

                {/* ----------------- SPECIFIC ARCHITECTURAL FLOOR DETAILS ----------------- */}

                {/* Floor 1 (L1 Ground Atrium): Columns & Entrance Doors */}
                {floor.index === 0 && (
                  <g>
                    {/* Grand Double-Height Columns */}
                    {[220, 280, 400, 460].map((colX) => (
                      <g key={colX}>
                        <rect x={colX} y={floor.yTop + 4} width="12" height={floor.height - 8} fill="#1E293B" stroke="#475569" strokeWidth="1" />
                        <circle cx={colX + 6} cy={floor.yBottom - 10} r="2" fill="#EFC320" opacity="0.8" />
                      </g>
                    ))}
                    {/* Entrance Glass Canopy */}
                    <polygon points="300,670 380,670 395,685 285,685" fill="#0284C7" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="300" y1="655" x2="300" y2="670" stroke="#F75B00" strokeWidth="1.5" />
                    <line x1="380" y1="655" x2="380" y2="670" stroke="#F75B00" strokeWidth="1.5" />
                    {/* Revolving Entrance Doors */}
                    <rect x="325" y="660" width="30" height="45" fill="#0F172A" stroke="#F75B00" strokeWidth="1.5" />
                    <line x1="340" y1="660" x2="340" y2="705" stroke="#F75B00" strokeWidth="1" strokeDasharray="3 2" />
                  </g>
                )}

                {/* Floor 2 (L2 Collaboration): Cantilever Conference Pod */}
                {floor.index === 1 && (
                  <g>
                    {/* Cantilever support truss */}
                    <polygon points="145,610 180,610 180,630" fill="#F75B00" opacity="0.7" />
                    {/* Meeting Room Screen Silhouette */}
                    <rect x="160" y="555" width="28" height="18" fill="#38BDF8" opacity="0.6" rx="2" />
                    <line x1="165" y1="580" x2="200" y2="580" stroke="#EFC320" strokeWidth="2" opacity="0.8" />
                  </g>
                )}

                {/* Floor 3 (L3 Full-Stack Core): Dark Structural Shear Wall */}
                {floor.index === 2 && (
                  <g>
                    <rect x="300" y={floor.yTop} width="80" height={floor.height} fill="url(#tower-core-gradient)" stroke="#334155" strokeWidth="1" />
                    {/* Server Rack Status LED Blinks */}
                    {[320, 340, 360].map((ledX, i) => (
                      <g key={ledX}>
                        <circle cx={ledX} cy={floor.yTop + 25} r="2" fill="#38BDF8" />
                        <circle cx={ledX} cy={floor.yTop + 45} r="2" fill="#F75B00" />
                        <circle cx={ledX} cy={floor.yTop + 60} r="2" fill="#10B981" />
                      </g>
                    ))}
                    {/* Vertical Glass Brise-Soleil Fins */}
                    {[200, 220, 240, 260, 280, 400, 420, 440, 460, 480].map((finX) => (
                      <line key={finX} x1={finX} y1={floor.yTop} x2={finX} y2={floor.yBottom} stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.4" />
                    ))}
                  </g>
                )}

                {/* Floor 4 (L4 Creative Studio): Right Cantilever & Terrace Garden */}
                {floor.index === 3 && (
                  <g>
                    {/* Cantilever support under right pod */}
                    <polygon points="500,460 535,460 500,480" fill="#F75B00" opacity="0.7" />
                    {/* Hanging Designer Pendant Lights */}
                    {[240, 340, 440].map((lightX) => (
                      <g key={lightX}>
                        <line x1={lightX} y1={floor.yTop} x2={lightX} y2={floor.yTop + 20} stroke="#475569" strokeWidth="1" />
                        <circle cx={lightX} cy={floor.yTop + 22} r="3" fill="#EFC320" />
                        <circle cx={lightX} cy={floor.yTop + 22} r="7" fill="#EFC320" opacity="0.25" />
                      </g>
                    ))}
                  </g>
                )}

                {/* Floor 5 (L5 Motion Atelier): Exposed Architectural X-Truss */}
                {floor.index === 4 && (
                  <g opacity="0.85">
                    {/* Left X-Bracing */}
                    <line x1="180" y1={floor.yTop} x2="340" y2={floor.yBottom} stroke="#F75B00" strokeWidth="2.5" />
                    <line x1="180" y1={floor.yBottom} x2="340" y2={floor.yTop} stroke="#F75B00" strokeWidth="2.5" />
                    {/* Right X-Bracing */}
                    <line x1="340" y1={floor.yTop} x2="500" y2={floor.yBottom} stroke="#F75B00" strokeWidth="2.5" />
                    <line x1="340" y1={floor.yBottom} x2="500" y2={floor.yTop} stroke="#F75B00" strokeWidth="2.5" />
                    {/* Center Node Joint */}
                    <circle cx="260" cy={floor.yTop + floor.height / 2} r="4" fill="#EFC320" />
                    <circle cx="420" cy={floor.yTop + floor.height / 2} r="4" fill="#EFC320" />
                  </g>
                )}

                {/* Floor 6 (L6 Engineering Lab): Horizontal Ribbon Glazing */}
                {floor.index === 5 && (
                  <g>
                    {/* Recessed balcony terrace on left */}
                    <rect x="150" y={floor.yTop + 25} width="30" height={floor.height - 25} fill="#0F172A" opacity="0.5" />
                    <line x1="150" y1={floor.yTop + 45} x2="180" y2={floor.yTop + 45} stroke="#38BDF8" strokeWidth="1.5" />
                    {/* Horizontal Ribbon Window Band */}
                    <rect x="180" y={floor.yTop + 15} width="320" height="45" fill="#38BDF8" fillOpacity="0.25" stroke="#0284C7" strokeWidth="1.5" />
                  </g>
                )}

                {/* Floor 7 (L7 Master Penthouse): Sky Lounge & Rooftop Garden */}
                {floor.index === 6 && (
                  <g>
                    {/* Panoramic Angled Sky Lounge */}
                    <polygon
                      points="190,175 490,175 480,235 200,235"
                      fill="#38BDF8"
                      fillOpacity="0.35"
                      stroke="#F75B00"
                      strokeWidth="2"
                    />
                    {/* Rooftop Pergola Canopy */}
                    <rect x="180" y="145" width="320" height="8" fill="url(#tower-slab-gradient)" />
                    {/* Rooftop Glass Balustrade */}
                    <rect x="190" y="153" width="300" height="22" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1" strokeDasharray="6 2" />

                    {/* Rooftop Sky Garden Miniature Plants */}
                    {[220, 250, 430, 460].map((plantX) => (
                      <g key={plantX}>
                        <ellipse cx={plantX} cy="170" rx="8" ry="6" fill="#10B981" opacity="0.8" />
                        <circle cx={plantX} cy="166" r="4" fill="#34D399" opacity="0.9" />
                      </g>
                    ))}

                    {/* Architectural Spire & Antenna Mast */}
                    <line x1="340" y1="145" x2="340" y2="45" stroke="#F75B00" strokeWidth="3" />
                    <line x1="337" y1="145" x2="337" y2="85" stroke="#94A3B8" strokeWidth="1.5" />
                    <line x1="343" y1="145" x2="343" y2="85" stroke="#94A3B8" strokeWidth="1.5" />
                    {/* Guy Wires */}
                    <line x1="340" y1="65" x2="300" y2="145" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />
                    <line x1="340" y1="65" x2="380" y2="145" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />
                    {/* Pulsing Aircraft Warning Beacon */}
                    <circle cx="340" cy="45" r="4" fill="#F75B00" className="animate-ping" />
                    <circle cx="340" cy="45" r="3.5" fill="#EF4444" />
                    <circle cx="340" cy="45" r="8" fill="#F75B00" opacity="0.35" />
                  </g>
                )}

                {/* 4. Vertical Window Mullions (Realistic curtain-wall division) */}
                {[floor.x + 40, floor.x + 80, floor.x + 120, floor.x + 160, floor.x + 200, floor.x + 240, floor.x + 280].map(
                  (mullionX) =>
                    mullionX < floor.x + floor.width - 20 && (
                      <line
                        key={mullionX}
                        x1={mullionX}
                        y1={floor.yTop}
                        x2={mullionX}
                        y2={floor.yBottom}
                        stroke="#1E293B"
                        strokeWidth="1.5"
                        strokeOpacity="0.75"
                      />
                    )
                )}

                {/* 5. Structural Concrete Floor Slab at Base */}
                <rect
                  x={floor.x - 6}
                  y={floor.yBottom - 6}
                  width={floor.width + 12}
                  height="8"
                  fill="url(#tower-slab-gradient)"
                  stroke="#64748B"
                  strokeWidth="0.75"
                  rx="1"
                />
                <line x1={floor.x - 6} y1={floor.yBottom - 6} x2={floor.x + floor.width + 6} y2={floor.yBottom - 6} stroke="#F75B00" strokeWidth="1" strokeOpacity="0.7" />
              </g>
            ) : (
              /* ------------------------------------------------------------- */
              /* FLOOR TYPE B: UNBUILT FLOOR (Architectural Blueprint Grid)    */
              /* ------------------------------------------------------------- */
              <g opacity="0.6">
                {/* Blueprint Grid Fill */}
                <rect
                  x={floor.x}
                  y={floor.yTop}
                  width={floor.width}
                  height={floor.height}
                  fill="url(#tower-blueprint-grid)"
                />
                {/* Blueprint Dashed Boundary */}
                <rect
                  x={floor.x}
                  y={floor.yTop}
                  width={floor.width}
                  height={floor.height}
                  fill="#0284C7"
                  fillOpacity="0.04"
                  stroke="#38BDF8"
                  strokeWidth="1.2"
                  strokeDasharray="6 4"
                  strokeOpacity="0.6"
                />
                {/* Blueprint Structural Slab Line */}
                <line
                  x1={floor.x - 4}
                  y1={floor.yBottom}
                  x2={floor.x + floor.width + 4}
                  y2={floor.yBottom}
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  strokeOpacity="0.7"
                />
                {/* Unbuilt Floor Tag */}
                <text
                  x={floor.x + floor.width / 2}
                  y={floor.yTop + floor.height / 2 + 3}
                  fill="#38BDF8"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                  letterSpacing="1.5"
                  opacity="0.8"
                >
                  [ {floor.level} BLUEPRINT SPEC • PENDING ]
                </text>
              </g>
            )}

            {/* ------------------------------------------------------------- */}
            {/* ACTIVE FLOOR SCANNING HUD BRACKETS & LASER HIGHLIGHT          */}
            {/* ------------------------------------------------------------- */}
            {isActive && (
              <g className="animate-pulse">
                {/* Glowing Laser Border */}
                <rect
                  x={floor.x - 4}
                  y={floor.yTop - 4}
                  width={floor.width + 8}
                  height={floor.height + 8}
                  fill="none"
                  stroke="#F75B00"
                  strokeWidth="2.5"
                  rx="4"
                  strokeDasharray="12 6"
                />

                {/* Four Tech Corner Brackets */}
                {/* Top-Left */}
                <path d={`M ${floor.x - 12} ${floor.yTop + 10} L ${floor.x - 12} ${floor.yTop - 12} L ${floor.x + 10} ${floor.yTop - 12}`} fill="none" stroke="#F75B00" strokeWidth="3" />
                {/* Top-Right */}
                <path d={`M ${floor.x + floor.width + 12} ${floor.yTop + 10} L ${floor.x + floor.width + 12} ${floor.yTop - 12} L ${floor.x + floor.width - 10} ${floor.yTop - 12}`} fill="none" stroke="#F75B00" strokeWidth="3" />
                {/* Bottom-Left */}
                <path d={`M ${floor.x - 12} ${floor.yBottom - 10} L ${floor.x - 12} ${floor.yBottom + 12} L ${floor.x + 10} ${floor.yBottom + 12}`} fill="none" stroke="#F75B00" strokeWidth="3" />
                {/* Bottom-Right */}
                <path d={`M ${floor.x + floor.width + 12} ${floor.yBottom - 10} L ${floor.x + floor.width + 12} ${floor.yBottom + 12} L ${floor.x + floor.width - 10} ${floor.yBottom + 12}`} fill="none" stroke="#F75B00" strokeWidth="3" />

                {/* Laser Pointer Leader Line connecting to elevation marker */}
                <line
                  x1="110"
                  y1={floor.yTop + floor.height / 2}
                  x2={floor.x - 12}
                  y2={floor.yTop + floor.height / 2}
                  stroke="#F75B00"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
              </g>
            )}
          </g>
        );
      })}

      {/* ========================================================================= */}
      {/* ARCHITECTURAL ELEVATION CALLOUTS (Left Datum Line)                       */}
      {/* ========================================================================= */}
      <g id="tower-elevation-markers">
        {floors.map((floor) => {
          const isActive = floor.index === activeStepIndex;
          const isConstructed = floor.index <= activeStepIndex;
          const yPos = floor.yTop + floor.height / 2;

          return (
            <g key={`marker-${floor.level}`}>
              {/* Leader Dot on Datum Line */}
              <circle
                cx="110"
                cy={yPos}
                r={isActive ? "4" : "2.5"}
                fill={isActive ? "#F75B00" : isConstructed ? "#38BDF8" : "#64748B"}
                className={isActive ? "animate-ping" : ""}
              />
              <circle
                cx="110"
                cy={yPos}
                r={isActive ? "3.5" : "2"}
                fill={isActive ? "#F75B00" : isConstructed ? "#0284C7" : "#475569"}
              />

              {/* Elevation Monospace Callout Text */}
              <text
                x="100"
                y={yPos + 4}
                textAnchor="end"
                fontFamily="monospace"
                fontSize={isActive ? "11" : "9"}
                fontWeight={isActive ? "bold" : "normal"}
                fill={isActive ? "#F75B00" : isConstructed ? "#E2E8F0" : "#64748B"}
                letterSpacing="0.5"
              >
                {floor.elevation}
              </text>

              {/* Active Arrow Pointer */}
              {isActive && (
                <polygon
                  points={`104,${yPos - 3} 108,${yPos} 104,${yPos + 3}`}
                  fill="#F75B00"
                />
              )}
            </g>
          );
        })}
      </g>

      {/* ========================================================================= */}
      {/* RIGHT SIDE LEVEL STATUS CALLOUTS                                          */}
      {/* ========================================================================= */}
      <g id="tower-level-tags">
        {floors.map((floor) => {
          const isActive = floor.index === activeStepIndex;
          const isConstructed = floor.index <= activeStepIndex;
          const yPos = floor.yTop + floor.height / 2;

          return (
            <g key={`tag-${floor.level}`}>
              {/* Monospace Level Identifier */}
              <text
                x="575"
                y={yPos - 2}
                fontFamily="monospace"
                fontSize="10"
                fontWeight={isActive ? "bold" : "600"}
                fill={isActive ? "#F75B00" : isConstructed ? "#E2E8F0" : "#64748B"}
                letterSpacing="1"
              >
                {floor.level} • {floor.label}
              </text>
              <text
                x="575"
                y={yPos + 10}
                fontFamily="monospace"
                fontSize="8"
                fill={isActive ? "#EFC320" : isConstructed ? "#38BDF8" : "#475569"}
                letterSpacing="0.5"
              >
                {isActive ? "● CURRENT FOCUS" : isConstructed ? "✓ 100% CONSTRUCTED" : "┄ BLUEPRINT"}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
