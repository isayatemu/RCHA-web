"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { mediaUrl } from "@/lib/site";
import { useLocale } from "@/components/providers/locale-provider";
import { Disclaimer } from "@/components/sections/disclaimer";
import { business } from "@/data/business";

export const ProductDetailPageClient = ({ slug }: { slug: string }) => {
  const { locale } = useLocale();
  const product = products.find((item) => item.slug === slug);

  if (!product) return notFound();

  return (
    <div className="space-y-8">
      <section className="grid gap-8 md:grid-cols-2">
        <div className="relative h-96 overflow-hidden rounded-3xl border border-emerald-900/15">
          <Image src={mediaUrl(product.image)} alt={product.name} fill className="object-cover" unoptimized />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-maroon-900">{product.format}</p>
          <h1 className="mt-2 text-4xl font-semibold">{product.name}</h1>
          <p className="mt-4 text-sm text-emerald-900/85">{locale === "sw" ? product.overviewSw : product.overviewEn}</p>
          <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">{locale === "sw" ? business.pricingNoteSw : business.pricingNoteEn}</p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold text-white">{locale === "sw" ? "Book ushauri" : "Book consultation"}</Link>
            <a href={business.socials.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-900 px-5 py-3 text-sm font-semibold text-emerald-900">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-emerald-900/15 bg-white p-5">
          <h2 className="text-xl font-semibold">Traditional uses</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-900/85">
            {(locale === "sw" ? product.traditionalUsesSw : product.traditionalUsesEn).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-emerald-900/15 bg-white p-5">
          <h2 className="text-xl font-semibold">How to use</h2>
          <p className="mt-3 text-sm text-emerald-900/85">{locale === "sw" ? product.howToUseSw : product.howToUseEn}</p>
          <h3 className="mt-4 text-lg font-semibold">Precautions</h3>
          <p className="mt-2 text-sm text-emerald-900/85">{locale === "sw" ? product.precautionsSw : product.precautionsEn}</p>
        </article>
      </section>

      <Disclaimer />
    </div>
  );
};
