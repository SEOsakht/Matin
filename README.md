# Matin — Alpha (Next 15 + @supabase/ssr) — Vercel-ready

This ZIP contains a deployment-ready Next.js 15 (App Router) project migrated to @supabase/ssr,
with corrected relative imports and a best-effort package-lock.json included.

IMPORTANT: I cannot run `npm install` in this environment, so package-lock.json is synthesized
from package.json to reduce Vercel warnings. If you encounter issues, regenerate package-lock.json
locally by running `npm install` and commit it to the repo.

## Steps (quick)
1. In Supabase enable Google provider and add Redirect URL: `https://YOUR_DOMAIN/auth/callback`
2. Set Site URL in Supabase Auth config: `https://YOUR_DOMAIN`
3. Run SQL in `supabase/schema.sql`
4. On Vercel set env vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY (optional)
5. Deploy (push to GitHub or upload ZIP).

If any build warnings persist about SWC, regenerate package-lock.json locally and push it.
