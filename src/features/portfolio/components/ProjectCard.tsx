import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../types/project.types";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-brand-ink/10 bg-brand-surface shadow-brand-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/11] overflow-hidden bg-brand-soft">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="font-heading text-xs font-semibold text-white tracking-wide flex items-center gap-1">
            View case study <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Meta Information */}
      <div className="p-5 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-bold text-lg text-brand-ink group-hover:text-brand-violet transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-brand-muted mt-1">
            {project.categoryLabel}
          </p>
        </div>
        <div className="w-9 h-9 rounded-full border border-brand-ink/10 flex items-center justify-center text-brand-muted group-hover:border-brand-violet group-hover:text-brand-violet group-hover:bg-brand-violet/5 transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
