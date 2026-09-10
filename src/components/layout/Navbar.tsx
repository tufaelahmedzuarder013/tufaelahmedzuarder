"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMobileMenu, setIsScrolled } from "@/store/slices/uiSlice";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { MusicWaveToggle } from "../ui/MusicWaveToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const scrollY = useScrollPosition();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);

  const isScrolled = scrollY > 20;

  useEffect(() => {
    dispatch(setIsScrolled(isScrolled));
  }, [isScrolled, dispatch]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-bg/85 backdrop-blur-md py-3 shadow-sm border-b border-brand-ink/5"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo with Circular Music Wave Toggle on Left */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <MusicWaveToggle />

          <Link
            href="/"
            className="font-heading text-lg sm:text-xl tracking-[0.03em] flex items-center group text-brand-ink hover:text-brand-violet transition-colors"
          >
            <span className="font-semibold">
              Tufael Ahmed Zuarder
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
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
                  "relative text-sm tracking-[0.05em] [word-spacing:0.12em] transition-colors duration-200 py-1",
                  isActive
                    ? "text-brand-ink font-medium"
                    : "text-brand-muted hover:text-brand-ink"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-gradient rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button, Theme Switcher & Mobile Burger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Let&apos;s talk
          </Button>

          {/* Animated Hamburger Button */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-surface text-brand-ink p-2 dark:bg-white/[0.07] dark:backdrop-blur-xl dark:border-white/15 dark:text-white dark:hover:bg-white/[0.14] transition-all cursor-pointer"
          >
            <span
              className={cn(
                "h-0.5 w-5 bg-brand-ink rounded transition-all duration-300",
                mobileMenuOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-brand-ink rounded my-1 transition-all duration-300",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-brand-ink rounded transition-all duration-300",
                mobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
