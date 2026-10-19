"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function AboutCollaborationSection() {
  return (
    <section className="py-14 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: COPY & CONTACT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Bold Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-brand-ink tracking-tight leading-[1.15]">
              I love collaborating with brands and founders. If you&apos;re ready to bring your next big idea to life, let&apos;s connect!
            </h2>

            {/* Quick Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Call Today */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-brand-surface border border-neutral-200/80 dark:border-white/10 hover:border-[#F75B00]/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-brand-ink group-hover:text-[#F75B00] group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-muted font-medium">Call Today</span>
                  <span className="text-sm font-semibold text-brand-ink tracking-tight">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </a>

              {/* Email Me */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-brand-surface border border-neutral-200/80 dark:border-white/10 hover:border-[#F75B00]/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-brand-ink group-hover:text-[#F75B00] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-muted font-medium">Email Me</span>
                  <span className="text-sm font-semibold text-brand-ink tracking-tight truncate max-w-[170px]">
                    {SITE_CONFIG.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Orange-Gold Gradient CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3.5 bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-[#F75B00]/25 hover:shadow-xl hover:shadow-[#F75B00]/40"
              >
                <span className="text-sm sm:text-base font-bold tracking-tight">
                  Lets Talk Brief
                </span>
                <span className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: DUAL MOCKUPS ================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Mockup 1: Editorial Booklet */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <Image
                  src="/images/about/editorial-mockup.jpg"
                  alt="Brand Identity & Editorial Guidelines Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-5 right-5 text-white transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-heading text-lg font-bold block">
                    HEY MOCKUP!
                  </span>
                  <span className="text-xs text-neutral-200">
                    Brand Guidelines &amp; Identity Architecture
                  </span>
                </div>
              </motion.div>

              {/* Mockup 2: Tablet iPad Pro */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <Image
                  src="/images/about/tablet-mockup.jpg"
                  alt="Pad Pro App & System Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-5 right-5 text-white transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-heading text-lg font-bold block">
                    Pad Pro Mockup
                  </span>
                  <span className="text-xs text-neutral-200">
                    Next-Gen Responsive Web &amp; App Interfaces
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
