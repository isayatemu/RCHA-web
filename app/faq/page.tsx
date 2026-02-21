import { FaqPageClient } from "@/components/pages/faq-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.faq;

export default function FaqPage() {
  return <FaqPageClient />;
}
