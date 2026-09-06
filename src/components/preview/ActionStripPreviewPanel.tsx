"use client";

import type { ComponentType } from "react";

import { useActionStripVariant } from "@/components/providers/ActionStripProvider";
import { Button } from "@/components/ui/Button";
import {
  ActionStripArc,
  ActionStripDiagonal,
  ActionStripPills,
  ActionStripStepped,
} from "@/components/sections/action-strip/ActionStripVariants";
import {
  ACTION_STRIP_VARIANTS,
  type ActionStripVariantId,
} from "@/lib/action-strip";

const previewById: Record<
  ActionStripVariantId,
  ComponentType<{ className?: string }>
> = {
  pills: ActionStripPills,
  diagonal: ActionStripDiagonal,
  stepped: ActionStripStepped,
  arc: ActionStripArc,
};

export function ActionStripPreviewPanel() {
  const { variantId, setVariantId, resetVariant } = useActionStripVariant();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Private preview
        </p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Action strip lab
        </h1>
        <p className="max-w-2xl text-muted">
          Compare shapes under a fake hero edge. Your pick is stored in this
          browser and used on the live home page.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button type="button" variant="primary" onClick={resetVariant}>
            Reset to diagonal (C)
          </Button>
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Open home
          </a>
        </div>
      </header>

      <div className="space-y-12">
        {ACTION_STRIP_VARIANTS.map((variant) => {
          const Preview = previewById[variant.id];
          const isActive = variantId === variant.id;

          return (
            <section
              key={variant.id}
              className={`overflow-hidden rounded-sm border ${
                isActive ? "border-accent" : "border-line"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line bg-white px-5 py-4 md:px-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Option {variant.code}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-ink">
                    {variant.label}
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-muted">
                    {variant.description}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => setVariantId(variant.id)}
                >
                  {isActive ? "Active on home" : "Use on home"}
                </Button>
              </div>

              <div className="bg-black pb-8 pt-16 md:pb-10 md:pt-24">
                <p className="mb-6 px-5 text-center text-xs uppercase tracking-[0.2em] text-white/40 md:px-8">
                  Hero edge (mock)
                </p>
                <div className="px-5 md:px-8">
                  <div className="mx-auto max-w-6xl">
                    <Preview />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
