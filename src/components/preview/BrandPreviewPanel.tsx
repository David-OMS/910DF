"use client";

import { useState } from "react";

const WORDMARKS = [
  { id: "910df", label: "910DF", sample: "910DF" },
  { id: "9ten", label: "9ten", sample: "9ten" },
  { id: "nine10", label: "nine10", sample: "nine10" },
  { id: "nine-ten", label: "Nine-Ten", sample: "Nine-Ten" },
] as const;

type WordmarkId = (typeof WORDMARKS)[number]["id"];

export function BrandPreviewPanel() {
  const [activeId, setActiveId] = useState<WordmarkId>("910df");
  const active = WORDMARKS.find((item) => item.id === activeId) ?? WORDMARKS[0];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Private preview
        </p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Wordmark lab
        </h1>
        <p className="max-w-2xl text-muted">
          Same type as the site. Not a finished logo, just how the name reads
          in the header slot on dark and light.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {WORDMARKS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`rounded-sm px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-accent text-accent-ink"
                  : "border border-line bg-white text-ink hover:border-muted"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm border border-line bg-black">
          <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-8">
            <span className="font-sans text-lg font-semibold uppercase tracking-[0.18em] text-white">
              {active.sample}
            </span>
            <span className="hidden text-sm text-white/70 sm:inline">
              Home · About ·{" "}
              <span className="text-accent">Programs</span>
            </span>
          </div>
          <div className="border-t border-white/10 px-5 py-16 md:px-8">
            <p className="font-display text-3xl text-white md:text-4xl">
              On the hero (transparent bar)
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-line bg-white">
          <div className="flex h-16 items-center justify-between border-b border-line px-5 md:h-20 md:px-8">
            <span className="font-sans text-lg font-semibold uppercase tracking-[0.18em] text-ink">
              {active.sample}
            </span>
            <span className="hidden text-sm text-ink/70 sm:inline">
              Home · About ·{" "}
              <span className="text-accent">Programs</span>
            </span>
          </div>
          <div className="px-5 py-16 md:px-8">
            <p className="font-display text-3xl text-ink md:text-4xl">
              On solid white (after scroll)
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">Large lockups</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-sm bg-black px-6 py-12 text-center">
            <p className="font-sans text-4xl font-semibold uppercase tracking-[0.2em] text-white md:text-5xl">
              {active.sample}
            </p>
            <p className="mt-4 text-sm text-white/50">Sans · nav weight</p>
          </div>
          <div className="rounded-sm bg-black px-6 py-12 text-center">
            <p className="font-display text-4xl text-white md:text-5xl">
              {active.sample}
            </p>
            <p className="mt-4 text-sm text-white/50">Serif · display</p>
          </div>
        </div>
      </section>
    </div>
  );
}
