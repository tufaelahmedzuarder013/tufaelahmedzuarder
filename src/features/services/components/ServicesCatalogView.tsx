"use client";

import React, { useState } from "react";
import { ServiceItem } from "../types/service.types";
import { ServiceListCard } from "./ServiceListCard";
import { Layers, Sparkles } from "lucide-react";

interface ServicesCatalogViewProps {
  services: ServiceItem[];
}

type CategoryFilter = "all" | "engineering" | "apps-saas" | "enterprise" | "creative" | "growth";

const CATEGORIES: { id: CategoryFilter; label: string; countMatches: (s: ServiceItem) => boolean }[] = [
  {
    id: "all",
    label: "All Services",
    countMatches: () => true,
  },
  {
    id: "engineering",
    label: "Web & Custom Dev",
    countMatches: (s) =>
      ["web-development", "custom-development", "software-development", "cms-development"].includes(s.slug),
  },
  {
    id: "apps-saas",
    label: "Mobile & SaaS",
    countMatches: (s) => ["mobile-app-development", "saas-products-development"].includes(s.slug),
  },
  {
    id: "enterprise",
    label: "Business Systems",
    countMatches: (s) => ["hr-management-system", "crm-system"].includes(s.slug),
  },
  {
    id: "creative",
    label: "Design & Branding",
    countMatches: (s) =>
      ["ui-ux-design", "branding", "graphic-design", "motion-interaction"].includes(s.slug),
  },
  {
    id: "growth",
    label: "Performance & Growth",
    countMatches: (s) => ["performance-optimization", "digital-marketing"].includes(s.slug),
  },
];

export function ServicesCatalogView({ services }: ServicesCatalogViewProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredServices = services.filter((s) => {
    const cat = CATEGORIES.find((c) => c.id === activeCategory);
    return cat ? cat.countMatches(s) : true;
  });

  return (
    <div>
      {/* Category Filter Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 sm:mb-16">
        {CATEGORIES.map((cat) => {
          const count = services.filter(cat.countMatches).length;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-[#F75B00] text-white shadow-[0_8px_20px_-4px_rgba(247,91,0,0.4)] scale-105"
                  : "bg-white dark:bg-[#11211C] text-brand-muted hover:text-brand-ink dark:hover:text-white border border-brand-ink/10 dark:border-white/10 hover:border-[#F75B00]/40"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-brand-soft dark:bg-white/10 text-brand-muted2"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Services List Deck */}
      <div className="relative pb-16 sm:pb-24 space-y-8 sm:space-y-12">
        {filteredServices.map((service, idx) => (
          <div key={service.id} className="transition-all duration-300">
            <ServiceListCard service={service} priority={idx === 0} />
          </div>
        ))}

        {filteredServices.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-brand-surface border border-brand-ink/10">
            <Layers className="w-10 h-10 text-brand-muted mx-auto mb-3" />
            <h3 className="font-heading text-lg font-bold text-brand-ink mb-1">
              No services found in this category
            </h3>
            <p className="text-sm text-brand-muted">
              Select another category or view all services.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
