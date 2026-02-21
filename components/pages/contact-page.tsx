"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { business } from "@/data/business";

export const ContactPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">{locale === "sw" ? "Mawasiliano" : "Contact"}</h1>
      <article className="rounded-2xl border border-emerald-900/15 bg-white p-6">
        <p className="text-sm text-emerald-900/85">{business.location}</p>
        <p className="mt-2 text-sm">Phone: {business.phone}</p>
        <p className="text-sm">Email: {business.email}</p>
        <p className="mt-4 text-sm text-emerald-900/80">
          {locale === "sw" ? "Tunakaribisha consultation za ndani ya Tanzania na diaspora." : "We welcome consultation requests from Tanzania and diaspora communities."}
        </p>
        <div className="mt-4 flex gap-3">
          <a href={business.socials.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white">WhatsApp</a>
          <Link href="/booking" className="rounded-full border border-emerald-900 px-4 py-2 text-sm font-semibold text-emerald-900">{locale === "sw" ? "Book sasa" : "Book now"}</Link>
        </div>
      </article>
    </div>
  );
};
