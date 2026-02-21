import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPageClient } from "@/components/pages/product-detail-page";
import { products } from "@/data/products";
import { makeMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return makeMetadata({
      title: "Product Not Found",
      description: "Requested product was not found in catalog.",
      path: `/products/${slug}`,
    });
  }

  return makeMetadata({
    title: `${product.name} | Product Details`,
    description: product.shortEn,
    path: `/products/${slug}`,
    keywords: [product.name, "herbal product", "wellness support", "Rose Changa"],
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exists = products.some((item) => item.slug === slug);
  if (!exists) notFound();

  return <ProductDetailPageClient slug={slug} />;
}
