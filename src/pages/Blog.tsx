import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import { posts } from '@/data/content'
const cats=['সব',...Array.from(new Set(posts.map(p=>p.cat)))]
export default function Blog(){const [c,setC]=useState('সব');const list=posts.filter(p=>c==='সব'||p.cat===c)
return <><PageHead title="ব্লগ" sub="সংস্থা, সদস্যপদ, স্বচ্ছতা ও অধিকার নিয়ে লেখা।"/>
<section className="mx-auto max-w-6xl px-5 py-12 md:py-16"><div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2">{cats.map(k=><button key={k} onClick={()=>setC(k)} aria-pressed={c===k} className={`btn shrink-0 min-h-11 ${c===k?'bg-primary text-white':'bg-primary-soft text-primary'}`}>{k}</button>)}</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p,i)=><Link key={p.slug} to={`/blog/${p.slug}`} className={`group overflow-hidden rounded-3xl border border-primary/15 bg-white transition hover:shadow-xl ${i===0&&c==='সব'?'lg:col-span-3 lg:grid lg:grid-cols-2':''}`}>
<div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary to-navy text-white/90 lg:aspect-auto lg:min-h-64"><Quote className="size-14 opacity-80 transition group-hover:scale-110"/></div>
<div className="p-6 md:p-8"><span className="rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">{p.cat}</span><h2 className="mt-3 text-xl font-bold leading-snug text-navy md:text-2xl">{p.title}</h2><p className="mt-2 text-ink/75">{p.excerpt}</p><span className="mt-4 inline-block font-semibold text-primary underline underline-offset-4">পড়ুন</span></div></Link>)}</div></section></>}
