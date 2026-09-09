"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { setTheme } from "@/store/slices/uiSlice";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const dispatch = useAppDispatch();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentIsDark = saved ? saved === "dark" : prefersDark;

    setIsDark(currentIsDark);
    if (currentIsDark) {
      document.documentElement.classList.add("dark");
      document.body?.classList.add("dark");
      dispatch(setTheme("dark"));
    } else {
      document.documentElement.classList.remove("dark");
      document.body?.classList.remove("dark");
      dispatch(setTheme("light"));
    }
  }, [dispatch]);

  const handleToggle = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    const nextMode = nextDark ? "dark" : "light";
    localStorage.setItem("theme", nextMode);
    dispatch(setTheme(nextMode));

    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.body?.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body?.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-full border border-brand-ink/15 bg-brand-surface text-brand-ink hover:border-brand-violet hover:text-brand-violet transition-all duration-300 shadow-brand-sm hover:scale-105 active:scale-95 cursor-pointer z-20",
        showLabel && "w-auto px-4 gap-2.5 h-11",
        className
      )}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Sun Icon (Click to switch to light mode) */}
        <Sun
          className={cn(
            "w-4 h-4 text-amber-400 absolute transition-all duration-300 transform",
            mounted && isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
        {/* Moon Icon (Click to switch to dark mode) */}
        <Moon
          className={cn(
            "w-4 h-4 text-brand-ink absolute transition-all duration-300 transform",
            mounted && isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
      </div>

      {showLabel && (
        <span className="font-mono text-xs uppercase tracking-wider font-medium pointer-events-none">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
