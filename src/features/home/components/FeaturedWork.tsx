"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/features/portfolio/data/projects.data";

// Photorealistic 3D pushpin variants matching user reference image
function PushPin({
  variant = "emerald",
}: {
  variant: "orange" | "blue" | "purple" | "amber" | "emerald";
}) {
  const configs = {
    orange: { head: "#FB923C", base: "#EA580C", ring: "#C2410C" },
    blue: { head: "#60A5FA", base: "#2563EB", ring: "#1D4ED8" },
    purple: { head: "#C084FC", base: "#9333EA", ring: "#7E22CE" },
    amber: { head: "#FBBF24", base: "#D97706", ring: "#B45309" },
    emerald: { head: "#61CED9", base: "#06D6A0", ring: "#048A66" },
  }[variant];

  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center select-none">
      {/* Contact drop shadow on paper card */}
      <div className="w-7 h-2.5 bg-black/35 dark:bg-black/60 rounded-full blur-[2px] translate-y-7" />

      {/* 3D Translucent Pushpin Vector */}
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        className="filter drop-shadow-[0_5px_8px_rgba(0,0,0,0.35)] relative z-10"
      >
        {/* Metal needle pin */}
        <line
          x1="14"
          y1="23"
          x2="14"
          y2="30"
          stroke="#94A3B8"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Lower circular flange */}
        <ellipse cx="14" cy="23" rx="7.5" ry="3" fill={configs.ring} />
        <ellipse cx="14" cy="22.2" rx="7" ry="2.6" fill={configs.base} />

        {/* Tapered middle waist */}
        <path
          d="M10.5 14C10.5 14 11.5 19 11.5 22C11.5 22.8 16.5 22.8 16.5 22C16.5 19 17.5 14 17.5 14Z"
          fill={configs.base}
        />

        {/* Main spherical head */}
        <circle cx="14" cy="9.5" r="8.5" fill={configs.head} />
        <circle cx="14" cy="9.5" r="7.5" fill={configs.base} fillOpacity="0.4" />

        {/* Glossy glass specular gleam */}
        <ellipse
          cx="11.5"
          cy="6.8"
          rx="3.5"
          ry="2"
          fill="white"
          fillOpacity="0.85"
          transform="rotate(-30 11.5 6.8)"
        />
        <circle cx="16.5" cy="12" r="1.3" fill="white" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

// 5 Featured Projects mapped to pins & rotations
const PIN_VARIANTS: ("orange" | "blue" | "purple" | "amber" | "emerald")[] = [
  "orange",
  "blue",
  "purple",
  "amber",
  "emerald",
];

const CARD_ROTATIONS = [-2.8, 2.5, -2.0, 2.8, -1.8];

export function FeaturedWork() {
  const featured = PROJECTS.slice(0, 5);

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-brand-bg overflow-hidden">
      {/* Subtle Architectural Sketchbook Notepad Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.45] dark:opacity-[0.15]">
        <div className="w-full h-full bg-[linear-gradient(to_bottom,rgba(21,21,31,0.06)_1px,transparent_1px)] bg-[size:100%_36px]" />
      </div>

      {/* Ambient background glowing orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#EFC320]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-20 w-[550px] h-[550px] bg-[#F75B00]/8 rounded-full blur-[140px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <Eyebrow>{"// Selected Projects"}</Eyebrow>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-ink tracking-[0.03em] [word-spacing:0.18em] leading-[1.2]">
              Recent featured work.
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-muted mt-3 max-w-xl">
              A curated pinboard of high-impact architectures, scalable SaaS platforms, and conversion-focused web applications.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/portfolio"
              variant="ghost"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              View all 12 projects
            </Button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Pinned Roadmap Canvas Layout (Inspired by User's Reference Image)         */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto">
          {/* Elegant Organic Thread Trail weaving between Card 01 to Card 05 */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
            viewBox="0 0 1000 2500"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="roadmapThreadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F75B00" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#EFC320" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#F75B00" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <path
              d="M 260 220 C 420 380, 580 560, 740 760 C 580 960, 420 1120, 260 1280 C 420 1480, 580 1640, 740 1800 C 580 2000, 420 2160, 260 2320"
              stroke="url(#roadmapThreadGradient)"
              strokeWidth="2.8"
              strokeDasharray="8 8"
              strokeLinecap="round"
              className="filter drop-shadow-[0_2px_6px_rgba(247,91,0,0.25)]"
            />
          </svg>

          {/* Cards Stack/Timeline */}
          <div className="space-y-16 sm:space-y-24 md:space-y-28 relative z-10">
            {featured.map((project, idx) => {
              const isEven = idx % 2 === 1;
              const rotation = CARD_ROTATIONS[idx % CARD_ROTATIONS.length];
              const pinColor = PIN_VARIANTS[idx % PIN_VARIANTS.length];
              const serialNumber = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={project.id}
                  className={`flex w-full ${
                    isEven ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: rotation }}
                    whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{
                      scale: 1.025,
                      rotate: 0,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    className="relative w-full md:w-[480px] lg:w-[520px] transition-shadow duration-300"
                  >
                    {/* The 3D Pushpin on Top */}
                    <PushPin variant={pinColor} />

                    {/* Pinned Paper/Glassmorphic Project Card */}
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="group block rounded-[28px] sm:rounded-[32px] bg-white dark:bg-[#11211C] border border-brand-ink/10 dark:border-white/10 p-5 sm:p-7 shadow-[0_22px_60px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.75)] hover:shadow-[0_32px_80px_-20px_rgba(247,91,0,0.3)] hover:border-[#F75B00]/50 transition-all duration-300"
                    >
                      {/* Top Meta Bar inside Card */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        {/* Serial Number with Ink / Handwritten feel */}
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-[#F75B00] leading-none">
                            {serialNumber}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/20 dark:bg-white/20" />
                          <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-brand-muted2">
                            {project.categoryLabel}
                          </span>
                        </div>

                        {/* Year Badge */}
                        <span className="px-2.5 py-1 rounded-full bg-brand-soft border border-brand-ink/5 dark:border-white/10 font-mono text-[10px] text-brand-muted font-bold">
                          {project.year || "2025"}
                        </span>
                      </div>

                      {/* Project Image Showcase with Rounded Inset */}
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-brand-soft border border-brand-ink/5 dark:border-white/10 shadow-inner group/thumb">
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 520px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Hover Overlay with Live Action */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5">
                          <span className="font-heading text-xs font-bold text-white flex items-center gap-1.5 tracking-wider uppercase">
                            <span>Open Case Study</span>
                            <ArrowUpRight className="w-4 h-4 text-[#EFC320]" />
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white font-mono text-[10px]">
                            {project.role}
                          </span>
                        </div>
                      </div>

                      {/* Project Title & Summary */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-ink group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F75B00] group-hover:to-[#EFC320] transition-all duration-300">
                            {project.title}
                          </h3>

                          {/* Circular Arrow Action Button */}
                          <div className="w-8 h-8 rounded-full border border-brand-ink/15 dark:border-white/20 flex items-center justify-center text-brand-ink dark:text-white group-hover:border-[#F75B00] group-hover:bg-gradient-to-r group-hover:from-[#F75B00] group-hover:to-[#EFC320] group-hover:text-white transition-all shadow-xs">
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-[#101820] dark:text-[#E2E8F0] leading-relaxed line-clamp-2">
                          {project.summary || project.overview}
                        </p>
                      </div>

                      {/* Tech Stack Pills Footer */}
                      <div className="pt-3 border-t border-brand-ink/5 dark:border-white/10 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-brand-soft border border-brand-ink/5 dark:border-white/10 font-mono text-[10px] text-brand-muted font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-brand-soft font-mono text-[10px] text-brand-muted2">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* Bottom Journey Ending: Creator Signature matching User Reference Image    */}
          {/* ========================================================================= */}
          <div className="mt-20 sm:mt-28 pt-10 border-t border-brand-ink/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              {/* Creator Avatar with green pulsing status */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F75B00] shadow-md shrink-0 bg-brand-soft">
                <Image
                  src="/images/Tufael (3).png"
                  alt="Tufael Ahmed Zuarder"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#F75B00] border-2 border-white dark:border-[#11211C]" />
              </div>

              <div>
                <p className="font-sans text-sm sm:text-base text-brand-ink font-semibold">
                  Your <span className="text-[#F75B00] font-bold">all-in-one</span> digital architecture & design partner.
                </p>
                <p className="font-mono text-xs text-brand-muted">
                  Open for new full-stack contracts & product sprints in 2026.
                </p>
              </div>
            </div>

            {/* Gradient Catalog CTA */}
            <Button
              href="/portfolio"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Browse Full Archive
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
