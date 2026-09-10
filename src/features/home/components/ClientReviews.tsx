import React from "react";
import { Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TESTIMONIALS } from "../data/testimonials.data";
import { TiltCard } from "@/components/animation/TiltCard";

export function ClientReviews() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow align="center">{"// Client Feedback"}</Eyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink">
            What partners say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <TiltCard key={review.id}>
              <div className="p-8 rounded-3xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm h-full flex flex-col justify-between">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-brand-ink2 leading-relaxed italic mb-8">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-brand-ink/5">
                  <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center font-heading font-bold text-sm text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <b className="font-heading font-semibold text-sm text-brand-ink block">
                      {review.name}
                    </b>
                    <small className="font-mono text-xs text-brand-muted">
                      {review.role}, {review.company}
                    </small>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
