"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { MusicWaveToggle } from "../ui/MusicWaveToggle";
import { TazLogo } from "../ui/TazLogo";
import { SITE_CONFIG } from "@/lib/constants";

type FullMenuOverlayProps = { isOpen: boolean; onClose: () => void };

// Match these URLs to the routes and section IDs in your project.
const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Experience", href: "/about#experience" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Custom Development", href: "/services#custom-development" },
  { label: "Mobile App Development", href: "/services#mobile-app-development" },
  { label: "Software Development", href: "/services#software-development" },
  { label: "SAAS Products Development", href: "/services#saas-development" },
  { label: "HR Management System", href: "/services#hr-management" },
  { label: "CRM System", href: "/services#crm" },
  { label: "CMS Development", href: "/services#cms-development" },
  { label: "Branding", href: "/services#branding" },
  { label: "Digital Marketing", href: "/services#digital-marketing" },
  { label: "Graphic Design", href: "/services#graphic-design" },
];

// Add your real profile URLs. Empty entries display an icon without a fake link.
const SOCIALS = [
  { name: "GitHub", href: SITE_CONFIG.socials.github, paths: ["M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"] },
  { name: "Instagram", href: SITE_CONFIG.socials.instagram, paths: ["M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z", "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z", "M17.5 6.5h.01"] },
  { name: "X", href: SITE_CONFIG.socials.x, paths: ["M4 3h4l12 18h-4L4 3Z", "M20 3 4 21"] },
  { name: "Facebook", href: SITE_CONFIG.socials.facebook, paths: ["M15 21v-8h3l.5-4H15V7c0-1 .3-2 2-2h2V2h-3c-3 0-5 2-5 5v2H8v4h3v8"] },
  { name: "LinkedIn", href: SITE_CONFIG.socials.linkedin, paths: ["M5 9v12", "M5 4v.01", "M10 21V9h4v2c1-3 7-3 7 3v7", "M14 21v-7"] },
];

// The display face on the reference is Orlean Medium; the body face is Aventa.
// Load your local fonts through next/font/local and expose --font-orlean and
// --font-aventa on <body>. Existing Aventa is used if Orlean is not loaded.
const delay = (milliseconds: number) => ({ "--reveal-delay": `${milliseconds}ms` } as CSSProperties);

function AnimatedLabel({ text }: { text: string }) {
  return (
    <span className="taz-menu-letter-window" suppressHydrationWarning>
      {Array.from(text).map((letter, index) => (
        <span key={index} style={{ transitionDelay: `${index * 10}ms`, whiteSpace: "pre" }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

export function FullMenuOverlay({ isOpen, onClose }: FullMenuOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() ?? "/";
  const titleId = useId();
  const shapeId = `taz-menu-shape-${titleId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreScrollRef = useRef<(() => void) | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openKey, setOpenKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    let frame = 0;

    if (isOpen) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setOpenKey((prev) => prev + 1);

      if (!dialog.open) {
        const body = document.body;
        const html = document.documentElement;
        const saved = { bodyOverflow: body.style.overflow, htmlOverflow: html.style.overflow, padding: body.style.paddingRight };
        const scrollbar = Math.max(0, window.innerWidth - html.clientWidth);
        const padding = Number.parseFloat(getComputedStyle(body).paddingRight) || 0;
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
        if (scrollbar) body.style.paddingRight = `${padding + scrollbar}px`;
        restoreScrollRef.current = () => {
          body.style.overflow = saved.bodyOverflow;
          html.style.overflow = saved.htmlOverflow;
          body.style.paddingRight = saved.padding;
        };
        dialog.showModal();
      }

      dialog.dataset.state = "opening";
      void dialog.offsetHeight;
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          dialog.dataset.state = "open";
        });
      });
    } else if (dialog.open) {
      dialog.dataset.state = "closing";
      const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      timerRef.current = setTimeout(() => {
        dialog.close();
        dialog.dataset.state = "closed";
        restoreScrollRef.current?.();
        restoreScrollRef.current = null;
      }, reducedMotion ? 0 : 650);
    }
    return () => {
      cancelAnimationFrame(frame);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeRef.current?.focus({ preventScroll: true });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, openKey]);

  useEffect(() => {
    const dialog = dialogRef.current;
    return () => {
      dialog?.close();
      restoreScrollRef.current?.();
      restoreScrollRef.current = null;
    };
  }, []);

  const contactButton = (mobile = false) => (
    <Link href="/contact" onClick={onClose} className={`taz-menu-cta${mobile ? " taz-menu-mobile-button" : ""}`} aria-label="Let's talk">
      <AnimatedLabel text="LET'S TALK" /><ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
    </Link>
  );

  if (!mounted) return null;

  return createPortal(
    <>
      <dialog
        ref={dialogRef} id="taz-full-menu" className="taz-menu" aria-labelledby={titleId}
        onCancel={(event) => { event.preventDefault(); onClose(); }}
        onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      >
        <span id={titleId} className="taz-menu-sr-only">Main navigation</span>
        <svg width="0" height="0" className="taz-menu-defs" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id={shapeId} clipPathUnits="objectBoundingBox">
              <path d="M0 .115C0 .0983 .00738 .0849 .01648 .0849H.92747C.93658 .0849 .94396 .0715 .94396 .05495V.02997C.94396 .01342 .95134 0 .96044 0H.98352C.99262 0 1 .01342 1 .02997V.97003C1 .98658 .99262 1 .98352 1H.01648C.00738 1 0 .98658 0 .97003Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="taz-menu-ellipse" aria-hidden="true" />

        <div key={openKey} className="taz-menu-container">
          <div className="taz-menu-header">
            <div className="taz-menu-brand-group">
              <Link href="/" onClick={onClose} aria-label="T A Z Homepage" className="taz-menu-brand">
                <TazLogo size="sm" className="!text-[#101820] dark:!text-white" />
              </Link>
              <span className="taz-menu-header-divider" aria-hidden="true" />
              <div className="taz-menu-sound"><MusicWaveToggle className="!text-[#101820] dark:!text-white !border-black/10 dark:!border-white/20" /></div>
            </div>
            <div className="taz-menu-header-right">
              <Link href="/contact" onClick={onClose} className="taz-menu-top-cta" aria-label="Let's talk">
                <AnimatedLabel text="Let's talk" /><ArrowUpRight aria-hidden="true" />
              </Link>
              <span className="taz-menu-header-divider" aria-hidden="true" />
            </div>
          </div>

          <div className="taz-menu-shell">
            <div className="taz-menu-surface" style={{ clipPath: `url(#${shapeId})` }} aria-hidden="true" />

            <button ref={closeRef} type="button" onClick={onClose} className="taz-menu-close" aria-label="Close navigation menu">
              <span className="taz-menu-close-bar taz-menu-close-bar-one" aria-hidden="true" />
              <span className="taz-menu-close-bar taz-menu-close-bar-two" aria-hidden="true" />
            </button>

            <div className="taz-menu-main">
              <section className="taz-menu-intro">
                <p className="taz-menu-eyebrow taz-menu-heading-reveal" style={delay(220)}><span />Connect with me</p>
                <h2 className="taz-menu-title taz-menu-heading-reveal" style={delay(450)}>Turn Your Vision Into an Experience That Lasts</h2>
                <span className="taz-menu-short-line" aria-hidden="true" />
                <a href="mailto:support@zuarder.com" className="taz-menu-email taz-menu-heading-reveal" style={delay(620)}>
                  <Mail strokeWidth={1.5} aria-hidden="true" /><span>support@zuarder.com</span>
                </a>
                <div className="taz-menu-desktop-button taz-menu-heading-reveal" style={delay(780)}>{contactButton()}</div>
              </section>

              <div className="taz-menu-nav-wrapper">
                <nav className="taz-menu-navigation" aria-label="Main navigation">
                  <h3 className="taz-menu-section-title taz-menu-item-reveal" style={delay(380)}>NAVIGATION</h3>
                  <ul className="taz-menu-nav-list">
                    {NAVIGATION.map((item, index) => {
                      const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
                      return (
                        <li key={item.href} className="taz-menu-item-reveal" style={delay(480 + index * 110)}>
                          <Link href={item.href} onClick={onClose} aria-current={active ? "page" : undefined} className={`taz-menu-nav-link${active ? " is-active" : ""}`}>
                            <span className="taz-menu-link-dot" aria-hidden="true" /><span className="taz-menu-link-text">{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="taz-menu-right-column" tabIndex={0} role="region" aria-label="Services and collaboration">
                  <section className="taz-menu-services">
                    <div className="taz-menu-section-heading taz-menu-item-reveal" style={delay(580)}>
                      <h3 className="taz-menu-section-title">SERVICES</h3>
                      <Link href="/services" onClick={onClose} className="taz-menu-all-services" aria-label="View all services">
                        <span>All Services</span>
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                    <ul className="taz-menu-service-list">
                      {SERVICES.map((item, index) => (
                        <li key={item.href} className="taz-menu-item-reveal" style={delay(680 + index * 90)}>
                          <Link href={item.href} onClick={onClose} className="taz-menu-nav-link">
                            <span className="taz-menu-link-dot" aria-hidden="true" /><span className="taz-menu-link-text">{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="taz-menu-collaboration">
                    <h3 className="taz-menu-section-title taz-menu-item-reveal" style={delay(750)}>COLLABORATION</h3>
                    <div className="taz-menu-item-reveal" style={delay(850)}>
                      <Link href="/contact" onClick={onClose} className="taz-menu-nav-link"><span className="taz-menu-link-dot" aria-hidden="true" /><span className="taz-menu-link-text">Available For Projects</span></Link>
                      <p>Open for Custom Development, SaaS Architecture &amp; Dedicated Contracts</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="taz-menu-mobile-cta">{contactButton(true)}</div>

            <footer className="taz-menu-footer">
              <span className="taz-menu-footer-line" aria-hidden="true" />
              <div className="taz-menu-footer-row">
                <p className="taz-menu-copyright" style={{ color: "#101820" }}>© 2025 Tufael Ahmed Zuarder. All rights reserved.</p>
                <div className="taz-menu-socials" aria-label="Social profiles">
                  {SOCIALS.map((social) => {
                    const icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{social.paths.map((path) => <path key={path} d={path} />)}</svg>;
                    return social.href ? <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="taz-menu-social">{icon}</a> : <span key={social.name} role="img" aria-label={social.name} className="taz-menu-social">{icon}</span>;
                  })}
                </div>
                <div className="taz-menu-legal"><Link href="/privacy-policy" onClick={onClose}>Privacy Policy</Link><Link href="/terms-of-use" onClick={onClose}>Terms Of Use</Link></div>
              </div>
            </footer>
          </div>
        </div>
      </dialog>

      <style>{MENU_STYLES}</style>
    </>,
    document.body
  );
}

// Viewport units are scoped to the menu; the rest of your app's rem scale is untouched.
const MENU_STYLES = `
.taz-menu {
  --u: clamp(6.5px, .5208333333vw, 8.3333px);
  --menu-ink: #101820;
  --menu-orange: #F75B00;
  --menu-gold: #EFC320;
  --menu-muted: #5B6871;
  --menu-border: rgba(16, 24, 32, 0.1);
  --menu-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --menu-duration: 850ms;
  --menu-body-font: var(--font-aventa, "Aventa"), Arial, sans-serif;
  --menu-display-font: var(--font-orlean, "Orlean"), var(--font-aventa, "Aventa"), Arial, sans-serif;
  position: fixed; inset: 0; width: 100%; height: 100%; height: 100dvh;
  max-width: none; max-height: none; margin: 0; border: 0;
  padding: min(calc(2.6 * var(--u)), 2.6vh) clamp(16px, 2.5vw, 48px) min(calc(4 * var(--u)), 4vh);
  overflow: hidden !important;
  opacity: 0;
  pointer-events: none;
  transition: opacity 750ms var(--menu-ease);
  will-change: opacity;
  background:
    radial-gradient(
      ellipse 70% 60% at 50% 45%,
      rgba(247, 91, 0, 0.12) 0%,
      rgba(239, 195, 32, 0.08) 35%,
      rgba(247, 91, 0, 0.02) 65%,
      transparent 85%
    ),
    radial-gradient(
      circle at 85% 15%,
      rgba(239, 195, 32, 0.10) 0%,
      transparent 45%
    ),
    radial-gradient(
      circle at 12% 85%,
      rgba(247, 91, 0, 0.08) 0%,
      transparent 45%
    ),
    linear-gradient(
      180deg,
      #FAFAFD 0%,
      #F4F5F9 50%,
      #ECEEF4 100%
    );
  color: var(--menu-ink);
  font-family: var(--menu-body-font);
  color-scheme: light;
  isolation: isolate;
  -webkit-font-smoothing: antialiased;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.taz-menu[data-state="open"] {
  opacity: 1;
  pointer-events: auto;
}
.taz-menu[data-state="closing"] {
  opacity: 0;
  pointer-events: none;
  transition: opacity 650ms var(--menu-ease);
}
.taz-menu::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
.taz-menu:not([open]) { display: none; }
.taz-menu::backdrop { background: transparent; }
.taz-menu-container {
  position: relative;
  width: 100%;
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transition: opacity 400ms var(--menu-ease), transform 400ms var(--menu-ease);
}
.taz-menu[data-state="closing"] .taz-menu-container {
  opacity: 0;
  transform: translateY(-8px);
}
.taz-menu *, .taz-menu *::before, .taz-menu *::after, .taz-menu { box-sizing: border-box; }
.taz-menu a { color: inherit; text-decoration: none; }
.taz-menu ul { list-style: none; padding: 0; margin: 0; }
.taz-menu h2, .taz-menu h3, .taz-menu p { margin: 0; }
.taz-menu a:focus-visible, .taz-menu button:focus-visible, .taz-menu [tabindex="0"]:focus-visible { outline: 2px solid var(--menu-orange); outline-offset: 5px; }
.taz-menu-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.taz-menu-defs { position: absolute; pointer-events: none; }
.taz-menu-ellipse {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(
      ellipse 80% 60% at 50% 45%,
      rgba(247, 91, 0, 0.14) 0%,
      rgba(239, 195, 32, 0.09) 35%,
      transparent 75%
    );
  opacity: 0;
  transition: opacity 850ms var(--menu-ease);
  pointer-events: none;
}
.taz-menu-shell {
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: repeat(12,minmax(0,1fr));
  grid-template-rows: minmax(0,1fr) auto minmax(0,1fr) auto;
  width: 100%;
  height: 100%;
  padding: calc(10 * var(--u)) calc(11 * var(--u)) calc(5 * var(--u));
  opacity: 0;
  transform: scale(0.97) translateY(16px);
  transition: opacity 850ms var(--menu-ease), transform 850ms var(--menu-ease);
  will-change: opacity, transform;
}
.taz-menu-surface {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(
      ellipse 60% 50% at 50% 45%,
      rgba(247, 91, 0, 0.05) 0%,
      rgba(239, 195, 32, 0.03) 30%,
      transparent 70%
    ),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.88) 50%,
      rgba(255, 255, 255, 0.94) 100%
    );
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(16, 24, 32, 0.06);
  box-shadow:
    0 30px 90px -20px rgba(16, 24, 32, 0.10),
    0 0 0 1px rgba(255, 255, 255, 0.95) inset,
    0 2px 10px rgba(0, 0, 0, 0.03);
}
.taz-menu[data-state="open"] .taz-menu-shell { opacity: 1; transform: scale(1) translateY(0); }
.taz-menu[data-state="open"] .taz-menu-ellipse { opacity: .7; }
.taz-menu[data-state="closing"] .taz-menu-shell { opacity: 0; transform: scale(.97) translateY(12px); transition: opacity 450ms var(--menu-ease), transform 450ms var(--menu-ease); }
.taz-menu[data-state="closing"] .taz-menu-ellipse { opacity: 0; transition: opacity 450ms var(--menu-ease); }
.taz-menu-header { position: absolute; z-index: 3; top: calc(3 * var(--u)); left: calc(11 * var(--u)); right: calc(16 * var(--u)); display: flex; align-items: center; justify-content: space-between; pointer-events: none; }
.taz-menu-header > * { pointer-events: auto; }
.taz-menu-brand-group, .taz-menu-header-right { display: flex; align-items: center; gap: calc(4.2 * var(--u)); }
.taz-menu-brand { display: flex; align-items: center; color: var(--menu-ink); }
.taz-menu-brand svg { width: calc(13.1 * var(--u)) !important; height: calc(2.5 * var(--u)) !important; color: var(--menu-ink) !important; }
.taz-menu-header-divider { width: 1px; height: calc(2 * var(--u)); background: rgba(16, 24, 32, 0.15); }
.taz-menu-sound { display: flex; align-items: center; }
.taz-menu-sound button { width: calc(5.5 * var(--u)); height: calc(5.5 * var(--u)); min-width: 26px; min-height: 26px; border: 1px solid rgba(17,24,34,.12); border-radius: 50%; background: transparent; color: #101820; }
.taz-menu-top-cta { display: inline-flex; gap: calc(.8 * var(--u)); align-items: center; font-size: calc(2 * var(--u)); line-height: 1; letter-spacing: .1em; color: var(--menu-ink); }
.taz-menu-top-cta .taz-menu-letter-window { text-decoration: underline; text-underline-offset: .22em; text-decoration-thickness: 1px; }
.taz-menu-top-cta svg { width: calc(2.4 * var(--u)); height: calc(2.4 * var(--u)); color: #F75B00; }
.taz-menu-close {
  position: absolute;
  z-index: 4;
  top: calc(2.8 * var(--u));
  right: calc(4 * var(--u));
  width: calc(3.4 * var(--u));
  height: calc(3.4 * var(--u));
  padding: 0;
  border: 0;
  background: transparent;
  color: #111822;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms var(--menu-ease), opacity 300ms var(--menu-ease);
  outline: none;
}
.taz-menu-close:focus { outline: none; }
.taz-menu-close:focus-visible { outline: 2px solid var(--menu-orange); outline-offset: 4px; }
.taz-menu-close:hover { transform: rotate(90deg) scale(1.08); color: #F75B00; }
.taz-menu-close-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(3.2 * var(--u));
  height: max(1.5px, calc(.2 * var(--u)));
  background: currentColor;
  transform: translate(-50%, -50%) rotate(var(--bar-angle)) scale(0);
  transition: transform 650ms var(--menu-ease);
}
.taz-menu-close-bar-one { --bar-angle: 45deg; }
.taz-menu-close-bar-two { --bar-angle: -45deg; }
.taz-menu[data-state="open"] .taz-menu-close-bar { transform: translate(-50%,-50%) rotate(var(--bar-angle)) scale(1); transition-delay: 240ms; }
.taz-menu[data-state="open"] .taz-menu-close-bar-two { transition-delay: 320ms; }
.taz-menu[data-state="closing"] .taz-menu-close-bar { transform: translate(-50%,-50%) rotate(0deg) scale(0); transition: transform 320ms var(--menu-ease); }
.taz-menu-main {
  grid-column: 1/-1;
  grid-row: 2;
  display: grid;
  grid-template-columns: minmax(calc(36 * var(--u)), 1fr) minmax(calc(62 * var(--u)), 1.6fr);
  column-gap: calc(5 * var(--u));
  align-items: start;
  min-width: 0;
  min-height: 0;
  max-height: calc(100dvh - 22 * var(--u));
  padding-bottom: calc(4 * var(--u));
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.taz-menu-main::-webkit-scrollbar { display: none; }
.taz-menu-intro {
  display: grid;
  gap: min(calc(2.6 * var(--u)), 2.6vh);
  min-width: 0;
  padding-bottom: calc(2 * var(--u));
}
.taz-menu-eyebrow {
  display: flex;
  align-items: center;
  gap: calc(1.5 * var(--u));
  color: #F75B00 !important;
  font-size: calc(2 * var(--u));
  font-weight: 500;
  line-height: 1.5;
}
.taz-menu-eyebrow > span {
  width: calc(1 * var(--u));
  height: calc(1 * var(--u));
  flex-shrink: 0;
  background: #F75B00 !important;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(247, 91, 0, 0.45);
}
.taz-menu-title {
  width: min(100%, calc(52 * var(--u)));
  color: var(--menu-ink);
  font-family: var(--menu-display-font);
  font-size: min(calc(6 * var(--u)), 5.8vh);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -.015em;
}
.taz-menu-short-line { width: calc(7 * var(--u)); height: 1px; background: rgba(16, 24, 32, 0.15); }
.taz-menu-email {
  display: flex;
  align-items: center;
  gap: calc(1 * var(--u));
  margin-top: calc(1.5 * var(--u));
  margin-bottom: min(calc(3.5 * var(--u)), 3.5vh);
  font-size: calc(2 * var(--u));
  line-height: 1.5;
  color: #5B6871 !important;
  letter-spacing: .6px;
  transition: color 250ms ease;
}
.taz-menu-email:hover {
  color: #F75B00 !important;
}
.taz-menu-email svg { width: calc(2 * var(--u)); height: calc(2 * var(--u)); flex-shrink: 0; }
.taz-menu-email > span { text-decoration: underline; text-underline-offset: .15em; }
.taz-menu-desktop-button { padding-bottom: calc(3 * var(--u)); }
.taz-menu-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(.8 * var(--u));
  width: max-content;
  padding: calc(1.6 * var(--u)) calc(3.4 * var(--u));
  border-radius: 100px;
  background: #101820;
  color: white !important;
  font-size: calc(1.9 * var(--u));
  line-height: 1.5;
  letter-spacing: .08em;
  box-shadow: 0 12px 28px -4px rgba(16, 24, 32, 0.35), 0 4px 10px -2px rgba(16, 24, 32, 0.18);
  transition: transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease;
}
.taz-menu-cta:hover {
  transform: translateY(-2px);
  background: #1E2630;
  box-shadow: 0 16px 34px -4px rgba(16, 24, 32, 0.45), 0 6px 14px -2px rgba(247, 91, 0, 0.25);
}
.taz-menu-cta > svg { width: calc(2.2 * var(--u)); height: calc(2.2 * var(--u)); color: #F75B00 !important; }
.taz-menu-letter-window { display: inline-block; height: 1.5em; overflow: hidden; vertical-align: middle; }
.taz-menu-letter-window > span { display: inline-block; text-shadow: 0 1.5em currentColor; transition: transform 550ms var(--menu-ease); }
.taz-menu-nav-wrapper {
  display: grid;
  grid-template-columns: minmax(calc(16 * var(--u)), auto) 1fr;
  column-gap: calc(5 * var(--u));
  align-items: start;
  min-width: 0;
}
.taz-menu-navigation {
  width: auto;
  min-width: calc(16 * var(--u));
}
.taz-menu-section-title {
  padding-bottom: min(calc(1.5 * var(--u)), 1.4vh);
  border-bottom: 1px solid rgba(16, 24, 32, 0.12);
  width: 100%;
  color: #5B6871;
  font-family: var(--menu-body-font);
  font-size: calc(1.9 * var(--u));
  font-weight: 500;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.taz-menu-nav-list {
  display: grid;
  gap: min(calc(2.5 * var(--u)), 2.2vh);
  margin-top: min(calc(2.5 * var(--u)), 2.5vh) !important;
}
.taz-menu-nav-link { display: inline-block; position: relative; }
.taz-menu-navigation .taz-menu-link-text {
  display: inline-block;
  color: var(--menu-ink);
  font-family: var(--menu-display-font);
  font-size: min(calc(3.8 * var(--u)), 3.2vh);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1px;
  opacity: .5;
  transition: opacity 300ms ease-out, color 300ms ease-out;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}
.taz-menu-link-dot {
  position: absolute;
  top: 50%;
  left: calc(-2 * var(--u));
  width: calc(1.2 * var(--u));
  height: calc(1.2 * var(--u));
  background: #F75B00;
  box-shadow: 0 0 8px rgba(247, 91, 0, 0.45);
  border-radius: 50%;
  transform: translate(-100%,-50%) scale(0);
  transition: transform 300ms var(--menu-ease);
}
.taz-menu-nav-link.is-active .taz-menu-link-text { opacity: 1; }
.taz-menu-nav-link.is-active .taz-menu-link-dot { transform: translate(-100%,-50%) scale(1); }
.taz-menu-right-column {
  width: 100%;
  max-width: none;
  max-height: none;
  overflow: visible;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.taz-menu-section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: min(calc(1.5 * var(--u)), 1.4vh);
  border-bottom: 1px solid rgba(16, 24, 32, 0.12);
  width: 100%;
}
.taz-menu-section-heading .taz-menu-section-title {
  border-bottom: 0;
  padding-bottom: 0;
  width: auto;
}
.taz-menu-all-services {
  display: inline-flex;
  align-items: center;
  gap: calc(.5 * var(--u));
  color: #F75B00 !important;
  font-size: calc(1.5 * var(--u));
  font-family: var(--menu-body-font);
  font-weight: 500;
  letter-spacing: .04em;
  text-decoration: none;
  transition: opacity 200ms ease, transform 200ms ease;
}
.taz-menu-all-services:hover {
  opacity: .85;
  transform: translateX(3px);
}
.taz-menu-all-services svg {
  width: calc(1.5 * var(--u));
  height: calc(1.5 * var(--u));
  color: #F75B00 !important;
}
.taz-menu-service-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: calc(4 * var(--u));
  row-gap: min(calc(2.2 * var(--u)), 2.2vh);
  margin-top: min(calc(2.5 * var(--u)), 2.5vh) !important;
}
.taz-menu-service-list .taz-menu-link-text {
  display: inline-block;
  color: var(--menu-ink);
  font-family: var(--menu-display-font);
  font-size: min(calc(2.3 * var(--u)), 2.2vh);
  font-weight: 400;
  letter-spacing: 0.5px;
  white-space: nowrap;
  opacity: .65;
  transition: opacity 300ms ease-out, color 300ms ease-out;
}
.taz-menu-collaboration {
  margin-top: min(calc(4 * var(--u)), 3.8vh);
}
.taz-menu-collaboration .taz-menu-section-title {
  padding-bottom: min(calc(1.5 * var(--u)), 1.4vh);
  border-bottom: 1px solid rgba(16, 24, 32, 0.12);
  width: 100%;
  color: #5B6871;
  font-weight: 500;
  letter-spacing: 0.08em;
}
.taz-menu-collaboration > div {
  margin-top: min(calc(2 * var(--u)), 2vh);
}
.taz-menu-collaboration .taz-menu-link-text {
  display: inline-block;
  color: var(--menu-ink);
  font-family: var(--menu-display-font);
  font-size: min(calc(2.3 * var(--u)), 2.2vh);
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: .95;
  transition: opacity 300ms ease-out, color 300ms ease-out;
}
.taz-menu-collaboration .taz-menu-nav-link:hover .taz-menu-link-text {
  color: #F75B00 !important;
}
.taz-menu-collaboration p {
  margin-top: calc(0.8 * var(--u));
  color: #5B6871 !important;
  font-size: calc(1.6 * var(--u));
  line-height: 1.45;
  max-width: calc(46 * var(--u));
}
.taz-menu-item-reveal, .taz-menu-heading-reveal { opacity: 0; transform: translateX(-75px); transition: opacity var(--menu-duration) var(--menu-ease), transform var(--menu-duration) var(--menu-ease); }
.taz-menu-heading-reveal { transform: translateX(50px); }
.taz-menu[data-state="open"] .taz-menu-item-reveal, .taz-menu[data-state="open"] .taz-menu-heading-reveal { opacity: 1; transform: translate(0); transition-delay: var(--reveal-delay,300ms); }
.taz-menu[data-state="closing"] .taz-menu-item-reveal, .taz-menu[data-state="closing"] .taz-menu-heading-reveal { opacity: 1; transform: translate(0); transition: none; }
.taz-menu-mobile-cta { display: none; }
.taz-menu-footer { grid-column: 1/-1; grid-row: 4; width: 100%; min-width: 0; color: #5B6871; font-size: calc(1.6 * var(--u)); line-height: 1.2; }
.taz-menu-footer-line { display: block; width: 100%; height: 1px; margin-bottom: min(calc(3.5 * var(--u)),3.5vh); background: rgba(16, 24, 32, 0.12); opacity: 0; transform: scaleX(0); transition: opacity var(--menu-duration) var(--menu-ease), transform var(--menu-duration) var(--menu-ease); }
.taz-menu-footer-row { position: relative; display: flex; align-items: center; justify-content: space-between; gap: calc(2 * var(--u)); }
.taz-menu-copyright { max-width: 43%; color: #101820 !important; }
.taz-menu-socials { position: absolute; top: 50%; left: 50%; display: flex; align-items: center; gap: calc(1 * var(--u)); opacity: 0; transform: translate(-50%,50%); transition: opacity var(--menu-duration) var(--menu-ease), transform var(--menu-duration) var(--menu-ease); }
.taz-menu-social { display: grid; place-items: center; flex-shrink: 0; width: calc(3.5 * var(--u)); height: calc(3.5 * var(--u)); border: 1px solid rgba(16, 24, 32, 0.18); border-radius: 50%; color: #5B6871 !important; transition: color 300ms ease, border-color 300ms ease, transform 300ms ease, background-color 300ms ease; }
.taz-menu-social svg { width: 49%; height: 49%; }
.taz-menu-legal { display: flex; align-items: center; gap: calc(6 * var(--u)); }
.taz-menu-legal a { color: #5B6871; transition: color 200ms ease; }
.taz-menu-legal a:hover { color: #F75B00 !important; }
.taz-menu[data-state="open"] .taz-menu-socials, .taz-menu[data-state="closing"] .taz-menu-socials { opacity: 1; transform: translate(-50%,-50%); transition-delay: 720ms; }
.taz-menu[data-state="open"] .taz-menu-footer-line, .taz-menu[data-state="closing"] .taz-menu-footer-line { opacity: 1; transform: scaleX(1); transition-delay: 880ms; }
@media (hover: hover) and (pointer: fine) {
  .taz-menu-close:hover { transform: scale(.9); color: #F75B00; }
  .taz-menu-navigation:hover .taz-menu-link-text, .taz-menu-services:hover .taz-menu-link-text { opacity: .5; }
  .taz-menu-navigation:hover .taz-menu-link-dot, .taz-menu-services:hover .taz-menu-link-dot { transform: translate(-100%,-50%) scale(0); }
  .taz-menu-nav-link:hover .taz-menu-link-text { opacity: 1; }
  .taz-menu-nav-link:hover .taz-menu-link-dot { transform: translate(-100%,-50%) scale(1); }
  .taz-menu-cta:hover .taz-menu-letter-window > span, .taz-menu-top-cta:hover .taz-menu-letter-window > span { transform: translateY(-1.5em); }
  .taz-menu-social[href]:hover { border-color: #F75B00 !important; color: #F75B00 !important; background-color: rgba(247, 91, 0, 0.08); }
  .taz-menu-legal a:hover, .taz-menu-email:hover { color: #F75B00 !important; }
}
@media (max-width: 991px) { .taz-menu { --u: 2.2727272727vw; } }
@media (min-width: 482px) and (max-width: 991px) { .taz-menu { --u: 1.3020833333vw; } }
@media (orientation: portrait), (max-width: 700px) {
  .taz-menu {
    padding: 0;
    background:
      radial-gradient(
        circle at 50% 30%,
        rgba(247, 91, 0, 0.12) 0%,
        rgba(239, 195, 32, 0.08) 45%,
        transparent 70%
      ),
      linear-gradient(180deg, #FAFAFD 0%, #F4F5F9 100%);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }
  .taz-menu-container { width: 100%; max-width: 100%; height: 100%; padding: 0; margin: 0; }
  .taz-menu-ellipse { display: none; }
  .taz-menu-header { top: calc(3.5 * var(--u)); left: calc(3.2 * var(--u)); right: calc(3.2 * var(--u)); }
  .taz-menu-brand-group { gap: calc(1.1 * var(--u)); }
  .taz-menu-brand svg { width: 74px !important; height: 18px !important; }
  .taz-menu-header-divider { height: 13px; }
  .taz-menu-sound button { width: 26px; height: 26px; }
  .taz-menu-header-right { display: none; }
  .taz-menu-shell { grid-template-columns: minmax(0,1fr); grid-template-rows: minmax(0,1fr) auto auto; padding: max(min(calc(10 * var(--u)),10vh),calc(7 * var(--u))) 0 max(min(calc(4 * var(--u)),3vh),env(safe-area-inset-bottom)); transform: scale(1); }
  .taz-menu-surface { background: transparent; clip-path: none !important; backdrop-filter: none; -webkit-backdrop-filter: none; }
  .taz-menu-close { top: calc(4 * var(--u)); right: calc(3.2 * var(--u)); width: calc(2 * var(--u)); height: calc(2 * var(--u)); }
  .taz-menu-close-bar { width: calc(2.8 * var(--u)); height: 1.5px; }
  .taz-menu-main { grid-column: 1; grid-row: 1; display: flex; flex-direction: column; width: 100%; height: 100%; max-height: none; overflow: hidden; }
  .taz-menu-intro { display: grid; gap: calc(1.4 * var(--u)); width: 100%; justify-items: center; padding: 0 calc(3 * var(--u)); margin-bottom: min(calc(5 * var(--u)),2.5vh); flex-shrink: 0; }
  .taz-menu-eyebrow { gap: calc(.5 * var(--u)); font-size: calc(1.4 * var(--u)); }
  .taz-menu-eyebrow > span { width: calc(.8 * var(--u)); height: calc(.8 * var(--u)); }
  .taz-menu-title { width: 100%; text-align: center; font-size: min(calc(3.8 * var(--u)),3.5vh); line-height: 1.1; letter-spacing: 0; }
  .taz-menu-short-line, .taz-menu-email, .taz-menu-desktop-button { display: none; }
  .taz-menu-nav-wrapper { display: block; width: 100%; padding: 0 calc(3.5 * var(--u)); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; flex: 1; min-height: 0; }
  .taz-menu-navigation, .taz-menu-right-column { width: 100%; max-width: none; max-height: none; overflow: visible; padding: 0; margin: 0; box-sizing: border-box; }
  .taz-menu-navigation, .taz-menu-services { margin-bottom: min(calc(4 * var(--u)),2.5vh); }
  .taz-menu-section-title { font-size: min(calc(1.5 * var(--u)),1.5vh); }
  .taz-menu-nav-list, .taz-menu-service-list { gap: min(calc(2 * var(--u)),1.2vh); margin-top: min(calc(2 * var(--u)),1.2vh) !important; }
  .taz-menu-service-list { grid-template-columns: 1fr; }
  .taz-menu-service-list .taz-menu-link-text { white-space: normal; }
  .taz-menu-link-text { display: block; font-size: min(calc(2.4 * var(--u)),2vh); line-height: .9; text-box-trim: none; }
  .taz-menu-link-dot { display: none; }
  .taz-menu-section-heading { width: 100%; }
  .taz-menu-all-services { width: calc(1.5 * var(--u)); height: calc(1.5 * var(--u)); }
  .taz-menu-collaboration { margin-top: min(calc(4 * var(--u)),2.5vh); padding-bottom: calc(2 * var(--u)); }
  .taz-menu-collaboration > div { margin-top: min(calc(2 * var(--u)),1.2vh); }
  .taz-menu-collaboration p { font-size: min(calc(1.6 * var(--u)),1.7vh); }
  .taz-menu-item-reveal { transform: translateY(30px); }
  .taz-menu-heading-reveal { transform: none; }
  .taz-menu-mobile-cta { display: flex; justify-content: center; grid-column: 1; grid-row: 2; margin: min(calc(2.5 * var(--u)),1.5vh) 0; }
  .taz-menu-mobile-button { padding: calc(1.2 * var(--u)) calc(2.2 * var(--u)); font-size: calc(1.4 * var(--u)); }
  .taz-menu-mobile-button > svg { width: calc(1.8 * var(--u)); height: calc(1.8 * var(--u)); }
  .taz-menu-footer { grid-column: 1; grid-row: 3; display: grid; justify-items: center; }
  .taz-menu-footer-line { width: calc(14.5 * var(--u)); margin-bottom: min(calc(2 * var(--u)),2vh); }
  .taz-menu-footer-row { width: 100%; justify-content: center; }
  .taz-menu-copyright, .taz-menu-legal { display: none; }
  .taz-menu-socials { position: static; transform: translateY(100%); }
  .taz-menu[data-state="open"] .taz-menu-socials, .taz-menu[data-state="closing"] .taz-menu-socials { transform: translateY(0); transition-delay: 800ms; }
  .taz-menu-social { width: min(calc(3.3 * var(--u)),3vh); height: min(calc(3.3 * var(--u)),3vh); }
}
@media (min-width: 992px) and (orientation: portrait) { .taz-menu { --u: 1.6666666667vw; } }
@media (max-height: 480px) and (orientation: landscape) { .taz-menu { --u: .5208333333vw; } .taz-menu-main { max-height: calc(100dvh - 24 * var(--u)); } }
@media (prefers-reduced-motion: reduce) {
  .taz-menu, .taz-menu *, .taz-menu *::before { transition-duration: .001ms !important; transition-delay: 0ms !important; }
  .taz-menu-item-reveal, .taz-menu-heading-reveal, .taz-menu-shell { transform: none; }
}

/* ========================================================================== */
/* DARK MODE CONSISTENCY (Synchronizes with website dark theme)             */
/* ========================================================================== */
:root.dark .taz-menu,
html.dark .taz-menu,
.dark .taz-menu,
body.dark .taz-menu {
  --menu-ink: #F3F4FA;
  --menu-muted: #9C9DB5;
  --menu-border: rgba(255, 255, 255, 0.12);
  color-scheme: dark;
  background:
    radial-gradient(
      ellipse 70% 60% at 50% 45%,
      rgba(247, 91, 0, 0.16) 0%,
      rgba(239, 195, 32, 0.08) 35%,
      transparent 75%
    ),
    radial-gradient(
      circle at 85% 15%,
      rgba(247, 91, 0, 0.12) 0%,
      transparent 45%
    ),
    linear-gradient(
      180deg,
      #0B0B12 0%,
      #11111E 50%,
      #0B0B12 100%
    );
  color: #F3F4FA;
}
:root.dark .taz-menu-surface,
html.dark .taz-menu-surface,
.dark .taz-menu-surface,
body.dark .taz-menu-surface {
  background:
    radial-gradient(
      ellipse 65% 55% at 50% 45%,
      rgba(247, 91, 0, 0.10) 0%,
      rgba(239, 195, 32, 0.05) 40%,
      transparent 75%
    ),
    linear-gradient(
      135deg,
      rgba(23, 23, 38, 0.90) 0%,
      rgba(17, 17, 28, 0.85) 50%,
      rgba(23, 23, 38, 0.90) 100%
    );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 30px 90px -20px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 2px 10px rgba(0, 0, 0, 0.4);
}
:root.dark .taz-menu-brand svg,
html.dark .taz-menu-brand svg {
  color: #F3F4FA !important;
}
:root.dark .taz-menu-header-divider,
html.dark .taz-menu-header-divider {
  background: rgba(255, 255, 255, 0.2);
}
:root.dark .taz-menu-sound button,
html.dark .taz-menu-sound button {
  border-color: rgba(255, 255, 255, 0.2);
  color: #F3F4FA;
}
:root.dark .taz-menu-top-cta,
html.dark .taz-menu-top-cta {
  color: #F3F4FA;
}
:root.dark .taz-menu-close,
html.dark .taz-menu-close {
  color: #F3F4FA;
}
:root.dark .taz-menu-title,
html.dark .taz-menu-title {
  color: #F3F4FA !important;
}
:root.dark .taz-menu-short-line,
html.dark .taz-menu-short-line,
:root.dark .taz-menu-footer-line,
html.dark .taz-menu-footer-line {
  background: rgba(255, 255, 255, 0.12);
}
:root.dark .taz-menu-email,
html.dark .taz-menu-email {
  color: #9C9DB5 !important;
}
:root.dark .taz-menu-navigation .taz-menu-link-text,
html.dark .taz-menu-navigation .taz-menu-link-text {
  color: #F3F4FA;
}
:root.dark .taz-menu-service-list .taz-menu-link-text,
html.dark .taz-menu-service-list .taz-menu-link-text {
  color: #F3F4FA;
}
:root.dark .taz-menu-section-title,
html.dark .taz-menu-section-title,
:root.dark .taz-menu-section-heading,
html.dark .taz-menu-section-heading,
:root.dark .taz-menu-collaboration .taz-menu-section-title,
html.dark .taz-menu-collaboration .taz-menu-section-title {
  border-bottom-color: rgba(255, 255, 255, 0.12);
  color: #9C9DB5;
}
:root.dark .taz-menu-collaboration .taz-menu-link-text,
html.dark .taz-menu-collaboration .taz-menu-link-text {
  color: #F3F4FA;
}
:root.dark .taz-menu-collaboration p,
html.dark .taz-menu-collaboration p {
  color: #9C9DB5 !important;
}
:root.dark .taz-menu-footer,
html.dark .taz-menu-footer,
:root.dark .taz-menu-copyright,
html.dark .taz-menu-copyright,
.dark .taz-menu-copyright,
:root.dark .taz-menu-legal a,
html.dark .taz-menu-legal a {
  color: #9C9DB5 !important;
}
:root.dark .taz-menu-social,
html.dark .taz-menu-social {
  border-color: rgba(255, 255, 255, 0.2);
  color: #9C9DB5 !important;
}
:root.dark .taz-menu-cta,
html.dark .taz-menu-cta {
  background: #F3F4FA;
  color: #101820 !important;
  box-shadow: 0 12px 28px -4px rgba(0, 0, 0, 0.5), 0 4px 10px -2px rgba(247, 91, 0, 0.25);
}
:root.dark .taz-menu-cta:hover,
html.dark .taz-menu-cta:hover {
  background: #FFFFFF;
  box-shadow: 0 16px 36px -4px rgba(0, 0, 0, 0.6), 0 6px 14px -2px rgba(247, 91, 0, 0.35);
}
:root.dark .taz-menu-cta > svg,
html.dark .taz-menu-cta > svg {
  color: #F75B00 !important;
}
`;
