"use client";

import { useId, type CSSProperties } from "react";

type LogoMark = "circle" | "hourglass" | "rings" | "split";
export type AboutLogo = {
  label: string;
  mark?: LogoMark;
  image?: string;
};

export type AboutSectionProps = {
  eyebrow?: string;
  titleLines?: readonly string[];
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  metric?: string;
  metricCaption?: string;
  featureTitle?: string;
  featureDescription?: string;
  logos?: readonly AboutLogo[];
  className?: string;
  style?: CSSProperties;
  /** Assets default to your site's /images and /fonts public directories. */
  assetBase?: string;
};

export const DEFAULT_ABOUT_LOGOS: readonly AboutLogo[] = [
  { label: "Next.js & React", mark: "circle" },
  { label: "TypeScript Core", mark: "hourglass" },
  { label: "Tailwind Styling", mark: "rings" },
  { label: "Figma & UI/UX", mark: "split" },
];

/**
 * About section tailored for Tufael Ahmed Zuarder (TAZ) - Full-Stack Developer & UI/UX Designer.
 */
export default function AboutSection({
  eyebrow = "Crafting High-Performance Digital Products For Visionary Founders",
  titleLines = ["Your Dedicated", "Tech Partner, On Demand"],
  description = "From clean UI/UX designs to scalable full-stack applications with Next.js, React, and Node.js. I build modern, lightning-fast digital solutions so you can scale your business with confidence.",
  ctaLabel = "Let's Talk Brief",
  ctaHref = "/contact",
  imageSrc = "/images/about-botanical.png",
  imageAlt = "Tufael Ahmed Zuarder - Creative digital craftsmanship in modern web development",
  imagePosition = "center",
  metric = "98%",
  metricCaption = "Client Satisfaction\n& Repeat Rate.",
  featureTitle = "Modern\nArchitecture",
  featureDescription = "Built with Next.js, TypeScript, and Tailwind for blazing performance and top SEO.",
  logos = DEFAULT_ABOUT_LOGOS,
  className = "",
  style,
  assetBase = "",
}: AboutSectionProps) {
  const uid = `about-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const asset = (path: string) => path.startsWith("/")
    ? `${assetBase.replace(/\/$/, "")}${path}` : path;

  return (
    <div className="w-full py-[100px] bg-[#FEFFFF] dark:bg-[#0A0D14] transition-colors duration-300">
      <section className={`botanical-about ${className}`.trim()} style={style} aria-labelledby={`${uid}-title`}>
        <header className="botanical-about__intro">
          <p className="botanical-about__eyebrow">{eyebrow}</p>
          <h2 className="botanical-about__title" id={`${uid}-title`}>
            {titleLines.map((line, index) => <span key={index}>{line}</span>)}
          </h2>
          <p className="botanical-about__description">{description}</p>
          <a className="botanical-about__cta" href={ctaHref}>
            <span>{ctaLabel}</span>
            <span className="botanical-about__cta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </span>
          </a>
        </header>

        <div className="botanical-about__visual" data-has-logos={logos.length ? "true" : "false"}>
          <svg className="botanical-about__defs" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id={`${uid}-image-cutout`} clipPathUnits="objectBoundingBox">
                <path d="M0 0H1V1H.79C.739 1 .758 .914 .674 .914H.326C.242 .914 .261 1 .21 1H0Z" />
              </clipPath>
            </defs>
          </svg>

          <div
            className="botanical-about__photo"
            style={logos.length ? { clipPath: `url(#${uid}-image-cutout)` } : undefined}
          >
            <img src={asset(imageSrc)} alt={imageAlt} width={1586} height={992} loading="lazy" decoding="async" style={{ objectPosition: imagePosition }} />
            <span className="botanical-about__shade" aria-hidden="true" />
          </div>

          {metric && <div className="botanical-about__metric">
            <strong>{metric}</strong>
            <p>{metricCaption}</p>
          </div>}

          {featureTitle && <div className="botanical-about__feature">
            <h3>{featureTitle}</h3>
            <p>{featureDescription}</p>
          </div>}

          {logos.length > 0 && <ul className="botanical-about__logos" aria-label="Featured tools">
            {logos.map((logo, index) => <li key={`${logo.label}-${index}`}>
              {logo.image
                ? <img className="botanical-about__logo-image" src={asset(logo.image)} alt="" width={24} height={24} loading="lazy" />
                : <LogoIcon mark={logo.mark ?? "circle"} />}
              <span>{logo.label}</span>
            </li>)}
          </ul>}
        </div>

        <style>{`
  @font-face { font-family: "About Inter"; src: url(${JSON.stringify(asset("/fonts/inter-latin-400-normal.woff2"))}) format("woff2"); font-style: normal; font-weight: 400; font-display: swap; }
  @font-face { font-family: "About Inter"; src: url(${JSON.stringify(asset("/fonts/inter-latin-700-normal.woff2"))}) format("woff2"); font-style: normal; font-weight: 700; font-display: swap; }
  @font-face { font-family: "About Editorial"; src: url(${JSON.stringify(asset("/fonts/instrument-serif-latin-400-normal.woff2"))}) format("woff2"); font-style: normal; font-weight: 400; font-display: swap; }
        `}</style>
        <style>{ABOUT_SECTION_CSS}</style>
      </section>
    </div>
  );
}

export { AboutSection as AboutPartnerShowcase };

function LogoIcon({ mark }: { mark: LogoMark }) {
  return <svg className="botanical-about__logo-icon" viewBox="0 0 24 24" aria-hidden="true">
    {mark === "circle" && <><circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="7" r="3" fill="currentColor" /></>}
    {mark === "hourglass" && <path d="M2 2h20l-7 10 7 10H2l7-10Z" fill="currentColor" />}
    {mark === "rings" && <><ellipse cx="9" cy="12" rx="7" ry="8" fill="none" stroke="currentColor" strokeWidth="2.3" /><ellipse cx="15" cy="12" rx="7" ry="8" fill="none" stroke="currentColor" strokeWidth="2.3" /></>}
    {mark === "split" && <><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" /></>}
  </svg>;
}

export const ABOUT_SECTION_CSS = `
.botanical-about {
  --about-background: #FEFFFF;
  --about-ink: #060606;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 clamp(16px, 2.6vw, 40px);
  color: var(--about-ink);
  background: var(--about-background);
  font-family: "About Inter", var(--font-plus-jakarta-sans), var(--font-aventa), Arial, sans-serif;
}
:is(.dark) .botanical-about {
  --about-background: #0A0D14;
  --about-ink: #ffffff;
}
.botanical-about *, .botanical-about *::before, .botanical-about *::after { box-sizing: border-box; }
.botanical-about__intro { display: flex; flex-direction: column; align-items: center; text-align: center; }
.botanical-about__eyebrow {
  margin: 0 !important;
  font-family: var(--font-aventa), 'Aventa', sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1.4 !important;
  text-transform: capitalize !important;
  letter-spacing: 0.04em !important;
  color: #555 !important;
}
:is(.dark) .botanical-about__eyebrow {
  color: rgba(255, 255, 255, 0.75) !important;
}
.botanical-about__title {
  width: 100%;
  max-width: 1060px;
  margin: clamp(14px, 2.2vw, 26px) 0 0 !important;
  color: var(--about-ink) !important;
  font-family: var(--font-orlean), 'Orlean', sans-serif !important;
  font-size: clamp(32px, 4.4vw, 57px) !important;
  font-weight: 500 !important;
  line-height: 1.1 !important;
  letter-spacing: -0.02em !important;
}
.botanical-about__title span { display: block; text-wrap: balance; }
.botanical-about__description { width: 72%; max-width: 870px; margin: clamp(12px,2.1vw,27px) 0 0 !important; color: #858585 !important; font-size: clamp(12px,1.77vw,22px) !important; font-weight: 400 !important; line-height: 1.45 !important; letter-spacing: -.024em !important; text-wrap: pretty; font-family: "About Inter", var(--font-aventa), var(--font-plus-jakarta-sans), Arial, sans-serif !important; }
:is(.dark) .botanical-about__description { color: rgba(255,255,255,0.65) !important; }
.botanical-about__cta {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  min-height: 48px;
  margin-top: clamp(14px, 1.8vw, 24px);
  padding: 4px 5px 4px 22px;
  border: 1px solid #000;
  border-radius: 999px;
  background: #050505;
  color: #fff;
  text-decoration: none;
  font-family: var(--font-aventa), 'Aventa', sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1 !important;
  transition: all 0.3s ease;
}
:is(.dark) .botanical-about__cta {
  background: #14161b;
  color: #fff;
  border-color: rgba(255, 255, 255, 0.16);
}
.botanical-about__cta-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  color: #050505;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
}
:is(.dark) .botanical-about__cta-icon {
  background: #fff;
  color: #050505;
}
.botanical-about__cta-icon svg {
  width: 50%;
  height: 50%;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.botanical-about__cta:hover {
  background: linear-gradient(135deg, #F75B00 0%, #EFC320 100%) !important;
  border-color: transparent !important;
  color: #fff !important;
  box-shadow: 0 10px 25px -4px rgba(247, 91, 0, 0.45) !important;
  transform: translateY(-2px);
}
:is(.dark) .botanical-about__cta:hover {
  background: linear-gradient(135deg, #F75B00 0%, #EFC320 100%) !important;
  border-color: transparent !important;
  color: #fff !important;
  box-shadow: 0 10px 25px -4px rgba(247, 91, 0, 0.45) !important;
  transform: translateY(-2px);
}
.botanical-about__cta:hover .botanical-about__cta-icon {
  background: #fff !important;
  color: #101820 !important;
  transform: scale(1.06) rotate(45deg);
}
.botanical-about__cta:focus-visible { outline: 2px solid #F75B00; outline-offset: 4px; }
.botanical-about__visual { position: relative; width: 100%; margin-top: clamp(28px, 4vw, 56px); aspect-ratio: 16 / 9; isolation: isolate; }
.botanical-about__defs { position: absolute; width: 0; height: 0; pointer-events: none; }
.botanical-about__photo { position: absolute; inset: 0; overflow: hidden; border-radius: clamp(18px,3.4vw,44px); background: #8db1b4; }
.botanical-about__photo > img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; }
.botanical-about__shade { position: absolute; inset: 0; background: linear-gradient(180deg,transparent 48%,rgb(0 0 0 / .2) 100%); pointer-events: none; }
.botanical-about__metric { position: absolute; z-index: 1; top: 8%; left: 5.3%; color: #fff; }
.botanical-about__metric strong { display: block; margin: 0; font-size: clamp(34px, 5.5vw, 72px); font-weight: 700; line-height: 1; letter-spacing: -.06em; font-family: "About Inter", var(--font-plus-jakarta-sans), Arial, sans-serif; }
.botanical-about__metric p { margin: clamp(6px, 1vw, 12px) 0 0 !important; font-size: clamp(10px, 1.2vw, 15px) !important; font-weight: 400 !important; line-height: 1.35 !important; white-space: pre-line !important; letter-spacing: -.025em !important; opacity: .94 !important; color: #fff !important; font-family: "About Inter", var(--font-aventa), Arial, sans-serif !important; }
.botanical-about__feature { position: absolute; z-index: 1; right: 5.3%; bottom: 11%; width: 22%; min-width: 190px; color: #fff; text-align: right; text-shadow: 0 1px 12px rgb(0 0 0 / .08); }
.botanical-about__feature h3 { margin: 0 !important; font-size: clamp(15px,2.4vw,30px) !important; font-weight: 700 !important; line-height: 1.05 !important; white-space: pre-line !important; letter-spacing: -.04em !important; color: #fff !important; font-family: "About Inter", var(--font-plus-jakarta-sans), Arial, sans-serif !important; }
.botanical-about__feature p { margin: clamp(7px,1vw,13px) 0 0 !important; font-size: clamp(10px,1.4vw,18px) !important; line-height: 1.28 !important; letter-spacing: -.035em !important; opacity: .88 !important; color: #fff !important; font-family: "About Inter", var(--font-aventa), Arial, sans-serif !important; }
.botanical-about__logos { position: absolute; z-index: 2; display: flex; justify-content: center; align-items: center; gap: clamp(12px,2vw,26px); left: 50%; bottom: 0; transform: translateX(-50%); width: 45.5%; height: 8.6%; margin: 0; padding: 0 3px; overflow: hidden; list-style: none; color: #111; mask-image: linear-gradient(90deg,transparent,#000 5%,#000 94%,transparent); font-family: "About Inter", var(--font-plus-jakarta-sans), Arial, sans-serif; }
:is(.dark) .botanical-about__logos { color: #fff; }
.botanical-about__logos li { display: flex; align-items: center; gap: clamp(3px,.5vw,6px); flex: 0 0 auto; font-size: clamp(9px,1.3vw,16px); font-weight: 700; line-height: 1; letter-spacing: -.045em; white-space: nowrap; }
.botanical-about__logo-icon, .botanical-about__logo-image { display: block; width: clamp(12px,1.9vw,24px); height: clamp(12px,1.9vw,24px); flex-shrink: 0; object-fit: contain; }
@media (max-width: 600px) {
  .botanical-about { padding: 0 16px; }
  .botanical-about__eyebrow { max-width: 96%; font-size: 14px !important; line-height: 1.4 !important; }
  .botanical-about__title { margin-top: 16px !important; font-size: clamp(30px, 7.8vw, 42px) !important; letter-spacing: -0.02em !important; }
  .botanical-about__description { width: 94%; max-width: 440px; margin-top: 16px !important; font-size: 13px !important; line-height: 1.5 !important; }
  .botanical-about__cta { min-height: 44px; margin-top: 18px; padding: 4px 5px 4px 20px; gap: 12px; font-size: 15px !important; }
  .botanical-about__cta-icon { width: 34px; }
  .botanical-about__visual { margin-top: 36px; aspect-ratio: 16 / 9; }
  .botanical-about__photo { border-radius: 24px; }
  .botanical-about__metric { top: 7%; left: 7%; }
  .botanical-about__metric strong { font-size: 43px; }
  .botanical-about__metric p { font-size: 11px !important; margin-top: 8px !important; }
  .botanical-about__feature { right: 6%; bottom: 13%; width: 37%; }
  .botanical-about__feature h3 { font-size: 18px !important; }
  .botanical-about__feature p { font-size: 11px !important; }
  .botanical-about__logos { width: 45.5%; gap: 11px; justify-content: flex-start; }
  .botanical-about__logos li { font-size: 9px; gap: 3px; }
  .botanical-about__logo-icon, .botanical-about__logo-image { width: 12px; height: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .botanical-about *, .botanical-about *::before, .botanical-about *::after { transition: none !important; }
  .botanical-about__cta:hover svg { transform: none; }
}
`;
