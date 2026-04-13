"use client";

import Link from "next/link";
import { HeroSection } from "@/components/hero/HeroSection";
import { useLocale } from "@/components/providers/locale-provider";
import { products } from "@/data/products";
import { faqItems } from "@/data/faq";
import { HomeOverviewSection } from "@/components/sections/home-overview-section";
import { ProductCard } from "@/components/sections/product-card";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Disclaimer } from "@/components/sections/disclaimer";

export const HomePageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-12 md:space-y-14">
      <HeroSection />

      <section>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-3xl font-semibold">{locale === "sw" ? "Bidhaa Zinazoongoza" : "Featured Products"}</h2>
          <Link href="/products" className="text-sm font-semibold text-maroon-900">{locale === "sw" ? "Catalog yote" : "View all"}</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.filter((product) => product.featured).slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <HomeOverviewSection />

      <section>
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="mt-4">
          <FaqAccordion items={faqItems.slice(0, 3)} />
        </div>
        <Link href="/faq" className="mt-3 inline-block text-sm font-semibold text-maroon-900">{locale === "sw" ? "FAQ zote" : "View all FAQ"}</Link>
      </section>

      <Disclaimer />
    </div>
  );
};
