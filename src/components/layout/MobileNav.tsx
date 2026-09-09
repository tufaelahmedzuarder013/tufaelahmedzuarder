"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/slices/uiSlice";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "../ui/Button";

export function MobileNav() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.mobileMenuOpen);

  const closeMenu = () => dispatch(setMobileMenuOpen(false));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-brand-bg flex flex-col justify-between p-8 md:hidden overflow-y-auto pt-24"
        >
          {/* Top Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 p-2 rounded-xl border border-brand-ink/10 text-brand-ink"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 my-auto">
            {NAV_LINKS.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-heading font-bold text-3xl sm:text-4xl text-brand-ink py-2 border-b border-brand-ink/5 flex items-center justify-between group"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-brand-violet">
                      0{index + 1}
                    </span>
                    <span className={isActive ? "text-brand-violet" : ""}>
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>

          {/* Footer Info inside Mobile Menu */}
          <div className="pt-8 border-t border-brand-ink/10">
            <Button
              href="/contact"
              variant="primary"
              className="w-full justify-center mb-6"
              onClick={closeMenu}
            >
              Start a project
            </Button>
            <p className="font-mono text-xs text-brand-muted text-center">
              {SITE_CONFIG.email} · {SITE_CONFIG.location}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
