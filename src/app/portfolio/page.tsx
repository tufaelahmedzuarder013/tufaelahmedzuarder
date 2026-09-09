import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricsTicker } from "@/features/home/components/MetricsTicker";
import { CtaBanner } from "@/features/home/components/CtaBanner";
import { CategoryFilters } from "@/features/portfolio/components/CategoryFilters";
import { ProjectGrid } from "@/features/portfolio/components/ProjectGrid";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Portfolio & Case Studies",
  description:
    "Explore full case studies across web apps, e-commerce platforms, SaaS landing pages, and mobile UI builds.",
});

export default function PortfolioPage() {
  return (
    <>
      <PageBanner
        title="My"
        highlightText="Portfolio"
        description="A curated collection of recent work — each project balances speed, aesthetics, and clean code."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />

      <MetricsTicker />

      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow align="center">// All Projects</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink mb-3">
              Work I&apos;m proud of.
            </h2>
            <p className="text-sm text-brand-muted">
              Filter by category or click on any project card to inspect the full technical case study.
            </p>
          </div>

          <CategoryFilters />
          <ProjectGrid />
        </Container>
      </Section>

      <CtaBanner
        title="Like what you see?"
        subtitle="Your project could be featured here next. Let's engineer something worth talking about."
        buttonText="Start a project"
      />
    </>
  );
}
