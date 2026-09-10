import React from "react";
import Link from "next/link";
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
      "relative inline-flex items-center justify-center font-heading font-normal tracking-[0.07em] [word-spacing:0.2em] rounded-full transition-all duration-300 overflow-hidden group cursor-pointer";

    const variantStyles = {
      primary:
        "bg-brand-gradient text-white shadow-brand-glow hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-violet/40 dark:shadow-[0_4px_24px_rgba(124,58,237,0.35)]",
      ghost:
        "bg-brand-surface border border-brand-ink/10 text-brand-ink hover:border-brand-violet hover:text-brand-violet hover:-translate-y-0.5 shadow-brand-sm dark:bg-white/[0.06] dark:backdrop-blur-xl dark:border-white/15 dark:text-white dark:hover:bg-white/[0.12] dark:hover:border-brand-violet/60 dark:shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.12)]",
      outline:
        "border border-brand-ink/15 text-brand-ink hover:border-brand-violet hover:text-brand-violet hover:-translate-y-0.5 dark:bg-white/[0.04] dark:backdrop-blur-lg dark:border-white/15 dark:text-white dark:hover:bg-white/[0.09] dark:hover:border-brand-violet/60 dark:shadow-[0_4px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.1)]",
      white:
        "bg-white text-brand-violet hover:-translate-y-0.5 shadow-lg shadow-black/10 hover:shadow-xl dark:bg-white/[0.12] dark:backdrop-blur-2xl dark:border dark:border-white/20 dark:text-white dark:hover:bg-white/[0.22] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-3.5 gap-2.5",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {/* Shine Sweep Highlight */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && (
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              {icon}
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
