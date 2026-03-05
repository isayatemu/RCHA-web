"use client";

import Link from "next/link";
import { HeroImageShowcase } from "@/components/hero/HeroImageShowcase";
import { useLocale } from "@/components/providers/locale-provider";

export const HeroSection = () => {
  const { locale } = useLocale();

  const trustBadges = locale === "sw"
    ? ["Miaka 10+", "Ushauri binafsi", "Arusha & Diaspora", "Huduma ya ufuatiliaji"]
    : ["10+ years", "Personal guidance", "Arusha & Diaspora", "Follow-up care"];

  const slides = locale === "sw"
    ? [
        {
          src: "/images/hero-detox-campaign.png",
          alt: "Detox campaign before and after promotion",
          eyebrow: "Detox Focus",
          title: "Detox support showcase",
          description: "Angalia muonekano wa campaign ya detox na ubofye kupata ushauri wa bidhaa zinazofaa kwako.",
          href: "/products/digest-comfort-herbs",
          ctaLabel: "Angalia bidhaa",
        },
        {
          src: "/images/hero-product-showcase.jpg",
          alt: "Rose Changa product lineup showcase",
          eyebrow: "Product Range",
          title: "Mchanganyiko wa bidhaa mbalimbali",
          description: "Bidhaa mbalimbali za wellness support zinazotolewa baada ya ushauri wa binafsi.",
          href: "/products",
          ctaLabel: "Fungua catalog",
        },
      ]
    : [
        {
          src: "/images/hero-detox-campaign.png",
          alt: "Detox campaign before and after promotion",
          eyebrow: "Detox Focus",
          title: "Detox support showcase",
          description: "Explore the detox campaign visual and click through for guided product recommendations.",
          href: "/products/digest-comfort-herbs",
          ctaLabel: "View product",
        },
        {
          src: "/images/hero-product-showcase.jpg",
          alt: "Rose Changa product lineup showcase",
          eyebrow: "Product Range",
          title: "A wider herbal product lineup",
          description: "A range of wellness support products recommended after personalized consultation.",
          href: "/products",
          ctaLabel: "Open catalog",
        },
      ];

  return (
    <section className="mx-auto max-w-6xl py-12 md:py-16">
      <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f8f6ef] via-white to-[#eef5ef] px-6 py-8 shadow-[0_22px_56px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900 shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              Rose Changa Herbalist Africa
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-emerald-950 md:text-5xl">
              {locale === "sw" ? "Afya asilia yenye uaminifu, ufuatiliaji na heshima" : "Trusted natural wellness with follow-up and dignity"}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-8 text-emerald-900/80">
              {locale === "sw"
                ? "Miaka 10+ ya uzoefu, kutoka Njiro Arusha hadi diaspora. Tunatoa ushauri wa dozi binafsi kwa njia salama na yenye maadili."
                : "10+ years of experience, from Njiro Arusha to diaspora communities. We provide personalized dose consultation through a safe and ethical process."}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(92,29,47,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-maroon-800"
              >
                Book Consultation
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-900/25 hover:bg-emerald-50"
              >
                {locale === "sw" ? "Angalia Bidhaa" : "Browse Products"}
              </Link>
            </div>

            <p className="mt-4 text-sm text-emerald-900/70">
              {locale === "sw"
                ? "Matokeo hutofautiana kwa mtu. Pata ushauri kabla ya dozi."
                : "Results vary by individual. Get guidance before any dose plan."}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="group flex items-center gap-3 rounded-2xl border border-emerald-900/8 bg-white/90 px-4 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-600 transition group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-medium text-emerald-950">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-emerald-200/50 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-3 h-28 w-28 rounded-full bg-amber-100/60 blur-2xl" aria-hidden="true" />
            <HeroImageShowcase slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};
