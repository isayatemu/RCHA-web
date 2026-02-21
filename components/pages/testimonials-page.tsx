"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/sections/testimonial-card";

export const TestimonialsPageClient = () => {
  const { locale } = useLocale();

  return (
    <div>
      <h1 className="text-4xl font-semibold">{locale === "sw" ? "Ushahidi wa Wateja" : "Client Testimonials"}</h1>
      <p className="mt-3 text-sm text-emerald-900/80">
        {locale === "sw" ? "Hadithi za wateja kuhusu huduma, ufuatiliaji, na improvements walizoripoti." : "Client-reported feedback focused on experience, support quality, and gradual improvement."}
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={`${item.name}-${item.date}`} item={item} />
        ))}
      </div>
    </div>
  );
};
