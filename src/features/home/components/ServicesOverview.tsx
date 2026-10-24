import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/features/services/data/services.data";
import { ServiceListCard } from "@/features/services/components/ServiceListCard";

const FEATURED_OVERVIEW_SLUGS = [
  "custom-development",
  "mobile-app-development",
  "digital-marketing",
  "cms-development",
  "ui-ux-design",
];

const STACK_MARGIN_CLASSES = [
  "mb-[226px] sm:mb-[286px]", // Card 0: Custom Development (top: 84px)
  "mb-[202px] sm:mb-[262px]", // Card 1: Mobile App Development (top: 108px)
  "mb-[178px] sm:mb-[238px]", // Card 2: Digital Marketing (top: 132px)
  "mb-[154px] sm:mb-[214px]", // Card 3: CMS Development (top: 156px)
  "mb-[130px] sm:mb-[190px]", // Card 4: UI / UX & Product Design (top: 180px)
];

export function ServicesOverview() {
  const featuredServices = FEATURED_OVERVIEW_SLUGS.map((slug) =>
    SERVICES.find((s) => s.slug === slug)
  ).filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-gradient-to-b from-brand-bg via-brand-soft/40 to-brand-bg">
      {/* Ambient background glow orbs safely clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#EFC320]/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-[#F75B00]/8 rounded-full blur-[130px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F75B00]/40 bg-[#F75B00]/10 text-neutral-900 dark:text-[#F75B00] uppercase tracking-[0.12em] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F75B00]" />
              <span
                style={{
                  fontFamily: "var(--font-orlean), 'Orlean', sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                }}
              >
                What I Offer
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-ink tracking-[0.04em] [word-spacing:0.18em] leading-[1.2]">
              End-to-end web engineering.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#101820] dark:text-[#E2E8F0] mt-3 max-w-xl">
              Scalable codebases, thoughtful UI/UX systems, and lightning-fast web architectures engineered for real business growth.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/services"
              variant="ghost"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Full Service Catalog
            </Button>
          </div>
        </div>

        {/* Sticky Stacking Cards Deck (Smooth scroll layer effect) */}
        <div className="relative pb-12 sm:pb-16">
          {featuredServices.map((service, idx) => (
            <div
              key={service.id}
              className={`sticky transition-all duration-300 ${
                STACK_MARGIN_CLASSES[idx] || "mb-[130px] sm:mb-[190px]"
              }`}
              style={{
                top: `calc(84px + ${idx * 24}px)`,
                zIndex: 10 + idx,
              }}
            >
              <ServiceListCard
                service={service}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Bottom Exploration Banner CTA */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-brand-ink/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F75B00]/15 border border-[#F75B00]/40 flex items-center justify-center text-neutral-900 dark:text-[#F75B00] shrink-0">
              <Layers className="w-5 h-5 text-[#F75B00]" />
            </div>
            <div>
              <span className="font-heading font-bold text-sm text-brand-ink block">
                Looking for a tailored architecture?
              </span>
              <span className="font-sans text-xs text-brand-muted block">
                Custom scopes, design systems, and dedicated full-stack sprints available.
              </span>
            </div>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a project
          </Button>
        </div>
      </Container>
    </section>
  );
}
