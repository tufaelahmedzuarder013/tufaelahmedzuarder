import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactInfoCards() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: SITE_CONFIG.location,
    },
    {
      icon: Clock,
      label: "Availability",
      value: SITE_CONFIG.availability,
    },
  ];

  return (
    <div className="space-y-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        const content = (
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm hover:border-brand-violet hover:shadow-brand transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-violet/10 text-brand-violet flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-brand-muted2 uppercase tracking-wide block">
                {card.label}
              </span>
              <b className="font-heading text-sm sm:text-base font-semibold text-brand-ink">
                {card.value}
              </b>
            </div>
          </div>
        );

        if (card.href) {
          return (
            <a key={idx} href={card.href} className="block">
              {content}
            </a>
          );
        }

        return <div key={idx}>{content}</div>;
      })}
    </div>
  );
}
