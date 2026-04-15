"use client";

import { useTheme } from "@/components/providers/theme-provider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/20 bg-white/92 text-emerald-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50 dark:bg-white/8 dark:text-emerald-100"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.8v2.2M12 19v2.2M21.2 12h-2.2M5 12H2.8M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6M18.5 18.5l-1.6-1.6M7.1 7.1 5.5 5.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M20.3 15.4A8.5 8.5 0 1 1 8.6 3.7 7.1 7.1 0 0 0 20.3 15.4Z" />
        </svg>
      )}
    </button>
  );
};
