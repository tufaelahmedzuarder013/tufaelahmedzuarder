"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceItem } from "../types/service.types";

interface ServicesCardsShowcaseSectionProps {
  services?: ServiceItem[];
}

interface ServiceCardData {
  id: string;
  slug: string;
  title: string;
  badge: string;
  rating: string;
  tags: [string, string];
  metadata: string;
  description: string;
  price: string;
  buttonText: string;
  images: [string, string, string, string];
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: "web",
    slug: "web-development",
    title: "Full-Stack Web Apps",
    badge: "Top rated",
    rating: "4.9",
    tags: ["Next.js 14", "TypeScript"],
    metadata: "Architecture & QA • Production Ready",
    description:
      "Production-grade web applications with modular component architecture, sub-second latency, and responsive fidelity across all screens.",
    price: "$1,800 / sprint",
    buttonText: "Book Now",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "uiux",
    slug: "ui-ux-design",
    title: "UI / UX & Design Systems",
    badge: "Top rated",
    rating: "4.8",
    tags: ["Figma UI", "Tokens"],
    metadata: "Design Tokens • Sub-Pixel 1:1",
    description:
      "Translating complex product requirements into clean visual hierarchies, intuitive user journeys, and pixel-perfect interactive prototypes.",
    price: "$1,400 / sprint",
    buttonText: "Book Now",
    images: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "saas",
    slug: "saas-products-development",
    title: "Cloud SaaS Platforms",
    badge: "Enterprise",
    rating: "4.9",
    tags: ["SaaS Core", "Cloud"],
    metadata: "Multi-Tenant • Role-Based Auth",
    description:
      "Scalable multi-tenant SaaS architecture, payment gate flows, automated analytics pipelines, and secure role-based authentication.",
    price: "$2,400 / sprint",
    buttonText: "Book Now",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Engineering",
    badge: "High Growth",
    rating: "4.9",
    tags: ["React Native", "iOS & Android"],
    metadata: "Cross-Platform • 60 FPS Native",
    description:
      "High-performance cross-platform mobile experiences with native animations, offline-first sync, and smooth gesture navigation.",
    price: "$2,200 / sprint",
    buttonText: "Book Now",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "performance",
    slug: "performance-optimization",
    title: "Speed & Web Vitals",
    badge: "100/100 Score",
    rating: "5.0",
    tags: ["Lighthouse", "SEO Boost"],
    metadata: "Core Web Vitals • Edge Caching",
    description:
      "Comprehensive speed audits, bundle tree-shaking, edge caching, and database query optimization for sub-second page loads.",
    price: "$950 / audit",
    buttonText: "Book Now",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "software",
    slug: "software-development",
    title: "Software Architecture",
    badge: "Scalable",
    rating: "4.8",
    tags: ["Node.js", "PostgreSQL"],
    metadata: "Microservices • CI/CD Pipelines",
    description:
      "Enterprise microservices, resilient GraphQL and REST APIs, Docker containerization, and zero-downtime deployment pipelines.",
    price: "$2,600 / sprint",
    buttonText: "Book Now",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
    ],
  },
];

function ServiceCardItem({
  card,
  index,
}: {
  card: ServiceCardData;
  index: number;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? card.images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide((prev) => (prev === card.images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIdx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide(slideIdx);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative rounded-[20px] sm:rounded-[22px] p-[7px] pb-0 bg-white dark:bg-[#151622] border border-neutral-200/90 dark:border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_24px_50px_rgba(0,0,0,0.75)] hover:border-neutral-300 dark:hover:border-white/20 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Photo Frame with Interactive 4-Image Slider */}
      <div className="group/slider relative w-full aspect-[412/350] sm:aspect-[412/365] rounded-[14px] overflow-hidden bg-neutral-200 dark:bg-neutral-800 select-none">
        {/* Images */}
        {card.images.map((imgUrl, imgIdx) => (
          <div
            key={`${card.id}-img-${imgIdx}`}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              imgIdx === activeSlide
                ? "opacity-100 z-0 pointer-events-auto"
                : "opacity-0 z-[-1] pointer-events-none"
            }`}
          >
            <Image
              src={imgUrl}
              alt={`${card.title} - Preview ${imgIdx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority={index < 3 && imgIdx === 0}
            />
          </div>
        ))}

        {/* Top Gradient Overlay for Tag Visibility */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 via-black/15 to-transparent pointer-events-none z-10" />

        {/* Bottom Gradient Overlay for Dots Visibility */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none z-10" />

        {/* Top-Left: Two Frosted Glass Pill Tags */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
          <span className="px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-[11px] font-sans font-medium shadow-xs">
            {card.tags[0]}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-[11px] font-sans font-medium shadow-xs">
            {card.tags[1]}
          </span>
        </div>

        {/* Top-Right: Star Rating Badge (Reference: ★ 4.8) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-xs font-semibold drop-shadow-md z-20">
          <Star className="w-3.5 h-3.5 text-white fill-white" />
          <span>{card.rating}</span>
        </div>

        {/* Slider Navigation Arrows (Appear on Photo Hover) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 group-hover/slider:opacity-100 focus:opacity-100 shadow-md cursor-pointer border border-white/15"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-0 group-hover/slider:opacity-100 focus:opacity-100 shadow-md cursor-pointer border border-white/15"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.2]" />
        </button>

        {/* Bottom-Center: Clickable Interactive Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {card.images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => goToSlide(dotIdx, e)}
              aria-label={`View image ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer shadow-xs ${
                dotIdx === activeSlide
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/60 hover:bg-white/95"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Area Below Photo */}
      <div className="px-3.5 sm:px-4 pt-5 pb-5 sm:pb-6 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Row 1: Title + Outline Badge */}
          <div className="flex items-center justify-between gap-3 min-h-[30px]">
            <h3
              style={{
                fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
              }}
              className="text-xl sm:text-[22px] font-bold tracking-tight text-neutral-900 dark:text-white leading-tight"
            >
              {card.title}
            </h3>
            <span className="shrink-0 inline-flex items-center justify-center min-h-[28px] px-3 rounded-full border border-neutral-300 dark:border-neutral-600 text-[11px] sm:text-xs font-sans text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
              {card.badge}
            </span>
          </div>

          {/* Row 2: Metadata (17px Aventa per user instruction) */}
          <div
            style={{
              fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
              fontSize: "17px",
              lineHeight: "24px",
            }}
            className="!text-[17px] !leading-[24px] text-neutral-500 dark:text-neutral-400 font-light mt-2 flex items-center gap-1"
          >
            <span>{card.metadata}</span>
          </div>

          {/* Row 3: Description (17px Aventa per user instruction) */}
          <p
            style={{
              fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
              fontSize: "17px",
              lineHeight: "25px",
            }}
            className="!text-[17px] !leading-[25px] !text-neutral-600 dark:!text-neutral-300 font-light mt-2 line-clamp-2"
          >
            {card.description}
          </p>
        </div>

        {/* Row 4: Footer with Price and Interactive Button with Website Signature Hover Effect */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-neutral-100 dark:border-white/5">
          <div
            style={{
              fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
              fontSize: "17px",
              lineHeight: "24px",
            }}
            className="!text-[17px] !leading-[24px] font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            {card.price}
          </div>

          <Link
            href={`/services/${card.slug}`}
            className="group/btn relative inline-flex items-center justify-between gap-2.5 h-[38px] sm:h-[40px] pl-4 pr-1.5 rounded-full overflow-hidden transition-all duration-300 bg-[#101820] dark:bg-white text-white dark:text-[#101820] hover:bg-gradient-to-r hover:from-[#F75B00] hover:to-[#EFC320] hover:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#F75B00] dark:hover:to-[#EFC320] dark:hover:text-white hover:shadow-lg hover:shadow-[#F75B00]/30 hover:-translate-y-0.5 active:translate-y-0 select-none shrink-0"
          >
            {/* Shine Sweep Highlight (Matching Website Button System) */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <span
              style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif" }}
              className="relative z-10 text-xs sm:text-[13px] font-medium tracking-tight"
            >
              {card.buttonText}
            </span>
            <span className="relative z-10 w-7 h-7 rounded-full bg-white text-[#101820] dark:bg-[#101820] dark:text-white group-hover/btn:bg-white group-hover/btn:text-[#101820] dark:group-hover/btn:bg-white dark:group-hover/btn:text-[#101820] flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-45 shrink-0 shadow-xs">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4]" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesCardsShowcaseSection({ services: _services }: ServicesCardsShowcaseSectionProps = {}) {
  return (
    <section
      className="py-16 sm:py-24 bg-brand-bg relative overflow-hidden"
      aria-label="Services Showcase"
    >
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3"
        >
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
        </motion.div>

        {/* ================= 3-COLUMN SERVICES CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-9">
          {SERVICE_CARDS.map((card, idx) => (
            <ServiceCardItem key={card.id} card={card} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
