import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function HomeAboutTeaser() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[32px] overflow-hidden border border-brand-ink/10 shadow-brand bg-brand-soft">
              <Image
                src="/images/Tufael (3).png"
                alt="Tufael Ahmed Zuarder"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 left-4 sm:left-6 bg-brand-surface/95 backdrop-blur-md border border-brand-ink/10 rounded-2xl p-5 shadow-brand min-w-[150px]">
              <span className="block font-heading text-4xl sm:text-5xl font-bold text-brand-violet leading-none mb-2">
                5
              </span>
              <span className="block font-mono text-xs text-brand-muted leading-snug">
                Years building<br />for the web
              </span>
            </div>
          </div>

          {/* About Copy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-violet uppercase tracking-wider">
              <span>—</span>
              <span>// About me</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-brand-ink tracking-[0.05em] [word-spacing:0.2em] leading-[1.25]">
              Developer with an eye for design and an obsession with speed.
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed tracking-[0.035em] [word-spacing:0.15em]">
              I&apos;m <strong className="text-brand-ink font-semibold">Tufael Ahmed Zuarder</strong>, a full-stack web developer who turns ideas into fast, polished products. I care about the details most people never notice — the milliseconds, the spacing, the way a page feels as it loads.
            </p>

            {/* Paragraph 2 */}
            <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed tracking-[0.035em] [word-spacing:0.15em]">
              My work lives at the intersection of clean engineering and thoughtful design — premium-looking experiences that run smoothly on every device.
            </p>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-brand-ink/15 bg-brand-surface text-brand-ink hover:border-brand-violet hover:text-brand-violet text-sm tracking-[0.05em] [word-spacing:0.15em] font-medium shadow-brand-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group"
              >
                <span>More about me</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
