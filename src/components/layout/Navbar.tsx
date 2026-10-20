"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMobileMenu, setIsScrolled } from "@/store/slices/uiSlice";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "../ui/ThemeToggle";
import { MusicWaveToggle } from "../ui/MusicWaveToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const scrollY = useScrollPosition();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);

  const isScrolled = scrollY > 25;

  useEffect(() => {
    dispatch(setIsScrolled(isScrolled));
  }, [isScrolled, dispatch]);

  return (
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

        {/* Brand Logo with Circular Music Wave Toggle on Left */}
        <div className="flex items-center gap-2 sm:gap-3">
          <MusicWaveToggle
            className={cn(
              "transition-colors duration-500",
              isScrolled
                ? "border-brand-ink/15 text-brand-ink dark:border-white/20 dark:text-white"
                : ""
            )}
          />

          <Link
            href="/"
            className="font-heading text-sm sm:text-base md:text-lg tracking-[0.02em] flex items-center group text-brand-ink dark:text-white hover:text-[#F75B00] dark:hover:text-[#F75B00] transition-colors"
          >
            <span className="font-semibold whitespace-nowrap">
              Tufael Ahmed Zuarder
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-xs sm:text-sm tracking-[0.04em] transition-colors duration-200 px-3 py-1 font-medium",
                  isActive
                    ? "text-[#F75B00] font-semibold"
                    : "text-brand-muted hover:text-[#F75B00] dark:text-zinc-300 dark:hover:text-[#F75B00]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button, Theme Switcher & Mobile Burger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle
            className={cn(
              "transition-all duration-500",
              isScrolled
                ? "w-8 h-8 sm:w-9 sm:h-9 bg-black/[0.03] border-brand-ink/15 text-brand-ink hover:border-[#F75B00] dark:bg-white/5 dark:border-white/15 dark:text-white dark:hover:bg-white/15"
                : ""
            )}
          />

          {/* Glowing Gradient Pill CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 rounded-full bg-gradient-to-r from-[#F75B00] to-[#FF6B00] hover:from-[#e05200] hover:to-[#df5c00] text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(247,91,0,0.35)] hover:shadow-[0_6px_25px_rgba(247,91,0,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>Let&apos;s talk</span>
            <span className="w-5 h-5 rounded-full bg-white text-[#F75B00] shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </Link>

          {/* Animated Hamburger Button for Mobile */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
            className={cn(
              "md:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all cursor-pointer p-1.5",
              isScrolled
                ? "border-brand-ink/15 bg-black/[0.03] text-brand-ink dark:border-white/15 dark:bg-white/10 dark:text-white"
                : "border-brand-ink/10 bg-brand-surface text-brand-ink dark:bg-white/[0.07] dark:border-white/15 dark:text-white"
            )}
          >
            <span
              className={cn(
                "h-0.5 w-4 rounded transition-all duration-300",
                "bg-brand-ink dark:bg-white",
                mobileMenuOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-4 rounded my-0.5 transition-all duration-300",
                "bg-brand-ink dark:bg-white",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-4 rounded transition-all duration-300",
                "bg-brand-ink dark:bg-white",
                mobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
