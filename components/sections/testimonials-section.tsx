"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { WhatsAppIcon } from "@/components/ui/social-icons";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/lib/i18n";
import { whatsappPrefill } from "@/lib/site";

type TestimonialsCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
};

const testimonialsContent = {
  sw: {
    eyebrow: "Tunawahudumia wateja ndani na nje ya Tanzania",
    title: "Wateja wetu duniani wanasema nini",
    subtitle: "Ushuhuda halisi kutoka Afrika hadi diaspora",
    cta: "Anza Ushauri Sasa",
  },
  en: {
    eyebrow: "Serving clients locally and internationally",
    title: "What our clients around the world say",
    subtitle: "Real testimonials from Africa to the diaspora",
    cta: "Start Consultation",
  },
} satisfies Record<Locale, TestimonialsCopy>;

export const TestimonialsSection = () => {
  const { locale } = useLocale();
  const content = testimonialsContent[locale];
  const whatsappHref = whatsappPrefill(
    locale === "sw"
      ? "Habari Rose Changa, naomba kuanza ushauri baada ya kuona ushuhuda wa wateja."
      : "Hello Rose Changa, I would like to start a consultation after reading client testimonials.",
  );

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f7fbf6] via-[#fffaf2] to-[#eef6ef] px-6 py-8 shadow-[0_24px_60px_rgba(17,72,53,0.08)] sm:px-8 lg:px-10 lg:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.96), transparent 32%), radial-gradient(circle at bottom right, rgba(222,239,226,0.82), transparent 34%)",
        }}
      />

      <div className="relative">
        <div key={`testimonials-${locale}`} className="fade-up" aria-live="polite">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
              {content.eyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-emerald-900/78 sm:text-lg">
              {content.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={`${item.name}-${item.location}`} item={item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(17,72,53,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-[0_22px_40px_rgba(17,72,53,0.3)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
