"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { faqItems } from "@/data/faq";
import { FaqAccordion } from "@/components/sections/faq-accordion";

export const FaqPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">{locale === "sw" ? "Maswali Ya Mara Kwa Mara" : "Frequently Asked Questions"}</h1>
      <FaqAccordion items={faqItems} />
    </div>
  );
};
