"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextType = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
const THEME_KEY = "rcha-theme";
const themeListeners = new Set<() => void>();

const readThemeSnapshot = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(THEME_KEY);
  return saved === "dark" ? "dark" : "light";
};

const subscribeTheme = (listener: () => void) => {
  themeListeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === THEME_KEY) listener();
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
};

const setThemeSnapshot = (next: ThemeMode) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_KEY, next);
  themeListeners.forEach((listener) => listener());
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSyncExternalStore<ThemeMode>(subscribeTheme, readThemeSnapshot, () => "light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  const setTheme = (next: ThemeMode) => {
    setThemeSnapshot(next);
  };

  const toggleTheme = () => {
    setThemeSnapshot(theme === "dark" ? "light" : "dark");
  };

  const value = { theme, setTheme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
