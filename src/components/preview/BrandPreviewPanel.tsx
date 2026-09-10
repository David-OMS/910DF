"use client";

import Image from "next/image";

import { SEAL_ASSETS, isLogoSealId } from "@/components/brand/LogoSeal";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { useLogo } from "@/components/providers/LogoProvider";
import { LOGO_OPTIONS } from "@/content/logos";

export function BrandPreviewPanel() {
  const { logoId, setLogoId, resetLogo } = useLogo();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Private preview
        </p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">Logo lab</h1>
        <p className="max-w-2xl text-muted">
          New seal + compact PNGs: charcoal plate with white frame tight to the
          image edges, DEVELOPMENT FOUNDATION under 910. Scroll uses a single
          910DF lockup image (same mark language).
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {LOGO_OPTIONS.map((item) => {
          const isActive = item.id === logoId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setLogoId(item.id)}
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
        <button
          type="button"
          onClick={resetLogo}
          className="rounded-sm border border-line px-4 py-2 text-sm text-muted hover:text-ink"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {LOGO_OPTIONS.map((item) => {
          const isActive = item.id === logoId;
          const thumb = isLogoSealId(item.id)
            ? SEAL_ASSETS[item.id].masthead
            : item.onDark;
          return (
            <button
              key={`${item.id}-thumb`}
              type="button"
              onClick={() => setLogoId(item.id)}
              className={`overflow-hidden rounded-sm border p-3 text-left transition-colors ${
                isActive
                  ? "border-accent ring-1 ring-accent"
                  : "border-line hover:border-muted"
              }`}
            >
              <div className="relative flex h-48 items-center justify-center bg-[#1a1a1a]">
                <Image
                  src={thumb}
                  alt=""
                  width={140}
                  height={180}
                  className="h-44 w-auto object-contain"
                  unoptimized
                />
              </div>
              <p className="mt-2 text-sm font-medium text-ink">{item.label}</p>
            </button>
          );
        })}
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm border border-line bg-[#1a1a1a]">
          <div className="flex h-32 items-center justify-between px-5 md:px-8">
            <BrandLogo
              surface="dark"
              size="masthead"
              wordmarkClassName="text-white"
            />
            <span className="hidden text-sm text-white/70 sm:inline">
              Home · About · <span className="text-accent">Programs</span>
            </span>
          </div>
          <div className="border-t border-white/10 px-5 py-8 md:px-8">
            <p className="font-display text-2xl text-white md:text-3xl">
              Masthead (top of page)
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-line bg-white">
          <div className="flex h-20 items-center justify-between border-b border-line px-5 md:px-8">
            <BrandLogo
              surface="light"
              size="compact"
              wordmarkClassName="text-ink"
            />
            <span className="hidden text-sm text-ink/70 sm:inline">
              Home · About · <span className="text-accent">Programs</span>
            </span>
          </div>
          <div className="px-5 py-8 md:px-8">
            <p className="font-display text-2xl text-ink md:text-3xl">
              Condensed — 910DF
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
