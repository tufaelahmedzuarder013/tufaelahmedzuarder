import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center py-32">
      <Container className="max-w-lg">
        <span className="font-mono text-xs font-semibold text-brand-violet uppercase tracking-widest block mb-3">
          404 Error
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-4">
          Page Not Found
        </h1>
        <p className="text-brand-muted text-base mb-8">
          The page you are looking for doesn&apos;t exist or has been moved to a new destination.
        </p>
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
