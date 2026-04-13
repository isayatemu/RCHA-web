"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);
const LOCALE_KEY = "rcha-locale";
const localeListeners = new Set<() => void>();

const readLocaleSnapshot = (): Locale => {
  if (typeof window === "undefined") return "sw";
  const saved = window.localStorage.getItem(LOCALE_KEY);
  return saved === "sw" || saved === "en" ? saved : "sw";
};

const subscribeLocale = (listener: () => void) => {
  localeListeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === LOCALE_KEY) listener();
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    localeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
};

const setLocaleSnapshot = (next: Locale) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LOCALE_KEY, next);
  localeListeners.forEach((listener) => listener());
};

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useSyncExternalStore<Locale>(subscribeLocale, readLocaleSnapshot, () => "sw");

  const setLocale = (next: Locale) => {
    setLocaleSnapshot(next);
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
};
