import { HomePageClient } from "@/components/pages/home-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.home;

export default function HomePage() {
  return <HomePageClient />;
}
