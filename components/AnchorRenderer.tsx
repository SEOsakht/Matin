'use client'

import React from 'react'
import AnchorAccordion from './AnchorAccordion'

export default function AnchorRenderer({ text }: { text: string }) {
  const parts: any[] = []
  let i = 0
  while (i < text.length) {
    const start = text.indexOf('\\', i)
    if (start === -1) { parts.push({ type: 'text', content: text.slice(i) }); break }
    if (start > i) parts.push({ type: 'text', content: text.slice(i, start) })
    const end = text.indexOf('///', start)
    if (end === -1) { parts.push({ type: 'text', content: text.slice(start) }); break }
    const inner = text.slice(start+2, end).trim()
    const id = genAnchorId()
    parts.push({ type: 'anchor', content: inner, anchorId: id })
    i = end + 3
  }
  return <div>{parts.map((p, idx) => p.type === 'text' ? <span key={idx}>{p.content}</span> : <span key={idx} className="inline-flex items-center gap-2"><span className="px-2 py-0.5 bg-yellow-100 rounded">{p.content}</span><AnchorAccordion anchorId={p.anchorId} /></span>)}</div>
}

function genAnchorId(){const d=new Date();const yy=String(d.getFullYear()).slice(-2);const mm=String(d.getMonth()+1).padStart(2,'0');const dd=String(d.getDate()).padStart(2,'0');const hh=String(d.getHours()).padStart(2,'0');const min=String(d.getMinutes()).padStart(2,'0');const ss=String(d.getSeconds()).padStart(2,'0');return `${yy}${mm}${dd}${hh}${min}${ss}`}
