"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { products } from "@/data/products";
import { ProductCard } from "@/components/sections/product-card";
import { MediaGallery } from "@/components/sections/media-gallery";
import { assetMap } from "@/data/assets";

export const ProductsPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-semibold">{locale === "sw" ? "Catalog ya Bidhaa" : "Products Catalog"}</h1>
        <p className="mt-3 text-sm text-emerald-900/80">
          {locale === "sw"
            ? "Bidhaa zote zinaelekezwa kwa ushauri wa dozi binafsi. Taarifa hizi ni za wellness support, si ahadi ya cure."
            : "All products are supported by personalized dosing consultation. Content is for wellness support, not cure claims."}
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>

      <MediaGallery files={assetMap.galleryMedia} title="Products Gallery" />
    </div>
  );
};
