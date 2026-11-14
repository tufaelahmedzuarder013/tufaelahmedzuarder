import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/features/services/data/services.data";
import { ServicesHeroSection } from "@/features/services/components/ServicesHeroSection";
import { ServicesWaveProcessSection } from "@/features/services/components/ServicesWaveProcessSection";
import { ServicesCardsShowcaseSection } from "@/features/services/components/ServicesCardsShowcaseSection";
import { ServicesMethodologySection } from "@/features/services/components/ServicesMethodologySection";
import { ServicesTechMarquee } from "@/features/services/components/ServicesTechMarquee";
import { ServicesPhilosophySection } from "@/features/services/components/ServicesPhilosophySection";
import { ServicesBottomCta } from "@/features/services/components/ServicesBottomCta";
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

      {/* 2. Flowing Wave Process Section */}
      <ServicesWaveProcessSection />

      {/* 3. Services Cards Showcase (Card Design from User Image) */}
      <ServicesCardsShowcaseSection services={SERVICES} />

      {/* 4. 5-Tier Engineering Architecture & Methodology (New Section from User Reference Image) */}
      <ServicesMethodologySection />

      {/* 5. Tech Partners Strip */}
      <ServicesTechMarquee />

      {/* 6. About My Services & Philosophy */}
      <ServicesPhilosophySection />

      {/* 7. Clean, Minimal Bottom Touchpoint with Smooth In-View Animation */}
      <ServicesBottomCta />
    </div>
  );
}
