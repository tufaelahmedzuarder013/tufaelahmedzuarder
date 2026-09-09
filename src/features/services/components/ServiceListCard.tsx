import React from "react";
import Link from "next/link";
import { Code, Palette, Zap, Sparkles, ArrowUpRight } from "lucide-react";
import { ServiceItem } from "../types/service.types";
import { TiltCard } from "@/components/animation/TiltCard";

interface ServiceListCardProps {
  service: ServiceItem;
}

const ICONS = {
  code: Code,
  palette: Palette,
  zap: Zap,
  sparkles: Sparkles,
};

export function ServiceListCard({ service }: ServiceListCardProps) {
  const IconComponent =
    ICONS[service.icon as keyof typeof ICONS] || Code;

  return (
    <TiltCard>
      <Link
        href={`/services/${service.slug}`}
        className="group block h-full p-8 rounded-3xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm hover:shadow-brand transition-all duration-300 relative overflow-hidden"
      >
        {/* Top Icon Badge */}
        <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 text-brand-violet flex items-center justify-center mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title & Short Description */}
        <h3 className="font-heading text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-violet transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-brand-muted leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Deliverables snippet */}
        <ul className="space-y-2 mb-6 border-t border-brand-ink/5 pt-4">
          {service.included.slice(0, 3).map((item, idx) => (
            <li
              key={idx}
              className="text-xs text-brand-ink2 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Link Action */}
        <div className="flex items-center gap-1 font-heading text-xs font-semibold text-brand-violet group-hover:translate-x-1 transition-transform">
          <span>Learn more</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </Link>
    </TiltCard>
  );
}
