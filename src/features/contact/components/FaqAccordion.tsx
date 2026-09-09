"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/features/home/data/testimonials.data";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border border-brand-ink/10 rounded-2xl bg-brand-surface overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left font-heading font-semibold text-base text-brand-ink flex items-center justify-between gap-4 cursor-pointer"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-brand-violet transition-transform duration-300 shrink-0",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-ink/5 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
