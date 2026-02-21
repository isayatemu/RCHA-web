"use client";

import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";

type Item = { qSw: string; qEn: string; aSw: string; aEn: string };

export const FaqAccordion = ({ items }: { items: Item[] }) => {
  const { locale } = useLocale();
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <article key={item.qEn} className="rounded-xl border border-emerald-900/20 bg-white">
          <button type="button" onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between p-4 text-left">
            <span className="font-medium text-emerald-950">{locale === "sw" ? item.qSw : item.qEn}</span>
            <span className="text-xl text-maroon-900">{open === i ? "-" : "+"}</span>
          </button>
          {open === i && <p className="px-4 pb-4 text-sm text-emerald-900/80">{locale === "sw" ? item.aSw : item.aEn}</p>}
        </article>
      ))}
    </div>
  );
};
