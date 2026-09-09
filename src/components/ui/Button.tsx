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
      "relative inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 overflow-hidden group cursor-pointer";

    const variantStyles = {
      primary:
        "bg-brand-gradient text-white shadow-brand-glow hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-violet/30",
      ghost:
        "bg-brand-surface border border-brand-ink/10 text-brand-ink hover:border-brand-violet hover:text-brand-violet hover:-translate-y-0.5 shadow-brand-sm",
      outline:
        "border border-brand-ink/15 text-brand-ink hover:border-brand-violet hover:text-brand-violet hover:-translate-y-0.5",
      white:
        "bg-white text-brand-violet hover:-translate-y-0.5 shadow-lg shadow-black/10 hover:shadow-xl",
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
