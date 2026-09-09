import React from "react";
import { HeroSection } from "@/features/home/components/HeroSection";
import { MetricsTicker } from "@/features/home/components/MetricsTicker";
import { ServicesOverview } from "@/features/home/components/ServicesOverview";
import { FeaturedWork } from "@/features/home/components/FeaturedWork";
import { ClientReviews } from "@/features/home/components/ClientReviews";
import { CtaBanner } from "@/features/home/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsTicker />
      <ServicesOverview />
      <FeaturedWork />
      <ClientReviews />
      <CtaBanner
        title="Ready to bring your vision to life?"
        subtitle="Let's build a web experience that exceeds expectations. Open for new contracts and freelance projects."
        buttonText="Get in touch"
      />
    </>
  );
}
