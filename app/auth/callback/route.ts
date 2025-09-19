import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  return NextResponse.redirect(new URL('/', request.url))
}
