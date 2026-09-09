import React from "react";
import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-32">
      <Container className="flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-brand-violet/20 border-t-brand-violet animate-spin" />
        <p className="font-mono text-xs text-brand-muted uppercase tracking-wider">
          Loading…
        </p>
      </Container>
    </div>
  );
}
