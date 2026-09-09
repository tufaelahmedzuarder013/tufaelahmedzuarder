import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectItem } from "../types/project.types";

interface ProjectPagerProps {
  prevProject?: ProjectItem;
  nextProject?: ProjectItem;
}

export function ProjectPager({ prevProject, nextProject }: ProjectPagerProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-brand-ink/10">
      {prevProject ? (
        <Link
          href={`/portfolio/${prevProject.slug}`}
          className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-brand-muted hover:text-brand-violet transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{prevProject.title}</span>
        </Link>
      ) : (
        <span />
      )}

      <Link
        href="/portfolio"
        className="font-mono text-xs uppercase tracking-wider text-brand-muted hover:text-brand-ink transition-colors"
      >
        All Projects
      </Link>

      {nextProject ? (
        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-brand-muted hover:text-brand-violet transition-colors group"
        >
          <span>{nextProject.title}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
