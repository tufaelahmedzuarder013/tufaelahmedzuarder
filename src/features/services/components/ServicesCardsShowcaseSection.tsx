"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

interface ServiceCardData {
  id: string;
  slug: string;
  title: string;
  badge: string;
  rating: string;
  tags: [string, string];
  description: string;
  author: string;
  buttonText: string;
  imageUrl: string;
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: "web",
    slug: "web-development",
    title: "Full-Stack Web Apps",
    badge: "Top Rated",
    rating: "4.9",
    tags: ["Next.js 14", "TypeScript"],
    description:
      "Production-grade web applications with modular component architecture, sub-second latency, and responsive fidelity across all screens.",
    author: "Tufael Ahmed Zuarder",
    buttonText: "Explore Service",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "uiux",
    slug: "ui-ux-design",
    title: "UI / UX & Design Systems",
    badge: "Top Rated",
    rating: "4.8",
    tags: ["Figma UI", "Tokens"],
    description:
      "Translating complex product requirements into clean visual hierarchies, intuitive user journeys, and pixel-perfect interactive prototypes.",
    author: "Tufael Ahmed Zuarder",
    buttonText: "Explore Service",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "saas",
    slug: "saas-products-development",
    title: "Cloud SaaS Platforms",
    badge: "Enterprise",
    rating: "4.9",
    tags: ["SaaS Core", "Cloud"],
    description:
      "Scalable multi-tenant SaaS architecture, payment gate flows, automated analytics pipelines, and secure role-based authentication.",
    author: "Tufael Ahmed Zuarder",
    buttonText: "Explore Service",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Engineering",
    badge: "High Growth",
    rating: "4.9",
    tags: ["React Native", "iOS & Android"],
    description:
      "High-performance cross-platform mobile experiences with native animations, offline-first sync, and smooth gesture navigation.",
    author: "Tufael Ahmed Zuarder",
    buttonText: "Explore Service",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "performance",
    slug: "performance-optimization",
    title: "Speed & Core Web Vitals",
    badge: "100/100 Score",
    rating: "5.0",
    tags: ["Lighthouse", "SEO Boost"],
    description:
      "Comprehensive speed audits, bundle tree-shaking, edge caching, and database query optimization for sub-second page loads.",
    author: "Tufael Ahmed Zuarder",
    buttonText: "Explore Service",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "software",
    slug: "software-development",
    title: "Software Architecture",
    badge: "Scalable",
    rating: "4.8",
    tags: ["Node.js", "PostgreSQL"],
    description:
      "Enterprise microservices, resilient GraphQL and REST APIs, Docker containerization, and zero-downtime deployment pipelines.",
    author: "Tufael Ahmed Zuarder",
    buttonText: "Explore Service",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80",
  },
];

export function ServicesCardsShowcaseSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-brand-bg relative overflow-hidden"
      aria-label="Services Showcase"
    >
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-7 h-[1.5px] bg-[#F75B00]/70 rounded-full" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-muted">
              services
            </span>
            <span className="w-7 h-[1.5px] bg-[#F75B00]/70 rounded-full" />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-orlean), 'Orlean', var(--font-space-grotesk), sans-serif",
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-ink"
          >
            Capabilities &amp; solutions<span className="text-[#F75B00]">.</span>
          </h2>
          <p
            style={{ fontFamily: "var(--font-aventa), sans-serif" }}
            className="text-sm sm:text-base text-brand-muted font-light max-w-lg mx-auto leading-relaxed"
          >
            End-to-end full-stack web applications, custom SaaS architectures, and bespoke UI/UX design systems.
          </p>
        </div>

        {/* ================= 3-COLUMN SERVICES CARDS GRID (Exact 1:1 Match to User Reference Image) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-9">
          {SERVICE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="group relative h-[540px] sm:h-[580px] rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden bg-[#0E1217] shadow-[0_20px_50px_-15px_rgba(16,24,32,0.16)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.75)] border border-neutral-200/80 dark:border-white/10 flex flex-col justify-between text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-12px_rgba(247,91,0,0.24)]"
            >
              {/* Full-Bleed High-Res Cinematic Image */}
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.88] dark:brightness-[0.78]"
              />

              {/* ================= TOP HEADER OVERLAY (Matching Reference Image) ================= */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between w-full">
                {/* Left: Two Translucent Frosted Glass Pill Tags */}
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-mono font-medium shadow-sm">
                    {card.tags[0]}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-mono font-medium shadow-sm">
                    {card.tags[1]}
                  </span>
                </div>

                {/* Right: Star Rating Badge (Reference: ★ 4.8) */}
                <div className="flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white" />
                  <span>{card.rating}</span>
                </div>
              </div>

              {/* ================= MIDDLE PAGINATION DOTS (Matching Reference Image) ================= */}
              <div className="relative z-10 flex items-center justify-center gap-2 mb-4">
                <span className="w-6 h-2 rounded-full bg-white shadow-sm" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
              </div>

              {/* ================= BOTTOM FROSTED GLASS CONTENT PANEL (Matching Reference Image) ================= */}
              <div className="relative z-10 p-6 sm:p-7 pt-4 bg-black/45 backdrop-blur-md rounded-b-[2rem] sm:rounded-b-[2.4rem] border-t border-white/10 space-y-3.5 text-white">
                
                {/* Title + Outline Top Rated Badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3
                    style={{
                      fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
                    }}
                    className="text-2xl sm:text-[25px] font-bold tracking-tight text-white leading-tight"
                  >
                    {card.title}
                  </h3>
                  <span className="shrink-0 px-3 py-1 rounded-full border border-white/50 text-[11px] font-mono text-white/95 backdrop-blur-sm shadow-xs">
                    {card.badge}
                  </span>
                </div>

                {/* 2-Line Punchy Description */}
                <p
                  style={{ fontFamily: "var(--font-aventa), sans-serif" }}
                  className="text-xs sm:text-[13px] text-white/85 font-light line-clamp-2 leading-relaxed"
                >
                  {card.description}
                </p>

                {/* Subtitle / Creator Spec Line (Reference: "Red Fox") */}
                <div className="text-xs font-mono text-white/70 tracking-wide">
                  {card.author}
                </div>

                {/* Full-Width White Pill Action Button (Reference: "Buy this Book") */}
                <div className="pt-1">
                  <Link
                    href={`/services/${card.slug}`}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-white text-[#101820] font-semibold text-xs sm:text-sm shadow-xl hover:bg-neutral-100 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{card.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#101820] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
