export const LOGO_STORAGE_KEY = "910df-logo-id-v3";

/** Local CSS/SVG serif seal trial — not a production default. */
export const SERIF_TRIAL_ID = "serif-trial";

export type LogoVariant = "mark" | "lockup";

export type LogoOption = {
  id: string;
  label: string;
  variant: LogoVariant;
  onDark: string;
  onLight: string;
};

/** Current mark + charcoal seals + Stoerh Canva trial. */
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
  {
    id: "logo5",
    label: "Seal — Stoerh Canva trial",
    variant: "lockup",
    onDark: "/images/brand/seal-stoerh.png?v=18",
    onLight: "/images/brand/seal-stoerh.png?v=18",
  },
  {
    id: SERIF_TRIAL_ID,
    label: "Trial — serif SVG/CSS",
    variant: "lockup",
    onDark: "",
    onLight: "",
  },
];

/** Local default: Stoerh Canva seal for on-site check. */
export const DEFAULT_LOGO_ID = "logo5";

export function getLogoById(id: string): LogoOption | undefined {
  return LOGO_OPTIONS.find((logo) => logo.id === id);
}

export function usesSealChrome(id: string): boolean {
  return (
    id === SERIF_TRIAL_ID ||
    id === "logo1" ||
    id === "logo2" ||
    id === "logo3" ||
    id === "logo4" ||
    id === "logo5"
  );
}
