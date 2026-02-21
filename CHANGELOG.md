# CHANGELOG

## 2026-02-21
- Added unique route-level SEO metadata (title/description/OpenGraph/Twitter/canonical) using server wrappers and shared metadata helpers.
- Added metadata generation for dynamic product pages (`/products/[slug]`).
- Refactored page rendering into reusable client page components under `components/pages/` for clean server/client separation.
- Replaced text-only social links with real SVG icon set (`TikTok`, `Instagram`, `Facebook`, `WhatsApp`).
- Integrated form pipeline with provider support:
  - Supabase REST insert for `form_submissions` table.
  - Resend email notifications for new submissions.
  - Env-driven mode with local JSON fallback.
- Added environment template `.env.example` for provider configuration.
- Added Supabase schema file at `docs/supabase-form-submissions.sql`.
- Enhanced form UX with API error handling and clear user feedback.

## 2026-02-21 (initial build)
- Scaffolded Next.js App Router project with TypeScript + Tailwind.
- Implemented full route structure:
  - `/`, `/about`, `/products`, `/products/[slug]`, `/support`, `/testimonials`, `/stories`, `/booking`, `/ask`, `/faq`, `/affiliate`, `/shop`, `/contact`.
- Added modular architecture:
  - `components/layout`, `components/sections`, `components/forms`, `components/providers`, `components/ui`.
  - Centralized data in `data/` (business, products, support areas, testimonials, stories, FAQ, YouTube, assets map).
- Implemented bilingual language toggle (Swahili/English) with persisted preference.
- Added compliance-focused disclaimer component and applied it on Home/Support/Product pages.
- Added social links config (TikTok live + Instagram/Facebook/WhatsApp placeholders in config).
- Implemented pricing note as dose-based with request quote flow.
- Added media architecture using `imgs&vids` as source via API route (`/api/media/[...path]`) and `data/assets.ts` mapping.
- Added responsive YouTube gallery with thumbnail-to-player interaction.
- Added sticky WhatsApp CTA.
- Built lightweight form APIs (`booking`, `ask`, `affiliate`) that store JSON in `submissions/`.
- Added PWA-ready files:
  - `public/manifest.webmanifest`
  - `public/sw.js`
  - service worker registration component.
- Added brand assets:
  - `public/brand/logo.svg`
  - `public/brand/mark.svg`
  - `app/icon.svg` for favicon/app icon.
- Added prompt separation file under `PROMPTS/upgrade-brief.md`.
