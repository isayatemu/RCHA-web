"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { AffiliateForm } from "@/components/forms/affiliate-form";

export const AffiliatePageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Affiliate / Distributor</h1>
      <p className="text-sm text-emerald-900/80">
        {locale === "sw" ? "Tunatafuta washirika wa kuaminika Tanzania na diaspora." : "We are onboarding trusted affiliate and distribution partners in Tanzania and diaspora markets."}
      </p>
      <AffiliateForm />
    </div>
  );
};
