import { TestimonialsPageClient } from "@/components/pages/testimonials-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.testimonials;

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
