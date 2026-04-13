"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { YouTubeGrid } from "@/components/sections/youtube-grid";
import { business } from "@/data/business";
import { youtubeVideos } from "@/data/youtube";
import { whatsappPrefill } from "@/lib/site";

const aboutContent = {
  sw: {
    eyebrow: "Kuhusu sisi",
    title: "Kuhusu Rose Changa Herbalist Africa",
    paragraphs: [
      "Rose Changa Herbalist Africa ni huduma ya afya asilia iliyojengwa juu ya kusikiliza mteja, kuelewa hali yake, na kumpa mwongozo unaofaa kabla ya kupendekeza bidhaa au mpango wa matumizi.",
      `Kutoka ${business.location}, tumekuwa tukihudumia wateja wa ndani ya Tanzania pamoja na diaspora kwa heshima, faragha, na ufuatiliaji wa karibu.`,
      "Lengo letu ni kufanya ushauri wa afya asilia uwe wa karibu, wazi, na unaoaminika kwa kila mtu anayehitaji msaada.",
    ],
    quote: "Tunatanguliza mtu kwanza, ndipo bidhaa na mpango wa matumizi vinafuata.",
    primaryCta: "Anza Ushauri",
    secondaryCta: "Tazama Video",
    milestones: [
      { year: "2014", title: "Mwanzo Arusha", desc: "Huduma ilianza Arusha." },
      { year: "2018", title: "Diaspora", desc: "Huduma ilifika nje ya nchi." },
      { year: "Leo", title: "Huduma ya karibu", desc: "Ushauri na ufuatiliaji wa karibu." },
    ],
    mediaTitle: "Video za YouTube",
    mediaDesc: "Tazama video zetu ujue zaidi kuhusu huduma na brand yetu.",
    documentsTitle: "Vyeti na Nyaraka",
    documents: [
      { title: "Cheti cha huduma", desc: "PDF hapa" },
      { title: "Usajili", desc: "PDF hapa" },
      { title: "Mafunzo", desc: "PDF hapa" },
    ],
  },
  en: {
    eyebrow: "About us",
    title: "About Rose Changa Herbalist Africa",
    paragraphs: [
      "Rose Changa Herbalist Africa is a natural health service built on listening first, understanding the client's condition, and giving the right guidance before recommending any product or routine.",
      `From ${business.location}, we support local and diaspora clients with respect, privacy, and close follow-up.`,
      "Our goal is to make natural health guidance feel personal, clear, and trustworthy for every client who reaches out.",
    ],
    quote: "We put the person first, then the product and routine follow.",
    primaryCta: "Start Consultation",
    secondaryCta: "Watch Videos",
    milestones: [
      { year: "2014", title: "Started in Arusha", desc: "The service began in Arusha." },
      { year: "2018", title: "Diaspora support", desc: "Support expanded abroad." },
      { year: "Today", title: "Close care", desc: "Guidance with follow-up." },
    ],
    mediaTitle: "YouTube Videos",
    mediaDesc: "Watch our videos to learn more about our service and brand.",
    documentsTitle: "Certificates & Documents",
    documents: [
      { title: "Service certificate", desc: "PDF here" },
      { title: "Registration", desc: "PDF here" },
      { title: "Training", desc: "PDF here" },
    ],
  },
} as const;

const DocumentIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 3.5h6l4.5 4.5V19A1.5 1.5 0 0 1 17 20.5H8A2.5 2.5 0 0 1 5.5 18V6A2.5 2.5 0 0 1 8 3.5Z" />
    <path d="M14 3.5V8h4.5" />
    <path d="M8.5 12.5h7M8.5 16h7" strokeLinecap="round" />
  </svg>
);

export const AboutPageClient = () => {
  const { locale } = useLocale();
  const content = aboutContent[locale];
  const consultationHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba kuanza ushauri baada ya kusoma kuhusu huduma yenu."
      : "Hello Rose Changa, I would like to start a consultation after reading about your service.",
  );

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2.2rem] border border-emerald-900/12 bg-gradient-to-br from-[#f8fbf7] via-white to-[#f8f2e5] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
            {content.eyebrow}
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
            {content.title}
          </h1>

          <div className="mt-5 space-y-4 text-sm leading-8 text-emerald-900/78 sm:text-base">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-6 rounded-[1.75rem] border border-maroon-900/10 bg-[#fff7ec] px-5 py-4 text-base italic leading-7 text-emerald-950 shadow-sm">
            {content.quote}
          </blockquote>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.milestones.map((item) => (
              <article key={item.title} className="rounded-[1.6rem] border border-emerald-900/10 bg-white/92 px-5 py-5 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon-900">{item.year}</p>
                <p className="mt-3 text-lg font-semibold text-emerald-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-emerald-900/72">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={consultationHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-maroon-800"
            >
              {content.primaryCta}
            </a>
            <a
              href="#about-videos"
              className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-950 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section
        id="about-videos"
        className="rounded-[2.1rem] border border-emerald-900/10 bg-white/92 px-6 py-8 shadow-[0_22px_56px_rgba(17,72,53,0.08)] sm:px-8"
      >
        <h2 className="text-3xl font-semibold text-emerald-950">{content.mediaTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-emerald-900/76">{content.mediaDesc}</p>
        <div className="mt-6">
          <YouTubeGrid urls={youtubeVideos} />
        </div>
      </section>

      <section className="rounded-[2.1rem] bg-gradient-to-r from-emerald-950 via-[#123524] to-emerald-900 px-6 py-8 text-white shadow-[0_26px_60px_rgba(8,23,17,0.2)] sm:px-8">
        <h2 className="text-3xl font-semibold">{content.documentsTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.documents.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-white/12 bg-white/10 p-5 backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/12"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 text-white">
                <DocumentIcon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-white/72">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
