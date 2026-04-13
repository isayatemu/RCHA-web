"use client";

import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { ProductCard } from "@/components/sections/product-card";
import { productFilters, products, type ProductCategoryKey } from "@/data/products";
import { whatsappPrefill } from "@/lib/site";

type FilterKey = "all" | ProductCategoryKey;

const pageContent = {
  sw: {
    eyebrow: "Bidhaa zilizopangwa vizuri",
    title: "Chagua bidhaa kulingana na hitaji lako la afya",
    description:
      "Tumeweka bidhaa kuu na bidhaa maalum kwenye gallery iliyo wazi zaidi ili mteja aelewe kwa haraka aina ya bidhaa, matumizi yake, na namna ya kuagiza.",
    featuredTitle: "Bidhaa Zinazoongoza",
    featuredDescription: "Hizi ndizo bidhaa kuu zinazouliziwa sana na wateja wetu.",
    filterTitle: "Tafuta kwa category",
    filterDescription: "Chuja bidhaa kwa hitaji lako na uone maelezo kwa haraka kabla ya kuwasiliana nasi.",
    allProductsTitle: "Catalog ya bidhaa",
    allProductsDescription: "Kila card inaonyesha aina ya bidhaa, faida kuu, na njia ya haraka ya kuagiza kupitia WhatsApp.",
    guidanceTitle: "Unahitaji kusaidiwa kuchagua?",
    guidanceDescription: "Tuma hali yako kwa WhatsApp na tutakusaidia kuchagua bidhaa inayokufaa na mpango wa matumizi.",
    guidanceCta: "Pata Ushauri WhatsApp",
  },
  en: {
    eyebrow: "Structured product gallery",
    title: "Choose products by your health need",
    description:
      "We organized the catalog into a clearer gallery so clients can quickly understand each product, its purpose, and the fastest way to order.",
    featuredTitle: "Featured Products",
    featuredDescription: "These are the core products most clients ask about first.",
    filterTitle: "Browse by category",
    filterDescription: "Filter the catalog by need and review the product details before reaching out.",
    allProductsTitle: "Full product catalog",
    allProductsDescription: "Each card shows the product type, core benefit, and a quick WhatsApp order path.",
    guidanceTitle: "Need help choosing?",
    guidanceDescription: "Send us your situation on WhatsApp and we will guide you toward the right product and usage plan.",
    guidanceCta: "Get WhatsApp Guidance",
  },
} as const;

export const ProductsPageClient = () => {
  const { locale } = useLocale();
  const content = pageContent[locale];
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const guidanceHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba msaada wa kuchagua bidhaa inayofaa hali yangu."
      : "Hello Rose Changa, I need help choosing the right product for my condition.",
  );

  const featuredProducts = products.filter((product) => product.featured);
  const visibleProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.categoryKey === activeFilter);

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f8fcf7] via-white to-[#f8f2e4] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
            {content.eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-900/80 sm:text-lg">
            {content.description}
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-950">{content.featuredTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-900/76">{content.featuredDescription}</p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
            {featuredProducts.length} {locale === "sw" ? "bidhaa kuu" : "core products"}
          </span>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} featured />
          ))}
        </div>
      </section>

      <section className="rounded-[1.9rem] border border-emerald-900/10 bg-white p-5 shadow-[0_18px_40px_rgba(17,72,53,0.06)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-emerald-950">{content.filterTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-900/76">{content.filterDescription}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {productFilters.map((filter) => {
              const isActive = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? "bg-emerald-800 text-white shadow-md"
                      : "border border-emerald-900/10 bg-[#f9fbf8] text-emerald-900 hover:bg-emerald-50"
                  }`}
                  aria-pressed={isActive}
                >
                  {locale === "sw" ? filter.labelSw : filter.labelEn}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-950">{content.allProductsTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-900/76">{content.allProductsDescription}</p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-[#fcf4e3] px-3 py-1 text-xs font-semibold text-maroon-900">
            {visibleProducts.length} {locale === "sw" ? "zinaonekana sasa" : "showing now"}
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 px-6 py-8 text-white shadow-[0_22px_56px_rgba(17,72,53,0.16)] sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold leading-tight">{content.guidanceTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-white/80">{content.guidanceDescription}</p>
          </div>
          <a
            href={guidanceHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7f3e9]"
          >
            {content.guidanceCta}
          </a>
        </div>
      </section>
    </div>
  );
};
