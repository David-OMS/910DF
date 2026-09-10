"use client";

import Image from "next/image";

import { useHero } from "@/components/providers/HeroProvider";
import { homeHeroCopy } from "@/content/home";

export function HomeHero() {
  const { hero, isGreyscale } = useHero();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-black">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className={`hero-media-in object-cover object-center ${isGreyscale ? "grayscale" : ""}`}
      />
      <div className="absolute inset-0 hero-scrim" aria-hidden="true" />

      <div
        className="relative z-10 w-full px-5 pb-40 md:px-8 md:pb-48"
        style={{ paddingTop: "calc(var(--site-header-h) + 1.5rem)" }}
      >
        <div className="container-site">
          <p className="hero-copy-in hero-copy-delay-1 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {homeHeroCopy.eyebrow}
          </p>
          <h1 className="hero-copy-in hero-copy-delay-2 mt-4 max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
            {homeHeroCopy.headline}
          </h1>
          <p className="hero-copy-in hero-copy-delay-3 mt-5 max-w-xl text-base text-white/90 md:text-lg">
            {homeHeroCopy.support}
          </p>
        </div>
      </div>
    </section>
  );
}
