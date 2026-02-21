import { ContactPageClient } from "@/components/pages/contact-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.contact;

export default function ContactPage() {
  return <ContactPageClient />;
}
