import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export function createSupabaseServerClient() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: fetch,
      },
    }
  )

  const cookieStore = cookies()
  // می‌توان cookieStore را برای مدیریت session استفاده کرد

  return supabase
}