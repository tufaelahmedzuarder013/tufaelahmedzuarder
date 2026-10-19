import React from "react";
import { FolderGit2, Cpu, Users, Award } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function MetricsTicker() {
  const metrics = [
    {
      value: SITE_CONFIG.stats.projects,
      label: "Completed Projects",
      detail: "100% on-time delivery",
      icon: FolderGit2,
      accentColor: "#F75B00",
    },
    {
      value: SITE_CONFIG.stats.tech,
      label: "Modern Technologies",
      detail: "Full-stack ecosystem",
      icon: Cpu,
      accentColor: "#EFC320",
    },
    {
      value: SITE_CONFIG.stats.clients,
      label: "Happy Clients Worldwide",
      detail: "Global collaboration",
      icon: Users,
      accentColor: "#F75B00",
    },
    {
      value: `${SITE_CONFIG.stats.featured}`,
      label: "Featured Case Studies",
      detail: "Production benchmarks",
      icon: Award,
      accentColor: "#EFC320",
    },
  ];

  return (
    <section className="py-14 sm:py-16 relative overflow-hidden bg-gradient-to-b from-brand-bg via-brand-soft/60 to-brand-bg border-y border-brand-ink/5 dark:border-white/5">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#F75B00]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-[#EFC320]/10 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-brand-surface/90 dark:bg-white/[0.03] backdrop-blur-xl border border-brand-ink/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F75B00]/60 hover:shadow-[0_20px_40px_-15px_rgba(247,91,0,0.25)] flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Top Shimmer Highlight line on hover */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#F75B00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle corner glow blob */}
                <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-[#F75B00]/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                {/* Header: Icon + Status Pill */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F75B00]/20 border border-[#F75B00]/50 flex items-center justify-center text-neutral-950 dark:text-[#F75B00] group-hover:scale-110 group-hover:border-[#F75B00] transition-all duration-300 shadow-xs">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  <span className="font-mono text-[10px] tracking-wider text-brand-muted2 uppercase px-2 py-0.5 rounded-full bg-brand-ink/[0.04] dark:bg-white/[0.06] border border-brand-ink/5 dark:border-white/10">
                    {idx === 0 ? "Delivered" : idx === 1 ? "Stack" : idx === 2 ? "Global" : "Flagship"}
                  </span>
                </div>

                {/* Metric Number */}
                <div className="relative z-10 mb-2">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-none tracking-tight block bg-gradient-to-r from-[#F75B00] to-[#EFC320] bg-clip-text text-transparent group-hover:scale-[1.02] origin-left transition-transform duration-300">
                    {m.value}
                  </span>
                </div>

                {/* Metric Label & Detail */}
                <div className="relative z-10 space-y-1">
                  <h3 className="font-heading font-semibold text-xs sm:text-sm text-brand-ink tracking-wide leading-tight group-hover:text-brand-ink transition-colors">
                    {m.label}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-brand-muted leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
