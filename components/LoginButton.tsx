'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
export default function LoginButton() {
  const supabase = createClientComponentClient()
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } })
  }
  return <button onClick={handleLogin} className="px-4 py-2 rounded bg-blue-600 text-white">ورود با گوگل</button>
}
