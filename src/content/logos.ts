export const LOGO_STORAGE_KEY = "910df-logo-id-v2";

export type LogoVariant = "mark" | "lockup";

export type LogoOption = {
  id: string;
  label: string;
  variant: LogoVariant;
  onDark: string;
  onLight: string;
};

/** Current mark + four charcoal seals (edge-tight frame; compact = 910DF). */
export const LOGO_OPTIONS: LogoOption[] = [
  {
    id: "current",
    label: "Current mark",
    variant: "mark",
    onDark: "/images/brand/mark-on-dark.png",
    onLight: "/images/brand/mark-on-light.png",
  },
  {
    id: "logo1",
    label: "Seal — all white 910",
    variant: "lockup",
    onDark: "/images/brand/seal-white.png?v=7",
    onLight: "/images/brand/seal-white.png?v=7",
  },
  {
    id: "logo2",
    label: "Seal — cream + terracotta",
    variant: "lockup",
    onDark: "/images/brand/seal-terracotta.png?v=7",
    onLight: "/images/brand/seal-terracotta.png?v=7",
  },
  {
    id: "logo3",
    label: "Seal — white + gold",
    variant: "lockup",
    onDark: "/images/brand/seal-gold.png?v=7",
    onLight: "/images/brand/seal-gold.png?v=7",
  },
  {
    id: "logo4",
    label: "Seal — white + teal",
    variant: "lockup",
    onDark: "/images/brand/seal-teal.png?v=7",
    onLight: "/images/brand/seal-teal.png?v=7",
  },
];

/** Production default: Canva gold seal (not the old mark-only lockup). */
export const DEFAULT_LOGO_ID = "logo3";

export function getLogoById(id: string): LogoOption | undefined {
  return LOGO_OPTIONS.find((logo) => logo.id === id);
}
