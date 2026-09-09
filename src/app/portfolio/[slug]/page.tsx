import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageBanner } from "@/components/layout/PageBanner";
import { CtaBanner } from "@/features/home/components/CtaBanner";
import { PROJECTS } from "@/features/portfolio/data/projects.data";
import { ProjectDetailHero } from "@/features/portfolio/components/ProjectDetailHero";
import { ProjectMetaCard } from "@/features/portfolio/components/ProjectMetaCard";
import { ProjectPager } from "@/features/portfolio/components/ProjectPager";
import { constructMetadata } from "@/lib/seo";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return constructMetadata({ title: "Project Not Found" });

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    image: project.heroImage,
  });
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS[currentIndex];
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : undefined;

  return (
    <>
      <PageBanner
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title, href: `/portfolio/${project.slug}` },
        ]}
      />

      <Section>
        <Container>
          {/* Top Hero Image */}
          <ProjectDetailHero
            imageSrc={project.heroImage}
            title={project.title}
          />

          {/* Main Grid: Content (2 cols) vs Sidebar Meta (1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Prose Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="font-heading text-2xl font-bold text-brand-ink mb-3">
                  Overview
                </h3>
                <p className="text-base text-brand-muted leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-brand-ink mb-3">
                  The Challenge
                </h3>
                <p className="text-base text-brand-muted leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-brand-ink mb-3">
                  The Solution
                </h3>
                <p className="text-base text-brand-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Sidebar Sticky Meta Card */}
            <div>
              <ProjectMetaCard project={project} />
            </div>
          </div>

          {/* Screenshot Gallery */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              {project.galleryImages.map((imgSrc, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-ink/10 shadow-brand-sm group bg-brand-soft"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Previous / Next Navigation Pager */}
          <ProjectPager
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </Container>
      </Section>

      <CtaBanner
        title="Want results like this?"
        subtitle="Let's build something worth showing off. I'm open for new client engagements."
        buttonText="Start a project"
      />
    </>
  );
}
