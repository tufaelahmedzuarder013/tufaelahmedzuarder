import React from "react";
import type { Metadata } from "next";
import { ServicesHeroSection } from "@/features/services/components/ServicesHeroSection";
import { ServicesTechMarquee } from "@/features/services/components/ServicesTechMarquee";
import { ServicesWaveProcessSection } from "@/features/services/components/ServicesWaveProcessSection";
import { ServicesCardsShowcaseSection } from "@/features/services/components/ServicesCardsShowcaseSection";
import { ServicesMethodologySection } from "@/features/services/components/ServicesMethodologySection";
import { CtaBanner } from "@/features/home/components/CtaBanner";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Services & Digital Engineering — Tufael Ahmed Zuarder",
  description:
    "Full-stack web applications, custom SaaS platforms, and bespoke UI/UX design systems engineered for scale.",
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-bg transition-colors duration-500">
      {/* 1. Hero Showcase with Signature Kinetic Text Reveal */}
      <ServicesHeroSection />

      {/* 2. Technologies Marquee Strip (Right after Hero - Continuous Infinite Loop) */}
      <ServicesTechMarquee />

      {/* 3. Flowing Wave Process Section */}
      <ServicesWaveProcessSection />

      {/* 4. Complete Services Showcase (All 14 Services - Exact Petra Spec Card Design & Read More) */}
      <ServicesCardsShowcaseSection />

      {/* 5. 5-Tier Engineering Architecture & Methodology */}
      <ServicesMethodologySection />

      {/* 6. Signature Professional Interactive CTA Section (Exact as Home Page) */}
      <CtaBanner />
    </div>
  );
}
