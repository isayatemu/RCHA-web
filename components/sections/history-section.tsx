"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { youtubeVideos } from "@/data/youtube";
import type { Locale } from "@/lib/i18n";
import { getYouTubeId } from "@/lib/site";

type HistoryCopy = {
  title: string;
  desc: string;
  cta: string;
  videoLabel: string;
  play: string;
  badges: string[];
  quote: string;
};

type IconProps = {
  className?: string;
};

const historyContent = {
  sw: {
    title: "Safari ya kuleta afya kwa maelfu ya watu",
    desc: "Tangu Arusha hadi diaspora, tumesaidia watu wengi kurejesha afya zao kwa tiba asilia, kwa uaminifu, heshima na matokeo halisi.",
    cta: "Soma historia yetu",
    videoLabel: "Tazama ushuhuda halisi",
    play: "Angalia Video",
    badges: [
      "Miaka 10+ ya uzoefu",
      "Wateja wengi walioridhika",
      "Huduma ya kitaalamu",
    ],
    quote: "Afya ya mtu ni muhimu kuliko chochote - tunahudumia kwa moyo wote",
  },
  en: {
    title: "A journey of restoring health to thousands",
    desc: "From Arusha to the diaspora, we have helped many people restore their health through natural remedies built on trust, care, and real results.",
    cta: "Read full story",
    videoLabel: "Real Client Story",
    play: "Watch Video",
    badges: [
      "10+ years experience",
      "Trusted by many clients",
      "Professional care",
    ],
    quote: "A person's health is everything - we serve with care and dedication",
  },
} satisfies Record<Locale, HistoryCopy>;

const ExperienceIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7.5v4.8l3 1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrustIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3.5 5.5 6v5.5c0 4.2 2.6 7.4 6.5 9 3.9-1.6 6.5-4.8 6.5-9V6L12 3.5Z" />
    <path d="m9.5 11.8 1.7 1.7 3.4-3.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CareIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 20s-6.5-3.6-8.4-8C2.2 8.6 4.1 5.5 7.4 5.5c1.9 0 3.2 1 4.6 2.6 1.4-1.6 2.7-2.6 4.6-2.6 3.3 0 5.2 3.1 3.8 6.5C18.5 16.4 12 20 12 20Z" />
  </svg>
);

const PlayIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M8.5 6.8c0-.8.9-1.3 1.6-.8l7.2 4.4c.7.4.7 1.3 0 1.7L10.1 16.5c-.7.4-1.6 0-1.6-.8V6.8Z" />
  </svg>
);

const badgeMeta = [
  {
    icon: ExperienceIcon,
    iconClassName: "bg-emerald-100 text-emerald-900",
  },
  {
    icon: TrustIcon,
    iconClassName: "bg-[#fff1e8] text-maroon-900",
  },
  {
    icon: CareIcon,
    iconClassName: "bg-emerald-50 text-emerald-950",
  },
] as const;

const storyTitle = (locale: Locale, index: number) =>
  locale === "sw" ? `Ushuhuda wa mteja 0${index + 1}` : `Client story 0${index + 1}`;

export const HistorySection = () => {
  const { locale } = useLocale();
  const content = historyContent[locale];
  const videos = youtubeVideos
    .slice(0, 2)
    .map((url) => ({ url, id: getYouTubeId(url) }))
    .filter((video) => video.id);
  const [activeId, setActiveId] = useState<string | null>(videos[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f7fbf5] via-[#fff9f1] to-[#e8f1e8] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.96), transparent 32%), radial-gradient(circle at bottom right, rgba(221,238,226,0.84), transparent 34%)",
        }}
      />

      <div className="relative grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12">
        <div key={`history-copy-${locale}`} className="fade-up" aria-live="polite">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
            {locale === "sw" ? "Historia ya uaminifu" : "A story of trust"}
          </div>

          <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl xl:text-[3rem]">
            {content.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-emerald-900/82 sm:text-lg">
            {content.desc}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {content.badges.map((badge, index) => {
              const meta = badgeMeta[index];
              const Icon = meta.icon;

              return (
                <div
                  key={badge}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-900/8 bg-white/92 px-4 py-3 shadow-sm"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${meta.iconClassName}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-emerald-950">{badge}</span>
                </div>
              );
            })}
          </div>

          <blockquote className="mt-8 max-w-xl rounded-[1.75rem] border border-maroon-900/10 bg-white/70 px-5 py-5 text-base italic leading-8 text-emerald-950 shadow-sm backdrop-blur">
            {content.quote}
          </blockquote>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(92,29,47,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-maroon-800"
          >
            {content.cta}
          </Link>
        </div>

        <div
          key={`history-video-${locale}`}
          className="fade-up"
          style={{ animationDelay: "90ms" }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {videos.map((video, index) => {
              const isActive = activeId === video.id;
              const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

              return (
                <button
                  key={video.url}
                  type="button"
                  onClick={() => setActiveId(video.id)}
                  aria-label={`${content.videoLabel} ${index + 1}`}
                  className={`group relative overflow-hidden rounded-2xl border border-emerald-900/12 shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-lg ${isActive ? "ring-2 ring-emerald-600/30" : ""}`}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={thumb}
                      alt={storyTitle(locale, index)}
                      fill
                      className={`object-cover transition duration-500 ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/88 via-emerald-950/35 to-emerald-950/10" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur sm:text-xs">
                      {content.videoLabel}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/18 text-white shadow-[0_0_0_12px_rgba(255,255,255,0.08)] backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-white/26">
                        <PlayIcon className="ml-1 h-7 w-7" />
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">{storyTitle(locale, index)}</p>
                          <p className="mt-1 text-xs text-white/82">
                            {locale === "sw" ? "Hadithi ya matumaini na ufuatiliaji" : "A story of care and follow-up"}
                          </p>
                        </div>
                        <span className="rounded-full bg-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur sm:text-xs">
                          {content.play}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {activeId && (
            <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-emerald-900/12 bg-emerald-950 p-2 shadow-md">
              <div className="flex items-center justify-between px-3 pb-3 pt-2 text-sm text-white/90">
                <span>{content.videoLabel}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  YouTube
                </span>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-[1.25rem]">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${activeId}`}
                  title={content.videoLabel}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
