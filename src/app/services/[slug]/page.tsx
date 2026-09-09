import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { CtaBanner } from "@/features/home/components/CtaBanner";
import { SERVICES } from "@/features/services/data/services.data";
import { ServiceDetailView } from "@/features/services/components/ServiceDetailView";
import { constructMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return constructMetadata({ title: "Service Not Found" });

  return constructMetadata({
    title: `${service.title} Service`,
    description: service.shortDesc,
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={service.title}
        highlightText="Service"
        description={service.shortDesc}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      <Section>
        <Container>
          <ServiceDetailView service={service} />
        </Container>
      </Section>

      <CtaBanner
        title={`Interested in ${service.title}?`}
        subtitle="Let's discuss how we can engineer this service to achieve your immediate business goals."
        buttonText="Get started"
      />
    </>
  );
}
