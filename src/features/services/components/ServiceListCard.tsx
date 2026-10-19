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
        {/* RIGHT COLUMN: 3D Tablet Showcase Area matching Reference Image           */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 relative bg-gradient-to-br from-[#1C3831] via-[#112923] to-[#0A1A16] dark:from-[#0B1E19] dark:via-[#071713] dark:to-[#040C0A] p-6 sm:p-10 lg:p-12 flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[420px]">
          {/* Subtle Vertical Ribbed / Pinstripes Texture matching reference */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_100%] pointer-events-none" />

          {/* Ambient Glow Orb */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#F75B00]/20 to-[#EFC320]/20 blur-3xl pointer-events-none" />

          {/* Floating Top-Left Tag Badge */}
          <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] uppercase tracking-wider font-semibold shadow-xs">
            {service.tag || "SERVICE"}
          </div>

          {/* Floating Top-Right Category Label */}
          <div className="absolute top-5 right-5 z-20 text-white/70 font-mono text-[11px] uppercase tracking-wider font-medium">
            {service.category || "FEATURED"}
          </div>

          {/* Floating Bottom-Right Circular Arrow Button */}
          <Link
            href={`/services/${service.slug}`}
            aria-label={`View ${service.title}`}
            className="absolute bottom-5 right-5 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-gradient-to-r hover:from-[#F75B00] hover:to-[#EFC320] hover:text-white text-white backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>

          {/* 100% Code-Rendered Live Interactive Dashboard Showcase with Live Text (Zero Static Images) */}
          <ServiceLiveShowcase slug={service.slug} title={service.title} />
        </div>
      </div>
    </div>
  );
}
