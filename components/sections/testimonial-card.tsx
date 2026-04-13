"use client";

import { useLocale } from "@/components/providers/locale-provider";
import type { Testimonial } from "@/data/testimonials";

const regionBadgeClassMap: Record<Testimonial["region"], string> = {
  Africa: "bg-emerald-100 text-emerald-900",
  "East Africa": "bg-teal-100 text-teal-900",
  Europe: "bg-blue-100 text-blue-900",
  USA: "bg-red-100 text-red-900",
  Global: "bg-amber-100 text-amber-900",
};

export const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const { locale } = useLocale();
  const message = locale === "sw" ? item.textSw : item.textEn;

  return (
    <article className="group rounded-xl border border-emerald-900/10 bg-white/94 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${regionBadgeClassMap[item.region]}`}>
          {item.region}
        </span>
        <span className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
          {item.product}
        </span>
      </div>

      <p className="mt-5 text-base leading-8 text-emerald-950/88">&ldquo;{message}&rdquo;</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8f3ea] text-2xl shadow-sm">
          <span aria-hidden="true">{item.flag}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-emerald-950">{item.name}</p>
          <p className="text-sm text-emerald-900/75">{item.location}</p>
        </div>
      </div>
    </article>
  );
};
