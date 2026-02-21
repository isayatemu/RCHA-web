"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { stories } from "@/data/stories";

export const StoriesPageClient = () => {
  const { locale } = useLocale();

  return (
    <div>
      <h1 className="text-4xl font-semibold">Client Success Stories</h1>
      <div className="mt-6 space-y-4">
        {stories.map((story) => (
          <article key={story.titleEn} className="rounded-2xl border border-emerald-900/15 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-maroon-900">{story.location}</p>
            <h2 className="mt-2 text-2xl font-semibold">{locale === "sw" ? story.titleSw : story.titleEn}</h2>
            <p className="mt-3 text-sm text-emerald-900/85">{locale === "sw" ? story.summarySw : story.summaryEn}</p>
          </article>
        ))}
      </div>
    </div>
  );
};
