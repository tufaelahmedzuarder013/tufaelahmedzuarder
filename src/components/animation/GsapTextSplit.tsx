"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapTextSplitProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
  once?: boolean;
  animateOnScroll?: boolean;
}

export function GsapTextSplit({
  children,
  as: Component = "h2",
  className,
  delay = 0,
  duration = 1.05,
  stagger = 0.035,
  once = true,
  animateOnScroll = true,
}: GsapTextSplitProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Honor reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const words = el.querySelectorAll(".gsap-reveal-word");
    if (!words.length) return;

    // Reset words initial state
    gsap.set(words, {
      y: "115%",
      opacity: 0,
      rotateZ: 1.5,
      transformOrigin: "0% 50% -20",
    });

    const anim = gsap.to(words, {
      y: "0%",
      opacity: 1,
      rotateZ: 0,
      duration,
      stagger,
      delay,
      ease: "power4.out",
      scrollTrigger: animateOnScroll
        ? {
            trigger: el,
            start: "top 88%",
            once,
          }
        : undefined,
    });

    return () => {
      anim.kill();
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
    };
  }, [delay, duration, stagger, once, animateOnScroll]);

  // Recursively split text strings into masked words while keeping existing JSX structure
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
            className="inline-block overflow-hidden align-top leading-[1.18] pb-[0.08em] -mb-[0.08em]"
          >
            <span className="gsap-reveal-word inline-block will-change-transform">
              {word}
            </span>
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
      className={cn("overflow-visible select-none", className)}
    >
      {renderChildren(children)}
    </Component>
  );
}
