import { useState } from 'react'
import { Check } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import { programs } from '@/data/site'
export default function Programs(){const [t,setT]=useState<'current'|'future'>('current')
return <><PageHead title="কার্যক্রম" sub="আমাদের চলমান ও ভবিষ্যৎ পরিকল্পনা।"/>
<section className="mx-auto max-w-4xl px-5 py-14"><div role="tablist" className="flex gap-2">{(['current','future'] as const).map(k=><button key={k} role="tab" aria-selected={t===k} onClick={()=>setT(k)} className={`btn ${t===k?'bg-primary text-white':'bg-primary-soft text-primary'}`}>{k==='current'?'বর্তমান কার্যক্রম':'ভবিষ্যৎ কার্যক্রম'}</button>)}</div>
<ul className="mt-8 grid gap-3 sm:grid-cols-2">{programs[t].map(p=><li key={p} className="flex gap-3 rounded-2xl border border-primary/15 p-5"><Check className="shrink-0 text-primary"/>{p}</li>)}</ul></section></>}
