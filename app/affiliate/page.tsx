import { AffiliatePageClient } from "@/components/pages/affiliate-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.affiliate;

export default function AffiliatePage() {
  return <AffiliatePageClient />;
}
