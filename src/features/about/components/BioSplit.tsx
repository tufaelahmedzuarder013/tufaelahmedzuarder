import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function BioSplit() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Portrait Image Column */}
      <div className="lg:col-span-5 relative">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-ink/10 shadow-brand bg-brand-soft">
          <Image
            src="/images/Tufael (3).png"
            alt="Tufael Ahmed Zuarder"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-top"
          />
        </div>

        {/* Experience Floating Badge */}
        <div className="absolute -bottom-6 -left-4 sm:left-4 bg-brand-surface border border-brand-ink/10 rounded-2xl p-4 shadow-brand flex items-center gap-3">
          <b className="font-heading text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent">
            4+
          </b>
          <div className="font-mono text-xs text-brand-muted leading-tight">
            Years of<br />Experience
          </div>
        </div>
      </div>

      {/* Bio Copy Column */}
      <div className="lg:col-span-7 space-y-6">
        <Eyebrow>{"// About Me"}</Eyebrow>

        <h2 className="font-heading text-3xl sm:text-4xl text-brand-ink tracking-[0.06em] [word-spacing:0.25em] leading-[1.25]">
          Obsessed with code quality, user experience, and fast delivery.
        </h2>

        <p className="text-base text-brand-muted leading-relaxed">
          I am <strong>Tufael Ahmed Zuarder</strong>, a Full-Stack Web Developer based in Sylhet, Bangladesh. Over the past 4+ years, I have helped founders, startups, and agencies turn ambitious ideas into high-performance web products.
        </p>

        <p className="text-base text-brand-muted leading-relaxed">
          My development philosophy is simple: clean code, accessible design, and zero bloat. Every project I build is engineered with modern frameworks like <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong> to ensure lightning-fast page loads and intuitive usability across every device.
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Work with me
          </Button>
          <Button
            href="/portfolio"
            variant="ghost"
          >
            Explore projects
          </Button>
        </div>
      </div>
    </div>
  );
}
