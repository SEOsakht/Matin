'use client'

import { supabase } from '@/lib/supabaseClient'

export default function LoginButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      ورود با گوگل
    </button>
  )
}