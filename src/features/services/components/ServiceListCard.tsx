import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "../types/service.types";
import { ServiceLiveShowcase } from "./ServiceLiveShowcase";

interface ServiceListCardProps {
  service: ServiceItem;
  priority?: boolean;
}

export function ServiceListCard({ service, priority = false }: ServiceListCardProps) {
  return (
    <div className="relative rounded-[30px] sm:rounded-[36px] bg-white dark:bg-[#11211C] border border-brand-ink/10 dark:border-white/10 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.75)] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(247,91,0,0.24)] hover:border-[#F75B00]/50 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Content, Metrics & Action Link                                */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
          <div>
            {/* Category Pill Tag & Breadcrumb */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-neutral-900 dark:text-[#F75B00] bg-[#F75B00]/15 border border-[#F75B00]/40 uppercase">
                {service.tag || "SERVICE"}
              </span>
              <span className="font-mono text-xs text-brand-muted2 tracking-wider uppercase font-medium">
                / {service.category || "EXPERTISE"}
              </span>
            </div>

            {/* Service Title */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-brand-ink tracking-[0.03em] [word-spacing:0.15em] leading-[1.2] mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F75B00] group-hover:via-[#EFC320] group-hover:to-[#F75B00] dark:group-hover:from-white dark:group-hover:via-[#F75B00] dark:group-hover:to-[#EFC320] transition-all duration-300">
              {service.title}
            </h3>

            {/* Overview / Problem-Solution Description */}
            <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
              {service.overview}
            </p>

            {/* Deliverables / Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {service.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-brand-soft border border-brand-ink/5 dark:border-white/10 font-mono text-[11px] text-brand-muted font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Metrics Ribbon + Action Link */}
          <div className="border-t border-brand-ink/10 dark:border-white/10 pt-6">
            {/* 3 Metric Columns (Exact match with reference image) */}
            {service.metrics && service.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-6">
                {service.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-[28px] text-brand-ink dark:text-[#F75B00] block leading-none mb-1.5">
                      {m.value}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-brand-muted2 uppercase tracking-wider block font-semibold leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Link: View Service Details with Circle Arrow */}
            <div className="pt-1 flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2.5 font-heading text-sm font-bold text-brand-ink group/btn hover:text-[#F75B00] transition-colors"
              >
                <span>View Service Details</span>
                <span className="w-8 h-8 rounded-full border border-brand-ink/15 dark:border-white/20 flex items-center justify-center group-hover/btn:border-[#F75B00] group-hover/btn:bg-gradient-to-r group-hover/btn:from-[#F75B00] group-hover/btn:to-[#EFC320] group-hover/btn:text-white transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4 text-brand-ink group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: 100% Live Interactive Showcase (100% Transparent Background) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 relative p-3 sm:p-6 lg:p-8 flex items-center justify-center overflow-hidden bg-transparent">
          {/* 100% Code-Rendered Live Interactive Dashboard Showcase (Zero Static Images) */}
          <ServiceLiveShowcase slug={service.slug} title={service.title} />
        </div>
      </div>
    </div>
  );
}
