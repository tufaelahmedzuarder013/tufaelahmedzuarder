import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { ServiceItem } from "../types/service.types";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "../data/services.data";

interface ServiceDetailViewProps {
  service: ServiceItem;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <div>
      {/* Hero Banner Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-brand-ink/10 shadow-brand mb-12 bg-brand-soft">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Main Content (2 cols) */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h3 className="font-heading text-2xl font-bold text-brand-ink mb-4">
              Overview
            </h3>
            <p className="text-base text-brand-muted leading-relaxed">
              {service.overview}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-brand-ink mb-4">
              What&apos;s Included
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.included.map((inc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-brand-ink2"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-violet shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-brand-ink mb-4">
              Key Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((del, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-brand-ink2"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Services Chips */}
          <div className="pt-6 border-t border-brand-ink/10">
            <h4 className="font-mono text-xs text-brand-muted2 uppercase tracking-wide mb-3">
              Explore Other Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {otherServices.map((other) => (
                <Link
                  key={other.id}
                  href={`/services/${other.slug}`}
                  className="px-4 py-2 rounded-full border border-brand-ink/10 bg-brand-surface text-xs font-heading font-semibold text-brand-muted hover:text-brand-violet hover:border-brand-violet transition-colors"
                >
                  {other.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Sticky Meta (1 col) */}
        <aside className="border border-brand-ink/10 rounded-2xl bg-brand-surface p-6 shadow-brand-sm sticky top-28 space-y-6">
          <div>
            <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block mb-1">
              Service
            </span>
            <b className="font-heading text-lg font-bold text-brand-ink">
              {service.title}
            </b>
          </div>

          <div className="pt-4 border-t border-brand-ink/5">
            <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block mb-1">
              Best For
            </span>
            <p className="text-xs text-brand-muted leading-relaxed">
              {service.bestFor}
            </p>
          </div>

          <div className="pt-4 border-t border-brand-ink/5">
            <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block mb-2">
              Tech & Tools
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-brand-violet/10 text-brand-violet font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-brand-ink/5">
            <Button
              href="/contact"
              variant="primary"
              className="w-full justify-center"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a project
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
