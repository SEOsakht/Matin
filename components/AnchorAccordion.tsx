'use client'

import React, { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import dayjs from 'dayjs'

const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function AnchorAccordion({ anchorId }: { anchorId: string }) {
  const [open, setOpen] = useState(false)
  const [annotations, setAnnotations] = useState<any[]>([])
  const [newBody, setNewBody] = useState('')

  useEffect(()=>{ if(open) fetchAnnotations() },[open])

  async function fetchAnnotations(){ 
    const { data, error } = await supabase.from('annotations').select('*').eq('anchor_id', anchorId).order('created_at',{ascending:false}).limit(200)
    if(error) console.error(error); else setAnnotations(data||[])
  }

  async function postAnnotation(parentId: string|null=null){
    const { data: { user } } = await supabase.auth.getUser()
    if(!user){ alert('لطفا وارد شوید'); return }
    const nick = await supabase.from('matin_users').select('id,nickname').eq('supabase_id', user.id).maybeSingle()
    let authorId=null, authorName='ناشناس'
    if(nick.data){ authorId=nick.data.id; authorName=nick.data.nickname }
    const { data, error } = await supabase.from('annotations').insert([{ anchor_id: anchorId, parent_id: parentId, author_id: authorId, author_name: authorName, body: newBody }]).select().single()
    if(error){ console.error(error); alert('خطا') } else { setNewBody(''); setAnnotations(prev=>[data,...prev]) }
  }

  return (
    <div className="inline-block align-middle">
      <button aria-controls={`acc-${anchorId}`} aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="px-2 py-1 rounded border">{open?'-':'+'}</button>
      {open && (
        <div id={`acc-${anchorId}`} className="mt-2 max-w-md rounded border p-3 bg-white">
          <div className="text-sm mb-2">{annotations.length} حاشیه</div>
          <div className="space-y-3">{annotations.map(a=>(<div key={a.id} className="border p-2"><div className="text-xs">{a.author_name} • {dayjs(a.created_at).format('YYYY-MM-DD HH:mm')}</div><div className="mt-1 text-sm">{a.body}</div></div>))}</div>
          <div className="mt-3"><textarea value={newBody} onChange={e=>setNewBody(e.target.value)} className="w-full p-2 border rounded" placeholder="افزودن حاشیه..." /><div className="flex gap-2 justify-end mt-2"><button onClick={()=>postAnnotation(null)} className="px-3 py-1 rounded bg-blue-600 text-white">Post</button></div></div>
        </div>
      )}
    </div>
  )
}
