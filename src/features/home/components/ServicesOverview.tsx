import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/features/services/data/services.data";
import { ServiceListCard } from "@/features/services/components/ServiceListCard";

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <Eyebrow>// What I Offer</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink">
              End-to-end web engineering.
            </h2>
          </div>
          <Button
            href="/services"
            variant="ghost"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            All services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceListCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
