import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { AboutHeroSection } from "@/features/about/components/AboutHeroSection";
import { AboutPartnerShowcase } from "@/features/about/components/AboutPartnerShowcase";
import { AboutProcessSection } from "@/features/about/components/AboutProcessSection";
import { AboutCollaborationSection } from "@/features/about/components/AboutCollaborationSection";
import { AboutDeepDiveTabs } from "@/features/about/components/AboutDeepDiveTabs";
import { CtaBanner } from "@/features/home/components/CtaBanner";

export const metadata: Metadata = constructMetadata({
  title: "About Me — Tufael Ahmed Zuarder",
  description:
    "Learn more about Tufael Ahmed Zuarder, a professional full-stack web developer and UI/UX designer crafting high-performance, user-centered digital products.",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg transition-colors duration-500">
      {/* 1. Main 3-Column Hero Banner (Reference Image Top) */}
      <AboutHeroSection />

      {/* 2. Intelligent Partner Showcase (Reference Image Section 2) */}
      <AboutPartnerShowcase />

      {/* 3. How I Work — My Process */}
      <AboutProcessSection />

      {/* 4. Collaboration & Dual Mockup Showcase (Reference Image Middle Section) */}
      <AboutCollaborationSection />

      {/* 5. Deep-Dive Skills Matrix & Career Milestones */}
      <AboutDeepDiveTabs />

      {/* 6. High-Conversion Final CTA (Matching Home Page) */}
      <CtaBanner />
    </div>
  );
}
