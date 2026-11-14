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
    tags: ["Next.js 15", "TypeScript"],
    metadata: "Architecture & QA • Production Ready",
    description:
      "Production-grade web applications with modular component architecture, sub-second latency, and responsive fidelity across all screens.",
    price: "$1,800 / sprint",
    buttonText: "Read More",
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
    rating: "4.9",
    tags: ["Figma UI", "Tokens"],
    metadata: "Design Tokens • Sub-Pixel 1:1",
    description:
      "Translating complex product requirements into clean visual hierarchies, intuitive user journeys, and pixel-perfect interactive prototypes.",
    price: "$1,400 / sprint",
    buttonText: "Read More",
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
    tags: ["SaaS Core", "Stripe API"],
    metadata: "Multi-Tenant • Role-Based Auth",
    description:
      "Scalable multi-tenant SaaS architecture, subscription billing flows, automated analytics pipelines, and secure role-based authentication.",
    price: "$2,400 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
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
    buttonText: "Read More",
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
    tags: ["Core Vitals", "Lighthouse 100"],
    metadata: "Sub-Second TTI • Edge Caching",
    description:
      "Deep Core Web Vitals audit, asset compression pipelines, bundle code-splitting, and sub-second load times that elevate search rankings.",
    price: "$1,200 / audit",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "software",
    slug: "software-development",
    title: "Software Architecture",
    badge: "Enterprise",
    rating: "4.9",
    tags: ["Microservices", "PostgreSQL"],
    metadata: "Distributed Systems • Docker CI",
    description:
      "Mission-critical backend architectures, microservices, containerized deployments, and robust database layers built for massive data throughput.",
    price: "$2,500 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "motion",
    slug: "motion-interaction",
    title: "Motion & Interactions",
    badge: "Creative",
    rating: "4.9",
    tags: ["GSAP 3", "Framer Motion"],
    metadata: "60 FPS Physics • Smooth Scroll",
    description:
      "Captivating kinetic web animations, magnetic cursor interactions, and fluid physics-based micro-interactions that leave a lasting impression.",
    price: "$1,500 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "custom",
    slug: "custom-development",
    title: "Custom Web Solutions",
    badge: "Bespoke",
    rating: "4.9",
    tags: ["Bespoke API", "Custom Logic"],
    metadata: "Tailored Logic • High Security",
    description:
      "Bespoke full-stack applications engineered to your exact business specifications, custom integrations, and specialized data models.",
    price: "$2,000 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "hr-system",
    slug: "hr-management-system",
    title: "HR Management Systems",
    badge: "Enterprise",
    rating: "4.9",
    tags: ["HRMS Core", "Payroll & Role"],
    metadata: "Role Security • Audit Logs",
    description:
      "Custom human resource management systems featuring automated payroll processing, employee onboarding, attendance tracking, and reporting.",
    price: "$2,800 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "crm-system",
    slug: "crm-system",
    title: "CRM Platforms",
    badge: "High Impact",
    rating: "4.9",
    tags: ["Lead Funnel", "Pipelines"],
    metadata: "Lead Automation • Real-Time Sync",
    description:
      "End-to-end customer relationship management systems with visual deal pipelines, contact sync, and automated email workflows.",
    price: "$2,400 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "cms-dev",
    slug: "cms-development",
    title: "Headless CMS Solutions",
    badge: "Modern",
    rating: "4.8",
    tags: ["Sanity / Strapi", "Content Model"],
    metadata: "Decoupled Content • Instant Previews",
    description:
      "Headless content management architectures with flexible schema definitions, instant staging previews, and localized content delivery.",
    price: "$1,600 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "branding",
    slug: "branding",
    title: "Brand Identity Systems",
    badge: "Signature",
    rating: "4.9",
    tags: ["Brand Guidelines", "Visual Assets"],
    metadata: "Vector Systems • Design Tokens",
    description:
      "Comprehensive brand identity development including logo typography, color theory, iconography systems, and comprehensive brand books.",
    price: "$1,200 / brand",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Growth & Technical SEO",
    badge: "ROI Driven",
    rating: "4.8",
    tags: ["Schema Markup", "Analytics"],
    metadata: "Organic Traffic • Conversion Rate",
    description:
      "Technical search engine optimization, programmatic landing page pipelines, and funnel analytics engineered to scale organic acquisition.",
    price: "$1,100 / month",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & Creatives",
    badge: "Creative",
    rating: "4.9",
    tags: ["Visual Assets", "Pitch Decks"],
    metadata: "Marketing Collateral • High Impact",
    description:
      "High-impact marketing assets, investor pitch decks, digital collateral, and social media creative systems that communicate value with elegance.",
    price: "$950 / sprint",
    buttonText: "Read More",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
    ],
  },
];

function CardSlideImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      priority={priority}
      onError={() => {
        setImgSrc(
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80"
        );
      }}
    />
  );
}

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
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group relative rounded-[20px] sm:rounded-[22px] p-[7px] pb-0 bg-white dark:bg-[#151622] border border-neutral-200/90 dark:border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_24px_50px_rgba(0,0,0,0.75)] hover:border-neutral-300 dark:hover:border-white/20 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Photo Frame with Interactive 4-Image Slider (Exact Petra Aspect Ratio & Inner Border-Radius) */}
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
            <CardSlideImage
              src={imgUrl}
              alt={`${card.title} - Preview ${imgIdx + 1}`}
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

        {/* Top-Right: Star Rating Badge */}
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

          {/* Row 2: Metadata (Strictly 17px Aventa per user instruction) */}
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

          {/* Row 3: Description (Strictly 17px Aventa per user instruction) */}
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

        {/* Row 4: Footer with Price and Interactive Button with Read More */}
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
              services ({SERVICE_CARDS.length})
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
            Explore all 14 end-to-end digital engineering services—from full-stack web and SaaS development to UI/UX, systems, and brand strategy.
          </p>
        </motion.div>

        {/* ================= 3-COLUMN SERVICES CARDS GRID (All 14 Services) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-9">
          {SERVICE_CARDS.map((card, idx) => (
            <ServiceCardItem key={card.id} card={card} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
