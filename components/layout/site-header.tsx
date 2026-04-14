"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/business";
import { useLocale } from "@/components/providers/locale-provider";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { BrandLockup } from "@/components/ui/brand-lockup";

export const SiteHeader = () => {
  const pathname = usePathname();
  const { locale } = useLocale();

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

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link
            href="/booking"
            className="rounded-full bg-maroon-900 px-3 py-2 text-[0.7rem] font-semibold text-white transition hover:bg-maroon-800 sm:px-4 sm:text-xs"
          >
            <span className="sm:hidden">{locale === "sw" ? "Ushauri" : "Consult"}</span>
            <span className="hidden sm:inline">{locale === "sw" ? "Book Ushauri" : "Book Consult"}</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-emerald-900/8 bg-white/80 lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                pathname === item.href
                  ? "bg-maroon-900 text-white shadow-sm"
                  : "bg-white text-emerald-900 ring-1 ring-emerald-900/10 hover:bg-emerald-50"
              }`}
            >
              {locale === "sw" ? item.labelSw : item.labelEn}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
