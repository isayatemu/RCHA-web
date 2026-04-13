"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/lib/i18n";
import { mediaUrl, whatsappPrefill } from "@/lib/site";

type ShippingCard = {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
  alt: Record<Locale, string>;
};

type ShippingGalleryItem = {
  image: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  alt: Record<Locale, string>;
};

type ShippingCopy = {
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  cardsTitle: string;
  guaranteeBadge: string;
  guaranteeTitle: string;
  guaranteePoints: string[];
  proofTitle: string;
  proofDescription: string;
  finalTitle: string;
  finalDescription: string;
  whatsappCta: string;
  modalLabel: string;
  closeLabel: string;
};

type IconProps = {
  className?: string;
};

const shippingContent = {
  sw: {
    heroTitle: "Usafirishaji Salama Ndani ya Tanzania",
    heroDescription: "Tunajali Afya Yako, Tunakufikishia Bidhaa na Huduma Popote Ulipo",
    primaryCta: "Agiza Sasa",
    secondaryCta: "Jinsi Tunavyosafirisha",
    cardsTitle: "Safari ya mzigo wako kutoka Rose Changa hadi kwako",
    guaranteeBadge: "Huduma Unayoamini",
    guaranteeTitle: "Uhakika wa Huduma",
    guaranteePoints: [
      "Tunajali afya yako",
      "Bidhaa halisi na bora",
      "Ushauri kabla na baada ya matumizi",
      "Tunafuatilia hadi mzigo ufike",
    ],
    proofTitle: "Mizigo Umefika Salama!",
    proofDescription: "Baadhi ya mizigo tunayowatumia wateja wetu kila siku",
    finalTitle: "Afya Yako Ni Mission Yetu!",
    finalDescription: "Agiza Leo - Tunakufikishia Popote Ulipo",
    whatsappCta: "Chat WhatsApp",
    modalLabel: "Maelezo ya usafirishaji",
    closeLabel: "Funga",
  },
  en: {
    heroTitle: "Safe Delivery Across Tanzania",
    heroDescription: "We care about your health and deliver products and support wherever you are",
    primaryCta: "Order Now",
    secondaryCta: "How We Ship",
    cardsTitle: "See how your package moves safely from Rose Changa to your door",
    guaranteeBadge: "Service You Can Trust",
    guaranteeTitle: "Service Guarantee",
    guaranteePoints: [
      "We care about your health",
      "Authentic and high-quality products",
      "Guidance before and after use",
      "We follow through until the package arrives",
    ],
    proofTitle: "Delivered Safely!",
    proofDescription: "Some of the parcels we send to our clients every day",
    finalTitle: "Your Health Is Our Mission!",
    finalDescription: "Order today - we will deliver wherever you are",
    whatsappCta: "Chat WhatsApp",
    modalLabel: "Shipping details",
    closeLabel: "Close",
  },
} satisfies Record<Locale, ShippingCopy>;

const shippingCards: ShippingCard[] = [
  {
    id: "nationwide",
    image: "shipping/postershipping.png",
    title: {
      sw: "Usafirishaji Nchi Nzima",
      en: "Nationwide Delivery",
    },
    description: {
      sw: "Tunafikisha mikoa yote kwa usalama",
      en: "We deliver safely across all regions",
    },
    alt: {
      sw: "Basi la usafirishaji na mazingira ya Tanzania likiwa limebeba huduma za Rose Changa",
      en: "Transport bus in a Tanzanian landscape carrying Rose Changa shipping story",
    },
  },
  {
    id: "packaging",
    image: "shipping/shipping1.png",
    title: {
      sw: "Ufungashaji Imara",
      en: "Secure Packaging",
    },
    description: {
      sw: "Bidhaa zako zinalindwa vizuri hadi kufika",
      en: "Your products are protected all the way",
    },
    alt: {
      sw: "Kifurushi kilichofungwa vizuri na label ya mteja",
      en: "Securely packed parcel with a customer label",
    },
  },
  {
    id: "trusted",
    image: "shipping/shipping-two.png",
    title: {
      sw: "Huduma ya Kuaminika",
      en: "Reliable Service",
    },
    description: {
      sw: "Tunafikisha hadi mikononi mwa mteja",
      en: "We deliver directly into the client's hands",
    },
    alt: {
      sw: "Mzigo wa DHL na bidhaa za Rose Changa kwa delivery ya kimataifa",
      en: "DHL parcels and Rose Changa products prepared for international delivery",
    },
  },
];

const deliveryGallery: ShippingGalleryItem[] = [
  {
    image: "shipping/postershipping.png",
    title: {
      sw: "Kupakia na kuondoka",
      en: "Loaded and on the road",
    },
    description: {
      sw: "Tunapanga usafiri salama kutoka Arusha kwenda kwa mteja",
      en: "We organize safe transport from Arusha to the client",
    },
    alt: {
      sw: "Poster ya usafirishaji wa Rose Changa ikiwa na basi na mzigo",
      en: "Rose Changa shipping poster showing transport and package delivery",
    },
  },
  {
    image: "shipping/shipping1.png",
    title: {
      sw: "Ufungaji wa kitaalamu",
      en: "Professional packaging",
    },
    description: {
      sw: "Kila mzigo hufungwa na label wazi kabla ya kutumwa",
      en: "Every parcel is sealed and labeled clearly before dispatch",
    },
    alt: {
      sw: "Kifurushi cha mteja kilichofungwa na label ya Rose Changa",
      en: "Client parcel packaged with a Rose Changa label",
    },
  },
  {
    image: "shipping/shipping-two.png",
    title: {
      sw: "Delivery ya karibu na mbali",
      en: "Local and international delivery",
    },
    description: {
      sw: "Tunatuma mizigo ndani ya Tanzania na kwa diaspora pia",
      en: "We ship inside Tanzania and to diaspora clients as well",
    },
    alt: {
      sw: "Mizigo ya DHL na bidhaa za Rose Changa tayari kwa usafirishaji",
      en: "DHL parcels and Rose Changa products ready for shipping",
    },
  },
];

const DeliveryIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3.5 7.5h10v8.5h-10z" />
    <path d="M13.5 10h3l3 2.8v3.2h-6" />
    <circle cx="7.5" cy="18" r="1.75" />
    <circle cx="17.5" cy="18" r="1.75" />
  </svg>
);

const BoxIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m12 3.5 7 4v9l-7 4-7-4v-9l7-4Z" />
    <path d="M12 20.5v-8M19 7.5l-7 4-7-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3.5 5.5 6v5.5c0 4.2 2.6 7.4 6.5 9 3.9-1.6 6.5-4.8 6.5-9V6L12 3.5Z" />
    <path d="m9.5 11.8 1.8 1.8 3.5-3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 12.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 6 18 18M18 6 6 18" strokeLinecap="round" />
  </svg>
);

const cardIcons = [DeliveryIcon, BoxIcon, ShieldIcon] as const;

export const ShippingGuaranteeSection = () => {
  const { locale } = useLocale();
  const content = shippingContent[locale];
  const [selectedCard, setSelectedCard] = useState<ShippingCard | null>(null);

  useEffect(() => {
    if (!selectedCard) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedCard]);

  const orderHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba kuagiza na kupata maelezo ya usafirishaji."
      : "Hello Rose Changa, I would like to place an order and get shipping details.",
  );

  const supportHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba maelezo zaidi kuhusu usafirishaji na uhakika wa huduma."
      : "Hello Rose Changa, I would like to learn more about your shipping and service guarantee.",
  );

  return (
    <>
      <section className="space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(11,47,34,0.14)]">
          <div className="absolute inset-0">
            <Image
              src={mediaUrl("shipping/postershipping.png")}
              alt={shippingCards[0].alt[locale]}
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/92 via-emerald-950/68 to-black/35" />
          </div>

          <div className="relative px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur sm:text-xs">
                Rose Changa Herbalist Africa
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-[3.2rem]">
                {content.heroTitle}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/86 sm:text-lg">
                {content.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={orderHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3c55d] px-6 py-3 text-sm font-semibold text-emerald-950 shadow-[0_16px_32px_rgba(243,197,93,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f6cf78]"
                >
                  {content.primaryCta}
                </a>
                <a
                  href="#shipping-journey"
                  className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/16"
                >
                  {content.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="shipping-journey"
          className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f7fbf6] via-[#fffaf2] to-[#eef6ef] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl">
              {content.cardsTitle}
            </h3>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {shippingCards.map((card, index) => {
              const Icon = cardIcons[index];

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelectedCard(card)}
                  aria-haspopup="dialog"
                  className="group relative overflow-hidden rounded-2xl text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative min-h-[320px]">
                    <Image
                      src={mediaUrl(card.image)}
                      alt={card.alt[locale]}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/88 via-emerald-950/40 to-black/10" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/16 text-white shadow-[0_0_0_10px_rgba(255,255,255,0.08)] backdrop-blur">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-semibold text-white">{card.title[locale]}</h4>
                      <p className="mt-2 text-sm leading-7 text-white/85">{card.description[locale]}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white/92 p-6 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-[#f7f2e8]">
            <Image
              src={mediaUrl("shipping/shipping1.png")}
              alt={locale === "sw" ? "Kifurushi chenye label ya Rose Changa" : "Rose Changa parcel with destination label"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">
              {content.guaranteeBadge}
            </div>
            <h3 className="mt-5 text-3xl font-semibold text-emerald-950 sm:text-4xl">
              {content.guaranteeTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {content.guaranteePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base leading-7 text-emerald-900/84">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#fbfcf7] via-white to-[#eef6ef] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold text-emerald-950 sm:text-4xl">{content.proofTitle}</h3>
            <p className="mt-3 text-base leading-7 text-emerald-900/78 sm:text-lg">
              {content.proofDescription}
            </p>
          </div>

          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            {deliveryGallery.map((item) => (
              <article
                key={item.image}
                className="min-w-[82%] snap-start overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-md sm:min-w-[48%] lg:min-w-0"
              >
                <div className="relative h-60">
                  <Image
                    src={mediaUrl(item.image)}
                    alt={item.alt[locale]}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-emerald-950">{item.title[locale]}</h4>
                  <p className="mt-2 text-sm leading-7 text-emerald-900/76">{item.description[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] bg-emerald-800 px-6 py-10 text-white shadow-[0_24px_60px_rgba(17,72,53,0.16)] sm:px-8 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold sm:text-4xl">{content.finalTitle}</h3>
              <p className="mt-3 text-base leading-7 text-white/84 sm:text-lg">{content.finalDescription}</p>
            </div>

            <a
              href={supportHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-emerald-900 shadow-[0_16px_32px_rgba(255,255,255,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7f3e9]"
            >
              {content.whatsappCta}
            </a>
          </div>
        </section>
      </section>

      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={content.modalLabel}
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-[0_32px_80px_rgba(11,47,34,0.26)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-950/82 text-white transition hover:bg-emerald-950"
              aria-label={content.closeLabel}
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] bg-[#f7f2e8]">
                <Image
                  src={mediaUrl(selectedCard.image)}
                  alt={selectedCard.alt[locale]}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">
                  {content.modalLabel}
                </div>
                <h4 className="mt-5 text-3xl font-semibold text-emerald-950">{selectedCard.title[locale]}</h4>
                <p className="mt-4 text-base leading-8 text-emerald-900/78">
                  {selectedCard.description[locale]}
                </p>
                <a
                  href={supportHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  {content.whatsappCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
