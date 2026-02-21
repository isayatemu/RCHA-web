import { AboutPageClient } from "@/components/pages/about-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.about;

export default function AboutPage() {
  return <AboutPageClient />;
}
