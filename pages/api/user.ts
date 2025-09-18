import type { NextApiRequest, NextApiResponse } from 'next'
import { createSupabaseServerClient } from '@/lib/supabaseServer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createSupabaseServerClient()
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  if (error) return res.status(400).json({ error: error.message })

  res.status(200).json({ user })
}