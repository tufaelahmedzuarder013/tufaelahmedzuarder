import React from "react";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function MetricsTicker() {
  const metrics = [
    { value: SITE_CONFIG.stats.projects, label: "Completed Projects" },
    { value: SITE_CONFIG.stats.tech, label: "Modern Technologies" },
    { value: SITE_CONFIG.stats.clients, label: "Happy Clients Worldwide" },
    { value: `${SITE_CONFIG.stats.featured}`, label: "Featured Case Studies" },
  ];

  return (
    <section className="py-12 bg-brand-soft border-y border-brand-ink/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-surface border border-brand-ink/10 shadow-brand-sm"
            >
              <b className="font-heading text-3xl sm:text-4xl font-bold bg-brand-gradient bg-clip-text text-transparent block mb-1">
                {m.value}
              </b>
              <small className="font-mono text-xs text-brand-muted">
                {m.label}
              </small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
