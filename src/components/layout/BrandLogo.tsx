"use client";

import Image from "next/image";

import { SEAL_ASSETS, isLogoSealId } from "@/components/brand/LogoSeal";
import { useLogo } from "@/components/providers/LogoProvider";
import { siteName } from "@/content/navigation";

type BrandLogoProps = {
  surface: "dark" | "light";
  size?: "masthead" | "compact" | "footer" | "header";
  priority?: boolean;
  wordmarkClassName?: string;
};

/**
 * Uses the real interlocking-910 PNGs.
 * Masthead = full seal; compact (after scroll) = 910DF bar.
 */
export function BrandLogo({
  surface,
  size = "header",
  priority = false,
  wordmarkClassName = "",
}: BrandLogoProps) {
  const { logo } = useLogo();

  if (isLogoSealId(logo.id)) {
    const assets = SEAL_ASSETS[logo.id];
    const isCompact = size === "compact";
    const src = isCompact ? assets.compact : assets.masthead;

    // Seals are ~3:4; compact 910DF lockups are ~16:9 — full-bleed assets, no CSS crop.
    const box = isCompact
      ? "h-9 w-16 shrink-0 md:h-11 md:w-[4.875rem]"
      : size === "footer"
        ? "h-[5.5rem] w-[4.125rem] shrink-0 md:h-28 md:w-[5.25rem]"
        : "h-[6.75rem] w-[5.0625rem] shrink-0 md:h-[7.5rem] md:w-[5.625rem]";

    return (
      <span className={`relative inline-block ${box}`}>
        <Image
          src={src}
          alt=""
          fill
          className="object-contain object-left"
          priority={priority}
          unoptimized
          sizes={isCompact ? "78px" : size === "footer" ? "84px" : "90px"}
        />
      </span>
    );
  }

  const imgBox =
    size === "footer"
      ? "h-10 w-10 shrink-0"
      : "h-11 w-11 shrink-0 md:h-12 md:w-12";

  const src = surface === "light" ? logo.onLight : logo.onDark;

  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative inline-block overflow-hidden ${imgBox}`}>
        <Image
          src={src}
          alt=""
          width={48}
          height={48}
          className="h-full w-full object-contain"
          priority={priority}
          unoptimized
        />
      </span>
      <span
        className={`font-sans text-base font-semibold tracking-[0.12em] uppercase md:text-lg ${wordmarkClassName}`}
      >
        {siteName}
      </span>
    </span>
  );
}
