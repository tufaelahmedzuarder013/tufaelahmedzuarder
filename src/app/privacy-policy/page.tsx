import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { constructMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and data protection guidelines for Tufael Ahmed Zuarder portfolio website.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy"
        highlightText="Policy"
        description="How personal information is handled when you interact with this portfolio."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 font-sans">
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                1. Overview
              </h2>
              <p className="text-brand-muted leading-relaxed">
                This Privacy Policy explains how information is collected, used, and safeguarded when visiting {SITE_CONFIG.url} or communicating via the contact forms and inquiry channels.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                2. Information Collected
              </h2>
              <p className="text-brand-muted leading-relaxed">
                When you submit a project inquiry or contact request through the site, the information provided—such as your name, email address, project specifications, and timeline—is collected exclusively to evaluate and respond to your inquiry. No personal data is ever sold, rented, or distributed to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                3. Cookies &amp; Local Storage
              </h2>
              <p className="text-brand-muted leading-relaxed">
                This site uses local browser storage strictly for functional preferences (such as remembering your dark/light theme setting and preventing the intro preloader from displaying repeatedly during a single session).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                4. Contact Information
              </h2>
              <p className="text-brand-muted leading-relaxed">
                For questions regarding this policy or to request removal of your communications, contact directly at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[#F75B00] hover:underline font-medium"
                >
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
