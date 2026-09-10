export type LogoSealId = "logo1" | "logo2" | "logo3" | "logo4";
export type LogoSurface = "dark" | "light";

/** Authored seal PNGs: edge-tight frame; compact = full 910DF lockup. */
export const SEAL_ASSETS: Record<
  LogoSealId,
  { masthead: string; compact: string; label: string }
> = {
  logo1: {
    label: "Seal — all white 910",
    masthead: "/images/brand/seal-white.png?v=7",
    compact: "/images/brand/compact-white.png?v=7",
  },
  logo2: {
    label: "Seal — cream + terracotta",
    masthead: "/images/brand/seal-terracotta.png?v=7",
    compact: "/images/brand/compact-terracotta.png?v=7",
  },
  logo3: {
    label: "Seal — white + gold",
    masthead: "/images/brand/seal-gold.png?v=7",
    compact: "/images/brand/compact-gold.png?v=7",
  },
  logo4: {
    label: "Seal — white + teal",
    masthead: "/images/brand/seal-teal.png?v=7",
    compact: "/images/brand/compact-teal.png?v=7",
  },
};

export function isLogoSealId(id: string): id is LogoSealId {
  return id === "logo1" || id === "logo2" || id === "logo3" || id === "logo4";
}
