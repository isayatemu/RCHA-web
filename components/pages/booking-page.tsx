"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { BookingForm } from "@/components/forms/booking-form";

export const BookingPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Book Consultation</h1>
      <p className="text-sm text-emerald-900/80">
        {locale === "sw" ? "Jaza fomu hapa chini kwa ushauri wa dozi binafsi." : "Fill this form for personalized consultation and dose planning."}
      </p>
      <BookingForm />
    </div>
  );
};
