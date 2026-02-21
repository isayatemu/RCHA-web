import { StoriesPageClient } from "@/components/pages/stories-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.stories;

export default function StoriesPage() {
  return <StoriesPageClient />;
}
