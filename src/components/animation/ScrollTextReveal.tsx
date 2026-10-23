"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTextRevealProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  fadedOpacity?: number;
}

export function ScrollTextReveal({
  children,
  as: Component = "p",
  className,
  start = "top 88%",
  end = "bottom 55%",
  scrub = 0.8,
  fadedOpacity = 0.15,
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const words = el.querySelectorAll(".scroll-word-item");
    if (!words.length) return;

    // Initial state: faded and slightly offset
    gsap.set(words, {
      opacity: fadedOpacity,
      y: 6,
    });

    // Scroll-driven progressive illumination: as user scrolls down, words become visible
    const anim = gsap.to(words, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub,
      },
    });

    return () => {
      anim.kill();
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
    };
  }, [start, end, scrub, fadedOpacity]);

  // Recursively split plain text strings into word spans
  const renderChildren = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      const words = node.split(/(\s+)/);
      return words.map((word, i) => {
        if (/^\s+$/.test(word)) {
          return " ";
        }
        return (
          <span
            key={i}
            className="scroll-word-item inline-block will-change-transform will-change-[opacity]"
          >
            {word}
          </span>
        );
      });
    }

    if (React.isValidElement(node)) {
      const props = node.props as { children?: React.ReactNode };
      if (props && props.children) {
        return React.cloneElement(
          node,
          {},
          renderChildren(props.children)
        );
      }
      return node;
    }

    if (Array.isArray(node)) {
      return node.map((child, idx) => (
        <React.Fragment key={idx}>{renderChildren(child)}</React.Fragment>
      ));
    }

    return node;
  };

  return (
    // @ts-expect-error dynamic component type
    <Component
      ref={containerRef}
      className={cn("select-none", className)}
    >
      {renderChildren(children)}
    </Component>
  );
}
