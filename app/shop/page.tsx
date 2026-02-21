import { ShopPageClient } from "@/components/pages/shop-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.shop;

export default function ShopPage() {
  return <ShopPageClient />;
}
