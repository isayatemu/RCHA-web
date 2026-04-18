"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { supportAreas } from "@/data/support";

type IconProps = {
  className?: string;
};

const ImmuneIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3.5 5.5 6v5.5c0 4.2 2.6 7.4 6.5 9 3.9-1.6 6.5-4.8 6.5-9V6L12 3.5Z" />
    <path d="m9.7 12.2 1.6 1.6 3.2-3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const KidneyIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9.5 5.2c-2.6 0-4.7 2.1-4.7 4.7 0 3.8 2.3 6.8 5.7 8.9 2.4-1.4 3.5-3.6 3.5-5.8V9.8c0-2.6-2.1-4.6-4.5-4.6Z" />
    <path d="M14.5 5.2c2.6 0 4.7 2.1 4.7 4.7 0 3.8-2.3 6.8-5.7 8.9-2.4-1.4-3.5-3.6-3.5-5.8V9.8c0-2.6 2.1-4.6 4.5-4.6Z" />
  </svg>
);

const DigestiveIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M10 4.5c-2.5 1.4-4 4.2-4 7.4 0 4 2.4 7.2 6 8.6 3.6-1.4 6-4.6 6-8.6 0-3.2-1.5-6-4-7.4" />
    <path d="M12 4v16" strokeLinecap="round" />
  </svg>
);

const LiverIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 12c0-4.3 3.2-7.4 7.7-7.4 2.5 0 4.6.9 6.3 2.6v3.3c0 5-2.8 8.4-7.3 8.9C8 19.8 5 16.8 5 12Z" />
    <path d="M12.8 8.5c-1.6 1.3-2.8 3.2-3.5 5.7" strokeLinecap="round" />
  </svg>
);

const CycleIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18.5 12a6.5 6.5 0 1 1-3-5.5" />
    <path d="M15.5 3.5v3h3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="15" r="4.5" />
    <path d="M12.3 11.7 18.5 5.5M14.8 5.5h3.7v3.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SugarIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 4.5c3.3 4.2 5 7 5 9.2a5 5 0 1 1-10 0c0-2.2 1.7-5 5-9.2Z" />
    <path d="M10 15.2c.8.8 2 .8 2.8 0 .8-.8 2-.8 2.8 0" strokeLinecap="round" />
  </svg>
);

const PressureIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3L4 20l.9-3.4A7.4 7.4 0 0 1 4.5 12Z" />
    <path d="M8.5 12h2l1.1-2.4 2 5L15 12h2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconByKey = {
  immune: ImmuneIcon,
  kidney: KidneyIcon,
  digestive: DigestiveIcon,
  liver: LiverIcon,
  cycle: CycleIcon,
  mens: MenIcon,
  sugar: SugarIcon,
  pressure: PressureIcon,
} as const;

const pageCopy = {
  sw: {
    eyebrow: "Maeneo ya usaidizi wetu",
    title: "Tunatoa usaidizi kwenye maeneo haya ya ustawi kwa mwongozo wa karibu",
    intro:
      "Chagua eneo linalokuhusu ili uone maelezo ya msingi, tahadhari muhimu, na hatua ya kuwasiliana nasi kwa ushauri binafsi.",
    button: "Wasiliana Sasa",
  },
  en: {
    eyebrow: "Areas we support",
    title: "We support these wellness areas with close guidance",
    intro:
      "Choose the area that relates to you to review the support summary, important caution note, and the next step for personal consultation.",
    button: "Consult Now",
  },
} as const;

export const SupportPageClient = () => {
  const { locale } = useLocale();
  const copy = pageCopy[locale];

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2.2rem] border border-emerald-900/12 bg-gradient-to-br from-[#f8fbf7] via-white to-[#f8f2e5] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
            {copy.eyebrow}
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
            {copy.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-900/78 sm:text-lg">
            {copy.intro}
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {supportAreas.map((area) => {
          const Icon = iconByKey[area.key as keyof typeof iconByKey] ?? ImmuneIcon;

          return (
            <Link
              key={area.key}
              href="/booking"
              className="group block overflow-hidden rounded-[1.8rem] border border-emerald-900/12 bg-white shadow-[0_18px_40px_rgba(17,72,53,0.08)] transition duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_28px_56px_rgba(17,72,53,0.14)]"
            >
              <article className="relative h-full p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-[#f0c35f] to-maroon-900" aria-hidden="true" />
                <div className="absolute -right-10 -top-8 h-24 w-24 rounded-full bg-emerald-100/80 blur-3xl" aria-hidden="true" />

                <div className="relative flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-emerald-950">
                    {locale === "sw" ? area.titleSw : area.titleEn}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-emerald-900/78">
                    {locale === "sw" ? area.noteSw : area.noteEn}
                  </p>

                  <div className="mt-5 rounded-[1.4rem] border border-rose-100 bg-rose-50/85 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-900">
                      {locale === "sw" ? "Tahadhari" : "Warning Note"}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-rose-900/88">
                      {locale === "sw" ? area.doctorWarningSw : area.doctorWarningEn}
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold text-white transition duration-200 group-hover:bg-maroon-800">
                      {copy.button}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
