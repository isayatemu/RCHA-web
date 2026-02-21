import type { Metadata } from "next";

const siteName = "Rose Changa Herbalist Africa";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rosechanga.local";

export const makeMetadata = (input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata => {
  const canonical = `${siteUrl}${input.path}`;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
};
