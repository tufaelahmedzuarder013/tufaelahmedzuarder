"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TESTIMONIALS, TestimonialItem } from "../data/testimonials.data";

export function ClientReviews() {
  const [selectedReview, setSelectedReview] = useState<TestimonialItem | null>(null);

  // Split testimonials into 2 rows for the staggered multi-row layout (matching reference image)
  const row1 = TESTIMONIALS.slice(0, 5);
  const row2 = TESTIMONIALS.slice(5, 10);

  // Duplicate for seamless infinite marquee flow
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-white dark:bg-[#0A0F0D] overflow-hidden border-t border-brand-ink/5 dark:border-white/5">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#F75B00]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#EFC320]/5 rounded-full blur-[140px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-center md:text-left">
          <div className="mx-auto md:mx-0 max-w-2xl">
            <Eyebrow>{"// CLIENT FEEDBACK & REPUTATION"}</Eyebrow>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-ink tracking-[0.03em] [word-spacing:0.18em] leading-[1.2]">
              What clients say.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#101820] dark:text-[#E2E8F0] mt-3">
              Real testimonials from founders, product leaders, and engineering teams across 7 countries.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F75B00]/10 border border-[#F75B00]/25 text-[#F75B00] font-mono text-xs font-bold self-center md:self-auto">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>5.0 AVERAGE RATING • 100% SATISFACTION</span>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* Staggered Dual-Row Marquee Carousel (Exact Match with Reference Image)    */}
      {/* ========================================================================= */}
      <div className="space-y-6 sm:space-y-8 select-none">
        {/* ROW 1: Flowing Left */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-5 sm:gap-6 w-max animate-marquee-left hover:[animation-play-state:paused] py-2">
            {marqueeRow1.map((item, idx) => (
              <ReviewCard
                key={`row1-${item.id}-${idx}`}
                item={item}
                onOpen={() => setSelectedReview(item)}
              />
            ))}
          </div>
        </div>

        {/* ROW 2: Flowing Right (Offset & Staggered) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-5 sm:gap-6 w-max animate-marquee-right hover:[animation-play-state:paused] py-2">
            {marqueeRow2.map((item, idx) => (
              <ReviewCard
                key={`row2-${item.id}-${idx}`}
                item={item}
                onOpen={() => setSelectedReview(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Interactive Full Review Modal                                             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#121614] border border-[#F75B00]/30 p-7 sm:p-9 shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                aria-label="Close review"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-brand-soft border border-brand-ink/10 flex items-center justify-center text-brand-muted hover:text-brand-ink hover:border-[#F75B00] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Stars & Rating */}
              <div className="flex items-center gap-1.5 text-[#F75B00] mb-4">
                {Array.from({ length: selectedReview.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="font-mono text-sm font-bold text-[#F75B00] ml-1">
                  {selectedReview.stars}.0
                </span>
              </div>

              {/* Highlight Metric Pill */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-[#F75B00] bg-[#F75B00]/10 border border-[#F75B00]/25 mb-4">
                {selectedReview.highlightMetric}
              </span>

              {/* Full Quote */}
              <p className="font-sans text-base text-brand-ink leading-relaxed mb-6">
                &ldquo;{selectedReview.quote}&rdquo;
              </p>

              {/* Dashed line */}
              <div className="border-t border-dashed border-[#F75B00]/25 dark:border-white/10 my-4" />

              {/* Author */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#F75B00]/40 relative bg-neutral-100 shrink-0">
                  <Image
                    src={selectedReview.avatar}
                    alt={selectedReview.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-brand-ink flex items-center gap-1.5">
                    {selectedReview.name}
                    <CheckCircle2 className="w-4 h-4 text-[#F75B00]" />
                  </h4>
                  <p className="font-sans text-xs text-brand-muted">
                    {selectedReview.role} • {selectedReview.company} ({selectedReview.location})
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// =============================================================================
// Individual Review Card (Pixel-accurate to Image 1)
// =============================================================================
function ReviewCard({
  item,
  onOpen,
}: {
  item: TestimonialItem;
  onOpen: () => void;
}) {
  return (
    <div className="w-[330px] sm:w-[370px] shrink-0 rounded-2xl sm:rounded-3xl bg-[#FFF9F6] dark:bg-[#131916] border border-[#F75B00]/20 dark:border-white/10 p-5 sm:p-6 shadow-[0_4px_20px_rgba(247,91,0,0.05)] hover:shadow-[0_12px_32px_rgba(247,91,0,0.14)] hover:border-[#F75B00]/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top: 5 Stars + Number 5 */}
        <div className="flex items-center gap-1.5 text-[#F75B00] mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: item.stars }).map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-current text-[#F75B00]"
              />
            ))}
          </div>
          <span className="font-mono text-xs font-bold text-[#F75B00] ml-1">
            {item.stars}
          </span>
        </div>

        {/* Review Quote text with quotes */}
        <p className="font-sans text-xs sm:text-sm text-[#101820] dark:text-[#E2E8F0] leading-relaxed line-clamp-3">
          &ldquo; {item.quote} &rdquo;
        </p>

        {/* See More > Link */}
        <button
          type="button"
          onClick={onOpen}
          className="text-[#F75B00] text-xs font-bold mt-2.5 inline-flex items-center gap-0.5 hover:underline cursor-pointer group/link"
        >
          <span>See More</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
        </button>
      </div>

      {/* Subtle Dashed Divider Line (from Reference Screenshot) */}
      <div>
        <div className="border-t border-dashed border-[#F75B00]/20 dark:border-white/10 my-4" />

        {/* Author Profile Bottom */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#F75B00]/30 relative bg-neutral-200 shrink-0">
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-ink truncate">
              {item.name}
            </h4>
            <p className="font-sans text-[11px] text-brand-muted truncate">
              {item.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
