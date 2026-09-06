"use client";

import { useActionStripVariant } from "@/components/providers/ActionStripProvider";
import {
  ActionStripArc,
  ActionStripDiagonal,
  ActionStripPills,
  ActionStripStepped,
} from "@/components/sections/action-strip/ActionStripVariants";

export function HomeActionStrip() {
  const { variantId } = useActionStripVariant();

  return (
    <section
      aria-label="Get involved"
      className="relative z-20 -mt-28 px-5 md:-mt-36 md:px-8"
    >
      <div className="container-site hero-copy-in hero-copy-delay-4">
        {variantId === "pills" ? <ActionStripPills /> : null}
        {variantId === "diagonal" ? <ActionStripDiagonal /> : null}
        {variantId === "stepped" ? <ActionStripStepped /> : null}
        {variantId === "arc" ? <ActionStripArc /> : null}
      </div>
    </section>
  );
}
