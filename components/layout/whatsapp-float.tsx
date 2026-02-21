"use client";

import Link from "next/link";
import { business } from "@/data/business";
import { useLocale } from "@/components/providers/locale-provider";

export const WhatsAppFloat = () => {
  const { locale } = useLocale();

  return (
    <Link
      href={business.socials.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-600"
    >
      {locale === "sw" ? "WhatsApp sasa" : "WhatsApp now"}
    </Link>
  );
};
