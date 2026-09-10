"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCategory } from "../store/portfolioSlice";
import { ProjectCategory } from "../types/project.types";
import { cn } from "@/lib/utils";

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: "All Work", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Landing Pages", value: "landing" },
  { label: "Mobile Apps", value: "mobile" },
];

export function CategoryFilters() {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(
    (state) => state.portfolio.activeCategory
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => dispatch(setCategory(cat.value))}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 cursor-pointer",
              isActive
                ? "bg-brand-gradient text-white shadow-brand-glow"
                : "bg-brand-surface border border-brand-ink/10 text-brand-muted hover:text-brand-ink hover:border-brand-violet/40 dark:bg-white/[0.06] dark:backdrop-blur-xl dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/[0.12] dark:hover:text-white dark:hover:border-brand-violet/50 dark:shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
