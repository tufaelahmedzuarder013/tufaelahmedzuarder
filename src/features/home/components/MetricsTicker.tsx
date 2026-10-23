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
    <section className="py-14 sm:py-16 relative overflow-hidden bg-brand-bg border-y border-brand-ink/5 dark:border-white/5">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#12121A] border border-neutral-200/80 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex flex-col justify-between overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                {/* Header: Icon + Status Pill */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF5EE] dark:bg-[#1E1510] border border-[#F75B00]/20 dark:border-[#F75B00]/30 shadow-xs flex items-center justify-center text-[#F75B00] dark:text-[#FF7A29]">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#101820]/75 dark:text-zinc-300 bg-[#F8F9FA] dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F75B00]" />
                    {idx === 0 ? "Delivered" : idx === 1 ? "Stack" : idx === 2 ? "Global" : "Flagship"}
                  </span>
                </div>

                {/* Metric Number (Orlean, 27px, 500) */}
                <div className="relative z-10 mb-2">
                  <span
                    style={{
                      fontFamily: "var(--font-orlean), 'Orlean', sans-serif",
                      fontSize: "27px",
                      fontWeight: 500,
                      lineHeight: "1.2",
                    }}
                    className="font-heading font-medium text-[27px] leading-tight block text-[#101820] dark:text-white tracking-normal"
                  >
                    {m.value}
                  </span>
                </div>

                {/* Metric Label & Detail */}
                <div className="relative z-10 space-y-1">
                  <h3 className="font-heading font-medium text-xs sm:text-[13px] text-[#101820] dark:text-[#E2E8F0] tracking-wide leading-tight">
                    {m.label}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-brand-muted dark:text-zinc-400 leading-relaxed font-normal">
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
