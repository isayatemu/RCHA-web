"use client";

import { useLocale } from "@/components/providers/locale-provider";
import type { Story } from "@/data/stories";

type IconProps = {
  className?: string;
};

type StoryCardProps = {
  accentClassName: string;
  badge?: string;
  icon: (props: IconProps) => React.JSX.Element;
  story: Story;
  featured?: boolean;
};

export const StoryCard = ({
  accentClassName,
  badge,
  icon: Icon,
  story,
  featured = false,
}: StoryCardProps) => {
  const { locale } = useLocale();
  const title = locale === "sw" ? story.titleSw : story.titleEn;
  const summary = locale === "sw" ? story.summarySw : story.summaryEn;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/94 shadow-[0_18px_42px_rgba(17,72,53,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
        featured ? "p-7 sm:p-8" : "p-6"
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accentClassName}`} aria-hidden="true" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900 shadow-sm">
              <Icon className="h-5 w-5" />
            </div>
            <span className="rounded-full border border-emerald-900/10 bg-[#f8f4eb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-maroon-900">
              {story.location}
            </span>
          </div>

          {badge && (
            <span className="rounded-full bg-emerald-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              {badge}
            </span>
          )}
        </div>

        <h3 className={`mt-6 font-semibold text-emerald-950 ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {title}
        </h3>
        <p className={`mt-3 text-emerald-900/78 ${featured ? "text-base leading-8" : "text-sm leading-7"}`}>
          {summary}
        </p>
      </div>
    </article>
  );
};
