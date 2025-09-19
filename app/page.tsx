import LoginButton from '@/components/LoginButton'
import AnchorRenderer from '@/components/AnchorRenderer'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
export default async function Page() {
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { cookies: cookies() })
  const { data: { session } } = await supabase.auth.getSession()
  const sampleText = `متن اصلی قبل از انکور.\\این متن داخل انکور اول است/// ادامهٔ متن.\\این یک انکور دوم/// پایان.`
  return (
    <div className="space-y-6">
      <div className="flex justify-end">{session ? <div className="text-sm">سلام، {session.user.email}</div> : <LoginButton />}</div>
      <section className="prose"><AnchorRenderer text={sampleText} /></section>
    </div>
  )
}
