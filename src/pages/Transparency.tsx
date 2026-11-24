import PageHead from '@/components/common/PageHead'
import { income, expense } from '@/data/site'
const List=({t,a,c}:{t:string;a:string[];c:string})=><div className="rounded-2xl border p-6"><h2 className={`text-xl font-bold ${c}`}>{t}</h2><ul className="mt-4 space-y-2">{a.map(x=><li key={x} className="rounded-lg bg-surface px-4 py-3">{x}</li>)}</ul></div>
export default function Transparency(){return <><PageHead title="স্বচ্ছতা" sub="অর্থবছর ১ জুলাই থেকে ৩০ জুন। প্রতি বছর রেজিস্ট্রেশন কর্তৃপক্ষ বা চার্টার্ড একাউন্ট্যান্ট দ্বারা অডিট করা হয়।"/>
<section className="mx-auto grid max-w-5xl gap-5 px-5 py-14 md:grid-cols-2"><List t="আয়ের উৎস" a={income} c="text-primary"/><List t="ব্যয়ের খাত" a={expense} c="text-navy"/></section></>}
