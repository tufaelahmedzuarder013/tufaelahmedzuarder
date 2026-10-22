"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronDown } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/slices/uiSlice";
import { NAV_LINKS, SERVICE_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "../ui/Button";
import { TazLogo } from "../ui/TazLogo";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const closeMenu = () => {
    setServicesExpanded(false);
    dispatch(setMobileMenuOpen(false));
  };

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
          {/* Top Brand Logo */}
          <div className="absolute top-6 left-6 flex items-center">
            <Link href="/" onClick={closeMenu}>
              <TazLogo size="sm" className="h-6" />
            </Link>
          </div>

          {/* Top Controls (Close Button) */}
          <div className="absolute top-6 right-6 flex items-center gap-3">
            <button
              onClick={closeMenu}
              className="p-2 rounded-xl border border-brand-ink/10 text-brand-ink hover:border-[#F75B00] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 my-auto py-4">
            {NAV_LINKS.map((link, index) => {
              const isServices = link.href === "/services";
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (isServices) {
                return (
                  <div key={link.href} className="border-b border-brand-ink/5 pb-2">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="font-heading font-bold text-2xl sm:text-3xl text-brand-ink flex items-center gap-4 group"
                      >
                        <span className="font-mono text-xs text-[#F75B00]">
                          0{index + 1}
                        </span>
                        <span className={isActive ? "text-[#F75B00]" : ""}>
                          {link.label}
                        </span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => setServicesExpanded((prev) => !prev)}
                        className="p-2 rounded-xl bg-brand-soft text-brand-ink hover:text-[#F75B00] border border-brand-ink/10 flex items-center justify-center transition-transform"
                        aria-label="Toggle services list"
                      >
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            servicesExpanded && "rotate-180 text-[#F75B00]"
                          )}
                        />
                      </button>
                    </div>

                    {/* Expandable Subpages Drawer */}
                    {servicesExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pl-8 pt-2 pb-3 space-y-1.5"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[280px] overflow-y-auto pr-2">
                          {SERVICE_LINKS.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeMenu}
                              className="text-xs sm:text-sm font-medium text-brand-muted hover:text-[#F75B00] p-1.5 rounded-lg hover:bg-brand-soft transition-colors flex items-center justify-between"
                            >
                              <span>{sub.label}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                            </Link>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-brand-ink/5">
                          <Link
                            href="/services"
                            onClick={closeMenu}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F75B00] hover:underline"
                          >
                            <span>View All 14 Services &rarr;</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-heading font-bold text-2xl sm:text-3xl text-brand-ink py-2 border-b border-brand-ink/5 flex items-center justify-between group"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#F75B00]">
                      0{index + 1}
                    </span>
                    <span className={isActive ? "text-[#F75B00]" : ""}>
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
