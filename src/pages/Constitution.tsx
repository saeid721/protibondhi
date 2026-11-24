import { FileText } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import { articles } from '@/data/site'
export default function Constitution(){return <><PageHead title="গঠনতন্ত্র" sub="সংস্থার নিয়ম, সদস্যপদ, আর্থিক ব্যবস্থাপনা ও নির্বাচনের সারসংক্ষেপ।"/>
<section className="mx-auto max-w-3xl px-5 py-14"><a href="/constitution.pdf" download className="btn bg-primary text-white"><FileText/>পূর্ণ গঠনতন্ত্র PDF ডাউনলোড</a>
<div className="mt-8 space-y-3">{articles.map(([t,d])=><details key={t} className="group rounded-2xl border border-primary/20 p-5 open:bg-surface"><summary className="cursor-pointer font-semibold text-navy">{t}</summary><p className="mt-3 leading-relaxed">{d}</p></details>)}</div></section></>}
