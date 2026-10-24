import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { constructMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Use",
  description: "Terms and conditions for utilizing the portfolio and code demonstrations of Tufael Ahmed Zuarder.",
});

export default function TermsOfUsePage() {
  return (
    <>
      <PageBanner
        title="Terms of"
        highlightText="Use"
        description="Guidelines and terms governing the use of this website and showcase projects."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use", href: "/terms-of-use" },
        ]}
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 font-sans">
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-brand-muted leading-relaxed">
                By accessing and browsing {SITE_CONFIG.name}&apos;s portfolio website ({SITE_CONFIG.url}), you agree to comply with and be bound by these Terms of Use.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                2. Intellectual Property
              </h2>
              <p className="text-brand-muted leading-relaxed">
                All branding, design assets, bespoke interactive components, and written copy on this portfolio are the intellectual property of {SITE_CONFIG.name} unless otherwise noted. Client projects displayed under case studies remain the respective copyright of their owners or organizations.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                3. Showcase &amp; Demonstrations
              </h2>
              <p className="text-brand-muted leading-relaxed">
                The mockups, project walkthroughs, and code samples provided on this website are intended for portfolio presentation and technical demonstration purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                4. Inquiries &amp; Consultations
              </h2>
              <p className="text-brand-muted leading-relaxed">
                Reaching out through the contact form does not form a binding service contract until a formal statement of work or development agreement is mutually signed.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
