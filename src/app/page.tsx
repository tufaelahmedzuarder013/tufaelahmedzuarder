import React from "react";
import { HeroSection } from "@/features/home/components/HeroSection";
import { MetricsTicker } from "@/features/home/components/MetricsTicker";
import { HomeAboutTeaser } from "@/features/home/components/HomeAboutTeaser";
import { ServicesOverview } from "@/features/home/components/ServicesOverview";
import { MissionVisionSection } from "@/features/home/components/MissionVisionSection";
import { FeaturedWork } from "@/features/home/components/FeaturedWork";
import { ProcessBlueprintSection } from "@/features/home/components/ProcessBlueprintSection";
import { ClientReviews } from "@/features/home/components/ClientReviews";
import { CtaBanner } from "@/features/home/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsTicker />
      <HomeAboutTeaser />
      <ServicesOverview />
      <MissionVisionSection />
      <FeaturedWork />
      <ProcessBlueprintSection />
      <ClientReviews />
      <CtaBanner />
    </>
  );
}
