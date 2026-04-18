"use client";

import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { hivSupportPackages, type HivPackageAudienceKey, type HivPackageTone } from "@/data/hiv-packages";
import { whatsappPrefill } from "@/lib/site";

const toneStyles: Record<
  HivPackageTone,
  {
    shell: string;
    badge: string;
    button: string;
  }
> = {
  green: {
    shell: "border-emerald-200 bg-[linear-gradient(160deg,#f6fff8_0%,#ffffff_58%,#edf9f0_100%)] shadow-[0_18px_34px_rgba(17,72,53,0.08)]",
    badge: "bg-emerald-600 text-white",
    button: "bg-emerald-700 text-white hover:bg-emerald-800",
  },
  yellow: {
    shell: "border-amber-200 bg-[linear-gradient(160deg,#fff8e8_0%,#ffffff_58%,#fff5d8_100%)] shadow-[0_18px_34px_rgba(133,95,20,0.08)]",
    badge: "bg-amber-400 text-amber-950",
    button: "bg-amber-400 text-amber-950 hover:bg-amber-300",
  },
  red: {
    shell: "border-rose-200 bg-[linear-gradient(160deg,#fff3f4_0%,#ffffff_58%,#ffe6e9_100%)] shadow-[0_18px_34px_rgba(127,29,29,0.08)]",
    badge: "bg-rose-600 text-white",
    button: "bg-rose-700 text-white hover:bg-rose-800",
  },
};

const content = {
  sw: {
    eyebrow: "Imetengwa kwa urahisi",
    title: "Vifurushi vya Usaidizi wa VVU/UKIMWI",
    description:
      "Chagua kifurushi kwa kuangalia kama mteja amewahi kutumia ARVs au bado hajaanza. Muonekano huu umewekwa mfupi na wa haraka ili mteja aelewe bila kuscroll sana.",
    tabs: {
      arv: "Walio tumia ARVs",
      nonArv: "Hawajatumia ARVs",
    },
    tabNote: {
      arv: "Vifurushi hivi vina Moringe Juice (Red), Oil Juice, na Detox.",
      nonArv: "Vifurushi hivi havina Detox.",
    },
    priceLabel: "Bei ya kifurushi",
    includesLabel: "Vilivyomo ndani",
    nonArvNote: "Detox haimo kwenye vifurushi hivi.",
    consultLabel: "Pata Ushauri Sasa",
    packageCount: "vifurushi 3 vinapatikana",
    disclaimer: "Huu ni usaidizi wa ustawi wa afya tu na hauchukui nafasi ya ARV au matibabu ya kliniki.",
  },
  en: {
    eyebrow: "Separated for clarity",
    title: "HIV/AIDS Support Packages",
    description:
      "Choose a package based on whether the client has already used ARVs or has not started them yet. The layout is intentionally short and clear so clients do not need to scroll much.",
    tabs: {
      arv: "Already used ARVs",
      nonArv: "Have not used ARVs",
    },
    tabNote: {
      arv: "These packages include Moringe Juice (Red), Oil Juice, and Detox.",
      nonArv: "Detox is not included in these packages.",
    },
    priceLabel: "Package price",
    includesLabel: "Includes",
    nonArvNote: "Detox is not included in these packages",
    consultLabel: "Consult Now",
    packageCount: "3 packages available",
    disclaimer: "This is wellness support and does not replace ARVs or clinical treatment.",
  },
} as const;

export const HivSupportPackagesSection = () => {
  const { locale } = useLocale();
  const section = content[locale];
  const [audience, setAudience] = useState<HivPackageAudienceKey>("arv");
  const packages = hivSupportPackages[audience];

  return (
    <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[linear-gradient(145deg,#f9fbf5_0%,#ffffff_52%,#eef7ef_100%)] px-6 py-8 shadow-[0_22px_56px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-maroon-900 shadow-sm backdrop-blur sm:text-xs">
            {section.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-semibold text-emerald-950 sm:text-4xl">{section.title}</h2>
          <p className="mt-3 text-sm leading-7 text-emerald-900/78 sm:text-base">{section.description}</p>
        </div>

        <span className="inline-flex w-fit items-center rounded-full bg-emerald-900 px-4 py-2 text-xs font-semibold text-white shadow-sm">
          {section.packageCount}
        </span>
      </div>

      <div className="mt-7 rounded-[1.6rem] border border-emerald-900/10 bg-white/85 p-3 shadow-[0_12px_30px_rgba(17,72,53,0.05)]">
        <div className="grid gap-3 sm:grid-cols-2" role="tablist" aria-label={section.title}>
          {(["arv", "nonArv"] as const).map((item) => {
            const active = audience === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setAudience(item)}
                role="tab"
                id={`hiv-package-tab-${item}`}
                aria-selected={active}
                aria-controls={`hiv-package-panel-${item}`}
                className={`rounded-[1.25rem] px-4 py-4 text-left transition duration-200 ${
                  active
                    ? "bg-emerald-900 text-white shadow-[0_16px_30px_rgba(17,72,53,0.18)]"
                    : "border border-emerald-900/10 bg-[#f9fbf7] text-emerald-950 hover:bg-emerald-50"
                }`}
              >
                <p className="text-sm font-semibold">{section.tabs[item]}</p>
                <p className={`mt-1 text-xs leading-6 ${active ? "text-white/78" : "text-emerald-900/72"}`}>
                  {section.tabNote[item]}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`hiv-package-panel-${audience}`}
        role="tabpanel"
        aria-labelledby={`hiv-package-tab-${audience}`}
        className="mt-6 grid gap-5 lg:grid-cols-3"
      >
        {packages.map((item) => {
          const tone = toneStyles[item.tone];
          const message =
            locale === "sw"
              ? `Habari Rose Changa, naomba ushauri kuhusu ${item.labelSw} ya kifurushi cha usaidizi wa VVU/UKIMWI kwa ${section.tabs[audience]}.`
              : `Hello Rose Changa, I would like guidance about the ${item.labelEn} HIV/AIDS Support Package for clients who ${section.tabs[audience].toLowerCase()}.`;

          return (
            <article
              key={`${audience}-${item.key}`}
              className={`rounded-[1.7rem] border p-5 ${tone.shell}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900/70">
                    {section.priceLabel}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-emerald-950">{locale === "sw" ? item.labelSw : item.labelEn}</h3>
                </div>
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] shadow-sm ${tone.badge}`}>
                  {locale === "sw" ? item.labelSw : item.labelEn}
                </span>
              </div>

              <p className="mt-5 text-3xl font-semibold tracking-tight text-emerald-950">
                {locale === "sw" ? item.priceSw : item.priceEn}
              </p>

              <div className="mt-5 rounded-[1.2rem] border border-emerald-900/10 bg-white/88 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900/72">
                  {section.includesLabel}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950">
                  {(locale === "sw" ? item.productsSw : item.productsEn)?.map((product) => (
                    <li key={product} className="rounded-[1rem] bg-[#f5f8f1] px-3 py-2 ring-1 ring-emerald-900/8">
                      {product}
                    </li>
                  ))}
                </ul>
                {audience === "nonArv" ? (
                  <p className="mt-3 rounded-[1rem] border border-amber-200 bg-amber-50/90 px-3 py-2 text-xs leading-6 text-emerald-900/82">
                    {section.nonArvNote}
                  </p>
                ) : null}
              </div>

              <a
                href={whatsappPrefill(message)}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition duration-200 ${tone.button}`}
              >
                {section.consultLabel}
              </a>
            </article>
          );
        })}
      </div>

      <p className="mt-6 rounded-[1.25rem] border border-emerald-900/10 bg-white/78 px-4 py-3 text-sm leading-6 text-emerald-900/82">
        {section.disclaimer}
      </p>
    </section>
  );
};
