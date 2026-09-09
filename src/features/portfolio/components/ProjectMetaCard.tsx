import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../types/project.types";
import { Button } from "@/components/ui/Button";

interface ProjectMetaCardProps {
  project: ProjectItem;
}

export function ProjectMetaCard({ project }: ProjectMetaCardProps) {
  return (
    <aside className="border border-brand-ink/10 rounded-2xl bg-brand-surface p-6 shadow-brand-sm sticky top-28">
      <div className="space-y-4 text-sm divide-y divide-brand-ink/5">
        <div>
          <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block mb-1">
            Category
          </span>
          <b className="font-heading font-semibold text-brand-ink">
            {project.categoryLabel}
          </b>
        </div>

        <div className="pt-4">
          <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block mb-1">
            Year
          </span>
          <b className="font-heading font-semibold text-brand-ink">
            {project.year}
          </b>
        </div>

        <div className="pt-4">
          <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block mb-1">
            Role
          </span>
          <b className="font-heading font-semibold text-brand-ink">
            {project.role}
          </b>
        </div>

        <div className="pt-4">
          <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block mb-2">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-brand-violet/10 text-brand-violet font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.liveUrl && (
        <div className="mt-6 pt-6 border-t border-brand-ink/5">
          <Button
            href={project.liveUrl}
            variant="primary"
            className="w-full justify-center"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Visit live site
          </Button>
        </div>
      )}
    </aside>
  );
}
