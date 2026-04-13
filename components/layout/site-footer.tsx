"use client";

import Link from "next/link";
import { business } from "@/data/business";
import { useLocale } from "@/components/providers/locale-provider";
import { PhoneActionLink } from "@/components/ui/phone-action-link";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/social-icons";

const socials = [
  { key: "tiktok", label: "TikTok", href: business.socials.tiktok, icon: TikTokIcon },
  { key: "instagram", label: "Instagram", href: business.socials.instagram, icon: InstagramIcon },
  { key: "facebook", label: "Facebook", href: business.socials.facebook, icon: FacebookIcon },
  { key: "whatsapp", label: "WhatsApp", href: business.socials.whatsapp, icon: WhatsAppIcon },
];

export const SiteFooter = () => {
  const { locale } = useLocale();

  return (
    <footer className="mt-20 border-t border-emerald-900/15 bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-semibold">{business.brand}</h3>
          <p className="mt-3 text-sm text-emerald-100/85">{business.location}</p>
          <p className="mt-2 text-sm text-emerald-100/85">{business.expansionVision}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-emerald-200">{locale === "sw" ? "Mawasiliano" : "Contact"}</h4>
          <div className="mt-3 space-y-2">
            {business.whatsappContacts.map((contact) => (
              <PhoneActionLink
                key={contact.key}
                phone={contact.phone}
                whatsappHref={contact.href}
                className="block text-sm underline decoration-emerald-200/40 underline-offset-4 hover:decoration-emerald-50"
              >
                {contact.display}
              </PhoneActionLink>
            ))}
          </div>
          <a
            href={`mailto:${business.email}`}
            className="mt-2 block text-sm underline decoration-emerald-200/40 underline-offset-4 hover:decoration-emerald-50"
          >
            {business.email}
          </a>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 px-3 py-1 hover:bg-emerald-900"
                >
                  <Icon className="h-4 w-4" />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-emerald-200">{locale === "sw" ? "Bei" : "Pricing"}</h4>
          <p className="mt-3 text-sm text-emerald-100/90">
            {locale === "sw" ? business.pricingNoteSw : business.pricingNoteEn}
          </p>
          <Link href="/booking" className="mt-4 inline-block rounded-full bg-maroon-700 px-4 py-2 text-sm font-semibold text-white hover:bg-maroon-600">
            Request quote
          </Link>
        </div>
      </div>
    </footer>
  );
};
