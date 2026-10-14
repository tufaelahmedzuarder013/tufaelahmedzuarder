import React from "react";
import Image from "next/image";
import { Sparkles, Zap, Layout, Code2, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function HomeAboutTeaser() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-brand-bg">
      {/* Background Soft Ambient Light Blobs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#61CED9]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#06D6A0]/8 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ========================================================================= */}
          {/* PORTRAIT IMAGE COLUMN (5 cols)                                            */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start pt-6 pb-8 sm:pb-10">
            {/* Ambient Backlight Glow behind image */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#61CED9]/25 via-[#06D6A0]/20 to-transparent blur-3xl -z-10 rounded-[48px] opacity-75" />

            {/* Main Portrait Card Frame */}
            <div className="relative w-full max-w-[400px] sm:max-w-[440px] aspect-[4/5] rounded-[32px] sm:rounded-[38px] overflow-hidden border border-brand-ink/10 dark:border-white/15 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)] bg-brand-surface group">
              <Image
                src="/images/Tufael (3).png"
                alt="Tufael Ahmed Zuarder"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle glass gradient vignette on bottom of photo */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top-Right Floating Live Status Pill */}
            <div className="absolute top-2 -right-2 sm:top-2 sm:-right-4 bg-brand-surface/95 dark:bg-[#0B211B]/90 backdrop-blur-xl border border-brand-ink/10 dark:border-[#06D6A0]/30 rounded-full px-4 py-2 shadow-xl flex items-center gap-2.5 z-20 transition-transform duration-300 hover:scale-105">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06D6A0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06D6A0]" />
              </span>
              <span className="font-mono text-xs font-semibold text-brand-ink tracking-wide">
                Available for Freelance
              </span>
            </div>

            {/* Bottom-Left Floating Experience Badge - Zero Clipping Guarantee */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6 bg-brand-surface/95 dark:bg-[#0B211B]/95 backdrop-blur-2xl border border-brand-ink/10 dark:border-[#06D6A0]/35 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex items-center gap-3.5 sm:gap-4 z-20 transition-transform duration-300 hover:scale-105">
              {/* Vibrant Badge Icon with 5+ */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#61CED9] to-[#06D6A0] flex items-center justify-center text-[#04241E] font-heading font-black text-2xl sm:text-3xl shadow-[0_6px_20px_rgba(6,214,160,0.4)] shrink-0">
                5+
              </div>
              <div>
                <span className="block font-heading font-bold text-sm sm:text-base text-brand-ink leading-tight">
                  Years Experience
                </span>
                <span className="block font-mono text-[11px] sm:text-xs text-brand-muted mt-0.5 tracking-tight">
                  Web & UI/UX Specialist
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ABOUT COPY COLUMN (7 cols)                                                */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-0">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#06D6A0]/30 bg-[#06D6A0]/10 text-[#06D6A0] dark:text-[#5EEAD4] font-mono text-xs font-semibold uppercase tracking-[0.16em]">
              <Sparkles className="w-3.5 h-3.5 text-[#61CED9]" />
              <span>About Tufael</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-brand-ink tracking-[0.04em] [word-spacing:0.18em] leading-[1.2]">
              Developer with an eye for design and an{" "}
              <span className="bg-gradient-to-r from-[#61CED9] via-[#06D6A0] to-[#10B981] dark:from-[#61CED9] dark:via-[#5EEAD4] dark:to-[#E6FBF6] bg-clip-text text-transparent">
                obsession with speed.
              </span>
            </h2>

            {/* Body Copy Paragraphs */}
            <div className="space-y-4">
              <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed tracking-[0.035em] [word-spacing:0.15em]">
                I&apos;m <strong className="text-brand-ink font-semibold">Tufael Ahmed Zuarder</strong>, a full-stack web developer who turns ideas into fast, polished products. I care about the details most people never notice — the milliseconds, the spacing, the way a page feels as it loads.
              </p>

              <p className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed tracking-[0.035em] [word-spacing:0.15em]">
                My work lives at the intersection of clean engineering and thoughtful design — premium-looking experiences that run smoothly on every device.
              </p>
            </div>

            {/* 3 Bento Feature Highlight Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-brand-surface/75 dark:bg-white/[0.03] border border-brand-ink/10 dark:border-white/10 shadow-xs flex items-start gap-3 transition-all duration-300 hover:border-[#61CED9]/40">
                <div className="w-8 h-8 rounded-xl bg-[#61CED9]/15 flex items-center justify-center text-[#61CED9] shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-xs sm:text-sm text-brand-ink leading-tight">
                    Sub-second Speed
                  </span>
                  <span className="block font-sans text-[11px] text-brand-muted mt-0.5">
                    99+ Lighthouse score
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-brand-surface/75 dark:bg-white/[0.03] border border-brand-ink/10 dark:border-white/10 shadow-xs flex items-start gap-3 transition-all duration-300 hover:border-[#06D6A0]/40">
                <div className="w-8 h-8 rounded-xl bg-[#06D6A0]/15 flex items-center justify-center text-[#06D6A0] shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-xs sm:text-sm text-brand-ink leading-tight">
                    Modern Stack
                  </span>
                  <span className="block font-sans text-[11px] text-brand-muted mt-0.5">
                    Next.js 14, React & TS
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-brand-surface/75 dark:bg-white/[0.03] border border-brand-ink/10 dark:border-white/10 shadow-xs flex items-start gap-3 transition-all duration-300 hover:border-[#61CED9]/40">
                <div className="w-8 h-8 rounded-xl bg-[#61CED9]/15 flex items-center justify-center text-[#61CED9] shrink-0 mt-0.5">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-xs sm:text-sm text-brand-ink leading-tight">
                    UI/UX Precision
                  </span>
                  <span className="block font-sans text-[11px] text-brand-muted mt-0.5">
                    Pixel-perfect finish
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                More about me
              </Button>

              <Button
                href="/portfolio"
                variant="ghost"
                size="md"
              >
                Explore projects
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
