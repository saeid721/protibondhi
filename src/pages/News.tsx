import { Newspaper } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import { news } from '@/data/content'
import { site } from '@/data/site'
export default function News(){return <><PageHead title="সংবাদ" sub="সংস্থার সাম্প্রতিক কার্যক্রম ও খবর।"/>
<section className="mx-auto max-w-5xl px-5 py-12 md:py-16"><div className="space-y-6">{news.map(n=><article key={n.t} className="overflow-hidden rounded-3xl border border-primary/15 bg-white md:grid md:grid-cols-5">
<div className="flex aspect-[16/9] items-center justify-center bg-primary-soft text-primary md:col-span-2 md:aspect-auto">{n.img?<img src={n.img} alt={n.t} loading="lazy" className="size-full object-cover"/>:<Newspaper className="size-12"/>}</div>
<div className="p-6 md:col-span-3 md:p-8"><span className="rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">{n.cat}</span><h2 className="mt-3 text-xl font-bold leading-snug text-navy md:text-2xl">{n.t}</h2><p className="mt-2 text-ink/75">{n.d}</p></div></article>)}</div>
<a href={site.facebook} target="_blank" rel="noreferrer" className="btn mt-10 bg-navy text-white">আরও খবর ফেসবুক পেজে</a></section></>}
