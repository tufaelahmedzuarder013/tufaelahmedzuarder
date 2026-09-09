import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProjectGrid } from "@/features/portfolio/components/ProjectGrid";

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28 bg-brand-soft">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <Eyebrow>// Selected Projects</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink">
              Recent featured work.
            </h2>
          </div>
          <Button
            href="/portfolio"
            variant="ghost"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            View all 12 projects
          </Button>
        </div>

        <ProjectGrid limit={6} />
      </Container>
    </section>
  );
}
