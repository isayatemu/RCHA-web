"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { business } from "@/data/business";
import { PhoneActionLink } from "@/components/ui/phone-action-link";

export const ContactPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">{locale === "sw" ? "Mawasiliano" : "Contact"}</h1>
      <article className="rounded-2xl border border-emerald-900/15 bg-white p-6">
        <p className="text-sm text-emerald-900/85">{business.location}</p>
        <div className="mt-3 space-y-2 text-sm">
          {business.whatsappContacts.map((contact) => (
            <p key={contact.key}>
              {contact.label}:{" "}
              <PhoneActionLink
                phone={contact.phone}
                whatsappHref={contact.href}
                className="font-medium text-emerald-900 underline decoration-emerald-700/35 underline-offset-4 hover:decoration-emerald-700"
              >
                {contact.display}
              </PhoneActionLink>
            </p>
          ))}
        </div>
        <p className="text-sm">
          Email:{" "}
          <a
            href={`mailto:${business.email}`}
            className="font-medium text-emerald-900 underline decoration-emerald-700/35 underline-offset-4 hover:decoration-emerald-700"
          >
            {business.email}
          </a>
        </p>
        <p className="mt-4 text-sm text-emerald-900/80">
          {locale === "sw" ? "Tunakaribisha consultation za ndani ya Tanzania na diaspora." : "We welcome consultation requests from Tanzania and diaspora communities."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {business.whatsappContacts.map((contact) => (
            <a
              key={contact.key}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              {contact.label}
            </a>
          ))}
          <Link href="/booking" className="rounded-full border border-emerald-900 px-4 py-2 text-sm font-semibold text-emerald-900">{locale === "sw" ? "Book sasa" : "Book now"}</Link>
        </div>
      </article>
    </div>
  );
};
