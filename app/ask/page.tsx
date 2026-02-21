import { AskPageClient } from "@/components/pages/ask-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.ask;

export default function AskPage() {
  return <AskPageClient />;
}
