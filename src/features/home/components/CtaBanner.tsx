import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaBanner({
  title = "Have an idea in mind?",
  subtitle = "Your project could be next. Let's create something high-performing, elegant, and memorable.",
  buttonText = "Start a project",
  buttonHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="cta-banner-dark relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center bg-gradient-to-br from-[#1c1208] via-[#2a1708] to-[#120a03] border border-[#F75B00]/25 text-white shadow-brand">
          {/* Subtle Decorative Rings */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full border border-[#F75B00]/20 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full border border-[#EFC320]/20 pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h2 className="cta-banner-heading font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.06em] [word-spacing:0.25em] leading-[1.25] !text-white text-white" style={{ color: "#ffffff" }}>
              {title}
            </h2>
            <p
              data-no-gsap="true"
              className="text-white-forced text-white/90 text-sm sm:text-base leading-relaxed mb-8"
            >
              {subtitle}
            </p>
            <div className="pt-2">
              <Button
                href={buttonHref}
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
