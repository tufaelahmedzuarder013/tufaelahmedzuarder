"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTheme } from "@/store/slices/uiSlice";
import { TazLogo } from "../ui/TazLogo";
import { cn } from "@/lib/utils";

interface FullMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.69-1.58 1.9-4.14 1.9-6.37v-4.88a8.16 8.16 0 0 0 4.87 1.62V7.07c-.34-.04-.68-.17-1-.38z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FullMenuOverlay({ isOpen, onClose }: FullMenuOverlayProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ui.theme);
  const isDarkMode = theme === "dark";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);


  // Safe navigation handler that closes the overlay and transitions cleanly
  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  // Navigation Items: User's actual pages
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Experience", href: "/about#experience" },
    { label: "Contact", href: "/contact" },
  ];

  // User's 10 Actual Services
  const serviceItems = [
    { label: "Custom Development", href: "/services/custom-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "Software Development", href: "/services/software-development" },
    { label: "SAAS Products Development", href: "/services/saas-products-development" },
    { label: "HR Management System", href: "/services/hr-management-system" },
    { label: "CRM System", href: "/services/crm-system" },
    { label: "CMS Development", href: "/services/cms-development" },
    { label: "Branding", href: "/services/branding" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Graphic Design", href: "/services/graphic-design" },
  ];

  if (!mounted) return null;

  const overlayContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          className={cn(
            "fixed inset-0 z-[99999] pointer-events-auto flex flex-col justify-center items-center p-2.5 sm:p-4 md:p-6 overflow-y-auto transition-colors duration-500",
            isDarkMode
              ? "bg-[#130F0C] text-white"
              : "bg-[#ECE6DD] text-[#121516]"
          )}
        >
          {/* Backdrop Click to Close Area */}
          <div
            className="fixed inset-0 cursor-pointer pointer-events-auto -z-30"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Ambient Corner Lighting on Full Screen (Exact match to Image 1 & Image 2) */}
          {isDarkMode ? (
            <>
              <div className="fixed top-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(160,80,25,0.35)_0%,rgba(90,40,15,0.2)_40%,transparent_70%)] blur-3xl pointer-events-none -z-20" />
              <div className="fixed bottom-0 left-0 w-[500px] h-[450px] bg-[radial-gradient(circle_at_bottom_left,rgba(110,50,20,0.25)_0%,transparent_65%)] blur-3xl pointer-events-none -z-20" />
            </>
          ) : (
            <div className="fixed top-0 right-1/4 w-[700px] h-[450px] bg-[radial-gradient(circle_at_top,rgba(245,160,80,0.22)_0%,rgba(240,205,150,0.14)_45%,transparent_70%)] blur-3xl pointer-events-none -z-20" />
          )}

          {/* ============================================================= */}
          {/* MAIN FROSTED CARD (Contains Header, 3-Col Body, Footer)       */}
          {/* ============================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative isolate w-full max-w-[1380px] min-h-[calc(100vh-20px)] sm:min-h-[calc(100vh-32px)] my-auto rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-11 overflow-hidden flex flex-col justify-between transition-all duration-500 pointer-events-auto z-40 shadow-[0_25px_80px_rgba(0,0,0,0.08)]",
              isDarkMode
                ? "bg-[#726B63]/75 backdrop-blur-3xl border border-white/25 text-[#121516]"
                : "bg-[#FAF7F2] backdrop-blur-2xl border border-black/[0.08] text-[#121516]"
            )}
          >
            {/* Luminous Diffused Spotlight Beam in Dark Mode (Exact glow in Image 1) */}
            {isDarkMode && (
              <div className="absolute inset-y-0 left-[30%] w-[48%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.46)_0%,rgba(255,255,255,0.18)_50%,transparent_75%)] blur-2xl pointer-events-none -z-10" />
            )}

            {/* Ambient Background Glows inside the Card (Exact Match to mdx.so menu-ell) */}
            {!isDarkMode && (
              <>
                {/* 1. Large Central Warm Sun Eclipse Glow (mdx.so signature warm center aura) */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[750px] sm:w-[920px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(245,160,75,0.26)_0%,rgba(242,190,115,0.16)_35%,rgba(235,210,165,0.06)_60%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

                {/* 2. Top-Right Ambient Warm Glow (flows directly under and around the Close icon) */}
                <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-[radial-gradient(circle_at_top_right,rgba(245,175,95,0.18)_0%,rgba(240,210,160,0.08)_40%,transparent_65%)] blur-2xl pointer-events-none -z-10" />

                {/* 3. Soft Luminous Diffusion Layer across Middle */}
                <div className="absolute inset-y-0 left-[25%] w-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,transparent_70%)] blur-2xl pointer-events-none -z-10" />

                {/* 4. Bottom Soft Mist */}
                <div className="absolute bottom-0 inset-x-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(245,238,225,0.5)_0%,transparent_70%)] pointer-events-none -z-10" />
              </>
            )}

            {/* 1. TOP HEADER BAR INSIDE CARD (Exact match to mdx.so Image 2) */}
            <div className="w-full flex items-center justify-between pb-3 sm:pb-5 relative z-30 pointer-events-auto">
              {/* Left: Brand Logo */}
              <Link
                href="/"
                onClick={onClose}
                aria-label="T A Z Home"
                className="flex items-center transition-colors select-none cursor-pointer pointer-events-auto"
              >
                <TazLogo size="md" className="h-6 sm:h-7" />
              </Link>

              {/* Right: Let's talk ↗ Link + Separator + Minimal Close (✕) Button */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 font-heading text-sm sm:text-base font-normal group transition-colors cursor-pointer pointer-events-auto text-[#101820] hover:text-[#F75B00]"
                >
                  <span className="underline underline-offset-4 decoration-current/40 group-hover:decoration-[#F75B00]">
                    Let&apos;s talk
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#F75B00] stroke-[2.5]" />
                </Link>

                <span className="text-sm select-none font-light text-black/30">
                  |
                </span>

                {/* Sleek Minimal Close Button (Exact mdx.so Image 2 geometry) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  aria-label="Close navigation menu"
                  title="Close navigation menu"
                  className="w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center cursor-pointer group pointer-events-auto bg-transparent border-0 p-0 focus:outline-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                  >
                    <rect
                      x="1.58984"
                      y="0.0998535"
                      width="45.6946"
                      height="2.24728"
                      transform="rotate(45 1.58984 0.0998535)"
                      className="fill-[#101820]"
                    />
                    <rect
                      x="0.0898438"
                      y="32.311"
                      width="45.6946"
                      height="2.24728"
                      transform="rotate(-45 0.0898438 32.311)"
                      className="fill-[#101820]"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body Grid: 3 Clean Columns with Dynamic Staggered Reveal */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 my-auto py-4 sm:py-6 items-start relative z-20">
              {/* LEFT COLUMN: Hero Callout & Direct Contact */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-4 space-y-6 pr-0 lg:pr-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F75B00]">
                  <span className="w-2 h-2 rounded-full bg-[#F75B00]" />
                  <span>Connect with us!</span>
                </div>

                <h2 className="heading-orlean text-3xl sm:text-4xl lg:text-[59px] leading-tight lg:leading-[47px] font-normal text-[#101820] tracking-tight">
                  Turn Your Vision Into an Experience That Lasts
                </h2>

                <div className="w-12 h-0.5 bg-black/15 rounded-full" />

                <div>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="inline-flex items-center gap-2.5 font-mono text-sm sm:text-base text-[#101820]/80 hover:text-[#F75B00] transition-colors underline underline-offset-4 decoration-black/15 hover:decoration-[#F75B00] cursor-pointer pointer-events-auto"
                  >
                    <Mail className="w-4 h-4 text-[#55595B]" />
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                </div>

                {/* Dark Pill CTA Button (Exact match with Image 1 & Image 2) */}
                <div>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    style={{ fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                    className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#121719] font-sans font-normal text-[16px] tracking-normal hover:scale-105 active:scale-95 transition-all shadow-xl group cursor-pointer pointer-events-auto btn-aventa"
                  >
                    <span
                      style={{ color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
                      className="!text-white text-white font-sans font-normal text-[16px] btn-label-text btn-label-white"
                    >
                      LET&apos;S TALK
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#F75B00] stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>

              {/* MIDDLE COLUMN: NAVIGATION (User's actual pages with cascading reveal) */}
              <div className="lg:col-span-3 space-y-4">
                <div className="pb-2 border-b border-black/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#6C7072] font-semibold">
                    NAVIGATION
                  </span>
                </div>

                <ul className="space-y-2 pt-1">
                  {navItems.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.38,
                          delay: 0.12 + index * 0.045,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleNavigate(item.href)}
                          className={cn(
                            "paragraph-aventa font-normal text-lg sm:text-[20px] sm:leading-[25px] transition-all flex items-center gap-2.5 group cursor-pointer pointer-events-auto py-0.5",
                            isActive
                              ? "text-[#101820] font-normal"
                              : "text-[#101820]/75 hover:text-[#101820]"
                          )}
                        >
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#F75B00] shrink-0" />
                          )}
                          <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                            {item.label}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* RIGHT COLUMN: USER'S 10 SERVICES & COLLABORATION */}
              <div className="lg:col-span-5 space-y-5">
                {/* SERVICES Subsection */}
                <div>
                  <div className="pb-2 border-b border-black/10 mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#6C7072] font-semibold">
                      SERVICES
                    </span>
                    <Link
                      href="/services"
                      onClick={() => handleNavigate("/services")}
                      className="font-mono text-[11px] text-[#F75B00] font-semibold hover:underline cursor-pointer pointer-events-auto"
                    >
                      All Services &rarr;
                    </Link>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {serviceItems.map((service, index) => (
                      <motion.li
                        key={service.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.15 + index * 0.03,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={service.href}
                          onClick={() => handleNavigate(service.href)}
                          className="paragraph-aventa font-normal text-sm sm:text-base text-[#101820]/80 hover:text-[#F75B00] transition-colors flex items-center justify-between group py-1 cursor-pointer pointer-events-auto"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {service.label}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#F75B00] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* COLLABORATION Subsection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-2"
                >
                  <div className="pb-2 border-b border-black/10 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#6C7072] font-semibold">
                      COLLABORATION
                    </span>
                  </div>

                  <p className="font-heading font-normal text-xl sm:text-2xl text-[#101820] pt-1">
                    Available For Projects
                  </p>
                  <p className="paragraph-aventa font-normal text-sm sm:text-base text-[#101820]/80 mt-1">
                    Open for Custom Development, SaaS Architecture &amp; Dedicated Contracts
                  </p>
                </motion.div>
              </div>
            </div>

            {/* ============================================================= */}
            {/* 3. BOTTOM FOOTER BAR (Exact Match of Image 1 & Image 2)       */}
            {/* ============================================================= */}
            <div className="pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6C7072] relative z-20">
              {/* Copyright */}
              <span>
                © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
              </span>

              {/* Social Media Circular Pill Buttons */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-8 h-8 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#45494B] hover:text-[#F75B00] hover:border-[#F75B00] transition-all cursor-pointer pointer-events-auto"
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#45494B] hover:text-[#F75B00] hover:border-[#F75B00] transition-all cursor-pointer pointer-events-auto"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={SITE_CONFIG.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="w-8 h-8 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#45494B] hover:text-[#F75B00] hover:border-[#F75B00] transition-all cursor-pointer pointer-events-auto"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#45494B] hover:text-[#F75B00] hover:border-[#F75B00] transition-all cursor-pointer pointer-events-auto"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#45494B] hover:text-[#F75B00] hover:border-[#F75B00] transition-all cursor-pointer pointer-events-auto"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#45494B] hover:text-[#F75B00] hover:border-[#F75B00] transition-all cursor-pointer pointer-events-auto"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Policy & Terms Links */}
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  onClick={() => handleNavigate("/contact")}
                  className="hover:text-[#121516] transition-colors cursor-pointer pointer-events-auto"
                >
                  Privacy Policy
                </Link>
                <span>·</span>
                <Link
                  href="/contact"
                  onClick={() => handleNavigate("/contact")}
                  className="hover:text-[#121516] transition-colors cursor-pointer pointer-events-auto"
                >
                  Terms Of Use
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(overlayContent, document.body);
}
