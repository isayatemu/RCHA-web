import { BookingPageClient } from "@/components/pages/booking-page";
import { pageSeo } from "@/data/seo";

export const metadata = pageSeo.booking;

export default function BookingPage() {
  return <BookingPageClient />;
}
