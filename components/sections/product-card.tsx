"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useLocale } from "@/components/providers/locale-provider";
import { ProductPricingBlock } from "@/components/sections/product-pricing-block";
import { mediaUrl, whatsappPrefill } from "@/lib/site";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
};

const PlaceholderIcon = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 20c4.5-1.1 7-4.5 7-9.7V5.5c-3.6 0-5.9 1.1-7 3.4-1.1-2.3-3.4-3.4-7-3.4v4.8C5 15.5 7.5 18.9 12 20Z" />
    <path d="M12 9v8" strokeLinecap="round" />
  </svg>
);

export const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { locale } = useLocale();
  const detailsLabel = locale === "sw" ? "Maelezo" : "View Details";
  const orderLabel = locale === "sw" ? "Agiza WhatsApp" : "Order via WhatsApp";
  const orderHref = whatsappPrefill(
    locale === "sw"
      ? `Habari Rose Changa, naomba kuagiza ${product.name} na kupata ushauri wa matumizi.`
      : `Hello Rose Changa, I would like to order ${product.name} and receive usage guidance.`,
  );

  return (
    <article
      className={`group overflow-hidden rounded-[1.9rem] border border-emerald-900/12 bg-white shadow-[0_18px_40px_rgba(17,72,53,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_rgba(17,72,53,0.14)] ${
        featured ? "lg:min-h-[34rem]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#f7f2e5] via-white to-[#eef7ef] ${
          featured ? "h-80 p-7" : "h-64 p-5"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-[#f0c35f] to-maroon-900" aria-hidden="true" />
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-100/80 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-[#f8ebc5]/80 blur-3xl" aria-hidden="true" />

        <div className="relative flex h-full flex-col">
          <div className="relative z-10 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900 shadow-sm">
              {locale === "sw" ? product.categorySw : product.categoryEn}
            </span>
            <span className="rounded-full border border-emerald-900/10 bg-[#fff8ea] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-maroon-900">
              {locale === "sw" ? product.typeSw : product.typeEn}
            </span>
            {featured ? (
              <span className="rounded-full border border-emerald-900/10 bg-emerald-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                {locale === "sw" ? "Inayoongoza" : "Featured"}
              </span>
            ) : null}
          </div>

          {product.image ? (
            <div className="relative mt-2 flex-1">
              <Image
                src={mediaUrl(product.image)}
                alt={product.name}
                fill
                className={`object-contain object-center drop-shadow-[0_18px_28px_rgba(32,65,45,0.18)] transition duration-300 group-hover:scale-[1.05] ${
                  featured ? "p-2 pt-0" : "p-2 pt-0"
                } ${product.imageClassName ?? ""}`}
                unoptimized
              />
            </div>
          ) : (
            <div className="relative mt-4 flex flex-1 flex-col items-center justify-center text-center text-emerald-900">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-sm">
                <PlaceholderIcon className="h-9 w-9" />
              </div>
              <p className="mt-4 text-sm font-semibold text-emerald-950">{product.name}</p>
              <p className="mt-2 max-w-[18rem] text-xs leading-6 text-emerald-900/70">
                {locale === "sw" ? "Muonekano wa bidhaa utaongezwa hapa." : "Product image preview will appear here."}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={featured ? "p-6 sm:p-7" : "p-5"}>
        <h3 className={`font-semibold text-emerald-950 ${featured ? "text-2xl" : "text-xl"}`}>{product.name}</h3>
        <p className={`mt-3 text-emerald-900/80 ${featured ? "text-base leading-7" : "text-sm leading-6"}`}>
          {locale === "sw" ? product.shortSw : product.shortEn}
        </p>

        {product.priceOptions?.length ? (
          <div className="mt-5">
            <ProductPricingBlock product={product} locale={locale} />
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900">
            {locale === "sw" ? "Faida kuu" : "Key benefit"}
          </span>
          <span className="rounded-full bg-[#fcf4e3] px-3 py-1 text-xs font-medium text-maroon-900">
            {locale === "sw" ? product.typeSw : product.typeEn}
          </span>
        </div>

        <div className={`mt-6 grid gap-3 ${featured ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-emerald-800 px-4 py-3 text-sm font-semibold text-emerald-900 transition duration-200 hover:bg-emerald-50"
          >
            {detailsLabel}
          </Link>
          <a
            href={orderHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-maroon-900 px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-maroon-800"
          >
            {orderLabel}
          </a>
        </div>
      </div>
    </article>
  );
};
