"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/components/providers/locale-provider";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import { youtubeVideos } from "@/data/youtube";
import { assetMap } from "@/data/assets";
import { business } from "@/data/business";
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
      <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-emerald-950 to-maroon-900 px-6 py-10 text-white md:grid-cols-2 md:px-10">
        <div className="fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Rose Changa Herbalist Africa</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            {locale === "sw" ? "Afya asilia yenye uaminifu, ufuatiliaji na heshima" : "Trusted traditional wellness with follow-up and care"}
          </h1>
          <p className="mt-4 text-sm text-emerald-100/90">
            {locale === "sw"
              ? "Miaka 10+ ya uzoefu, kutoka Njiro Arusha hadi diaspora. Tunatoa ushauri wa dozi binafsi kwa njia salama na yenye maadili."
              : "10+ years of experience from Njiro, Arusha supporting clients locally and in diaspora with ethical personalized dose consultation."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/booking" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-950">Book Consultation</Link>
            <Link href="/products" className="rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white">{locale === "sw" ? "Angalia Bidhaa" : "Browse Products"}</Link>
          </div>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl border border-white/20">
          <Image src={mediaUrl(assetMap.featuredImages[0])} alt="Rose Changa product" fill className="object-cover" unoptimized />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          [business.experience, locale === "sw" ? "Uzoefu" : "Experience"],
          ["Natural blends", locale === "sw" ? "Mchanganyiko wa asili" : "Traditional formulas"],
          [locale === "sw" ? "Ofisi Arusha" : "Arusha office", business.location],
          ["Client-reported", "Improvement"],
        ].map(([title, text]) => (
          <div key={String(title)} className="rounded-2xl border border-emerald-900/15 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-maroon-900">{title}</p>
            <p className="mt-2 text-sm text-emerald-900/85">{text}</p>
          </div>
        ))}
      </section>

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
