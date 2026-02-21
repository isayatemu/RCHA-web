"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { AskForm } from "@/components/forms/ask-form";

export const AskPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">{locale === "sw" ? "Muulize Herbalist" : "Ask the Herbalist"}</h1>
      <p className="text-sm text-emerald-900/80">{locale === "sw" ? "Uliza kwa Kiswahili au English." : "Ask in Swahili or English."}</p>
      <AskForm />
    </div>
  );
};
