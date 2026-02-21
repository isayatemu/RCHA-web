"use client";

import { useLocale } from "@/components/providers/locale-provider";

export const LanguageToggle = () => {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "sw" ? "en" : "sw")}
      className="rounded-full border border-emerald-900/30 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-emerald-50"
      aria-label="Toggle language"
      type="button"
    >
      {locale === "sw" ? "SW | EN" : "EN | SW"}
    </button>
  );
};
