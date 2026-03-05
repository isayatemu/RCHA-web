"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/hero/HeroSection";
import { useLocale } from "@/components/providers/locale-provider";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import { youtubeVideos } from "@/data/youtube";
import { assetMap } from "@/data/assets";
import { ProductCard } from "@/components/sections/product-card";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { YouTubeGrid } from "@/components/sections/youtube-grid";
import { Disclaimer } from "@/components/sections/disclaimer";
import { mediaUrl } from "@/lib/site";

export const HomePageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-16">
      <HeroSection />

      <section>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-3xl font-semibold">{locale === "sw" ? "Bidhaa Zinazoongoza" : "Featured Products"}</h2>
          <Link href="/products" className="text-sm font-semibold text-maroon-900">{locale === "sw" ? "Catalog yote" : "View all"}</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {["Consult", "Dose plan", "Follow-up"].map((step, index) => (
          <div key={step} className="rounded-2xl border border-emerald-900/15 bg-white p-5">
            <p className="text-xs uppercase tracking-widest text-maroon-900">0{index + 1}</p>
            <h3 className="mt-2 text-xl font-semibold text-emerald-950">{step}</h3>
            <p className="mt-2 text-sm text-emerald-900/80">
              {index === 0 && (locale === "sw" ? "Tuambie historia na lengo lako la afya." : "Share your history and wellness goals.")}
              {index === 1 && (locale === "sw" ? "Pata dozi na ratiba iliyobinafsishwa." : "Receive a personalized dose and routine.")}
              {index === 2 && (locale === "sw" ? "Tunafuatilia maendeleo yako kwa karibu." : "We monitor your progress closely.")}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">{locale === "sw" ? "Historia & Experience" : "History & Experience"}</h2>
          <p className="mt-3 text-sm leading-relaxed text-emerald-900/85">
            {locale === "sw"
              ? "Kutoka Arusha hadi diaspora, tumekuwa tukijenga huduma ya wellness ya uaminifu kwa zaidi ya miaka 10. Tunaheshimu faragha, ethics, na ushauri wa kitaalamu."
              : "From Arusha to diaspora communities, we have built a trusted wellness support practice for over 10 years with privacy and ethics at the core."}
          </p>
          <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-maroon-900">{locale === "sw" ? "Soma historia kamili" : "Read full story"}</Link>
        </div>
        <YouTubeGrid urls={youtubeVideos.slice(0, 2)} />
      </section>

      <section>
        <h2 className="text-3xl font-semibold">{locale === "sw" ? "Ushahidi wa Wateja" : "Testimonials"}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((item) => (
            <TestimonialCard key={`${item.name}${item.date}`} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold">{locale === "sw" ? "Shipping & Guarantee" : "Shipping & Guarantee"}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {assetMap.shippingBadges.map((item) => (
            <div key={item} className="relative h-40 overflow-hidden rounded-2xl border border-emerald-900/15">
              <Image src={mediaUrl(item)} alt="Shipping and guarantee" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="mt-4">
          <FaqAccordion items={faqItems.slice(0, 4)} />
        </div>
        <Link href="/faq" className="mt-3 inline-block text-sm font-semibold text-maroon-900">{locale === "sw" ? "FAQ zote" : "View all FAQ"}</Link>
      </section>

      <Disclaimer />
    </div>
  );
};
