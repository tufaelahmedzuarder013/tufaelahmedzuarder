"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapAnimationProviderProps {
  children: React.ReactNode;
}

/**
 * Applies a smooth scroll-driven highlight to a paragraph without mutating its DOM or text nodes,
 * preventing React hydration mismatch errors.
 */
function processParagraphHighlight(
  p: HTMLElement,
  triggers: ScrollTrigger[]
): void {
  if (p.getAttribute("data-gsap-processed") === "true") return;

  // Skip excluded elements: navigation, footer, buttons, client reviews, or elements with data-no-gsap
  if (
    p.closest("footer, nav, button, form, [aria-live], [data-no-gsap], .client-reviews-section") ||
    p.hasAttribute("data-no-gsap")
  ) {
    return;
  }

  const text = p.textContent || "";
  const wordsCount = text.trim().split(/\s+/).filter(Boolean).length;
  if (wordsCount < 4 || wordsCount > 100) return;

  p.setAttribute("data-gsap-processed", "true");

  const isSticky = Boolean(p.closest(".sticky, [class*='sticky']"));

  // Smooth CSS transform & opacity animation without modifying innerHTML
  const anim = gsap.fromTo(
    p,
    { opacity: 0.35, y: 10 },
    {
      opacity: 1,
      y: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: isSticky ? (p.closest(".sticky") as HTMLElement) || p : p,
        start: isSticky ? "top 80%" : "top 86%",
        end: isSticky ? "top 30%" : "bottom 56%",
        scrub: 0.65,
        invalidateOnRefresh: true,
      },
    }
  );

  if (anim.scrollTrigger) {
    triggers.push(anim.scrollTrigger);
  }
}

export function GsapAnimationProvider({ children }: GsapAnimationProviderProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialize Lenis Smooth Scroll integrated with GSAP ScrollTrigger
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      infinite: false,
    });

    lenisRef.current = lenis;

    if (typeof window !== "undefined") {
      (window as unknown as { lenis?: Lenis }).lenis = lenis;
    }

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
    };
  }, []);

  // 2. Safe Scroll-Driven Text Illumination (Zero DOM mutation)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const triggers: ScrollTrigger[] = [];

    // Helper to process paragraphs safely
    const scanAndProcess = () => {
      const paragraphs = document.querySelectorAll<HTMLElement>(
        "main p:not([data-no-gsap]), p:not([data-no-gsap])"
      );
      paragraphs.forEach((p) => {
        processParagraphHighlight(p, triggers);
      });
    };

    // A. Initial processing
    scanAndProcess();

    // B. Safe Heading Scroll Reveal (Animates opacity and transform without touching innerHTML)
    const headings = document.querySelectorAll<HTMLElement>(
      "main h1:not([data-no-gsap]):not(.cta-banner-heading), main h2:not([data-no-gsap]):not(.cta-banner-heading), main h3:not([data-no-gsap]):not(.cta-banner-heading), main .gsap-heading:not(.cta-banner-heading)"
    );

    headings.forEach((heading) => {
      if (heading.getAttribute("data-gsap-processed") === "true") return;
      if (heading.closest(".cta-banner-dark, .client-reviews-section, .hero-section")) return;
      heading.setAttribute("data-gsap-processed", "true");

      const anim = gsap.fromTo(
        heading,
        { opacity: 0.35, y: 16 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 92%",
            end: "top 65%",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        }
      );

      if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
    });

    // C. Periodic ScrollTrigger refresh
    const refreshTimers = [
      setTimeout(() => ScrollTrigger.refresh(), 150),
      setTimeout(() => ScrollTrigger.refresh(), 600),
      setTimeout(() => ScrollTrigger.refresh(), 1500),
    ];

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const onWindowLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onWindowLoad);
    window.addEventListener("resize", onWindowLoad);

    return () => {
      window.removeEventListener("load", onWindowLoad);
      window.removeEventListener("resize", onWindowLoad);
      refreshTimers.forEach(clearTimeout);
      triggers.forEach((t) => t.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}
