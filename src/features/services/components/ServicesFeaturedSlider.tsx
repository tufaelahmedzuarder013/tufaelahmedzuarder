"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Code, Palette, Zap, Smartphone, Layers, ShieldCheck } from "lucide-react";
import { ServiceItem } from "../types/service.types";

interface ServicesFeaturedSliderProps {
  services: ServiceItem[];
}

const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "/images/services/web-dev-showcase.jpg",
  "ui-ux-design": "/images/services/uiux-design-showcase.jpg",
  "performance-optimization": "/images/services/performance-showcase.jpg",
  "motion-interaction": "/images/services/motion-showcase.jpg",
  "custom-development": "/images/services/developer_3d_desk.png",
  "mobile-app-development": "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
  "software-development": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  "saas-products-development": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export function ServicesFeaturedSlider({ services }: ServicesFeaturedSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = services.slice(0, 8);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-4 h-4 text-white" />;
      case "palette":
        return <Palette className="w-4 h-4 text-white" />;
      case "zap":
        return <Zap className="w-4 h-4 text-white" />;
      case "smartphone":
        return <Smartphone className="w-4 h-4 text-white" />;
      case "layers":
        return <Layers className="w-4 h-4 text-white" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 overflow-hidden" aria-label="Featured Services">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        
        {/* Header (Clean & Text-Reduced) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F75B00]" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-brand-muted">
                Our Services
              </span>
            </div>
            <h2 
              style={{ fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-brand-ink tracking-tight"
            >
              Everything your business{" "}
              <span className="italic font-serif font-light text-[#F75B00]">
                needs to scale
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-brand-muted max-w-xs font-sans font-light leading-relaxed hidden sm:block">
              End-to-end design and engineering — from concept to cloud production.
            </p>

            {/* Slider Navigation Arrow Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-neutral-300 dark:border-white/15 bg-brand-surface hover:bg-neutral-100 dark:hover:bg-white/10 flex items-center justify-center text-brand-ink transition-transform duration-200 active:scale-95 cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next"
                className="w-11 h-11 rounded-full border border-neutral-300 dark:border-white/15 bg-brand-surface hover:bg-neutral-100 dark:hover:bg-white/10 flex items-center justify-center text-brand-ink transition-transform duration-200 active:scale-95 cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Deck */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {featured.map((service, index) => {
            const imageSrc = SERVICE_IMAGES[service.slug] || service.showcaseImage || service.heroImage;

            return (
              <div
                key={service.id || index}
                className="group relative w-[280px] sm:w-[310px] md:w-[330px] h-[460px] sm:h-[490px] rounded-[2rem] overflow-hidden shrink-0 bg-neutral-900 border border-neutral-200/80 dark:border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                {/* Background Image */}
                <Image
                  src={imageSrc}
                  alt={service.title}
                  fill
                  sizes="330px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />

                {/* Ambient Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 group-hover:from-black/95 transition-all duration-300" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-neutral-200">
                    {service.tag || "SERVICE"}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Bottom Card Content (Text Reduced & Clean) */}
                <div className="absolute bottom-6 inset-x-6 space-y-3.5 z-10">
                  <div>
                    <h3 
                      style={{
                        fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
                        color: "#ffffff",
                      }}
                      className="text-xl sm:text-2xl font-bold tracking-tight !text-white leading-tight mb-1.5"
                    >
                      {service.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: "var(--font-aventa), sans-serif",
                        color: "rgba(255, 255, 255, 0.72)",
                      }}
                      className="text-xs text-neutral-300 line-clamp-2 leading-relaxed font-light"
                    >
                      {service.shortDesc || service.overview}
                    </p>
                  </div>

                  {/* Clean Learn More Pill */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#101820] hover:bg-neutral-100 text-xs font-semibold transition-all duration-200 shadow-sm hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
