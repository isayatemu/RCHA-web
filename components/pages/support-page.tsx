"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { supportAreas } from "@/data/support";
import { Disclaimer } from "@/components/sections/disclaimer";

export const SupportPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-semibold">Areas We Support</h1>
        <p className="mt-3 text-sm text-emerald-900/80">
          {locale === "sw"
            ? "Tunasaidia wellness support. Hatuahidi cure wala kuchukua nafasi ya matibabu rasmi."
            : "We provide supportive wellness services. We do not promise cures or replace clinical treatment."}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {supportAreas.map((area) => (
          <article key={area.key} className="rounded-2xl border border-emerald-900/15 bg-white p-5">
            <h2 className="text-xl font-semibold">{locale === "sw" ? area.titleSw : area.titleEn}</h2>
            <p className="mt-3 text-sm text-emerald-900/85">{locale === "sw" ? area.noteSw : area.noteEn}</p>
            <p className="mt-3 rounded-xl bg-rose-50 p-3 text-xs text-rose-900">{locale === "sw" ? area.doctorWarningSw : area.doctorWarningEn}</p>
            <Link href="/booking" className="mt-4 inline-block text-sm font-semibold text-maroon-900">{locale === "sw" ? "Pata ushauri" : "Consult now"}</Link>
          </article>
        ))}
      </section>

      <Disclaimer />
    </div>
  );
};
