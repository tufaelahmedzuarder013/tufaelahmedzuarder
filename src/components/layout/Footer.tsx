"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      style={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
      className="relative w-full rounded-t-[15px] bg-[#0D1117] text-white overflow-hidden mt-auto pt-12 sm:pt-16 lg:pt-20 pb-0 border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Brand ambient glows matching website button palette */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[320px] sm:w-[500px] h-[240px] sm:h-[350px] bg-[#F75B00]/8 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[320px] sm:w-[500px] h-[240px] sm:h-[350px] bg-[#EFC320]/6 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:40px_40px] pointer-events-none" />
      </div>

      <Container className="relative z-10 w-full">
        {/* ========================================================================= */}
        {/* TOP SECTION: 5 Column Layout matching reference image                    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 sm:gap-x-8 lg:gap-x-10 gap-y-7 sm:gap-y-10 pb-10 sm:pb-14 lg:pb-16">
          {/* Column 1: Company */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="!text-white font-heading font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="!text-white font-heading font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
              Products
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/web-development" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/custom-development" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/saas-products-development" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  SaaS Products
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="!text-white font-heading font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/portfolio" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200"
                >
                  GitHub Source
                </a>
              </li>
              <li>
                <Link href="/about" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/services" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  White paper
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="!text-white font-heading font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Acceptance policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-1">
            <h3 className="!text-white font-heading font-semibold text-sm sm:text-base lg:text-lg tracking-tight">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200 break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="!text-white/85 hover:!text-[#F75B00] transition-colors duration-200"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <span className="!text-white/60">
                  {SITE_CONFIG.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HAIRLINE DIVIDER matching reference image                                 */}
        {/* ========================================================================= */}
        <div className="w-full h-px bg-white/10 my-5 sm:my-8" />

        {/* ========================================================================= */}
        {/* MIDDLE ROW: Studio Location, Copyright & Circular Social Icons            */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 lg:pb-10">
          {/* Address & Copyright */}
          <div className="space-y-1 text-xs sm:text-sm font-normal">
            <p className="!text-white/90">
              Tufael Ahmed Zuarder Studio, Sylhet 3100, Bangladesh.
            </p>
            <p suppressHydrationWarning className="!text-white/70">
              © {year} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>

          {/* Circular Social Icons matching website's signature Button style */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-start sm:self-auto flex-wrap">
            {/* LinkedIn */}
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#F75B00]/35 hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 transition-all duration-300 shrink-0 touch-manipulation"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href={SITE_CONFIG.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#F75B00]/35 hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 transition-all duration-300 shrink-0 touch-manipulation"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#F75B00]/35 hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 transition-all duration-300 shrink-0 touch-manipulation"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#F75B00]/35 hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 transition-all duration-300 shrink-0 touch-manipulation"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM GIGANTIC BRAND WATERMARK: "TAZ"                                    */}
        {/* ========================================================================= */}
        <div className="w-full overflow-hidden select-none pointer-events-none pt-3 sm:pt-6 pb-1 sm:pb-2 flex items-center justify-center text-center px-2">
          <span
            style={{
              fontFamily: "var(--font-orlean), 'Orlean', sans-serif",
            }}
            className="block w-full text-center font-heading font-bold text-[clamp(3.5rem,21vw,22rem)] leading-[0.76] tracking-wider sm:tracking-widest text-white/[0.22] select-none uppercase pointer-events-none max-w-full"
          >
            TAZ
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
