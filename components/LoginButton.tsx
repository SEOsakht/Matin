'use client'
import { createBrowserClient } from '@supabase/ssr'
export default function LoginButton() {
  const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } })
  }
  return <button onClick={handleLogin} className="px-4 py-2 rounded bg-blue-600 text-white">ورود با گوگل</button>
}
