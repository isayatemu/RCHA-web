import { makeMetadata } from "@/lib/seo";

export const pageSeo = {
  home: makeMetadata({
    title: "Rose Changa Herbalist Africa | Herbal Wellness Support",
    description: "Trusted bilingual herbal wellness support from Arusha, Tanzania with official product pricing, HIV/AIDS Support Packages, and follow-up care.",
    path: "/",
    keywords: ["Rose Changa", "Herbalist Africa", "Arusha herbal wellness", "Swahili herbal support"],
  }),
  about: makeMetadata({
    title: "About Rose Changa | 10+ Years Traditional Wellness Experience",
    description: "Learn the history, ethics, and expansion vision of Rose Changa Herbalist Africa in Arusha and diaspora support.",
    path: "/about",
  }),
  products: makeMetadata({
    title: "Products Catalog | Rose Changa Herbalist Africa",
    description: "Browse official product prices, HIV/AIDS Support Packages, and herbal wellness products with clear guidance.",
    path: "/products",
  }),
  support: makeMetadata({
    title: "Areas We Support | Rose Changa Herbalist Africa",
    description: "Explore supportive wellness areas with clear medical caution notes and consultation pathways.",
    path: "/support",
  }),
  testimonials: makeMetadata({
    title: "Client Testimonials | Rose Changa Herbalist Africa",
    description: "Read bilingual client-reported testimonials focused on service quality and gradual wellness improvement.",
    path: "/testimonials",
  }),
  stories: makeMetadata({
    title: "Client Success Stories | Rose Changa Herbalist Africa",
    description: "Read longer client stories highlighting practical support plans, follow-up, and ethical wellness guidance.",
    path: "/stories",
  }),
  booking: makeMetadata({
    title: "Book Consultation | Rose Changa Herbalist Africa",
    description: "Submit a consultation request for product guidance, package selection, and wellness follow-up.",
    path: "/booking",
  }),
  ask: makeMetadata({
    title: "Ask the Herbalist | Rose Changa Herbalist Africa",
    description: "Ask your wellness questions in Swahili or English and receive practical consultation guidance.",
    path: "/ask",
  }),
  faq: makeMetadata({
    title: "FAQ | Rose Changa Herbalist Africa",
    description: "Find answers on HIV/AIDS Support Package pricing, product prices, safety precautions, delivery, timelines, and privacy policy updates.",
    path: "/faq",
  }),
  affiliate: makeMetadata({
    title: "Affiliate & Distributor | Rose Changa Herbalist Africa",
    description: "Apply as an affiliate or distributor partner across Tanzania and diaspora markets.",
    path: "/affiliate",
  }),
  shop: makeMetadata({
    title: "Shop Coming Soon | Rose Changa Herbalist Africa",
    description: "Preview upcoming online ordering while current orders continue through WhatsApp consultation.",
    path: "/shop",
  }),
  contact: makeMetadata({
    title: "Contact Rose Changa Herbalist Africa | Arusha, Tanzania",
    description: "Get in touch with Rose Changa Herbalist Africa at Njiro Commercial Center, Arusha for consultations.",
    path: "/contact",
  }),
};
