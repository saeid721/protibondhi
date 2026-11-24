import { Link } from 'react-router-dom'
import { FileText, Download, Hourglass } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import { reports } from '@/data/content'
const facts=[['অর্থবছর','১ জুলাই – ৩০ জুন'],['অডিট','প্রতি বছর রেজিস্ট্রেশন কর্তৃপক্ষ বা চার্টার্ড একাউন্ট্যান্ট দ্বারা'],['ব্যাংক হিসাব','যৌথ স্বাক্ষরে পরিচালিত'],['রেকর্ড','ক্যাশবহি, স্টক রেজিস্টার ও ভাউচার সংরক্ষিত']]
export default function AnnualReport(){return <><PageHead title="বার্ষিক প্রতিবেদন" sub="প্রতিটি অর্থবছরের কার্যক্রম, আয়-ব্যয় ও অডিট প্রতিবেদন।"/>
<section className="mx-auto max-w-5xl px-5 py-12 md:py-16"><div className="grid gap-5 md:grid-cols-2">{reports.map(r=><div key={r.year} className="flex flex-col rounded-3xl border border-primary/15 bg-white p-6 md:p-8"><FileText className="size-10 text-primary"/><h2 className="mt-4 text-2xl font-bold text-navy">অর্থবছর {r.year}</h2><p className="mt-2 flex-1 text-ink/75">{r.note}</p>
{r.file?<a href={r.file} download className="btn mt-6 bg-primary text-white"><Download className="size-5"/>PDF ডাউনলোড</a>:<span className="btn mt-6 cursor-not-allowed bg-surface text-ink/60"><Hourglass className="size-5"/>শীঘ্রই প্রকাশিত হবে</span>}</div>)}</div>
<h2 className="mt-14 text-2xl font-bold text-navy">আমাদের আর্থিক ব্যবস্থাপনা</h2><dl className="mt-5 grid gap-px overflow-hidden rounded-2xl bg-primary/15 sm:grid-cols-2">{facts.map(([a,b])=><div key={a} className="bg-white p-5"><dt className="text-sm text-ink/60">{a}</dt><dd className="mt-1 font-semibold text-navy">{b}</dd></div>)}</dl>
<Link to="/transparency" className="btn mt-8 bg-navy text-white">আয়ের উৎস ও ব্যয়ের খাত দেখুন</Link></section></>}
