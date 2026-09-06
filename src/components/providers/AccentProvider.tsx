"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  ACCENT_PRESETS,
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT_ID,
  applyAccentSet,
  clearAccentOverrides,
  deriveAccentSet,
  getPresetById,
  type AccentSet,
} from "@/lib/accents";

type AccentMode = "preset" | "custom";

type AccentContextValue = {
  mode: AccentMode;
  presetId: string;
  customHex: string;
  activeColors: AccentSet;
  setPreset: (id: string) => void;
  setCustomHex: (hex: string) => void;
  resetToDefault: () => void;
};

const AccentContext = createContext<AccentContextValue | null>(null);

function readStoredSelection(): { mode: AccentMode; value: string } {
  try {
    const raw = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (!raw) {
      return { mode: "preset", value: DEFAULT_ACCENT_ID };
    }

    const parsed = JSON.parse(raw) as { mode?: AccentMode; value?: string };
    if (parsed.mode === "custom" && parsed.value) {
      return { mode: "custom", value: parsed.value };
    }
    if (parsed.mode === "preset" && parsed.value && getPresetById(parsed.value)) {
      return { mode: "preset", value: parsed.value };
    }
  } catch {
    // Ignore bad localStorage and fall back to default.
  }

  return { mode: "preset", value: DEFAULT_ACCENT_ID };
}

function persistSelection(mode: AccentMode, value: string): void {
  window.localStorage.setItem(
    ACCENT_STORAGE_KEY,
    JSON.stringify({ mode, value }),
  );
}

export function AccentProvider({ children }: { children: ReactNode }) {
  const defaultPreset = getPresetById(DEFAULT_ACCENT_ID) ?? ACCENT_PRESETS[0];
  const [mode, setMode] = useState<AccentMode>("preset");
  const [presetId, setPresetId] = useState(DEFAULT_ACCENT_ID);
  const [customHex, setCustomHexState] = useState(defaultPreset.colors.accent);
  const [activeColors, setActiveColors] = useState<AccentSet>(
    defaultPreset.colors,
  );

  useEffect(() => {
    const stored = readStoredSelection();

    if (stored.mode === "custom") {
      const derived = deriveAccentSet(stored.value);
      if (derived) {
        setMode("custom");
        setCustomHexState(derived.accent);
        setActiveColors(derived);
        applyAccentSet(derived);
        return;
      }
    }

    const preset = getPresetById(stored.value) ?? defaultPreset;
    setMode("preset");
    setPresetId(preset.id);
    setActiveColors(preset.colors);
    applyAccentSet(preset.colors);
  }, [defaultPreset]);

  const setPreset = useCallback((id: string) => {
    const preset = getPresetById(id);
    if (!preset) {
      return;
    }

    setMode("preset");
    setPresetId(preset.id);
    setActiveColors(preset.colors);
    applyAccentSet(preset.colors);
    persistSelection("preset", preset.id);
  }, []);

  const setCustomHex = useCallback((hex: string) => {
    const derived = deriveAccentSet(hex);
    if (!derived) {
      setCustomHexState(hex);
      return;
    }

    setMode("custom");
    setCustomHexState(derived.accent);
    setActiveColors(derived);
    applyAccentSet(derived);
    persistSelection("custom", derived.accent);
  }, []);

  const resetToDefault = useCallback(() => {
    const preset = getPresetById(DEFAULT_ACCENT_ID) ?? defaultPreset;
    setMode("preset");
    setPresetId(preset.id);
    setCustomHexState(preset.colors.accent);
    setActiveColors(preset.colors);
    clearAccentOverrides();
    applyAccentSet(preset.colors);
    persistSelection("preset", preset.id);
  }, [defaultPreset]);

  const value = useMemo(
    () => ({
      mode,
      presetId,
      customHex,
      activeColors,
      setPreset,
      setCustomHex,
      resetToDefault,
    }),
    [
      mode,
      presetId,
      customHex,
      activeColors,
      setPreset,
      setCustomHex,
      resetToDefault,
    ],
  );

  return (
    <AccentContext.Provider value={value}>{children}</AccentContext.Provider>
  );
}

export function useAccent(): AccentContextValue {
  const context = useContext(AccentContext);
  if (!context) {
    throw new Error("useAccent must be used inside AccentProvider");
  }
  return context;
}
