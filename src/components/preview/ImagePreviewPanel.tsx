"use client";

import Image from "next/image";

import { useHero } from "@/components/providers/HeroProvider";
import { Button } from "@/components/ui/Button";
import { HERO_IMAGES } from "@/content/heroes";

export function ImagePreviewPanel() {
  const {
    hero,
    heroId,
    isGreyscale,
    setHeroId,
    setIsGreyscale,
    resetHeroDefaults,
  } = useHero();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Private preview
        </p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Image lab
        </h1>
        <p className="max-w-2xl text-muted">
          Swap the home hero and toggle greyscale. Choices stick in this
          browser. Drop more files in <code className="text-ink">public/images/heroes</code> and
          register them in <code className="text-ink">src/content/heroes.ts</code>.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            variant="primary"
            onClick={() => setIsGreyscale(!isGreyscale)}
          >
            {isGreyscale ? "Show colour" : "Show black & white"}
          </Button>
          <Button type="button" variant="primary" onClick={resetHeroDefaults}>
            Reset defaults
          </Button>
          <p className="text-sm text-muted">
            Active: {hero.label}
            {isGreyscale ? " · greyscale" : " · colour"}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">Candidates</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {HERO_IMAGES.map((item) => {
            const isActive = item.id === heroId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setHeroId(item.id)}
                className={`overflow-hidden rounded-sm border text-left transition-colors ${
                  isActive
                    ? "border-accent"
                    : "border-line hover:border-muted"
                }`}
              >
                <div className="relative aspect-[3/2] bg-black">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover ${isGreyscale ? "grayscale" : ""}`}
                  />
                </div>
                <div className="space-y-1 p-4">
                  <p className="font-medium text-ink">{item.label}</p>
                  <p className="text-sm text-muted">{item.description}</p>
                  <p className="text-xs text-muted">{item.credit}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">Home hero preview</h2>
        <p className="text-sm text-muted">
          Same crop and filter as the live home block. Open{" "}
          <a href="/" className="font-medium text-accent underline-offset-4 hover:underline">
            /
          </a>{" "}
          for the full navbar overlay.
        </p>
        <div className="relative min-h-[50vh] overflow-hidden rounded-sm bg-black">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="100vw"
            className={`object-cover object-center ${isGreyscale ? "grayscale" : ""}`}
          />
          <div className="absolute inset-0 hero-scrim" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Live filter check
            </p>
            <p className="mt-3 max-w-xl font-display text-3xl text-white md:text-4xl">
              {hero.label}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
