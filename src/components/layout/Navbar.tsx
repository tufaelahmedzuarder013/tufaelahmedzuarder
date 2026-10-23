"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { setIsScrolled } from "@/store/slices/uiSlice";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { MusicWaveToggle } from "../ui/MusicWaveToggle";
import { TazLogo } from "../ui/TazLogo";
import { FullMenuOverlay } from "./FullMenuOverlay";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const scrollY = useScrollPosition();

  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const isScrolled = scrollY > 25;

  useEffect(() => {
    dispatch(setIsScrolled(isScrolled));
  }, [isScrolled, dispatch]);

  // Close full menu when route changes
  useEffect(() => {
    setFullMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] bg-transparent",
          isScrolled ? "py-2.5 sm:py-3.5" : "py-4 sm:py-6"
        )}
      >
        <div
          className={cn(
            "pointer-events-auto mx-auto flex items-center justify-between transform-gpu transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] relative",
            isScrolled
              ? "w-[94%] sm:w-[90%] max-w-5xl rounded-full bg-white/75 dark:bg-[#070A0E]/80 backdrop-blur-3xl backdrop-saturate-[180%] border border-black/[0.07] dark:border-white/[0.14] px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)]"
              : "w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-12 bg-transparent border-transparent shadow-none"
          )}
        >
          {/* Left Section: Logo + Divider + Sound Toggle (Exact match to mdx.so) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <Link
              href="/"
              aria-label="T A Z Homepage"
              className="flex items-center group text-brand-ink dark:text-white hover:text-[#F75B00] dark:hover:text-[#F75B00] transition-colors"
            >
              <TazLogo size="sm" className="h-4.5 sm:h-5 text-brand-ink dark:text-white" />
            </Link>

            <span className="text-xs select-none opacity-25 dark:opacity-30 font-light text-brand-ink dark:text-white">
              |
            </span>

            <MusicWaveToggle
              className={cn(
                "transition-colors duration-500",
                isScrolled
                  ? "border-brand-ink/15 text-brand-ink dark:border-white/20 dark:text-white"
                  : ""
              )}
            />
          </div>

          {/* Right Section: Let's talk + Divider + ThemeToggle + Divider + Menu Toggle (Exact match to mdx.so) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Let's talk CTA Button (Always present on desktop, just like mdx.so) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 rounded-full bg-gradient-to-r from-[#F75B00] to-[#FF6B00] hover:from-[#e05200] hover:to-[#df5c00] text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(247,91,0,0.35)] hover:shadow-[0_6px_25px_rgba(247,91,0,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer shrink-0"
            >
              <span>Let&apos;s talk</span>
              <span className="w-5 h-5 rounded-full bg-white text-[#F75B00] shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </Link>

            {/* Divider | */}
            <span className="hidden sm:inline text-xs select-none opacity-25 dark:opacity-30 font-light text-brand-ink dark:text-white">
              |
            </span>

            {/* Staggered 2-Bar Menu Toggle Button (Exact borderless mdx.so Image 1 design) */}
            <button
              type="button"
              onClick={() => setFullMenuOpen(true)}
              aria-label="Open navigation menu"
              title="Open navigation menu"
              className="w-8 sm:w-9 h-8 sm:h-9 flex flex-col justify-center items-center gap-[5.5px] group cursor-pointer shrink-0 pointer-events-auto bg-transparent border-0 p-0 focus:outline-hidden"
            >
              {/* Top Bar (--is-top): Slides right on hover */}
              <span className="w-6 h-[2px] rounded-full bg-[#101820] dark:bg-white -translate-x-1 group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
              {/* Bottom Bar (--is-bottom): Slides left on hover */}
              <span className="w-6 h-[2px] rounded-full bg-[#101820] dark:bg-white translate-x-1 group-hover:-translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay Rendered outside header */}
      <FullMenuOverlay
        isOpen={fullMenuOpen}
        onClose={() => setFullMenuOpen(false)}
      />
    </>
  );
}
