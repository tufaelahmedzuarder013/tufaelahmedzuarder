"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center py-32">
      <Container className="max-w-md">
        <span className="font-mono text-xs font-semibold text-rose-500 uppercase tracking-widest block mb-3">
          Error Occurred
        </span>
        <h2 className="font-heading text-3xl font-bold text-brand-ink mb-4">
          Something went wrong
        </h2>
        <p className="text-brand-muted text-sm mb-8">
          An unexpected error occurred. Please try again or return to the home page.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="primary">
            Try again
          </Button>
          <Button href="/" variant="ghost">
            Go home
          </Button>
        </div>
      </Container>
    </section>
  );
}
