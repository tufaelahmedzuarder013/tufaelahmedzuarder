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
 * preserving all inner HTML tags (strong, em, a, span, etc.) and whitespace.
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

/**
 * Processes a single paragraph to apply the GSAP Scroll Highlight illumination.
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

  // Strictly target 2-line and 3-line paragraphs (typically 7 to 85 words in Aventa 20px)
  // Skip short 1-line badges (< 7 words) and monolithic text dumps (> 85 words)
  if (wordsCount < 7 || wordsCount > 85) return;

  p.setAttribute("data-gsap-processed", "true");
  p.classList.add("gsap-scroll-highlight-container");

  const words = splitParagraphIntoWords(p);
  if (!words.length) return;

  // Detect dark container or dark theme
  const isDarkContainer = Boolean(
    p.closest(
      ".cta-banner-dark, [data-theme-inverted='true'], .bg-neutral-950, .dark-container"
    ) || document.documentElement.classList.contains("dark")
  );

  const targetColor = isDarkContainer ? "#ffffff" : "#101820";
  const fadedColor = isDarkContainer
    ? "rgba(255, 255, 255, 0.22)"
    : "rgba(16, 24, 32, 0.22)";

  // Starting state: dimmed/muted reading state with subtle micro-offset
  gsap.set(words, {
    opacity: 0.22,
    color: fadedColor,
    y: 2,
  });

  const isSticky = Boolean(p.closest(".sticky, [class*='sticky']"));

  // GSAP Scroll Highlight animation (progressive scrub illumination)
  const anim = gsap.to(words, {
    opacity: 1,
    color: targetColor,
    y: 0,
    stagger: 0.08,
    ease: "power1.out",
    scrollTrigger: {
      trigger: isSticky ? (p.closest(".sticky") as HTMLElement) || p : p,
      start: isSticky ? "top 80%" : "top 86%",
      end: isSticky ? "top 30%" : "bottom 56%",
      scrub: 0.65,
      invalidateOnRefresh: true,
    },
  });

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

  // 2. Automated Scroll-Driven Text Illumination across ALL 2-line & 3-line Paragraphs
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const triggers: ScrollTrigger[] = [];

    // Helper to process all paragraphs
    const scanAndProcess = () => {
      const paragraphs = document.querySelectorAll<HTMLElement>(
        "main p:not([data-no-gsap]), p:not([data-no-gsap])"
      );
      paragraphs.forEach((p) => {
        processParagraphHighlight(p, triggers);
      });
    };

    // =========================================================================
    // A. INITIAL BATCH PROCESSING
    // =========================================================================
    scanAndProcess();

    // =========================================================================
    // B. ALL HEADINGS: Scroll-driven scrub reveal (Orlean 59px / 47px)
    // =========================================================================
    const headings = document.querySelectorAll<HTMLElement>(
      "main h1:not([data-no-gsap]):not(.cta-banner-heading), main h2:not([data-no-gsap]):not(.cta-banner-heading), main h3:not([data-no-gsap]):not(.cta-banner-heading), main .gsap-heading:not(.cta-banner-heading)"
    );

    headings.forEach((heading) => {
      if (heading.getAttribute("data-gsap-processed") === "true") return;
      if (heading.closest(".cta-banner-dark, .client-reviews-section")) return;
      heading.setAttribute("data-gsap-processed", "true");

      if (heading.querySelector(".gsap-reveal-word, .scroll-word-item, input, button")) return;

      const originalText = heading.textContent || "";
      const words = originalText.trim().split(/\s+/).filter(Boolean);
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

    // =========================================================================
    // C. DYNAMIC MUTATION OBSERVER
    // Watches for tab switches (MissionVisionSection, ProcessBlueprintSection)
    // and automatically applies Scroll Highlight to newly mounted paragraphs!
    // =========================================================================
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const observer = new MutationObserver(() => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        scanAndProcess();
        ScrollTrigger.refresh();
      }, 80);
    });

    const targetContainer = document.querySelector("main") || document.body;
    if (targetContainer) {
      observer.observe(targetContainer, {
        childList: true,
        subtree: true,
      });
    }

    // =========================================================================
    // D. MULTI-STAGE SCROLLTRIGGER REFRESH (Accounting for images & fonts)
    // =========================================================================
    const refreshTimers = [
      setTimeout(() => ScrollTrigger.refresh(), 150),
      setTimeout(() => ScrollTrigger.refresh(), 450),
      setTimeout(() => ScrollTrigger.refresh(), 1000),
      setTimeout(() => ScrollTrigger.refresh(), 2000),
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
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
      window.removeEventListener("load", onWindowLoad);
      window.removeEventListener("resize", onWindowLoad);
      refreshTimers.forEach(clearTimeout);
      triggers.forEach((t) => t.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}
