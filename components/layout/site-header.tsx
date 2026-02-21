"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/business";
import { useLocale } from "@/components/providers/locale-provider";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { LogoMark } from "@/components/ui/logo-mark";

export const SiteHeader = () => {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark className="h-10 w-10" />
          <div>
            <p className="text-sm font-semibold text-emerald-950">Rose Changa</p>
            <p className="text-xs uppercase tracking-[0.18em] text-maroon-900">Herbalist Africa</p>
          </div>
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
          <Link href="/booking" className="rounded-full bg-maroon-900 px-4 py-2 text-xs font-semibold text-white hover:bg-maroon-800">
            {locale === "sw" ? "Book Ushauri" : "Book Consult"}
          </Link>
        </div>
      </div>
    </header>
  );
};
