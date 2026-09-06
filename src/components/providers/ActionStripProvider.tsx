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
  ACTION_STRIP_STORAGE_KEY,
  ACTION_STRIP_VARIANTS,
  DEFAULT_ACTION_STRIP_ID,
  getActionStripVariant,
  type ActionStripVariantId,
} from "@/lib/action-strip";

type ActionStripContextValue = {
  variantId: ActionStripVariantId;
  setVariantId: (id: ActionStripVariantId) => void;
  resetVariant: () => void;
};

const ActionStripContext = createContext<ActionStripContextValue | null>(null);

function readStoredVariant(): ActionStripVariantId {
  try {
    const stored = window.localStorage.getItem(ACTION_STRIP_STORAGE_KEY);
    if (stored && getActionStripVariant(stored)) {
      return stored as ActionStripVariantId;
    }
  } catch {
    // Fall through.
  }
  return DEFAULT_ACTION_STRIP_ID;
}

export function ActionStripProvider({ children }: { children: ReactNode }) {
  const [variantId, setVariantIdState] = useState<ActionStripVariantId>(
    DEFAULT_ACTION_STRIP_ID,
  );

  useEffect(() => {
    setVariantIdState(readStoredVariant());
  }, []);

  const setVariantId = useCallback((id: ActionStripVariantId) => {
    if (!getActionStripVariant(id)) {
      return;
    }
    setVariantIdState(id);
    window.localStorage.setItem(ACTION_STRIP_STORAGE_KEY, id);
  }, []);

  const resetVariant = useCallback(() => {
    setVariantIdState(DEFAULT_ACTION_STRIP_ID);
    window.localStorage.setItem(
      ACTION_STRIP_STORAGE_KEY,
      DEFAULT_ACTION_STRIP_ID,
    );
  }, []);

  const value = useMemo(
    () => ({
      variantId,
      setVariantId,
      resetVariant,
    }),
    [variantId, setVariantId, resetVariant],
  );

  return (
    <ActionStripContext.Provider value={value}>
      {children}
    </ActionStripContext.Provider>
  );
}

export function useActionStripVariant(): ActionStripContextValue {
  const context = useContext(ActionStripContext);
  if (!context) {
    throw new Error("useActionStripVariant must be used inside ActionStripProvider");
  }
  return context;
}

export function useActionStripVariantLabel(): string {
  const { variantId } = useActionStripVariant();
  return (
    ACTION_STRIP_VARIANTS.find((variant) => variant.id === variantId)?.label ??
    variantId
  );
}
