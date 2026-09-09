import React from "react";
import Image from "next/image";

interface ProjectDetailHeroProps {
  imageSrc: string;
  title: string;
}

export function ProjectDetailHero({ imageSrc, title }: ProjectDetailHeroProps) {
  return (
    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-brand-ink/10 shadow-brand mb-12 bg-brand-soft">
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
