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
 * Splits all text nodes within an element into individual word spans,
 * preserving any inner HTML tags (strong, em, a, span, etc.).
 */
function splitParagraphIntoWords(container: HTMLElement): HTMLElement[] {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];
  let node: Node | null;

  while ((node = walker.nextNode())) {
    if (node.nodeValue && node.nodeValue.trim().length > 0) {
      textNodes.push(node as Text);
    }
  }

  const wordSpans: HTMLElement[] = [];

  textNodes.forEach((textNode) => {
    const text = textNode.nodeValue || "";
    const parent = textNode.parentNode;
    if (!parent) return;

    const fragment = document.createDocumentFragment();
    const parts = text.split(/(\s+)/);

    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
      } else if (part.length > 0) {
        const span = document.createElement("span");
        span.className = "gsap-word inline-block will-change-[color,opacity]";
        span.textContent = part;
        fragment.appendChild(span);
        wordSpans.push(span);
      }
    });

    parent.replaceChild(fragment, textNode);
  });

  return wordSpans;
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

  // 2. Automated Scroll-Driven Text Illumination across ALL Paragraphs & Headings
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      const triggers: ScrollTrigger[] = [];

      // =========================================================================
      // A. ALL PARAGRAPHS: Word-by-word scroll illumination (Target Black #101820)
      // =========================================================================
      const paragraphs = document.querySelectorAll<HTMLElement>(
        "main p:not([data-no-gsap])"
      );

      paragraphs.forEach((p) => {
        if (p.getAttribute("data-gsap-processed") === "true") return;
        p.setAttribute("data-gsap-processed", "true");

        // Skip navigation, footer, buttons or elements with data-no-gsap
        if (p.closest("footer, nav, button, [data-no-gsap]") || p.hasAttribute("data-no-gsap")) return;

        const text = p.textContent || "";
        if (text.trim().split(/\s+/).length < 2) return;

        const words = splitParagraphIntoWords(p);
        if (!words.length) return;

        // Is this paragraph in an explicitly dark card/container?
        const isDarkContainer = Boolean(
          p.closest(".cta-banner-dark, [data-theme-inverted='true'], .bg-neutral-950, .dark-container")
        );
        const targetColor = isDarkContainer ? "#ffffff" : "#101820";
        const fadedColor = isDarkContainer
          ? "rgba(255, 255, 255, 0.28)"
          : "rgba(16, 24, 32, 0.28)";

        // Starting state: muted/faded color
        gsap.set(words, {
          color: fadedColor,
          opacity: 0.35,
        });

        // Exact GSAP scrub illumination animation to black #101820
        const anim = gsap.to(words, {
          color: targetColor,
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: p,
            start: "top 78%",
            end: "bottom 48%",
            scrub: true,
          },
        });

        if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
      });

      // =========================================================================
      // B. ALL HEADINGS: Scroll-driven scrub reveal
      // =========================================================================
      const headings = document.querySelectorAll<HTMLElement>(
        "main h1:not([data-no-gsap]), main h2:not([data-no-gsap]), main h3:not([data-no-gsap]), main .gsap-heading"
      );

      headings.forEach((heading) => {
        if (heading.getAttribute("data-gsap-processed") === "true") return;
        heading.setAttribute("data-gsap-processed", "true");

        if (heading.querySelector(".gsap-reveal-word, .scroll-word-item, input, button")) return;

        const originalText = heading.textContent || "";
        const words = originalText.trim().split(/\s+/);
        if (words.length > 0 && words.length < 30) {
          heading.innerHTML = words
            .map(
              (word) =>
                `<span class="inline-block overflow-hidden align-top leading-[1.2] pb-[0.06em] -mb-[0.06em] mr-[0.24em]"><span class="gsap-scrub-word inline-block will-change-transform will-change-[opacity]">${word}</span></span>`
            )
            .join("");

          const wordEls = heading.querySelectorAll(".gsap-scrub-word");

          gsap.set(wordEls, {
            y: "85%",
            opacity: 0.18,
            rotateZ: 1.2,
          });

          const anim = gsap.to(wordEls, {
            y: "0%",
            opacity: 1,
            rotateZ: 0,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: heading,
              start: "top 90%",
              end: "top 62%",
              scrub: 0.8,
            },
          });

          if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
        }
      });

      return () => {
        triggers.forEach((t) => t.kill());
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return <>{children}</>;
}
