import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full mb-3">
        {label && (
          <label className="block font-mono text-xs text-brand-muted mb-1.5 uppercase tracking-wide">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border border-brand-ink/10 bg-brand-bg text-brand-ink placeholder:text-brand-muted2 text-sm transition-all duration-200 outline-none focus:border-brand-violet focus:ring-4 focus:ring-brand-violet/10 resize-y min-h-[130px]",
            error && "border-rose-500 focus:border-rose-500 focus:ring-rose-500/10",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-rose-500 font-mono">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
