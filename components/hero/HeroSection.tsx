"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/lib/i18n";
import { mediaUrl, whatsappPrefill } from "@/lib/site";

type HeroCopy = {
  eyebrow: string;
  headline: string;
  subtext: string;
  primaryCTA: string;
  secondaryCTA: string;
  helperText: string;
  badges: string[];
  showcaseEyebrow: string;
  showcaseNote: string;
  whatsappMessage: string;
};

type ShowcaseProduct = {
  href: string;
  image: string;
  label: Record<Locale, string>;
  summary: Record<Locale, string>;
  alt: Record<Locale, string>;
  className: string;
  imageClassName?: string;
};

const heroContent = {
  sw: {
    eyebrow: "Ushauri binafsi wa afya asilia",
    headline: "Ondoa sumu mwilini, rejesha afya yako kwa njia asilia",
    subtext:
      "Tunasaidia kusafisha mwili, kupunguza uvimbe, na kuimarisha afya kupitia ushauri binafsi unaokufaa kabla ya kuchagua mpango wa dozi.",
    primaryCTA: "Anza Ushauri wa WhatsApp",
    secondaryCTA: "Tazama Bidhaa Zetu",
    helperText: "Pata ushauri wa faragha kupitia WhatsApp kabla ya kuanza dozi yoyote.",
    badges: [
      "Miaka 10+ ya uzoefu",
      "Ushauri binafsi",
      "Huduma ya ufuatiliaji",
      "Arusha na diaspora",
    ],
    showcaseEyebrow: "Bidhaa kuu zinazoshauriwa",
    showcaseNote: "Formulas 3 kuu kwa detox, usawa na nguvu ya kila siku.",
    whatsappMessage: "Habari Rose Changa, naomba kuanza ushauri wa afya kupitia WhatsApp.",
  },
  en: {
    eyebrow: "Personalized natural wellness guidance",
    headline: "Detox your body and restore your health naturally",
    subtext:
      "We help cleanse your body, reduce inflammation, and improve overall wellness through personalized consultation before any dose plan is recommended.",
    primaryCTA: "Start WhatsApp Consultation",
    secondaryCTA: "View Products",
    helperText: "Get private WhatsApp guidance before starting any dose plan.",
    badges: [
      "10+ years experience",
      "Personalized consultation",
      "Follow-up care",
      "Arusha and diaspora",
    ],
    showcaseEyebrow: "Recommended signature products",
    showcaseNote: "Three core formulas for detox, balance, and daily vitality.",
    whatsappMessage: "Hello Rose Changa, I would like to start a wellness consultation on WhatsApp.",
  },
} satisfies Record<Locale, HeroCopy>;

const showcaseProducts = [
  {
    href: "/products/detox",
    image: "products/detox/detox.png?v=20260413-2",
    label: {
      sw: "Detox Herbal Powder",
      en: "Detox Herbal Powder",
    },
    summary: {
      sw: "Kwa kusafisha mwili, kutoa sumu mwilini, na usawa wa mwili",
      en: "For cleansing and body balance",
    },
    alt: {
      sw: "Picha ya bidhaa ya Detox Herbal Powder",
      en: "Detox Herbal Powder product image",
    },
    className: "left-[2%] top-[24%] z-10 w-[42%] -rotate-[10deg] sm:w-[34%]",
    imageClassName: "scale-[1.02]",
  },
  {
    href: "/products/moringe-juice",
    image: "products/moringemuluextract/mulumoringe.png?v=20260413-2",
    label: {
      sw: "Mulu Extract (Moringe Juice)",
      en: "Mulu Extract (Moringe Juice)",
    },
    summary: {
      sw: "Kuongeza kinga mwilini na kuupa mwili nguvu",
      en: "Detox, immunity, and daily vitality",
    },
    alt: {
      sw: "Picha ya Mulu Extract au Moringe Juice",
      en: "Mulu Extract or Moringe Juice product image",
    },
    className: "left-1/2 top-[8%] z-20 w-[48%] -translate-x-1/2 -rotate-[2deg] sm:w-[40%]",
    imageClassName: "scale-[1.05]",
  },
  {
    href: "/products/oil-juice",
    image: "products/oil-juice/oiljuice.png?v=20260413-2",
    label: {
      sw: "Oil Juice",
      en: "Oil Juice",
    },
    summary: {
      sw: "Kusaidia uvimbe, vidonda, kinga, na uthabiti wa mwili",
      en: "Inflammation support and resilience",
    },
    alt: {
      sw: "Picha ya bidhaa ya Oil Juice",
      en: "Oil Juice product image",
    },
    className: "right-[3%] top-[24%] z-10 w-[42%] rotate-[9deg] sm:w-[34%]",
    imageClassName: "scale-[1.02]",
  },
] satisfies ShowcaseProduct[];

export const HeroSection = () => {
  const { locale } = useLocale();
  const content = heroContent[locale];
  const whatsappHref = whatsappPrefill(content.whatsappMessage);

  return (
    <section className="mx-auto max-w-6xl py-10 md:py-16">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-900/10 bg-gradient-to-br from-green-50 via-[#fff8ef] to-emerald-100 px-6 py-8 shadow-[0_26px_70px_rgba(17,72,53,0.1)] sm:px-8 lg:px-10 lg:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.95), transparent 32%), radial-gradient(circle at bottom left, rgba(230,244,234,0.9), transparent 35%)",
          }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div key={`hero-copy-${locale}`} className="fade-up" aria-live="polite">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-900/10 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900 shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-maroon-900" />
              {content.eyebrow}
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.05] text-emerald-950 sm:text-5xl xl:text-[3.6rem]">
              {content.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-emerald-900/80 sm:text-lg">
              {content.subtext}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(92,29,47,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-maroon-800 hover:shadow-[0_22px_40px_rgba(92,29,47,0.28)]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                {content.primaryCTA}
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-900/25 hover:bg-white"
              >
                {content.secondaryCTA}
              </Link>
            </div>

            <p className="mt-4 text-sm leading-6 text-emerald-900/72">{content.helperText}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {content.badges.map((badge) => (
                <div
                  key={badge}
                  className="group flex items-center gap-3 rounded-2xl border border-emerald-900/8 bg-white/90 px-4 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-600 transition duration-200 group-hover:scale-125" />
                  </div>
                  <span className="text-sm font-medium text-emerald-950">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            key={`hero-showcase-${locale}`}
            className="fade-up relative"
            style={{ animationDelay: "90ms" }}
          >
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(245,250,245,0.72))] p-5 shadow-[0_22px_48px_rgba(11,47,34,0.1)] sm:min-h-[520px] sm:p-6">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent" aria-hidden="true" />
              <div className="absolute left-1/2 top-[48%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/55 blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-[#f6dfd1]/70 blur-2xl" aria-hidden="true" />

              <div className="relative z-30 flex items-start justify-between gap-4">
                <div className="rounded-full border border-emerald-900/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900 shadow-sm sm:text-xs">
                  {content.showcaseEyebrow}
                </div>
                <div className="rounded-full bg-maroon-900 px-3 py-2 text-[11px] font-semibold text-white shadow-sm sm:text-xs">
                  WhatsApp
                </div>
              </div>

              {showcaseProducts.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className={`group absolute ${product.className}`}
                >
                  <div className="relative aspect-[4/5] transition duration-300 group-hover:-translate-y-2 group-hover:scale-[1.03]">
                    <Image
                      src={mediaUrl(product.image)}
                      alt={product.alt[locale]}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 32vw, 20vw"
                      className={`object-contain drop-shadow-[0_28px_34px_rgba(11,47,34,0.22)] ${product.imageClassName ?? ""}`}
                      unoptimized
                    />
                  </div>

                  <div className="absolute inset-x-2 bottom-2 rounded-[1.4rem] border border-white/70 bg-white/88 p-3 shadow-[0_14px_28px_rgba(11,47,34,0.1)] backdrop-blur">
                    <p className="text-sm font-semibold text-emerald-950">{product.label[locale]}</p>
                    <p className="mt-1 text-xs leading-5 text-emerald-900/75">{product.summary[locale]}</p>
                  </div>
                </Link>
              ))}

              <div className="absolute inset-x-5 bottom-5 z-30 rounded-[1.5rem] border border-emerald-900/10 bg-white/86 px-4 py-3 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-emerald-950">{content.showcaseEyebrow}</p>
                <p className="mt-1 text-xs leading-5 text-emerald-900/75">{content.showcaseNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
