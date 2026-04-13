# Rose Changa Herbalist Africa

## Local development
- `npm install`
- `npm run dev`

## SEO metadata
Each route now has unique metadata via server wrappers and `data/seo.ts`.

## Social icons
SVG social icons are rendered from `components/ui/social-icons.tsx`.

## Form providers (DB + Email)
Forms post to `/api/forms/[form]` and use provider integrations in `lib/form-integrations.ts`.

## Media folders (products)
You can now organize media in nested folders inside `imgs&vids`, for example:
- `imgs&vids/products/king-herbal-blend/cover.jpg`
- `imgs&vids/products/king-herbal-blend/gallery-1.mp4`

Use the same relative path in data files, e.g. `products/king-herbal-blend/cover.jpg`.
The media API route now supports nested paths safely.

### 1) Supabase (DB)
1. Create project in Supabase.
2. Run SQL in `docs/supabase-form-submissions.sql`.
3. Set env vars:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

### 2) Resend (Email)
Set env vars:
- `RESEND_API_KEY`
- `RESEND_FROM`
- `RESEND_TO`

### 3) Storage mode
- `FORM_STORAGE_MODE=provider` uses Supabase when configured.
- If provider is missing, app falls back to local JSON in `submissions/`.
