import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaBanner } from "@/features/home/components/CtaBanner";
import { SERVICES } from "@/features/services/data/services.data";
import { ServicesCatalogView } from "@/features/services/components/ServicesCatalogView";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Services",
  description:
    "Explore full-stack web development, mobile apps, SaaS, software development, CRM, HR systems, CMS, branding, and digital marketing.",
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services &"
        highlightText="Expertise"
        description="Scalable engineering, cloud architectures, and design services tailored for founders, agencies, and high-growth teams."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <Section className="overflow-visible">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <Eyebrow align="center">{"// What I Deliver"}</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink">
              Comprehensive digital solutions.
            </h2>
          </div>

          <ServicesCatalogView services={SERVICES} />
        </Container>
      </Section>

      <CtaBanner
        title="Need a tailored custom solution?"
        subtitle="Every project has unique requirements. Reach out and I will prepare a customized scope and roadmap."
        buttonText="Discuss your project"
      />
    </>
  );
}
