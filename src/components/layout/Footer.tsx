"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { SITE_CONFIG, NAV_LINKS, SERVICE_LINKS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-ink/10 bg-brand-surface pt-16 pb-12 mt-auto">
      <Container>
        {/* Footer CTA Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 mb-12 border-b border-brand-ink/10">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink mb-2">
              Let&apos;s build something great.
            </h2>
            <p className="text-brand-muted text-sm max-w-md">
              Available for freelance projects and technical collaborations — usually replies within 24 hours.
            </p>
          </div>
          <Button
            href="/contact"
            variant="primary"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a project
          </Button>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Socials Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading font-bold text-xl tracking-tight flex items-center gap-2 mb-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gradient" />
              <span>
                Tufael<b className="text-brand-violet">.</b>dev
              </span>
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-sm mb-6">
              Full-stack web developer crafting fast, modern, user-centered digital experiences with Next.js, Redux, and Tailwind CSS.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-bg flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-bg flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-0.5 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-bg flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-0.5 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl border border-brand-ink/10 bg-brand-bg flex items-center justify-center text-brand-muted hover:text-brand-violet hover:border-brand-violet hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="font-mono text-xs text-brand-muted2 uppercase tracking-wider mb-4 font-semibold">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-violet transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-mono text-xs text-brand-muted2 uppercase tracking-wider mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-brand-muted hover:text-brand-violet transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-mono text-xs text-brand-muted2 uppercase tracking-wider mb-4 font-semibold">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-violet transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-violet transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-violet transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-brand-muted hover:text-brand-violet transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-ink/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-muted2">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-brand-muted hover:text-brand-violet transition-colors cursor-pointer"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
