import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  softBg?: boolean;
}

export function Section({ id, children, className, softBg = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        softBg && "bg-brand-soft",
        className
      )}
    >
      {children}
    </section>
  );
}
