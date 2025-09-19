# Matin — Alpha (Next 15 + @supabase/ssr)
This ZIP contains a deployment-ready Next.js 15 (App Router) project migrated to @supabase/ssr.
It implements the Metin (متین) alpha spec (anchors, annotations, Google sign-in).
## Before deploy (Supabase)
1. In Supabase > Authentication > Providers enable Google and add Redirect URL:
   `https://YOUR_DOMAIN/auth/callback`
2. In Supabase > Authentication > URL Configuration set Site URL to `https://YOUR_DOMAIN`
3. Run SQL in `supabase/schema.sql` from Supabase SQL editor to create tables.
## Vercel env vars (set these in Project Settings -> Environment Variables)
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY (optional for server operations)
## Notes
- Migrated to `@supabase/ssr` where possible.
- eslint bumped to 9.35.0 to satisfy peer deps of eslint-config-next@15.
- If Vercel warns about swc lockfile, add a lockfile by running `npm install` locally and commit package-lock.json (optional).
