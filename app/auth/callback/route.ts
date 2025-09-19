import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  // Supabase sets cookies on the OAuth callback automatically when using auth-helpers
  return NextResponse.redirect(new URL('/', request.url))
}
