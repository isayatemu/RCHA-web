"use client";

import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { ProductCard } from "@/components/sections/product-card";
import { productFilters, pricedProducts, products, type ProductCategoryKey } from "@/data/products";
import { formatTsh, whatsappPrefill } from "@/lib/site";

type FilterKey = "all" | ProductCategoryKey;

const pageContent = {
  sw: {
    eyebrow: "Bidhaa zilizopangwa vizuri",
    title: "Chagua bidhaa kulingana na hitaji lako la afya",
    description:
      "Tumeweka bidhaa kuu na bidhaa maalum kwenye gallery iliyo wazi zaidi ili mteja aelewe kwa haraka aina ya bidhaa, matumizi yake, na namna ya kuagiza.",
    featuredTitle: "Bidhaa Zinazoongoza",
    featuredDescription: "Hizi ndizo bidhaa kuu zinazouliziwa sana na wateja wetu.",
    pricingTitle: "Orodha Rasmi ya Bei",
    pricingDescription:
      "Tumeziweka bei rasmi za bidhaa zinazouliziwa sana kwenye muonekano safi unaoeleweka haraka. Bei hizi ni kwa bidhaa moja moja, si dozi.",
    pricingNote: "Bei hizi ni za bidhaa moja moja. Maelekezo ya matumizi hutolewa baada ya mawasiliano.",
    pricingCta: "Agiza kwa WhatsApp",
    filterTitle: "Tafuta kwa category",
    filterDescription: "Chuja bidhaa kwa hitaji lako na uone maelezo kwa haraka kabla ya kuwasiliana nasi.",
    allProductsTitle: "Catalog ya bidhaa",
    allProductsDescription: "Kila card inaonyesha aina ya bidhaa, faida kuu, bei rasmi ilipoainishwa, na njia ya haraka ya kuagiza kupitia WhatsApp.",
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
    pricingTitle: "Official Price List",
    pricingDescription:
      "We placed the official prices for the most requested products in a cleaner showcase so clients can understand them at a glance. These prices are per individual product, not a dose plan.",
    pricingNote: "These prices are per individual product. Usage guidance is shared after you contact us.",
    pricingCta: "Order on WhatsApp",
    filterTitle: "Browse by category",
    filterDescription: "Filter the catalog by need and review the product details before reaching out.",
    allProductsTitle: "Full product catalog",
    allProductsDescription: "Each card shows the product type, key benefit, official price where available, and a quick WhatsApp order path.",
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

      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[linear-gradient(140deg,#f8f3e8_0%,#ffffff_48%,#edf6ee_100%)] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10">
        <div className="absolute -left-12 top-8 h-36 w-36 rounded-full bg-[#f3d58b]/35 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-emerald-200/45 blur-3xl" aria-hidden="true" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-maroon-900 shadow-sm backdrop-blur sm:text-xs">
              {content.pricingTitle}
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-emerald-950 sm:text-4xl">{content.pricingTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-900/78 sm:text-base">{content.pricingDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-emerald-900 shadow-sm">
              {pricedProducts.length} {locale === "sw" ? "bidhaa zenye bei rasmi" : "products with official prices"}
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-900 px-4 py-2 text-xs font-semibold text-white shadow-sm">
              {locale === "sw" ? "Kwa bidhaa moja moja" : "Per individual product"}
            </span>
          </div>
        </div>

        <div className="relative mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pricedProducts.map((product) => {
            const orderHref = whatsappPrefill(
              locale === "sw"
                ? `Habari Rose Changa, naomba kuagiza ${product.name}.`
                : `Hello Rose Changa, I would like to order ${product.name}.`,
            );

            return (
              <article
                key={product.slug}
                className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-[0_18px_34px_rgba(17,72,53,0.08)] backdrop-blur"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon-900">
                      {locale === "sw" ? product.categorySw : product.categoryEn}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-emerald-950">{product.name}</h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-900">
                    {locale === "sw" ? product.typeSw : product.typeEn}
                  </span>
                </div>

                <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-emerald-900/78">
                  {locale === "sw" ? product.shortSw : product.shortEn}
                </p>

                <div className="mt-5 grid gap-3">
                  {product.priceOptions?.map((option) => (
                    <div
                      key={`${product.slug}-${option.labelEn}`}
                      className="flex items-center justify-between rounded-[1.1rem] border border-emerald-900/10 bg-[#fcfaf4] px-4 py-3"
                    >
                      <span className="text-sm font-medium text-emerald-950">
                        {locale === "sw" ? option.labelSw : option.labelEn}
                      </span>
                      <span className="text-base font-semibold text-maroon-900">{formatTsh(option.amount)}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-6 text-emerald-900/70">{content.pricingNote}</p>

                <a
                  href={orderHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-maroon-900 px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-maroon-800"
                >
                  {content.pricingCta}
                </a>
              </article>
            );
          })}
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
