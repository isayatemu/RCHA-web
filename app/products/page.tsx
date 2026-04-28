import { Suspense } from "react";
import { ProductsPageClient } from "@/components/pages/products-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.products;

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageClient />
    </Suspense>
  );
}
