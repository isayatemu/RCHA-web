"use client";

import { disclaimer } from "@/data/business";
import { useLocale } from "@/components/providers/locale-provider";

export const Disclaimer = () => {
  const { locale } = useLocale();

  return (
    <section className="rounded-2xl border border-amber-500/40 bg-amber-100/70 p-4 text-sm text-amber-950">
      <p className="font-semibold uppercase tracking-wide">Disclaimer</p>
      <p className="mt-2 leading-relaxed">{locale === "sw" ? disclaimer.sw : disclaimer.en}</p>
    </section>
  );
};
