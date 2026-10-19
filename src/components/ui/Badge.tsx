import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "violet" | "gray" | "green" | "gradient";
  className?: string;
}

export function Badge({ children, variant = "violet", className }: BadgeProps) {
  const variantStyles = {
    violet: "bg-[#F75B00]/10 text-[#F75B00] border-[#F75B00]/25",
    gray: "bg-brand-soft text-brand-muted border-brand-ink/10",
    green: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    gradient: "bg-gradient-to-r from-[#F75B00] to-[#EFC320] text-white font-bold border-transparent shadow-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
