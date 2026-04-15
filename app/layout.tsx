import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { ServiceWorkerRegister } from "@/components/providers/sw-register";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rosechanga.local";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rose Changa Herbalist Africa",
    template: "%s | Rose Changa Herbalist Africa",
  },
  description: "Bilingual herbal wellness support website for Rose Changa Herbalist Africa in Arusha, Tanzania.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          <ServiceWorkerRegister />
          <div className="min-h-screen bg-ivory text-emerald-950">
            <SiteHeader />
            <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">{children}</main>
            <SiteFooter />
            <WhatsAppFloat />
          </div>
        </AppProviders>
        <SpeedInsights />
      </body>
    </html>
  );
}
