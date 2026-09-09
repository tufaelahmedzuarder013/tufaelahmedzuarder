import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { ContactInfoCards } from "@/features/contact/components/ContactInfoCards";
import { FaqAccordion } from "@/features/contact/components/FaqAccordion";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Start a Project",
  description:
    "Get in touch with Tufael Ahmed Zuarder for freelance projects, web development contracts, or collaborations.",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get in"
        highlightText="Touch"
        description="Have a project in mind or want to discuss technical architecture? I'd love to connect."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <Eyebrow>// Let&apos;s connect</Eyebrow>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
                  Let&apos;s build something great.
                </h2>
                <p className="text-base text-brand-muted leading-relaxed mb-6">
                  I&apos;m currently available for freelance projects, technical contract roles, and design system consulting. Send a message or reach out directly.
                </p>
              </div>

              <ContactInfoCards />
            </div>

            {/* Redux-Connected Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section softBg>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow align="center">// Frequently Asked Questions</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink">
              Before you reach out.
            </h2>
          </div>

          <FaqAccordion />
        </Container>
      </Section>
    </>
  );
}
