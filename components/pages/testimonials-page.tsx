"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/sections/testimonial-card";

export const TestimonialsPageClient = () => {
  const { locale } = useLocale();

  return (
    <div>
      <h1 className="text-4xl font-semibold">
        {locale === "sw" ? "Ushahidi wa Wateja Duniani" : "Client Testimonials Worldwide"}
      </h1>
      <p className="mt-3 text-sm text-emerald-900/80">
        {locale === "sw"
          ? "Ushuhuda wa wateja kutoka Tanzania, Afrika Mashariki, na diaspora unaoonyesha huduma ya karibu na uaminifu."
          : "Testimonials from Tanzania, East Africa, and the diaspora highlighting trusted care and global support."}
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={`${item.name}-${item.location}`} item={item} />
        ))}
      </div>
    </div>
  );
};
