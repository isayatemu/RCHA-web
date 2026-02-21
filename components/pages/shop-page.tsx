"use client";

import { useLocale } from "@/components/providers/locale-provider";

export const ShopPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Shop (Coming Soon)</h1>
      <p className="text-sm text-emerald-900/80">
        {locale === "sw" ? "Kwa sasa oda zinapokelewa kupitia WhatsApp; online checkout inakuja hivi karibuni." : "Currently order via WhatsApp; online checkout is coming soon."}
      </p>
      <section className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <article key={item} className="animate-pulse rounded-2xl border border-emerald-900/15 bg-white p-4">
            <div className="h-36 rounded-lg bg-emerald-100" />
            <div className="mt-3 h-4 w-3/4 rounded bg-emerald-100" />
            <div className="mt-2 h-4 w-1/2 rounded bg-emerald-100" />
            <button disabled className="mt-4 rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold text-gray-700">Cart disabled</button>
          </article>
        ))}
      </section>
    </div>
  );
};
