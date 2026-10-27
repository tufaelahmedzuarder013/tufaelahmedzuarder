"use client";

import React, { useState, useId, useRef, type CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export type CTAMessage = {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
};

export type CTASender = (message: CTAMessage, signal?: AbortSignal) => void | Promise<void>;
type Platform = "tiktok" | "instagram" | "x" | "facebook" | "youtube" | "linkedin" | "github";

export interface CtaBannerProps {
  email?: string;
  label?: string;
  heading?: string;
  description?: string;
  services?: readonly string[];
  socials?: Partial<Record<Platform, string>>;
  className?: string;
  style?: CSSProperties;
  onSend?: CTASender;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

const DEFAULT_SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Full-Stack SaaS",
  "Mobile Apps",
  "System Architecture",
  "Performance & QA",
];

const SOCIAL_ITEMS: { platform: Platform; label: string; path: string }[] = [
  { platform: "github", label: "GitHub", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
  { platform: "linkedin", label: "LinkedIn", path: "M4 9v12M4 4v.01M10 21V9h4v2c4-5 7-1 7 2v8M14 11v10" },
  { platform: "x", label: "X (Twitter)", path: "m4 3 16 18h-5L4 3h5l11 18M20 3 4 21" },
  { platform: "facebook", label: "Facebook", path: "M14 21V12h3l.5-4H14V6c0-1 .5-2 2-2h2V1h-3c-3 0-5 2-5 5v2H7v4h3v9" },
  { platform: "instagram", label: "Instagram", path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM17.5 6.5h.01" },
];

function Socials({ links, className }: { links: Partial<Record<Platform, string>>; className: string }) {
  return (
    <div className={`mdx-get-started__socials ${className}`}>
      {SOCIAL_ITEMS.map(({ platform, label, path }) => {
        const icon = (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={path} />
          </svg>
        );
        const url = links[platform] || (SITE_CONFIG.socials as Record<string, string>)[platform];
        return url ? (
          <a
            href={url}
            key={platform}
            aria-label={label}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ) : (
          <span key={platform} aria-hidden="true">
            {icon}
          </span>
        );
      })}
    </div>
  );
}

export function CtaBanner({
  email = SITE_CONFIG.email || "support@zuarder.com",
  label = "Get Started",
  heading = "Let's build your next award winning project",
  description = "Thoughtful full-stack engineering and UI/UX design for your next big idea.",
  services = DEFAULT_SERVICES,
  socials = SITE_CONFIG.socials,
  className = "",
  style,
  onSend,
  title,
  subtitle,
}: CtaBannerProps) {
  const finalHeading = title || heading;
  const finalDescription = subtitle || description;
  const id = `get-started-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  const [formState, setFormState] = useState<"idle" | "busy" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([services[0] || "Web Development"]);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState === "busy") return;

    const form = formRef.current;
    if (!form || !form.reportValidity()) return;

    const formData = new FormData(form);
    const read = (key: string) => String(formData.get(key) ?? "").trim();

    const messagePayload: CTAMessage = {
      name: read("name"),
      company: read("company"),
      email: read("email"),
      phone: read("phone"),
      services: selectedServices,
      message: read("message"),
    };

    setFormState("busy");
    setStatusText("");

    try {
      if (onSend) {
        await onSend(messagePayload);
      } else {
        // Submit directly to internal /api/contact route
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: messagePayload.name,
            email: messagePayload.email,
            projectType: messagePayload.services.join(", ") || "General Inquiry",
            message: `${messagePayload.company ? `[Company: ${messagePayload.company}] ` : ""}${messagePayload.phone ? `[Phone: ${messagePayload.phone}] ` : ""}${messagePayload.message}`,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to send message via API");
        }
      }

      form.reset();
      setSelectedServices([services[0] || "Web Development"]);
      setFormState("success");
      setStatusText("Thank you. Your message has been sent successfully!");
    } catch {
      // Fallback to mailto
      const body = [
        `Name: ${messagePayload.name}`,
        `Company: ${messagePayload.company}`,
        `Email: ${messagePayload.email}`,
        `Phone: ${messagePayload.phone}`,
        `Services: ${messagePayload.services.join(", ")}`,
        "",
        messagePayload.message,
      ].join("\n");

      const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Project enquiry from ${messagePayload.name}`)}&body=${encodeURIComponent(body)}`;
      window.location.assign(mailtoUrl);

      setFormState("idle");
      setStatusText("Opening your email client to send the project details...");
    }
  };

  return (
    <section
      data-no-gsap="true"
      className={`mdx-get-started ${className}`.trim()}
      style={style}
      aria-labelledby={`${id}-heading`}
      data-busy={formState === "busy" ? "true" : undefined}
      data-state={formState}
    >
      {/* Dynamic Ambient Background with soft glowing orbs */}
      <div className="mdx-get-started__background" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F75B00]/4 to-[#F75B00]/8 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#EFC320]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#F75B00]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="mdx-get-started__panel">
          {/* Left Information Column */}
          <div className="mdx-get-started__info">
          <div className="mdx-get-started__eyebrow">
            <span className="mdx-get-started__dot" aria-hidden="true" />
            <span>{label}</span>
          </div>

          <h2 id={`${id}-heading`} className="mdx-get-started__heading" data-no-gsap="true">
            {finalHeading}
          </h2>

          <span className="mdx-get-started__divider" aria-hidden="true" />

          <p className="mdx-get-started__description" data-no-gsap="true">
            {finalDescription}
          </p>

          <Socials links={socials} className="mdx-get-started__socials--desktop" />

          <a className="mdx-get-started__email" href={`mailto:${email}`}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="4" />
              <path d="m4 7 6 5a3 3 0 0 0 4 0l6-5" />
            </svg>
            <span>{email}</span>
          </a>
        </div>

        {/* Right Form Column */}
        <div className="mdx-get-started__form-column">
          <h3 className="mdx-get-started__form-title" data-no-gsap="true">
            Let&apos;s talk
          </h3>

          <form
            ref={formRef}
            data-cta-form
            onSubmit={handleSubmit}
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
          >
            <fieldset
              className="mdx-get-started__fields"
              data-cta-fields
              disabled={formState === "busy"}
            >
              <legend className="mdx-get-started__sr-only">Project enquiry</legend>

              <div className="mdx-get-started__row">
                <label className="mdx-get-started__field" htmlFor={`${id}-name`}>
                  <span className="mdx-get-started__sr-only">Full name</span>
                  <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    placeholder="Full name"
                    autoComplete="name"
                    maxLength={120}
                    required
                  />
                </label>
                <label className="mdx-get-started__field" htmlFor={`${id}-company`}>
                  <span className="mdx-get-started__sr-only">Company</span>
                  <input
                    id={`${id}-company`}
                    name="company"
                    type="text"
                    placeholder="Company"
                    autoComplete="organization"
                    maxLength={160}
                  />
                </label>
              </div>

              <div className="mdx-get-started__row">
                <label className="mdx-get-started__field" htmlFor={`${id}-email`}>
                  <span className="mdx-get-started__sr-only">Email</span>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </label>
                <label className="mdx-get-started__field" htmlFor={`${id}-phone`}>
                  <span className="mdx-get-started__sr-only">Phone</span>
                  <input
                    id={`${id}-phone`}
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    autoComplete="tel"
                    maxLength={40}
                  />
                </label>
              </div>

              <fieldset className="mdx-get-started__services">
                <legend>Services</legend>
                <div className="mdx-get-started__pills">
                  {services.map((service, index) => {
                    const isChecked = selectedServices.includes(service);
                    return (
                      <label className="mdx-get-started__pill" key={`${service}-${index}`}>
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={isChecked}
                          onChange={() => toggleService(service)}
                        />
                        <span>{service}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <label
                className="mdx-get-started__field mdx-get-started__message"
                htmlFor={`${id}-message`}
              >
                <span className="mdx-get-started__sr-only">Message</span>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  placeholder="A few details about your project"
                  rows={3}
                  minLength={10}
                  maxLength={6000}
                  required
                />
              </label>

              <button
                className="mdx-get-started__send"
                type="submit"
                aria-label="Send message"
                data-cta-send
                disabled={formState === "busy"}
              >
                <span className="mdx-get-started__send-word" aria-hidden="true">
                  {Array.from("SEND").map((letter, index) => (
                    <span
                      className="mdx-get-started__letter"
                      data-char={letter}
                      key={index}
                      style={{ "--char-delay": `${index * 0.01}s` } as CSSProperties}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <svg viewBox="0 0 20 14" aria-hidden="true" fill="none">
                  <path d="M1 7h17M12 1l6 6-6 6" />
                </svg>
              </button>
            </fieldset>

            <p
              className="mdx-get-started__status"
              data-cta-status
              role="status"
              aria-live="polite"
            >
              {statusText}
            </p>
          </form>
        </div>

        <Socials links={socials} className="mdx-get-started__socials--mobile" />
        </div>
      </Container>

      <style>{GET_STARTED_CSS}</style>
    </section>
  );
}

export const GetStartedCTA = CtaBanner;
export type GetStartedCTAProps = CtaBannerProps;
export default CtaBanner;

export const GET_STARTED_CSS = `
.mdx-get-started {
  --cta-u: clamp(6.25px, 0.5208333333vw, 8.3333px);
  --cta-orange: #ff8200;
  --cta-ink: #101820;
  --cta-muted: #5b6871;
  --cta-body: var(--font-aventa), "Aventa", Arial, sans-serif;
  --cta-heading: var(--font-orlean), "Orlean", Arial, sans-serif;
  position: relative; isolation: isolate; width: 100%; box-sizing: border-box;
  padding: min(calc(8 * var(--cta-u)), 8vh) 0 min(calc(8 * var(--cta-u)), 8vh);
  color: var(--cta-ink); font-family: var(--cta-body); font-weight: 400;
}
.dark .mdx-get-started {
  --cta-ink: #f8fafc;
  --cta-muted: #94a3b8;
}
.mdx-get-started *, .mdx-get-started *::before, .mdx-get-started *::after { box-sizing: border-box; }
.mdx-get-started__background { position: absolute; z-index: -1; inset: 0; pointer-events: none; overflow: hidden; }
.mdx-get-started__panel {
  position: relative; width: 100%; max-width: 100%; display: flex; align-items: flex-end; justify-content: space-between;
  gap: calc(10 * var(--cta-u)); padding: min(calc(12 * var(--cta-u)), 12vh) calc(7 * var(--cta-u));
  border-radius: calc(3 * var(--cta-u)); background: rgb(255 255 255 / .35);
  backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(16, 24, 32, 0.08);
  box-shadow: 0 10px 36px rgb(16 24 32 / .06), 0 0 0 1px rgb(230 236 242 / .08);
}
.dark .mdx-get-started__panel {
  background: rgba(14, 21, 18, 0.75);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 70px -15px rgba(0,0,0,0.7);
}
.mdx-get-started__info { display: grid; flex-shrink: 0; }
.mdx-get-started__eyebrow { display: flex; align-items: center; gap: calc(1.5 * var(--cta-u)); margin-bottom: calc(2.8 * var(--cta-u)); color: var(--cta-orange); font: 400 calc(2 * var(--cta-u)) var(--cta-body); }
.mdx-get-started__dot { width: var(--cta-u); height: var(--cta-u); flex-shrink: 0; background: var(--cta-orange); border-radius: 50%; }
.mdx-get-started__heading {
  width: calc(82 * var(--cta-u)); max-width: 100%; margin: 0;
  font-family: var(--cta-heading); font-size: calc(8 * var(--cta-u)); font-weight: 400;
  line-height: 1; letter-spacing: calc(.04em + .27 * var(--cta-u)); text-wrap: balance;
  color: var(--cta-ink);
}
.mdx-get-started__divider { display: block; width: calc(7.1 * var(--cta-u)); height: 1px; background: #8a8f8d; margin-block: calc(6 * var(--cta-u)) calc(2.5 * var(--cta-u)); opacity: 0.6; }
.mdx-get-started__description { margin: 0 0 calc(22 * var(--cta-u)); color: var(--cta-muted); font: 400 calc(1.9 * var(--cta-u))/1.2 var(--cta-body); }
.mdx-get-started__email { display: flex; align-items: center; gap: var(--cta-u); margin-top: calc(3 * var(--cta-u)); width: fit-content; color: var(--cta-muted); text-decoration: none; transition: opacity .3s ease-out; }
.mdx-get-started__email:hover { opacity: .8; color: var(--cta-orange); }
.mdx-get-started__email svg { width: calc(2.3 * var(--cta-u)); height: calc(2.5 * var(--cta-u)); flex-shrink: 0; stroke: currentColor; stroke-width: 1.4; }
.mdx-get-started__email span { font-size: calc(2 * var(--cta-u)); letter-spacing: .6px; text-decoration: underline; text-underline-position: from-font; overflow-wrap: anywhere; }
.mdx-get-started__socials { display: flex; align-items: center; gap: var(--cta-u); }
.mdx-get-started__socials--desktop { margin-bottom: calc(3 * var(--cta-u)); }
.mdx-get-started__socials--mobile { display: none; }
.mdx-get-started__socials > a, .mdx-get-started__socials > span { display: grid; place-items: center; width: calc(3.5 * var(--cta-u)); height: calc(3.5 * var(--cta-u)); border: 1px solid var(--cta-muted); border-radius: 50%; color: var(--cta-muted); }
.mdx-get-started__socials > a { transition: color .25s, border-color .25s, transform .25s; }
.mdx-get-started__socials > a:hover { color: var(--cta-orange); border-color: currentColor; transform: translateY(-2px); }
.mdx-get-started__socials svg { width: calc(1.6 * var(--cta-u)); height: calc(1.6 * var(--cta-u)); stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.mdx-get-started__form-column { display: grid; gap: calc(3.2 * var(--cta-u)); flex: 1; min-width: 0; }
.mdx-get-started__form-title { margin: 0; color: var(--cta-ink); font: 500 calc(4.5 * var(--cta-u))/1.1 var(--cta-heading); letter-spacing: calc(.04em + 1.35px); }
.mdx-get-started form { width: 100%; margin: 0; }
.mdx-get-started__fields { display: grid; gap: var(--cta-u); width: 100%; min-width: 0; padding: 0; margin: 0; border: 0; }
.mdx-get-started__row { display: flex; gap: calc(2.5 * var(--cta-u)); }
.mdx-get-started__field { display: block; min-width: 0; flex: 1; }
.mdx-get-started__field input, .mdx-get-started__field textarea {
  display: block; width: 100%; margin: 0; padding: calc(1.1 * var(--cta-u)) 0; border: 0;
  border-bottom: 1px solid rgba(16, 24, 32, 0.3); border-radius: 0; background: transparent;
  color: var(--cta-ink); font: 400 calc(1.7 * var(--cta-u))/1.3 var(--cta-body);
  box-shadow: none; transition: border-color .2s;
}
.dark .mdx-get-started__field input, .dark .mdx-get-started__field textarea {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}
.mdx-get-started__field input::placeholder, .mdx-get-started__field textarea::placeholder { color: #8a8f8d; opacity: 1; }
.mdx-get-started__field input:focus, .mdx-get-started__field textarea:focus { outline: none; border-bottom-color: var(--cta-orange); }
.mdx-get-started__field input:focus-visible, .mdx-get-started__field textarea:focus-visible { box-shadow: 0 1px var(--cta-orange); }
.mdx-get-started__services { min-width: 0; margin: 0; padding: calc(1.3 * var(--cta-u)) 0 calc(2 * var(--cta-u)); border: 0; }
.mdx-get-started__services legend { padding: 0; margin-bottom: calc(1.3 * var(--cta-u)); color: #8a8f8d; font: 400 calc(1.7 * var(--cta-u)) var(--cta-body); }
.mdx-get-started__pills { display: flex; align-items: center; flex-wrap: wrap; gap: calc(.7 * var(--cta-u)); }
.mdx-get-started__pill { position: relative; display: block; cursor: pointer; }
.mdx-get-started__pill input { position: absolute; width: 1px; height: 1px; opacity: 0; }
.mdx-get-started__pill span {
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--cta-ink); border-radius: calc(3 * var(--cta-u));
  padding: calc(1 * var(--cta-u)) calc(2.2 * var(--cta-u));
  color: var(--cta-ink); font: 400 calc(1.7 * var(--cta-u))/1 var(--cta-body);
  transition: color .3s, background .3s, border-color .3s;
}
.mdx-get-started__pill input:checked + span {
  color: #fcfcfd; background: var(--cta-ink); border-color: var(--cta-ink);
}
.dark .mdx-get-started__pill input:checked + span {
  color: #101820; background: #ffffff; border-color: #ffffff;
}
.mdx-get-started__pill input:focus-visible + span { outline: 2px solid var(--cta-orange); outline-offset: 3px; }
.mdx-get-started__message textarea { resize: vertical; min-height: calc(8.5 * var(--cta-u)); }
.mdx-get-started__send {
  position: relative; display: flex; align-items: center; justify-content: center; gap: var(--cta-u);
  width: 100%; min-height: calc(6.76 * var(--cta-u)); margin-top: calc(1.8 * var(--cta-u));
  padding: calc(1.9 * var(--cta-u)) calc(3.7 * var(--cta-u)); overflow: hidden;
  border: 0; border-radius: 999px; color: #fff; background: #0d181f; cursor: pointer;
  box-shadow: 0 20px 32px rgb(16 24 32 / .24); font: 400 calc(2 * var(--cta-u))/1 var(--cta-body);
  transition: background .3s, transform .2s, box-shadow .3s;
}
.dark .mdx-get-started__send {
  background: #151e1a;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.mdx-get-started__send:hover {
  background: #14222b;
  transform: translateY(-1px);
  box-shadow: 0 24px 38px rgb(16 24 32 / .32);
}
.dark .mdx-get-started__send:hover {
  background: #1d2a25;
}
.mdx-get-started__send-word { display: inline-flex; overflow: hidden; letter-spacing: .06em; }
.mdx-get-started__letter { position: relative; display: inline-block; transition: transform .5s cubic-bezier(.6,.08,.02,.99); transition-delay: var(--char-delay,0s); }
.mdx-get-started__letter::after { content: attr(data-char); position: absolute; top: 100%; left: 0; }
.mdx-get-started__send:hover .mdx-get-started__letter { transform: translateY(-100%); }
.mdx-get-started__send svg { width: calc(1.9 * var(--cta-u)); height: calc(1.2 * var(--cta-u)); stroke: var(--cta-orange); stroke-width: 1.5; transition: transform .3s; }
.mdx-get-started__send:hover svg { transform: translateX(3px); }
.mdx-get-started__send:focus-visible, .mdx-get-started__email:focus-visible, .mdx-get-started__socials a:focus-visible { outline: 2px solid var(--cta-orange); outline-offset: 5px; }
.mdx-get-started[data-busy="true"] .mdx-get-started__send { cursor: wait; opacity: .7; }
.mdx-get-started[data-busy="true"] .mdx-get-started__send-word { visibility: hidden; }
.mdx-get-started[data-busy="true"] .mdx-get-started__send::after { position: absolute; content: "SENDING…"; font-size: inherit; font-family: inherit; }
.mdx-get-started__status { min-height: 20px; margin: calc(1.2 * var(--cta-u)) 0 0; color: #16a34a; font: 500 max(12px,calc(1.4 * var(--cta-u)))/1.4 var(--cta-body); }
.mdx-get-started[data-state="error"] .mdx-get-started__status { color: #b52929; }
.mdx-get-started__sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
@media (max-width: 991px) { .mdx-get-started { --cta-u: 2.272727273vw; } }
@media (min-width: 482px) and (max-width: 991px) { .mdx-get-started { --cta-u: 1.302083333vw; } }
@media (min-width: 992px) and (orientation: portrait) { .mdx-get-started { --cta-u: 1.666666667vw; } }
@media (max-width: 991px), (orientation: portrait) {
  .mdx-get-started { padding: calc(6 * var(--cta-u)) 0 calc(6 * var(--cta-u)); }
  .mdx-get-started__panel { flex-direction: column; align-items: flex-start; gap: calc(8.5 * var(--cta-u)); padding: calc(5.5 * var(--cta-u)) calc(4 * var(--cta-u)) calc(8 * var(--cta-u)); border-radius: calc(4 * var(--cta-u)); }
  .mdx-get-started__info, .mdx-get-started__form-column { width: 100%; min-width: 0; }
  .mdx-get-started__eyebrow { margin-bottom: calc(3.5 * var(--cta-u)); font-size: calc(1.2 * var(--cta-u)); }
  .mdx-get-started__heading { width: 100%; font-size: calc(3.5 * var(--cta-u)); letter-spacing: calc(.04em + 1.2px); }
  .mdx-get-started__divider { margin-block: calc(4.5 * var(--cta-u)) calc(3 * var(--cta-u)); }
  .mdx-get-started__description { display: none; }
  .mdx-get-started__email { margin-top: 0; }
  .mdx-get-started__email span { font-size: calc(1.2 * var(--cta-u)); letter-spacing: .36px; }
  .mdx-get-started__socials--desktop { display: none; }
  .mdx-get-started__socials--mobile { display: flex; }
  .mdx-get-started__form-title { font-size: calc(3 * var(--cta-u)); line-height: 1; letter-spacing: calc(.04em + .9px); }
  .mdx-get-started__row { gap: calc(2 * var(--cta-u)); }
  .mdx-get-started__field input, .mdx-get-started__field textarea { font-size: 16px; }
  .mdx-get-started__services legend { font-size: calc(1.2 * var(--cta-u)); }
  .mdx-get-started__pill span { padding: calc(.6 * var(--cta-u)) var(--cta-u); font-size: calc(1.1 * var(--cta-u)); }
  .mdx-get-started__message textarea { margin-top: var(--cta-u); }
  .mdx-get-started__send { min-height: 48px; font-size: max(14px,calc(1.4 * var(--cta-u))); }
  .mdx-get-started__send svg { width: 19px; height: 12px; }
  .mdx-get-started__status { font-size: max(12px,calc(1.2 * var(--cta-u))); }
}
@media (prefers-reduced-motion: reduce) {
  .mdx-get-started *, .mdx-get-started *::before, .mdx-get-started *::after { transition: none !important; }
  .mdx-get-started__send:hover .mdx-get-started__letter { transform: none; }
}
`;
