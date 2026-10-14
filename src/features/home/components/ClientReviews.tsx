"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Sparkles,
  Award,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TESTIMONIALS } from "../data/testimonials.data";

export function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const gapPx = 24;

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCards);

  // Keep index in valid bounds when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-brand-bg overflow-hidden border-t border-brand-ink/5 dark:border-white/5">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#61CED9]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#06D6A0]/8 rounded-full blur-[140px]" />
      </div>

      <Container>
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <Eyebrow>{"// PARTNER TESTIMONIALS"}</Eyebrow>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-ink tracking-[0.03em] [word-spacing:0.18em] leading-[1.2]">
              What partners say.
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-muted mt-3 max-w-xl">
              Authentic feedback from founders, product leads, and creative directors across 7 countries.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            {/* Slide Index Counter */}
            <div className="font-mono text-xs text-brand-muted">
              <span className="text-[#06D6A0] font-bold text-sm">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-1.5 opacity-40">/</span>
              <span>{String(maxIndex + 1).padStart(2, "0")}</span>
            </div>

            {/* Left & Right Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous reviews"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  currentIndex > 0
                    ? "border-brand-ink/15 dark:border-white/20 bg-brand-surface text-brand-ink hover:border-[#61CED9] hover:bg-[#61CED9]/10 hover:text-[#06D6A0] active:scale-95 shadow-xs"
                    : "border-brand-ink/5 dark:border-white/5 bg-brand-soft/40 text-brand-muted2 opacity-40 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next reviews"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  currentIndex < maxIndex
                    ? "border-brand-ink/15 dark:border-white/20 bg-brand-surface text-brand-ink hover:border-[#61CED9] hover:bg-[#61CED9]/10 hover:text-[#06D6A0] active:scale-95 shadow-xs"
                    : "border-brand-ink/5 dark:border-white/5 bg-brand-soft/40 text-brand-muted2 opacity-40 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Clean 3-Card Carousel Track (10 Reviews Total, Crisp & Beautiful)          */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden pt-2 pb-4">
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50 || velocity.x < -300) {
                handleNext();
              } else if (swipe > 50 || velocity.x > 300) {
                handlePrev();
              }
            }}
            animate={{
              x: `calc(-${currentIndex} * ((100% + ${gapPx}px) / ${visibleCards}))`,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                style={{
                  width: `calc((100% - ${(visibleCards - 1) * gapPx}px) / ${visibleCards})`,
                }}
                className="shrink-0 rounded-[28px] sm:rounded-[32px] bg-white dark:bg-[#11211C] border border-brand-ink/10 dark:border-white/10 p-6 sm:p-8 shadow-[0_18px_50px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_22px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_70px_-15px_rgba(97,206,217,0.2)] hover:border-[#61CED9]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Metric Pill & 5 Golden Stars */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#06D6A0] bg-[#06D6A0]/10 border border-[#06D6A0]/25 uppercase">
                      <Sparkles className="w-3 h-3 text-[#61CED9]" />
                      {review.highlightMetric}
                    </span>

                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-current text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.45)]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="font-mono text-[10px] text-brand-muted2 uppercase tracking-wider font-semibold mb-3">
                    // {review.projectType}
                  </div>

                  {/* Quote */}
                  <p className="font-sans text-sm sm:text-base text-brand-ink leading-relaxed mb-6 group-hover:text-brand-ink transition-colors">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Author Profile */}
                <div className="pt-5 border-t border-brand-ink/10 dark:border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initials in Brand Gradient */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#61CED9] to-[#06D6A0] text-[#04241E] font-heading font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-heading font-bold text-sm text-brand-ink">
                          {review.name}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#06D6A0]" />
                      </div>
                      <p className="font-sans text-xs text-brand-muted">
                        {review.role}, <span className="font-semibold">{review.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Location Pill */}
                  <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-soft text-[10px] font-mono text-brand-muted2 shrink-0">
                    <MapPin className="w-3 h-3 text-[#61CED9]" />
                    <span>{review.location.split(",")[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to page ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-gradient-to-r from-[#61CED9] to-[#06D6A0]"
                  : "w-2 bg-brand-ink/20 dark:bg-white/20 hover:bg-brand-ink/40"
              }`}
            />
          ))}
        </div>

        {/* ========================================================================= */}
        {/* Social Proof & Partnership Guarantees (Bottom Banner)                      */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] bg-white dark:bg-[#11211C] border border-brand-ink/10 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#61CED9]/15 to-[#06D6A0]/15 border border-[#06D6A0]/30 flex items-center justify-center text-[#06D6A0] shrink-0">
              <Award className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-amber-400 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                ))}
                <span className="font-heading font-extrabold text-sm text-brand-ink ml-1.5">
                  5.0 / 5.0 Rating
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-brand-muted">
                100% Client Satisfaction score across <strong className="text-brand-ink">25+ delivered web sprints</strong>.
              </p>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex items-center gap-6 font-mono text-xs text-brand-muted2">
            <div>
              <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-ink block text-[#06D6A0]">
                100%
              </span>
              <span>ON-TIME LAUNCH</span>
            </div>
            <div className="w-px h-8 bg-brand-ink/10 dark:bg-white/10" />
            <div>
              <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-ink block text-[#61CED9]">
                7+
              </span>
              <span>COUNTRIES</span>
            </div>
            <div className="w-px h-8 bg-brand-ink/10 dark:bg-white/10" />
            <div>
              <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-ink block text-brand-ink">
                0
              </span>
              <span>TECH DEBT</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
