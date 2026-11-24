import { User } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import { team, advisors } from '@/data/site'
const Card=({m,big}:{m:{n:string;r:string;img:string};big?:boolean})=><div className="rounded-2xl border border-primary/15 bg-white p-4 text-center"><div className={`mx-auto overflow-hidden rounded-2xl bg-primary-soft ${big?'size-36 md:size-44':'size-24 md:size-28'}`}>{m.img?<img src={m.img} alt={m.n} loading="lazy" width={176} height={176} className="size-full object-cover object-top"/>:<div className="flex size-full items-center justify-center text-primary"><User className="size-10"/></div>}</div><h3 className={`mt-3 font-semibold text-navy ${big?'text-xl':'text-base'}`}>{m.n}</h3><p className="text-sm text-primary">{m.r}</p></div>
export default function Team(){const g=(k:string)=>team.filter(m=>m.g===k)
return <><PageHead title="আমাদের টিম" sub="গাবতলী প্রতিবন্ধী উন্নয়ন সংস্থার নেতৃত্ব ও সদস্যবৃন্দ।"/>
<section className="mx-auto max-w-6xl px-5 py-14"><h2 className="text-2xl font-bold text-navy">নেতৃত্ব</h2>
<div className="mt-6 grid gap-5 sm:max-w-xl sm:grid-cols-2">{g('lead').map(m=><Card key={m.n} m={m} big/>)}</div>
<h2 className="mt-14 text-2xl font-bold text-navy">উপদেষ্টাবৃন্দ</h2>
<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">{advisors.map(m=><Card key={m.n} m={m}/>)}</div>
<h2 className="mt-14 text-2xl font-bold text-navy">কার্যনির্বাহী পরিষদ</h2>
<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">{g('exec').map(m=><Card key={m.n} m={m}/>)}</div>
<h2 className="mt-14 text-2xl font-bold text-navy">সদস্যবৃন্দ</h2>
<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">{g('member').map(m=><Card key={m.n} m={m}/>)}</div></section></>}
