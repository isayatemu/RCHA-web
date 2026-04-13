"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/lib/i18n";
import { mediaUrl, whatsappPrefill } from "@/lib/site";

type TabKey = "process" | "story" | "reviews" | "delivery";

type IconProps = {
  className?: string;
};

type OverviewCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tabs: Record<TabKey, string>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  process: {
    title: string;
    description: string;
    cta: string;
    steps: Array<{
      title: string;
      desc: string;
    }>;
  };
  story: {
    title: string;
    description: string;
    quote: string;
    cta: string;
    entryTitle: string;
    entrySubtitle: string;
    entryButton: string;
  };
  reviews: {
    title: string;
    description: string;
    cta: string;
    regionsLabel: string;
  };
  delivery: {
    title: string;
    description: string;
    cta: string;
    points: string[];
  };
};

const overviewContent = {
  sw: {
    eyebrow: "Kwa Mtazamo",
    title: "Kila kitu muhimu kwenye sehemu moja",
    subtitle: "Gundua safari yetu, ushuhuda, historia na delivery kwa muonekano mmoja ulio wazi na wa kuaminika.",
    tabs: {
      process: "Safari Yetu",
      story: "Historia",
      reviews: "Ushuhuda",
      delivery: "Delivery",
    },
    stats: [
      { value: "10+", label: "Miaka ya uzoefu" },
      { value: "TZ + Diaspora", label: "Huduma ndani na nje" },
      { value: "1:1", label: "Ushauri binafsi" },
      { value: "Follow-up", label: "Ufuatiliaji wa karibu" },
    ],
    process: {
      title: "Safari rahisi ya hatua 3",
      description: "Mteja anaona mchakato mzima haraka: tunasikiliza, tunapanga tiba, kisha tunafuatilia kwa karibu.",
      cta: "Anza Ushauri",
      steps: [
        {
          title: "Ushauri binafsi",
          desc: "Tunaanza kwa kuelewa hali yako kwanza.",
        },
        {
          title: "Mpango wa tiba",
          desc: "Tunapanga matumizi yanayolingana na mwili wako.",
        },
        {
          title: "Ufuatiliaji",
          desc: "Tunabaki karibu hadi uone maendeleo.",
        },
      ],
    },
    story: {
      title: "Historia ya huduma yenye uaminifu",
      description: "Kutoka Arusha hadi diaspora, tumekuwa tukijenga huduma ya afya asilia inayochanganya heshima, uwazi na matokeo yanayoeleweka.",
      quote: "Afya ya mtu ni muhimu kuliko chochote - tunahudumia kwa moyo wote",
      cta: "Soma Historia Yetu",
      entryTitle: "Hadithi Halisi za Wateja",
      entrySubtitle: "Angalia jinsi wateja wetu wanavyoboresha safari yao ya ustawi",
      entryButton: "Tazama Stories",
    },
    reviews: {
      title: "Uaminifu kutoka maeneo mbalimbali",
      description: "Ushuhuda wetu unaonyesha kwamba huduma hii inaaminiwa na wateja wa Tanzania, Afrika Mashariki, Ulaya, USA na diaspora.",
      cta: "Tazama Ushuhuda Wote",
      regionsLabel: "Tunahudumia maeneo haya",
    },
    delivery: {
      title: "Delivery salama bila kusumbua mteja",
      description: "Tunafunga vizuri, tunafuatilia safari ya mzigo, na tunawasiliana hadi bidhaa ifike salama.",
      cta: "Uliza Delivery",
      points: [
        "Usafirishaji nchi nzima",
        "Ufungashaji imara",
        "Mawasiliano hadi mzigo ufike",
      ],
    },
  },
  en: {
    eyebrow: "At a Glance",
    title: "Everything important in one place",
    subtitle: "Explore our journey, stories, reviews, and delivery in one clear and trustworthy view.",
    tabs: {
      process: "Our Journey",
      story: "Story",
      reviews: "Reviews",
      delivery: "Delivery",
    },
    stats: [
      { value: "10+", label: "Years experience" },
      { value: "TZ + Diaspora", label: "Local and abroad" },
      { value: "1:1", label: "Personal guidance" },
      { value: "Follow-up", label: "Close support" },
    ],
    process: {
      title: "A simple 3-step client journey",
      description: "New visitors can quickly see how we listen first, design a plan, and stay close through follow-up.",
      cta: "Start Consultation",
      steps: [
        {
          title: "Personal consultation",
          desc: "We begin by understanding your situation first.",
        },
        {
          title: "Natural plan",
          desc: "We shape guidance that matches your body.",
        },
        {
          title: "Follow-up",
          desc: "We stay involved until you see progress.",
        },
      ],
    },
    story: {
      title: "A story built on trust and care",
      description: "From Arusha to the diaspora, we have built a natural wellness service shaped by respect, clarity, and practical results.",
      quote: "A person's health is everything - we serve with care and dedication",
      cta: "Read Our Story",
      entryTitle: "Real Client Stories",
      entrySubtitle: "See how our clients improve their wellness journey",
      entryButton: "View Stories",
    },
    reviews: {
      title: "Trusted across regions",
      description: "Our testimonials show trust from Tanzania, East Africa, Europe, the USA, and the wider diaspora.",
      cta: "View All Testimonials",
      regionsLabel: "Regions we serve",
    },
    delivery: {
      title: "Safe delivery without friction",
      description: "We package carefully, track the parcel journey, and stay in touch until the order arrives safely.",
      cta: "Ask About Delivery",
      points: [
        "Nationwide shipping",
        "Secure packaging",
        "Communication until arrival",
      ],
    },
  },
} satisfies Record<Locale, OverviewCopy>;

const featuredTestimonials = [
  testimonials[0],
  testimonials[1],
  testimonials[2],
  testimonials[3],
];

const regions = ["Africa", "East Africa", "Europe", "USA", "Global"] as const;

const ExperienceStatIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2.8 1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ReachStatIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" strokeLinecap="round" />
  </svg>
);

const GuidanceStatIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="3" />
    <path d="M5.5 18c1.7-2.7 4-4 6.5-4s4.8 1.3 6.5 4" strokeLinecap="round" />
  </svg>
);

const FollowUpStatIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3L4 20l.9-3.4A7.4 7.4 0 0 1 4.5 12Z" />
    <path d="M8.5 12h2l1.1-2.4 2 5L15 12h2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const statsMeta = [
  {
    icon: ExperienceStatIcon,
    cardClassName: "border-emerald-900/8 bg-[linear-gradient(145deg,#ffffff,rgba(236,247,239,0.96))]",
    iconClassName: "bg-emerald-900 text-white",
    barClassName: "from-emerald-400 via-emerald-700 to-emerald-500",
    glowClassName: "bg-emerald-100",
  },
  {
    icon: ReachStatIcon,
    cardClassName: "border-emerald-900/8 bg-[linear-gradient(145deg,#fffdf8,rgba(248,243,232,0.96))]",
    iconClassName: "bg-[#f3c55d] text-emerald-950",
    barClassName: "from-[#f3c55d] via-[#d89f2d] to-[#f5d27f]",
    glowClassName: "bg-[#f8ebc5]",
  },
  {
    icon: GuidanceStatIcon,
    cardClassName: "border-emerald-900/8 bg-[linear-gradient(145deg,#ffffff,rgba(245,247,251,0.96))]",
    iconClassName: "bg-maroon-900 text-white",
    barClassName: "from-[#b15a74] via-[#5c1d2f] to-[#cf7c95]",
    glowClassName: "bg-rose-100",
  },
  {
    icon: FollowUpStatIcon,
    cardClassName: "border-emerald-900/8 bg-[linear-gradient(145deg,#ffffff,rgba(238,247,243,0.96))]",
    iconClassName: "bg-emerald-100 text-emerald-900",
    barClassName: "from-emerald-300 via-emerald-600 to-teal-400",
    glowClassName: "bg-teal-100",
  },
] as const;

const ProcessIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4.5 6.5h15M4.5 12h15M4.5 17.5h15" strokeLinecap="round" />
    <circle cx="7" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="17" cy="17.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const StoryIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 5.5h8.5A3.5 3.5 0 0 1 18 9v9.5l-4-2.6-4 2.6V9A3.5 3.5 0 0 0 6.5 5.5H6Z" />
    <path d="M6 5.5A2.5 2.5 0 0 0 3.5 8v10.5l4-2.6 2.5 1.6" />
  </svg>
);

const ReviewsIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 7.5h14M5 12h10M5 16.5h8" strokeLinecap="round" />
    <path d="M18.5 18.5 16 17H8A3.5 3.5 0 0 1 4.5 13.5v-6A3.5 3.5 0 0 1 8 4h8A3.5 3.5 0 0 1 19.5 7.5v11Z" />
  </svg>
);

const DeliveryIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3.5 7.5h10v8.5h-10z" />
    <path d="M13.5 10h3l3 2.8v3.2h-6" />
    <circle cx="7.5" cy="18" r="1.75" />
    <circle cx="17.5" cy="18" r="1.75" />
  </svg>
);

const PlayIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M8.5 6.8c0-.8.9-1.3 1.6-.8l7.2 4.4c.7.4.7 1.3 0 1.7L10.1 16.5c-.7.4-1.6 0-1.6-.8V6.8Z" />
  </svg>
);

const StoryEntryIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 5.5h8.5A3.5 3.5 0 0 1 18 9v9.5l-4-2.6-4 2.6V9A3.5 3.5 0 0 0 6.5 5.5H6Z" />
    <path d="M6 5.5A2.5 2.5 0 0 0 3.5 8v10.5l4-2.6 2.5 1.6" />
    <path d="m10.5 10.2 4 2.3-4 2.3v-4.6Z" fill="currentColor" stroke="none" />
  </svg>
);

const CheckIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 12.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const tabMeta = [
  { key: "process" as const, icon: ProcessIcon },
  { key: "story" as const, icon: StoryIcon },
  { key: "reviews" as const, icon: ReviewsIcon },
  { key: "delivery" as const, icon: DeliveryIcon },
];

export const HomeOverviewSection = () => {
  const { locale } = useLocale();
  const content = overviewContent[locale];
  const [activeTab, setActiveTab] = useState<TabKey>("process");

  const orderHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba kuanza ushauri na kujua hatua zinazofuata."
      : "Hello Rose Changa, I would like to start a consultation and know the next steps.",
  );

  const deliveryHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba maelezo ya delivery na jinsi mnavyotuma mizigo."
      : "Hello Rose Changa, I would like to know more about your delivery process.",
  );

  return (
    <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f7fbf6] via-[#fffaf2] to-[#eef6ef] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
          {content.eyebrow}
        </div>
        <h2 className="mt-5 text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-3 text-base leading-7 text-emerald-900/78 sm:text-lg">
          {content.subtitle}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {content.stats.map((stat, index) => {
          const meta = statsMeta[index];
          const Icon = meta.icon;

          return (
            <article
              key={stat.label}
              className={`group relative overflow-hidden rounded-[1.75rem] border px-5 py-5 shadow-[0_16px_36px_rgba(17,72,53,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${meta.cardClassName}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.barClassName}`} aria-hidden="true" />
              <div className={`absolute -right-6 -top-8 h-24 w-24 rounded-full opacity-80 blur-2xl ${meta.glowClassName}`} aria-hidden="true" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${meta.iconClassName}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900/38">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-6 text-[1.7rem] font-semibold leading-none text-emerald-950">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-[15ch] text-sm leading-6 text-emerald-900/74">
                  {stat.label}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {tabMeta.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                isActive
                  ? "bg-emerald-800 text-white shadow-md"
                  : "border border-emerald-900/10 bg-white/90 text-emerald-900 hover:bg-emerald-50"
              }`}
              aria-pressed={isActive}
            >
              <Icon className="h-4 w-4" />
              {content.tabs[tab.key]}
            </button>
          );
        })}
      </div>

      <div
        key={`${locale}-${activeTab}`}
        className="fade-up mt-6 rounded-[1.75rem] border border-emerald-900/10 bg-white/92 p-6 shadow-[0_18px_40px_rgba(17,72,53,0.08)] sm:p-8"
      >
        {activeTab === "process" && (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-950 sm:text-3xl">
                {content.process.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-emerald-900/78">
                {content.process.description}
              </p>
              <a
                href={orderHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                {content.process.cta}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {content.process.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.5rem] border border-emerald-900/8 bg-gradient-to-br from-[#f8fcf8] to-white p-5 shadow-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-900">
                    0{index + 1}
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-emerald-950">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-emerald-900/72">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeTab === "story" && (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-950 sm:text-3xl">
                {content.story.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-emerald-900/78">
                {content.story.description}
              </p>
              <blockquote className="mt-5 rounded-[1.5rem] border border-maroon-900/10 bg-[#fcf7ef] px-5 py-4 text-base italic leading-7 text-emerald-950">
                {content.story.quote}
              </blockquote>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-maroon-800"
              >
                {content.story.cta}
              </Link>
            </div>

            <Link
              href="/stories"
              className="group relative overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(244,250,245,0.92))] p-7 shadow-[0_18px_42px_rgba(17,72,53,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-100/80 blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-[#f8ebc5]/80 blur-3xl" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-emerald-900 text-white shadow-[0_18px_34px_rgba(17,72,53,0.18)]">
                    <StoryEntryIcon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-emerald-900/10 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900">
                    Stories
                  </span>
                </div>

                <h4 className="mt-7 text-2xl font-semibold text-emerald-950 sm:text-[1.75rem]">
                  {content.story.entryTitle}
                </h4>
                <p className="mt-3 max-w-md text-base leading-8 text-emerald-900/76">
                  {content.story.entrySubtitle}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-900 shadow-sm">
                    <PlayIcon className="ml-0.5 h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center justify-center rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold text-white transition duration-200 group-hover:bg-maroon-800">
                    {content.story.entryButton}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-950 sm:text-3xl">
                {content.reviews.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-emerald-900/78">
                {content.reviews.description}
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-emerald-950">{content.reviews.regionsLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <span
                      key={region}
                      className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/testimonials"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                {content.reviews.cta}
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredTestimonials.map((item) => (
                <article
                  key={`${item.name}-${item.location}`}
                  className="rounded-[1.5rem] border border-emerald-900/8 bg-gradient-to-br from-white to-[#f8fcf8] p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl" aria-hidden="true">{item.flag}</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-900">
                      {item.product}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-emerald-950/86">
                    &ldquo;{locale === "sw" ? item.textSw : item.textEn}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-emerald-950">{item.name}</p>
                    <p className="text-xs text-emerald-900/72">{item.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeTab === "delivery" && (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-950 sm:text-3xl">
                {content.delivery.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-emerald-900/78">
                {content.delivery.description}
              </p>
              <ul className="mt-5 space-y-3">
                {content.delivery.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-emerald-900/78">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={deliveryHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                {content.delivery.cta}
              </a>
            </div>

            <div className="relative min-h-[320px]">
              <div className="absolute inset-y-6 left-0 w-[72%] overflow-hidden rounded-[1.75rem] shadow-[0_20px_48px_rgba(11,47,34,0.18)]">
                <Image
                  src={mediaUrl("shipping/postershipping.png")}
                  alt={locale === "sw" ? "Poster ya usafirishaji wa Rose Changa" : "Rose Changa shipping poster"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 right-0 h-44 w-[44%] overflow-hidden rounded-[1.5rem] border-4 border-white shadow-[0_18px_40px_rgba(11,47,34,0.16)]">
                <Image
                  src={mediaUrl("shipping/shipping1.png")}
                  alt={locale === "sw" ? "Kifurushi cha mteja" : "Customer parcel"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
