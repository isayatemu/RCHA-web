"use client";

import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/lib/i18n";
import { whatsappPrefill } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/social-icons";

type ProcessStep = {
  title: string;
  desc: string;
};

type ProcessCopy = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
  closing: string;
  cta: string;
  whatsappMessage: string;
};

type ProcessIconProps = {
  className?: string;
};

const processContent = {
  sw: {
    eyebrow: "Safari ya afya ya kuaminika",
    title: "Jinsi tunavyokusaidia kurejesha afya yako",
    steps: [
      {
        title: "Ushauri binafsi",
        desc: "Tunaanza kwa kuelewa tatizo lako na hali ya mwili wako",
      },
      {
        title: "Mpango wa tiba asilia",
        desc: "Tunakuandalia dawa na maelekezo yanayolingana na mwili wako",
      },
      {
        title: "Ufuatiliaji wa karibu",
        desc: "Tunafuatilia maendeleo yako hadi upate matokeo bora",
      },
    ],
    closing: "Haufanyi safari hii peke yako - tuko pamoja hadi upate matokeo",
    cta: "Anza Ushauri Sasa",
    whatsappMessage: "Habari Rose Changa, naomba kuanza ushauri binafsi wa afya.",
  },
  en: {
    eyebrow: "Trusted wellness journey",
    title: "How we help you restore your health",
    steps: [
      {
        title: "Personal Consultation",
        desc: "We understand your condition and body needs first",
      },
      {
        title: "Natural Treatment Plan",
        desc: "We provide personalized herbal solutions for your body",
      },
      {
        title: "Close Follow-up",
        desc: "We monitor your progress until you see real results",
      },
    ],
    closing: "You are not alone - we walk with you until you get results",
    cta: "Start Consultation",
    whatsappMessage: "Hello Rose Changa, I would like to begin a personal wellness consultation.",
  },
} satisfies Record<Locale, ProcessCopy>;

const ConsultationIcon = ({ className = "h-6 w-6" }: ProcessIconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 4.5h8a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 16 16.5H11l-4.5 3v-3H8A3.5 3.5 0 0 1 4.5 13V8A3.5 3.5 0 0 1 8 4.5Z" />
    <path d="M9 9.5h6M9 12.5h4" strokeLinecap="round" />
  </svg>
);

const HerbalPlanIcon = ({ className = "h-6 w-6" }: ProcessIconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 20c4.5-1.1 7-4.5 7-9.7V5.5c-3.6 0-5.9 1.1-7 3.4-1.1-2.3-3.4-3.4-7-3.4v4.8C5 15.5 7.5 18.9 12 20Z" />
    <path d="M12 9v8" strokeLinecap="round" />
  </svg>
);

const ProgressIcon = ({ className = "h-6 w-6" }: ProcessIconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 18.5h14" strokeLinecap="round" />
    <path d="M7.5 15.5 11 12l2.8 2.8L18 10.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="11" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="13.8" cy="14.8" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="18" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const stepMeta = [
  {
    icon: ConsultationIcon,
    accentClassName: "bg-emerald-100 text-emerald-900",
  },
  {
    icon: HerbalPlanIcon,
    accentClassName: "bg-[#fff1e8] text-maroon-900",
  },
  {
    icon: ProgressIcon,
    accentClassName: "bg-emerald-50 text-emerald-950",
  },
] as const;

export const ProcessSection = () => {
  const { locale } = useLocale();
  const content = processContent[locale];
  const whatsappHref = whatsappPrefill(content.whatsappMessage);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f6fbf6] via-[#fffaf3] to-[#e8f2e8] px-6 py-8 shadow-[0_22px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.94),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(211,232,216,0.7),transparent_30%)]" aria-hidden="true" />
      <div className="relative">
        <div key={`process-${locale}`} className="fade-up" aria-live="polite">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
              {content.eyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl">
              {content.title}
            </h2>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-20 right-20 top-12 hidden h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent lg:block" aria-hidden="true" />
            <div className="grid gap-5 md:grid-cols-3">
              {content.steps.map((step, index) => {
                const meta = stepMeta[index];
                const Icon = meta.icon;

                return (
                  <article
                    key={`${locale}-${step.title}`}
                    className="group relative overflow-hidden rounded-xl border border-emerald-900/10 bg-white/92 p-6 shadow-[0_16px_36px_rgba(11,47,34,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <span className="absolute left-4 top-3 text-6xl font-bold leading-none text-emerald-950/6">
                      0{index + 1}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${meta.accentClassName}`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-900">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-8 text-xl font-semibold text-emerald-950">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-emerald-900/78">
                        {step.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-lg font-medium leading-8 text-emerald-950 sm:text-xl">
              {content.closing}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(17,72,53,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-[0_22px_40px_rgba(17,72,53,0.3)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
