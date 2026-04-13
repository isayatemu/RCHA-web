"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/business";
import { useLocale } from "@/components/providers/locale-provider";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { BrandLockup } from "@/components/ui/brand-lockup";

export const SiteHeader = () => {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" aria-label="Rose Changa Herbalist Africa" className="min-w-0 shrink">
          <BrandLockup className="scale-[0.84] sm:scale-100 origin-left" markClassName="h-10 w-10 sm:h-11 sm:w-11" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${pathname === item.href ? "text-maroon-900" : "text-emerald-900 hover:text-maroon-900"}`}
            >
              {locale === "sw" ? item.labelSw : item.labelEn}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <Link href="/booking" className="rounded-full bg-maroon-900 px-4 py-2 text-xs font-semibold text-white hover:bg-maroon-800">
            {locale === "sw" ? "Book Ushauri" : "Book Consult"}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label={locale === "sw" ? "Fungua menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-900/15 bg-white text-emerald-900 shadow-sm transition hover:bg-emerald-50"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-emerald-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,246,0.95))] px-4 py-4 shadow-[0_16px_32px_rgba(11,47,34,0.08)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-maroon-900 text-white shadow-sm"
                      : "bg-white text-emerald-900 shadow-sm ring-1 ring-emerald-900/8 hover:-translate-y-0.5 hover:bg-emerald-50"
                  }`}
                >
                  {locale === "sw" ? item.labelSw : item.labelEn}
                </Link>
              );
            })}

            <Link
              href="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              {locale === "sw" ? "Anza Ushauri" : "Start Consultation"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
