"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Briefcase, Award, Sparkles } from "lucide-react";
import { SkillsMatrix } from "./SkillsMatrix";
import { CareerTimeline } from "./CareerTimeline";

export function AboutDeepDiveTabs() {
  const [activeTab, setActiveTab] = useState<"skills" | "experience">("skills");

  return (
    <section className="py-16 md:py-24 border-t border-neutral-200/60 dark:border-white/10 relative overflow-hidden">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F75B00]/10 text-[#F75B00] font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Developer Profile</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink tracking-tight">
              Expertise &amp; Career Milestones
            </h2>
          </div>

          {/* Tab Selector Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white shadow-md shadow-[#F75B00]/25"
                  : "text-brand-muted hover:text-brand-ink"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Technical Stack</span>
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white shadow-md shadow-[#F75B00]/25"
                  : "text-brand-muted hover:text-brand-ink"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Career Timeline</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "skills" ? (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsMatrix />
            </motion.div>
          ) : (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto py-4"
            >
              <CareerTimeline />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
