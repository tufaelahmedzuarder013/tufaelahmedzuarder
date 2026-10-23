"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export function AboutDarkImpactSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-20">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 mx-auto">
        <div className="cta-banner-dark relative rounded-[2.5rem] bg-[#121316] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border border-white/5">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Large Central Mission Statement (Exact quote / theme from reference) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-[1.35] tracking-tight text-neutral-100">
              We are passionate about empowering individuals and businesses to take control of their finances ,{" "}
              <span className="text-white font-medium underline decoration-[#F75B00] underline-offset-8">
                user-first experiences.
              </span>
            </h2>
          </motion.div>

          {/* Bottom Row: Video Preview + Clean Metrics */}
          <div className="relative z-10 mt-14 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Video / Studio Preview Thumbnail with Play Button */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div
                onClick={() => setIsPlaying(true)}
                className="group relative cursor-pointer w-full max-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                <Image
                  src="/images/about/founder-video-still.jpg"
                  alt="Founder Studio & Process Preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 p-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:bg-gradient-to-r group-hover:from-[#F75B00] group-hover:to-[#EFC320] group-hover:text-white group-hover:border-transparent shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-neutral-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <span>Founder Studio Note</span>
                  <span>01:45</span>
                </div>
              </div>
            </div>

            {/* Right: Metrics with vertical divider lines */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-left">
              
              {/* Stat 1 */}
              <div className="pt-6 sm:pt-0 sm:px-6 first:pl-0 flex flex-col justify-center">
                <span className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-white block">
                  12
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide mt-2 block">
                  Years of Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="pt-6 sm:pt-0 sm:px-6 flex flex-col justify-center">
                <span className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-white block">
                  100+
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide mt-2 block">
                  Project Complete
                </span>
              </div>

              {/* Stat 3 */}
              <div className="pt-6 sm:pt-0 sm:px-6 flex flex-col justify-center">
                <span className="font-heading text-5xl sm:text-6xl font-light tracking-tight text-white block">
                  98%
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide mt-2 block">
                  Satisfaction Client
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Video Modal Teaser */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <div
              className="relative max-w-2xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 p-6 text-white text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <Image
                  src="/images/about/founder-video-still.jpg"
                  alt="Founder video playing"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white flex items-center justify-center mb-3 shadow-xl">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h4 className="font-heading text-xl font-bold">A Message From Tufael</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mt-1">
                    Passionate about building fast, pixel-perfect user interfaces and solving complex engineering challenges for forward-thinking brands.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
