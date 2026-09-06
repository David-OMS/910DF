export type AccentSet = {
  accent: string;
  accentDark: string;
  accentSoft: string;
  accentInk: string;
};

export type AccentPreset = {
  id: string;
  label: string;
  description: string;
  colors: AccentSet;
};

export const ACCENT_STORAGE_KEY = "910df-accent-preset";

export const DEFAULT_ACCENT_ID = "sahel-gold";

export const ACCENT_PRESETS: AccentPreset[] = [
  {
    id: "sahel-gold",
    label: "Sahel gold",
    description: "Default — warm Sahel sun, distinct from Welfare orange.",
    colors: {
      accent: "#C9962A",
      accentDark: "#A67B1F",
      accentSoft: "#E4C56A",
      accentInk: "#1A1408",
    },
  },
  {
    id: "welfare-orange",
    label: "Welfare orange",
    description: "Closer to the inspiration template pop colour.",
    colors: {
      accent: "#F15A29",
      accentDark: "#D1451A",
      accentSoft: "#F6A07E",
      accentInk: "#1A0C08",
    },
  },
  {
    id: "deep-teal",
    label: "Deep teal",
    description: "Cooler trust tone — water / resilience lean.",
    colors: {
      accent: "#0F766E",
      accentDark: "#0B5A54",
      accentSoft: "#5EEAD4",
      accentInk: "#042F2E",
    },
  },
  {
    id: "forest",
    label: "Forest",
    description: "Growth / land — use if gold feels too warm.",
    colors: {
      accent: "#3F6F4A",
      accentDark: "#2F5438",
      accentSoft: "#9BC4A3",
      accentInk: "#0F1A12",
    },
  },
  {
    id: "clay",
    label: "Clay",
    description: "Earth red — strong on B&W photos, not purple.",
    colors: {
      accent: "#B4533A",
      accentDark: "#8F3F2C",
      accentSoft: "#E0A090",
      accentInk: "#1A0C08",
    },
  },
];

export function getPresetById(id: string): AccentPreset | undefined {
  return ACCENT_PRESETS.find((preset) => preset.id === id);
}

export function applyAccentSet(colors: AccentSet): void {
  const root = document.documentElement;
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--accent-dark", colors.accentDark);
  root.style.setProperty("--accent-soft", colors.accentSoft);
  root.style.setProperty("--accent-ink", colors.accentInk);
}

export function clearAccentOverrides(): void {
  const root = document.documentElement;
  root.style.removeProperty("--accent");
  root.style.removeProperty("--accent-dark");
  root.style.removeProperty("--accent-soft");
  root.style.removeProperty("--accent-ink");
}

function clampChannel(value: number): number {
  return Math.min(255, Math.max(0, Math.round(value)));
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleaned = hex.replace("#", "").trim();
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((char) => char + char)
          .join("")
      : cleaned;

  if (!/^[0-9a-fA-F]{6}$/.test(full)) {
    return null;
  }

  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((channel) => clampChannel(channel).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function mixWithWhite(hex: string, amount: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return hex;
  }

  return rgbToHex(
    rgb.r + (255 - rgb.r) * amount,
    rgb.g + (255 - rgb.g) * amount,
    rgb.b + (255 - rgb.b) * amount,
  );
}

function darken(hex: string, amount: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return hex;
  }

  return rgbToHex(rgb.r * (1 - amount), rgb.g * (1 - amount), rgb.b * (1 - amount));
}

/**
 * Builds a full accent set from one base colour so a custom picker
 * still fills dark / soft / ink without hand-tuning every token.
 */
export function deriveAccentSet(baseHex: string): AccentSet | null {
  const normalized = baseHex.startsWith("#") ? baseHex : `#${baseHex}`;
  if (!hexToRgb(normalized)) {
    return null;
  }

  return {
    accent: normalized.toUpperCase(),
    accentDark: darken(normalized, 0.18),
    accentSoft: mixWithWhite(normalized, 0.45),
    accentInk: "#1A1408",
  };
}

export function isValidHexColour(value: string): boolean {
  return hexToRgb(value.startsWith("#") ? value : `#${value}`) !== null;
}
