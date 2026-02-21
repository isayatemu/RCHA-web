import { SupportPageClient } from "@/components/pages/support-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.support;

export default function SupportPage() {
  return <SupportPageClient />;
}
