import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/features/services/data/services.data";
import { ServicesHeroSection } from "@/features/services/components/ServicesHeroSection";
import { ServicesWaveProcessSection } from "@/features/services/components/ServicesWaveProcessSection";
import { ServicesTechMarquee } from "@/features/services/components/ServicesTechMarquee";
import { ServicesPhilosophySection } from "@/features/services/components/ServicesPhilosophySection";
import { ServicesFeaturedSlider } from "@/features/services/components/ServicesFeaturedSlider";
import { ServicesProcessSection } from "@/features/services/components/ServicesProcessSection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Services & Digital Engineering — Tufael Ahmed Zuarder",
  description:
    "Full-stack web applications, custom SaaS platforms, and bespoke UI/UX design systems engineered for scale.",
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-bg transition-colors duration-500">
      {/* 1. Hero Showcase (Section 1) */}
      <ServicesHeroSection />

      {/* 2. Flowing Wave Process Section (Added right after Hero) */}
      <ServicesWaveProcessSection />

      {/* 3. Tech Partners Strip */}
      <ServicesTechMarquee />

      {/* 3. About My Services & Philosophy (Section 3) */}
      <ServicesPhilosophySection />

      {/* 4. Featured Services Slider (Section 4) */}
      <ServicesFeaturedSlider services={SERVICES} />

      {/* 5. Process Bento Grid (Section 5) */}
      <ServicesProcessSection />

      {/* 6. Clean, Minimal Bottom Touchpoint (No Form) */}
      <section className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-white/10 text-center">
        <div className="w-full max-w-4xl px-4 mx-auto space-y-6">
          <h3
            style={{ fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif" }}
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-brand-ink tracking-tight"
          >
            Ready to build your next digital product?
          </h3>
          <p className="text-sm sm:text-base text-brand-muted max-w-md mx-auto font-sans font-light">
            Let&apos;s discuss your requirements, timeline, and architecture.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
              }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#F75B00]/25 hover:shadow-xl hover:shadow-[#F75B00]/40 hover:scale-105"
            >
              <span className="font-sans font-normal text-[16px] text-white">
                Get a Free Quote
              </span>
              <span className="w-7 h-7 rounded-full bg-white text-[#101820] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
