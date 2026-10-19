import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "ghost" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      href,
      variant = "primary",
      size = "md",
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-heading font-normal tracking-[0.05em] [word-spacing:0.15em] rounded-full transition-all duration-300 overflow-hidden group cursor-pointer";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] text-white font-bold shadow-md hover:shadow-xl hover:shadow-[#F75B00]/30 hover:-translate-y-0.5 active:translate-y-0",
      ghost:
        "bg-brand-surface border border-brand-ink/10 text-brand-ink hover:border-[#F75B00] hover:text-[#F75B00] hover:-translate-y-0.5 shadow-brand-sm dark:bg-white/[0.06] dark:backdrop-blur-xl dark:border-white/15 dark:text-white dark:hover:bg-white/[0.12] dark:hover:border-[#F75B00]/70 dark:shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.12)]",
      outline:
        "border border-brand-ink/15 text-brand-ink hover:border-[#F75B00] hover:text-[#F75B00] hover:-translate-y-0.5 dark:bg-white/[0.04] dark:backdrop-blur-lg dark:border-white/15 dark:text-white dark:hover:bg-white/[0.09] dark:hover:border-[#F75B00]/70 dark:shadow-[0_4px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.1)]",
      white:
        "bg-white text-neutral-950 hover:bg-gradient-to-r hover:from-[#F75B00] hover:to-[#EFC320] hover:text-white hover:-translate-y-0.5 shadow-lg shadow-black/10 hover:shadow-xl dark:bg-white/[0.12] dark:backdrop-blur-2xl dark:border dark:border-white/20 dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#F75B00] dark:hover:to-[#EFC320] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]",
    };

    const sizeStyles = {
      sm: "text-xs px-[20px] py-[10px] gap-2",
      md: "text-sm px-[20px] py-[10px] gap-2.5",
      lg: "text-sm sm:text-base px-[20px] py-[10px] gap-3",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const activeIcon = icon ?? (variant === "primary" ? <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" /> : null);

    const content = (
      <>
        {/* Shine Sweep Highlight */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
        <span className="relative z-10 flex items-center gap-2.5">
          <span className="font-bold tracking-tight">{children}</span>
          {activeIcon && (
            <span
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0 shadow-xs",
                variant === "primary"
                  ? "bg-white text-[#F75B00]"
                  : "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
              )}
            >
              {activeIcon}
            </span>
          )}
        </span>
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
