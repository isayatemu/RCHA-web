"use client";

import { useLocale } from "@/components/providers/locale-provider";
import type { Testimonial } from "@/data/testimonials";

export const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const { locale } = useLocale();

  if (item.language !== locale) return null;

  return (
    <article className="rounded-2xl border border-emerald-900/15 bg-white p-5 shadow-sm">
      <p className="text-sm leading-relaxed text-emerald-950/85">&ldquo;{item.message}&rdquo;</p>
      <div className="mt-4 text-xs uppercase tracking-wide text-maroon-900">
        {item.name} · {item.location} · {item.date}
      </div>
    </article>
  );
};
