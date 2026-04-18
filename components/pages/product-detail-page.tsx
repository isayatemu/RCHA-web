"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";
import { ProductPricingBlock } from "@/components/sections/product-pricing-block";
import { business } from "@/data/business";
import { products } from "@/data/products";
import { mediaUrl, whatsappPrefill } from "@/lib/site";

export const ProductDetailPageClient = ({ slug }: { slug: string }) => {
  const { locale } = useLocale();
  const product = products.find((item) => item.slug === slug);

  if (!product) return notFound();

  const whatsappHref = whatsappPrefill(
    locale === "sw"
      ? `Habari Rose Changa, naomba ushauri kuhusu ${product.name}.`
      : `Hello Rose Changa, I would like a consultation about ${product.name}.`,
  );

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2rem] border border-emerald-900/12 bg-white/80 shadow-[0_24px_60px_rgba(17,72,53,0.08)]">
        <div className="grid lg:grid-cols-[1fr_1.05fr]">
          <div className="relative min-h-[320px] bg-gradient-to-br from-[#f7f3e9] via-white to-[#e8f1e9] p-6 sm:min-h-[420px] sm:p-10">
            {product.image ? (
              <Image
                src={mediaUrl(product.image)}
                alt={product.name}
                fill
                className="object-contain p-4 drop-shadow-[0_24px_38px_rgba(32,65,45,0.18)] sm:p-8"
                unoptimized
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center text-emerald-900">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-3xl font-semibold">{product.name.charAt(0)}</span>
                </div>
                <p className="mt-5 text-lg font-semibold text-emerald-950">{product.name}</p>
                <p className="mt-2 max-w-sm text-sm leading-7 text-emerald-900/72">
                  {locale === "sw" ? "Muonekano wa bidhaa utaongezwa hapa." : "Product image preview will appear here."}
                </p>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-900">
                {locale === "sw" ? product.categorySw : product.categoryEn}
              </span>
              <span className="rounded-full bg-[#fcf4e3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-maroon-900">
                {locale === "sw" ? product.typeSw : product.typeEn}
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold text-emerald-950 sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-base leading-7 text-emerald-950/85">{locale === "sw" ? product.shortSw : product.shortEn}</p>
            <p className="mt-4 text-sm leading-7 text-emerald-900/80">{locale === "sw" ? product.overviewSw : product.overviewEn}</p>
            <div className="mt-5">
              {product.priceOptions?.length ? (
                <ProductPricingBlock product={product} locale={locale} variant="detail" />
              ) : (
                <p className="rounded-2xl border border-emerald-900/10 bg-emerald-50/80 p-4 text-sm text-emerald-900">
                  {locale === "sw" ? business.pricingNoteSw : business.pricingNoteEn}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-maroon-800"
              >
                {locale === "sw" ? "Book ushauri" : "Book consultation"}
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-900 px-5 py-3 text-sm font-semibold text-emerald-900 transition duration-200 hover:bg-emerald-50"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-[1.75rem] border border-emerald-900/15 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-950">
            {locale === "sw" ? "Matumizi ya Jadi" : "Traditional Uses"}
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-emerald-900/85">
            {(locale === "sw" ? product.traditionalUsesSw : product.traditionalUsesEn).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-emerald-900/15 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-950">
            {locale === "sw" ? "Jinsi ya Kutumia" : "How to Use"}
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-emerald-900/85">
            {(locale === "sw" ? product.howToUseSw : product.howToUseEn).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-emerald-900/15 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-950">
            {locale === "sw" ? "Tahadhari" : "Precautions"}
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-emerald-900/85">
            {(locale === "sw" ? product.precautionsSw : product.precautionsEn).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};
