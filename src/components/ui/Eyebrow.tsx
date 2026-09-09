import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export function Eyebrow({
  children,
  align = "left",
  className,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs tracking-wider uppercase text-brand-violet font-semibold inline-flex items-center gap-2 mb-3",
        align === "center" && "justify-center w-full",
        className
      )}
    >
      <span className="w-5 h-px bg-brand-violet/60 inline-block" />
      {children}
    </p>
  );
}
