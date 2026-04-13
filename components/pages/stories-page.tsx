"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { StoryCard } from "@/components/sections/story-card";
import { stories } from "@/data/stories";
import { whatsappPrefill } from "@/lib/site";

type IconProps = {
  className?: string;
};

const WellnessIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 20c4.5-1.1 7-4.5 7-9.7V5.5c-3.6 0-5.9 1.1-7 3.4-1.1-2.3-3.4-3.4-7-3.4v4.8C5 15.5 7.5 18.9 12 20Z" />
    <path d="M12 9v8" strokeLinecap="round" />
  </svg>
);

const SupportIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 7.5h14M5 12h10M5 16.5h8" strokeLinecap="round" />
    <path d="M18.5 18.5 16 17H8A3.5 3.5 0 0 1 4.5 13.5v-6A3.5 3.5 0 0 1 8 4h8A3.5 3.5 0 0 1 19.5 7.5v11Z" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3.5 5.5 6v5.5c0 4.2 2.6 7.4 6.5 9 3.9-1.6 6.5-4.8 6.5-9V6L12 3.5Z" />
    <path d="m9.5 11.8 1.8 1.8 3.5-3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const JourneyIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4.5 6.5h15M4.5 12h15M4.5 17.5h15" strokeLinecap="round" />
    <circle cx="7" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="17" cy="17.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const storyIcons = [WellnessIcon, SupportIcon, ShieldIcon, JourneyIcon, WellnessIcon] as const;
const storyAccents = [
  "from-emerald-400 via-emerald-700 to-emerald-500",
  "from-[#f3c55d] via-[#d89f2d] to-[#f5d27f]",
  "from-[#b15a74] via-[#5c1d2f] to-[#cf7c95]",
  "from-teal-300 via-emerald-700 to-emerald-400",
  "from-emerald-300 via-teal-600 to-teal-400",
] as const;

export const StoriesPageClient = () => {
  const { locale } = useLocale();
  const featuredStory = stories[0];
  const otherStories = stories.slice(1);
  const ctaHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba kuanza safari yangu ya ustawi."
      : "Hello Rose Changa, I would like to start my wellness journey.",
  );

  return (
    <div className="space-y-10">
      <section className="fade-up">
        <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
          {locale === "sw" ? "Hadithi za kweli" : "Real stories"}
        </div>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
          {locale === "sw" ? "Client Success Stories" : "Client Success Stories"}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-900/80 sm:text-lg">
          {locale === "sw"
            ? "Hadithi hizi zinaonyesha jinsi wateja wetu wanavyoboresha ustawi wao kwa ushauri wa karibu, mpango unaoeleweka, na follow-up ya heshima."
            : "These stories highlight how clients improve their wellness through close guidance, clear plans, and respectful follow-up."}
        </p>
      </section>

      <section className="fade-up" style={{ animationDelay: "80ms" }}>
        <StoryCard
          accentClassName="from-emerald-400 via-emerald-700 to-emerald-500"
          badge={locale === "sw" ? "Featured Story" : "Featured Story"}
          icon={WellnessIcon}
          story={featuredStory}
          featured
        />
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {otherStories.map((story, index) => (
          <div
            key={story.titleEn}
            className="fade-up"
            style={{ animationDelay: `${120 + index * 40}ms` }}
          >
            <StoryCard
              accentClassName={storyAccents[index + 1]}
              icon={storyIcons[index + 1]}
              story={story}
            />
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 px-6 py-8 text-white shadow-[0_22px_56px_rgba(17,72,53,0.16)] sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-2xl font-semibold leading-tight">
              {locale === "sw"
                ? "Wateja zaidi wanaimarisha ustawi wao kila siku"
                : "More clients are improving their wellness every day"}
            </p>
          </div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7f3e9]"
          >
            {locale === "sw" ? "Anza Safari Yako" : "Start Your Journey"}
          </a>
        </div>
      </section>
    </div>
  );
};
