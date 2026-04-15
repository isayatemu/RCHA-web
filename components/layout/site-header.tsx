"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/business";
import { useLocale } from "@/components/providers/locale-provider";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
          <ThemeToggle />
          <LanguageToggle />
          <Link
            href="/booking"
            className="rounded-full bg-maroon-900 px-3 py-2 text-[0.7rem] font-semibold text-white transition hover:bg-maroon-800 sm:px-4 sm:text-xs"
          >
            {locale === "sw" ? "Book Ushauri" : "Book Consult"}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            aria-label={locale === "sw" ? "Fungua menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(241,249,243,0.92))] px-3 py-2 text-emerald-900 shadow-[0_10px_24px_rgba(11,47,34,0.08)] transition hover:-translate-y-0.5"
          >
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
              {locale === "sw" ? "Menu" : "Menu"}
            </span>
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
        <div className="lg:hidden">
          <button
            type="button"
            aria-label={locale === "sw" ? "Funga menu" : "Close menu"}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 top-[72px] z-40 bg-emerald-950/18 backdrop-blur-[1px]"
          />
          <div className="fixed inset-x-4 top-[5.2rem] z-50 overflow-hidden rounded-[1.8rem] border border-emerald-900/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.98),rgba(243,249,244,0.95))] shadow-[0_28px_56px_rgba(11,47,34,0.16)]">
            <div className="relative overflow-hidden p-4">
              <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-emerald-200/50 blur-2xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-amber-100/70 blur-2xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-emerald-800/70">
                    {locale === "sw" ? "Chagua Sehemu" : "Quick Access"}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-emerald-950">
                    {locale === "sw" ? "Karibu ndani ya Rose Changa" : "Explore Rose Changa"}
                  </h3>
                  <p className="mt-1 text-sm text-emerald-900/75">
                    {locale === "sw"
                      ? "Tembea kwa haraka kwenye kurasa muhimu bila kuscroll au kusogeza pembeni."
                      : "Jump into the key pages without extra scrolling or horizontal movement."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-emerald-900 shadow-sm ring-1 ring-emerald-900/10 transition hover:bg-white"
                  aria-label={locale === "sw" ? "Funga menu" : "Close menu"}
                >
                  <span className="text-lg leading-none">x</span>
                </button>
              </div>

              <nav className="relative mt-4 grid grid-cols-2 gap-3">
                {navLinks.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group rounded-[1.35rem] border p-4 text-left transition ${
                        isActive
                          ? "border-maroon-900/10 bg-maroon-900 text-white shadow-[0_14px_28px_rgba(105,28,52,0.18)]"
                          : "border-emerald-900/10 bg-white/90 text-emerald-950 shadow-sm hover:-translate-y-0.5 hover:border-emerald-900/15 hover:bg-emerald-50/80"
                      }`}
                    >
                      <span
                        className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                          isActive ? "bg-white/18 text-white" : "bg-emerald-50 text-emerald-800"
                        }`}
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="block text-sm font-semibold">
                        {locale === "sw" ? item.labelSw : item.labelEn}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="relative mt-4 rounded-[1.4rem] bg-[linear-gradient(135deg,#0f5a43,#157052)] p-4 text-white shadow-[0_18px_36px_rgba(15,90,67,0.22)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                  {locale === "sw" ? "Hatua ya Haraka" : "Quick Step"}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">
                      {locale === "sw" ? "Anza ushauri binafsi wa afya" : "Start a personal consultation"}
                    </p>
                    <p className="mt-1 text-xs text-white/78">
                      {locale === "sw"
                        ? "Pata mwongozo wa bidhaa na ushauri wa hatua inayofuata."
                        : "Get guidance on products and the right next step."}
                    </p>
                  </div>
                  <Link
                    href="/booking"
                    onClick={() => setIsMenuOpen(false)}
                    className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-[#f8f3e8]"
                  >
                    {locale === "sw" ? "Ushauri" : "Consult"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
