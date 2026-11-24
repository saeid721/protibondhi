import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHead from '@/components/common/PageHead'
import Empty from '@/components/common/Empty'
import { faqList, faqCats } from '@/data/content'
export default function Faqs(){const [q,setQ]=useState('');const [c,setC]=useState('সব')
const list=faqList.filter(([k,a,b])=>(c==='সব'||k===c)&&(a+b).includes(q.trim()))
return <><PageHead title="সাধারণ প্রশ্নোত্তর" sub="সদস্যপদ, অনুদান, স্বচ্ছতা ও সাহায্য নিয়ে আপনার প্রশ্নের উত্তর।"/>
<section className="mx-auto max-w-3xl px-5 py-12 md:py-16"><label className="relative block"><span className="sr-only">প্রশ্ন খুঁজুন</span><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink/50"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="প্রশ্ন খুঁজুন…" className="min-h-12 w-full rounded-full border border-black/20 py-3 pl-12 pr-4"/></label>
<div className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-2">{['সব',...faqCats].map(k=><button key={k} onClick={()=>setC(k)} aria-pressed={c===k} className={`btn min-h-11 shrink-0 ${c===k?'bg-primary text-white':'bg-primary-soft text-primary'}`}>{k}</button>)}</div>
<div className="mt-6 space-y-3">{list.length?list.map(([k,a,b])=><details key={a} className="group rounded-2xl border border-primary/20 p-5 open:bg-surface"><summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy"><span>{a}</span><ChevronDown className="size-5 shrink-0 text-primary transition group-open:rotate-180"/></summary><p className="mt-3 leading-relaxed text-ink/80">{b}</p><p className="mt-2 text-xs text-primary">{k}</p></details>):<Empty t="কোনো উত্তর মেলেনি" d="অন্য শব্দে খুঁজুন বা সরাসরি যোগাযোগ করুন."/>}</div>
<div className="mt-10 rounded-3xl bg-navy p-6 text-white md:p-8"><p className="text-xl font-bold">আপনার প্রশ্নের উত্তর পাননি?</p><Link to="/contact" className="btn mt-4 bg-white text-navy">যোগাযোগ করুন</Link></div></section></>}
