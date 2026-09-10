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
  DEFAULT_LOGO_ID,
  LOGO_OPTIONS,
  LOGO_STORAGE_KEY,
  getLogoById,
  type LogoOption,
} from "@/content/logos";

type LogoContextValue = {
  logo: LogoOption;
  logoId: string;
  setLogoId: (id: string) => void;
  resetLogo: () => void;
};

const LogoContext = createContext<LogoContextValue | null>(null);

function readStoredLogoId(): string {
  try {
    const stored = window.localStorage.getItem(LOGO_STORAGE_KEY);
    if (stored && getLogoById(stored)) {
      return stored;
    }
  } catch {
    // Fall through to default.
  }
  return DEFAULT_LOGO_ID;
}

export function LogoProvider({ children }: { children: ReactNode }) {
  const defaultLogo = getLogoById(DEFAULT_LOGO_ID) ?? LOGO_OPTIONS[0];
  const [logoId, setLogoIdState] = useState(DEFAULT_LOGO_ID);
  const [logo, setLogo] = useState<LogoOption>(defaultLogo);

  useEffect(() => {
    const nextId = readStoredLogoId();
    const nextLogo = getLogoById(nextId) ?? defaultLogo;
    setLogoIdState(nextLogo.id);
    setLogo(nextLogo);
  }, [defaultLogo]);

  const setLogoId = useCallback(
    (id: string) => {
      const nextLogo = getLogoById(id);
      if (!nextLogo) {
        return;
      }
      setLogoIdState(nextLogo.id);
      setLogo(nextLogo);
      window.localStorage.setItem(LOGO_STORAGE_KEY, nextLogo.id);
    },
    [],
  );

  const resetLogo = useCallback(() => {
    const nextLogo = getLogoById(DEFAULT_LOGO_ID) ?? defaultLogo;
    setLogoIdState(nextLogo.id);
    setLogo(nextLogo);
    window.localStorage.setItem(LOGO_STORAGE_KEY, nextLogo.id);
  }, [defaultLogo]);

  const value = useMemo(
    () => ({
      logo,
      logoId,
      setLogoId,
      resetLogo,
    }),
    [logo, logoId, setLogoId, resetLogo],
  );

  return (
    <LogoContext.Provider value={value}>{children}</LogoContext.Provider>
  );
}

export function useLogo(): LogoContextValue {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error("useLogo must be used inside LogoProvider");
  }
  return context;
}
