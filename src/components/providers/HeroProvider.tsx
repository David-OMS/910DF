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
  DEFAULT_HERO_ID,
  HERO_GREYSCALE_STORAGE_KEY,
  HERO_IMAGES,
  HERO_STORAGE_KEY,
  getHeroById,
  type HeroImage,
} from "@/content/heroes";

type HeroContextValue = {
  hero: HeroImage;
  heroId: string;
  isGreyscale: boolean;
  setHeroId: (id: string) => void;
  setIsGreyscale: (value: boolean) => void;
  resetHeroDefaults: () => void;
};

const HeroContext = createContext<HeroContextValue | null>(null);

function readHeroId(): string {
  try {
    const stored = window.localStorage.getItem(HERO_STORAGE_KEY);
    if (stored && getHeroById(stored)) {
      return stored;
    }
  } catch {
    // Fall through to default.
  }
  return DEFAULT_HERO_ID;
}

function readGreyscale(): boolean {
  try {
    const stored = window.localStorage.getItem(HERO_GREYSCALE_STORAGE_KEY);
    if (stored === "0") {
      return false;
    }
    if (stored === "1") {
      return true;
    }
  } catch {
    // Fall through to default.
  }
  // Site default: black-and-white heroes; colour stays available in the lab.
  return true;
}

export function HeroProvider({ children }: { children: ReactNode }) {
  const defaultHero = getHeroById(DEFAULT_HERO_ID) ?? HERO_IMAGES[0];
  const [heroId, setHeroIdState] = useState(DEFAULT_HERO_ID);
  const [isGreyscale, setIsGreyscaleState] = useState(true);
  const [hero, setHero] = useState<HeroImage>(defaultHero);

  useEffect(() => {
    const nextId = readHeroId();
    const nextHero = getHeroById(nextId) ?? defaultHero;
    setHeroIdState(nextHero.id);
    setHero(nextHero);
    setIsGreyscaleState(readGreyscale());
  }, [defaultHero]);

  const setHeroId = useCallback(
    (id: string) => {
      const nextHero = getHeroById(id);
      if (!nextHero) {
        return;
      }
      setHeroIdState(nextHero.id);
      setHero(nextHero);
      window.localStorage.setItem(HERO_STORAGE_KEY, nextHero.id);
    },
    [],
  );

  const setIsGreyscale = useCallback((value: boolean) => {
    setIsGreyscaleState(value);
    window.localStorage.setItem(HERO_GREYSCALE_STORAGE_KEY, value ? "1" : "0");
  }, []);

  const resetHeroDefaults = useCallback(() => {
    const nextHero = getHeroById(DEFAULT_HERO_ID) ?? defaultHero;
    setHeroIdState(nextHero.id);
    setHero(nextHero);
    setIsGreyscaleState(true);
    window.localStorage.setItem(HERO_STORAGE_KEY, nextHero.id);
    window.localStorage.setItem(HERO_GREYSCALE_STORAGE_KEY, "1");
  }, [defaultHero]);

  const value = useMemo(
    () => ({
      hero,
      heroId,
      isGreyscale,
      setHeroId,
      setIsGreyscale,
      resetHeroDefaults,
    }),
    [hero, heroId, isGreyscale, setHeroId, setIsGreyscale, resetHeroDefaults],
  );

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
}

export function useHero(): HeroContextValue {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHero must be used inside HeroProvider");
  }
  return context;
}
