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
      "relative inline-flex items-center justify-center font-sans font-normal text-[16px] tracking-normal rounded-full transition-all duration-300 overflow-hidden group cursor-pointer btn-aventa";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#F75B00] to-[#EFC320] hover:from-[#e05200] hover:to-[#dfb51c] shadow-md hover:shadow-xl hover:shadow-[#F75B00]/30 hover:-translate-y-0.5 active:translate-y-0",
      ghost:
        "bg-[#121719] border border-white/15 hover:border-[#F75B00] hover:text-[#F75B00] hover:-translate-y-0.5 shadow-md",
      outline:
        "bg-[#121719] border border-white/15 hover:border-[#F75B00] hover:text-[#F75B00] hover:-translate-y-0.5 shadow-sm",
      white:
        "bg-[#121719] border border-white/20 hover:bg-gradient-to-r hover:from-[#F75B00] hover:to-[#EFC320] hover:-translate-y-0.5 shadow-lg",
    };

    const sizeStyles = {
      sm: "text-[16px] font-normal px-[20px] py-[10px] gap-2",
      md: "text-[16px] font-normal px-[20px] py-[10px] gap-2.5",
      lg: "text-[16px] font-normal px-[20px] py-[10px] gap-3",
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
          <span
            style={{ color: "#ffffff", fontFamily: "var(--font-aventa), 'Aventa', sans-serif", fontSize: "16px", fontWeight: 400 }}
            className="font-normal font-sans text-[16px] tracking-normal !text-white text-white btn-label-text btn-label-white"
          >
            {children}
          </span>
          {activeIcon && (
            <span
              style={variant === "primary" ? { backgroundColor: "#ffffff", color: "#101820" } : undefined}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0 shadow-xs btn-circle-icon",
                variant === "primary"
                  ? "bg-white text-[#101820]"
                  : "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
              )}
            >
              {React.isValidElement(activeIcon) && variant === "primary"
                ? React.cloneElement(activeIcon as React.ReactElement<any>, {
                    color: "#101820",
                    stroke: "#101820",
                    strokeWidth: 2.5,
                    className: cn(
                      (activeIcon as React.ReactElement<any>).props?.className,
                      "!text-[#101820] !stroke-[#101820]"
                    ),
                    style: {
                      ...((activeIcon as React.ReactElement<any>).props?.style || {}),
                      color: "#101820",
                      stroke: "#101820",
                    },
                  })
                : activeIcon}
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
