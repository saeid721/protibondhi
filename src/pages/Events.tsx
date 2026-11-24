import { useState } from 'react'
import { MapPin, Clock } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import Empty from '@/components/common/Empty'
import { events, fmtDate } from '@/data/content'
import { site } from '@/data/site'
export default function Events(){const [t,setT]=useState<'up'|'past'>('up');const now=new Date().setHours(0,0,0,0)
const up=events.filter(e=>+new Date(e.date)>=now).sort((a,b)=>+new Date(a.date)-+new Date(b.date));const past=events.filter(e=>+new Date(e.date)<now).sort((a,b)=>+new Date(b.date)-+new Date(a.date));const list=t==='up'?up:past
return <><PageHead title="ইভেন্ট" sub="সংস্থার সভা, অনুষ্ঠান ও কর্মসূচি।"/>
<section className="mx-auto max-w-4xl px-5 py-12 md:py-16"><div className="flex gap-2">{([['up','আসন্ন'],['past','অতীত']] as const).map(([k,l])=><button key={k} onClick={()=>setT(k)} aria-pressed={t===k} className={`btn ${t===k?'bg-primary text-white':'bg-primary-soft text-primary'}`}>{l} ({k==='up'?up.length:past.length})</button>)}</div>
<div className="mt-8 space-y-4">{list.length===0?<Empty t="এখন কোনো আসন্ন ইভেন্ট নেই" d="নতুন ইভেন্টের খবর পেতে আমাদের ফেসবুক পেজ অনুসরণ করুন।"><a href={site.facebook} target="_blank" rel="noreferrer" className="btn bg-primary text-white">ফেসবুক পেজ</a></Empty>:list.map(e=>{const d=new Date(e.date);return <article key={e.t} className="flex gap-4 rounded-3xl border border-primary/15 bg-white p-4 md:gap-6 md:p-6"><div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-navy text-white md:size-24"><span className="text-3xl font-bold leading-none">{new Intl.DateTimeFormat('bn-BD',{day:'numeric'}).format(d)}</span><span className="mt-1 text-sm">{new Intl.DateTimeFormat('bn-BD',{month:'short'}).format(d)}</span></div>
<div><h2 className="text-lg font-bold leading-snug text-navy md:text-xl">{e.t}</h2><p className="mt-1 text-sm text-ink/60">{fmtDate(e.date)}</p><p className="mt-2 text-ink/80">{e.d}</p><p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink/70"><span className="flex items-center gap-1.5"><Clock className="size-4 text-primary"/>{e.time}</span><span className="flex items-center gap-1.5"><MapPin className="size-4 text-primary"/>{e.place}</span></p></div></article>})}</div></section></>}
