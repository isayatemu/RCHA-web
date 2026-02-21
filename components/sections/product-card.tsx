"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useLocale } from "@/components/providers/locale-provider";
import { mediaUrl } from "@/lib/site";

export const ProductCard = ({ product }: { product: Product }) => {
  const { locale } = useLocale();

  return (
    <article className="overflow-hidden rounded-2xl border border-emerald-900/15 bg-white shadow-sm">
      <div className="relative h-52">
        <Image src={mediaUrl(product.image)} alt={product.name} fill className="object-cover" unoptimized />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-maroon-900">{product.format}</p>
        <h3 className="mt-2 text-xl font-semibold text-emerald-950">{product.name}</h3>
        <p className="mt-3 text-sm text-emerald-900/80">{locale === "sw" ? product.shortSw : product.shortEn}</p>
        <Link href={`/products/${product.slug}`} className="mt-4 inline-block rounded-full border border-emerald-800 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50">
          {locale === "sw" ? "Jifunze zaidi" : "Learn more"}
        </Link>
      </div>
    </article>
  );
};
