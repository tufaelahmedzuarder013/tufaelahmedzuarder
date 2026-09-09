import React from "react";
import { Code2, Server, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/skills.data";
import { TiltCard } from "@/components/animation/TiltCard";

const ICONS = [Code2, Server, Wrench];

export function SkillsMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SKILL_CATEGORIES.map((cat, idx) => {
        const Icon = ICONS[idx] || Code2;
        return (
          <TiltCard key={cat.title}>
            <div className="p-8 rounded-3xl border border-brand-ink/10 bg-brand-surface shadow-brand-sm h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 text-brand-violet flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-ink mb-1">
                  {cat.title}
                </h3>
                <p className="font-mono text-xs text-brand-violet mb-6">
                  {cat.subtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border border-brand-ink/10 bg-brand-bg text-brand-ink hover:border-brand-violet hover:text-brand-violet transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        );
      })}
    </div>
  );
}
