"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ServicesPhilosophySection() {
  return (
    <section className="py-16 sm:py-24" aria-label="About My Services">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Clean Image + Socials with Smooth Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 shadow-lg group">
              <Image
                src="/images/services/developer_3d_desk.png"
                alt="Tufael Ahmed Zuarder"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Clean Social Links */}
            <div className="flex items-center gap-4 text-xs font-mono text-brand-muted">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F75B00] transition-colors"
              >
                GitHub ↗
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F75B00] transition-colors"
              >
                LinkedIn ↗
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <a
                href={SITE_CONFIG.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F75B00] transition-colors"
              >
                X (Twitter) ↗
              </a>
            </div>
          </motion.div>

          {/* Right Column: Statement + Actions with Smooth Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F75B00]" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-brand-muted">
                About My Services
              </span>
            </div>

            {/* Clean, High-Impact Editorial Statement */}
            <h2 
              style={{
                fontFamily: "var(--font-orlean), 'Space Grotesk', sans-serif",
              }}
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-brand-ink leading-[1.35] tracking-tight"
            >
              I partner with founders and visionary brands to design and engineer software they can count on. Over 12 years and 400+ web applications, I bring together sub-pixel UI/UX design and production-grade full-stack architecture to build digital products that scale smoothly from day one.
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-aventa), 'Aventa', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#F75B00]/25 hover:shadow-xl hover:shadow-[#F75B00]/40 hover:scale-105"
              >
                <span className="font-sans font-normal text-[16px] text-white">
                  Get a Free Quote
                </span>
                <span className="w-7 h-7 rounded-full bg-white text-[#101820] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 text-brand-ink hover:text-[#F75B00] px-5 py-3 rounded-full border border-neutral-200/80 dark:border-white/10 hover:border-[#F75B00]/50 text-sm font-medium transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#F75B00]" />
                <span>Call Us Now ↗</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
