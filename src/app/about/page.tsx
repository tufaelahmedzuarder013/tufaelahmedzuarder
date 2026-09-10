import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BioSplit } from "@/features/about/components/BioSplit";
import { SkillsMatrix } from "@/features/about/components/SkillsMatrix";
import { CareerTimeline } from "@/features/about/components/CareerTimeline";
import { MetricsTicker } from "@/features/home/components/MetricsTicker";
import { CtaBanner } from "@/features/home/components/CtaBanner";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Me",
  description:
    "Learn more about Tufael Ahmed Zuarder, his background in full-stack web development, and the tech stack he uses.",
});

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About"
        highlightText="Me"
        description="Full-stack engineer crafting fast, accessible, user-centered web applications."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <Section>
        <Container>
          <BioSplit />
        </Container>
      </Section>

      <MetricsTicker />

      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow align="center">{"// Technical Stack"}</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink">
              Tools & frameworks I master.
            </h2>
          </div>
          <SkillsMatrix />
        </Container>
      </Section>

      <Section softBg>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow align="center">{"// Career Path"}</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink">
              Milestones & experience.
            </h2>
          </div>
          <CareerTimeline />
        </Container>
      </Section>

      <CtaBanner
        title="Let's build something exceptional."
        subtitle="Looking for an experienced full-stack developer? I'd love to chat about your next big project."
        buttonText="Get in touch"
      />
    </>
  );
}
