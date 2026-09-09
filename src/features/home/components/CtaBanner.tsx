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
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center bg-brand-gradient text-white shadow-brand">
          {/* Subtle Decorative Rings */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full border border-white/20 pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="pt-2">
              <Button
                href={buttonHref}
                variant="white"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4 text-brand-violet" />}
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
