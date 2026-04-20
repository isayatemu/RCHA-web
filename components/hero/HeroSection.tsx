"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Droplets,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserCheck,
} from "lucide-react";
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
  tag: Record<Locale, string>;
  Icon: LucideIcon;
  imageClassName?: string;
};

const badgeIcons = [Award, UserCheck, ShieldCheck, MapPin] as const;

const heroContent = {
  sw: {
    eyebrow: "Ushauri binafsi wa afya asilia",
    headline: "Ondoa sumu mwilini, rejesha afya yako kwa njia asilia",
    subtext:
      "Tunasaidia kusafisha mwili, kupunguza uvimbe, na kuimarisha afya kupitia ushauri binafsi unaokufaa kabla ya kuchagua bidhaa au kifurushi kinachokufaa.",
    primaryCTA: "Anza Ushauri wa WhatsApp",
    secondaryCTA: "Tazama Bidhaa Zetu",
    helperText: "Pata ushauri wa faragha kupitia WhatsApp kabla ya kuanza matumizi yoyote.",
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
      "We help cleanse your body, reduce inflammation, and improve overall wellness through personalized consultation before any product or package is recommended.",
    primaryCTA: "Start WhatsApp Consultation",
    secondaryCTA: "View Products",
    helperText: "Get private WhatsApp guidance before starting any wellness routine.",
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
      sw: "Kusaidia kusafisha mwili, kupunguza mzigo mwilini, na kurudisha usawa wa kila siku.",
      en: "Supports cleansing, lighter body balance, and steady daily wellness.",
    },
    alt: {
      sw: "Picha ya bidhaa ya Detox Herbal Powder",
      en: "Detox Herbal Powder product image",
    },
    tag: {
      sw: "Detox kuu",
      en: "Main detox",
    },
    Icon: Leaf,
    imageClassName: "scale-[1.14]",
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
    tag: {
      sw: "Kinga na nguvu",
      en: "Immunity support",
    },
    Icon: Sparkles,
    imageClassName: "scale-[1.08]",
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
    tag: {
      sw: "Uvimbe na usawa",
      en: "Balance support",
    },
    Icon: Droplets,
    imageClassName: "scale-[1.06]",
  },
] satisfies ShowcaseProduct[];

export const HeroSection = () => {
  const { locale } = useLocale();
  const content = heroContent[locale];
  const whatsappHref = whatsappPrefill(content.whatsappMessage);
  const [detoxProduct, ...supportProducts] = showcaseProducts;
  const DetoxIcon = detoxProduct.Icon;

  return (
    <section className="mx-auto max-w-6xl py-10 md:py-16">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-900/10 bg-gradient-to-br from-green-50 via-[#fff8ef] to-emerald-100 px-6 py-8 shadow-[0_26px_70px_rgba(17,72,53,0.1)] sm:px-8 lg:px-10 lg:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, transparent 34%), linear-gradient(155deg, transparent 46%, rgba(216,239,220,0.7) 100%)",
          }}
        />

        <div className="relative grid min-w-0 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div key={`hero-copy-${locale}`} className="fade-up min-w-0" aria-live="polite">
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-emerald-900/10 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-900 shadow-sm backdrop-blur sm:tracking-[0.18em]">
              <Leaf className="h-4 w-4 text-maroon-900" aria-hidden="true" />
              <span className="min-w-0 break-words">{content.eyebrow}</span>
            </div>

            <h1 className="mt-5 max-w-2xl text-balance text-[2.45rem] font-bold leading-[1.05] text-emerald-950 sm:text-5xl xl:text-[3.6rem]">
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(92,29,47,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-maroon-800 hover:shadow-[0_22px_40px_rgba(92,29,47,0.28)] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {content.primaryCTA}
              </a>
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-900/25 hover:bg-white sm:w-auto"
              >
                <ShoppingBag className="h-4 w-4 text-maroon-900" aria-hidden="true" />
                {content.secondaryCTA}
              </Link>
            </div>

            <p className="mt-4 text-sm leading-6 text-emerald-900/72">{content.helperText}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {content.badges.map((badge, index) => {
                const BadgeIcon = badgeIcons[index] ?? ShieldCheck;

                return (
                <div
                  key={badge}
                  className="group flex items-center gap-3 rounded-2xl border border-emerald-900/8 bg-white/90 px-4 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 ring-1 ring-emerald-900/10 transition duration-200 group-hover:bg-emerald-100 group-hover:text-maroon-900">
                    <BadgeIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-emerald-950">{badge}</span>
                </div>
                );
              })}
            </div>
          </div>

          <div
            key={`hero-showcase-${locale}`}
            className="fade-up relative min-w-0"
            style={{ animationDelay: "90ms" }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(239,249,241,0.82)_52%,rgba(255,249,239,0.9))] p-5 shadow-[0_22px_48px_rgba(11,47,34,0.1)] sm:p-6">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.24]"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(17,72,53,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(17,72,53,0.16) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-emerald-100/70 to-transparent" aria-hidden="true" />

              <div className="relative z-30 flex flex-wrap items-start justify-between gap-3">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-900/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-900 shadow-sm sm:text-xs sm:tracking-[0.18em]">
                  <ShoppingBag className="h-4 w-4 text-maroon-900" aria-hidden="true" />
                  <span className="min-w-0 break-words">{content.showcaseEyebrow}</span>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-maroon-900 px-3 py-2 text-[11px] font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-maroon-800 sm:text-xs"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>

              <div className="relative z-20 mt-5 grid min-w-0 gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <Link
                  href={detoxProduct.href}
                  className="group relative min-w-0 overflow-hidden rounded-[1.65rem] border border-emerald-900/10 bg-white/88 p-4 shadow-[0_16px_32px_rgba(11,47,34,0.1)] transition duration-300 hover:-translate-y-1 hover:border-emerald-900/18 hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex min-w-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-900 ring-1 ring-emerald-900/10">
                      <DetoxIcon className="h-4 w-4 text-maroon-900" aria-hidden="true" />
                      <span className="min-w-0 break-words">{detoxProduct.tag[locale]}</span>
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-maroon-900 text-white transition duration-200 group-hover:bg-maroon-800">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="relative mx-auto mt-3 h-[220px] w-full transition duration-300 group-hover:-translate-y-1 sm:h-[270px] lg:h-[300px]">
                    <Image
                      src={mediaUrl(detoxProduct.image)}
                      alt={detoxProduct.alt[locale]}
                      fill
                      sizes="(max-width: 1024px) 70vw, 24vw"
                      className={`object-contain drop-shadow-[0_24px_28px_rgba(11,47,34,0.2)] ${detoxProduct.imageClassName ?? ""}`}
                      unoptimized
                    />
                  </div>

                  <div className="mt-1">
                    <p className="text-base font-semibold text-emerald-950">{detoxProduct.label[locale]}</p>
                    <p className="mt-1 text-sm leading-6 text-emerald-900/76">{detoxProduct.summary[locale]}</p>
                  </div>
                </Link>

                <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {supportProducts.map((product) => {
                    const ProductIcon = product.Icon;

                    return (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="group grid min-h-[150px] min-w-0 grid-cols-[0.8fr_1fr] items-center gap-3 overflow-hidden rounded-[1.45rem] border border-emerald-900/10 bg-white/82 p-3 shadow-[0_12px_26px_rgba(11,47,34,0.08)] transition duration-300 hover:-translate-y-1 hover:border-emerald-900/18 hover:bg-white"
                      >
                        <div className="relative h-32 transition duration-300 group-hover:-translate-y-1 sm:h-36 lg:h-40">
                          <Image
                            src={mediaUrl(product.image)}
                            alt={product.alt[locale]}
                            fill
                            sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 14vw"
                            className={`object-contain drop-shadow-[0_18px_20px_rgba(11,47,34,0.18)] ${product.imageClassName ?? ""}`}
                            unoptimized
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-900 ring-1 ring-emerald-900/8">
                            <ProductIcon className="h-3.5 w-3.5 text-maroon-900" aria-hidden="true" />
                            <span className="min-w-0 break-words">{product.tag[locale]}</span>
                          </span>
                          <p className="mt-3 text-sm font-semibold leading-5 text-emerald-950">{product.label[locale]}</p>
                          <p className="mt-1 text-xs leading-5 text-emerald-900/74">{product.summary[locale]}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="relative z-20 mt-4 rounded-[1.3rem] border border-emerald-900/10 bg-white/82 px-4 py-3 shadow-sm backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-maroon-900 ring-1 ring-emerald-900/10">
                    <Sparkles className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-emerald-950">{content.showcaseEyebrow}</p>
                    <p className="mt-1 text-xs leading-5 text-emerald-900/75">{content.showcaseNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
