import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { BreadcrumbItem } from "@/types/navigation";

interface PageBannerProps {
  title: string;
  highlightText?: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageBanner({
  title,
  highlightText,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageBannerProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 text-center overflow-hidden">
      {/* Background Radial Mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 max-w-3xl">
        {/* Breadcrumb path */}
        {breadcrumbs && (
          <nav className="font-mono text-xs text-brand-muted2 mb-4 flex items-center justify-center gap-2">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.href}>
                {idx > 0 && <span>/</span>}
                <Link
                  href={crumb.href}
                  className="hover:text-brand-violet transition-colors"
                >
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.06em] [word-spacing:0.25em] leading-[1.25] text-brand-ink mb-4">
          {title}{" "}
          {highlightText && (
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {highlightText}
            </span>
          )}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </Container>
    </section>
  );
}
