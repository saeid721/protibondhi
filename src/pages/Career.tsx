import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { GraduationCap, HeartPulse, Trees, Megaphone, Monitor } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import Empty from '@/components/common/Empty'
import { openings } from '@/data/content'
import { site } from '@/data/site'
const areas=[{I:GraduationCap,t:'শিক্ষা সহায়ক',d:'শিক্ষা উপকরণ বিতরণ ও পড়াশোনায় সহায়তা'},{I:HeartPulse,t:'স্বাস্থ্য সচেতনতা',d:'স্বাস্থ্য সচেতনতা ও চিকিৎসা সেবায় সহযোগিতা'},{I:Trees,t:'বৃক্ষরোপন ও পরিচ্ছন্নতা',d:'বৃক্ষরোপন ও পরিষ্কার-পরিচ্ছন্নতা কর্মসূচি'},{I:Megaphone,t:'প্রচার ও যোগাযোগ',d:'সামাজিক মাধ্যমে প্রচার ও সচেতনতা'},{I:Monitor,t:'কম্পিউটার প্রশিক্ষক',d:'ভবিষ্যৎ যুব কম্পিউটার প্রশিক্ষণ কর্মসূচির জন্য'}]
const schema=z.object({name:z.string().min(3,'নাম লিখুন'),phone:z.string().regex(/^(\+?88)?01[3-9]\d{8}$/,'সঠিক মোবাইল নম্বর দিন'),area:z.string(),note:z.string().optional()})
type F=z.infer<typeof schema>
export default function Career(){const {register,handleSubmit,formState:{errors}}=useForm<F>({resolver:zodResolver(schema),defaultValues:{area:areas[0].t}})
const send=(d:F)=>window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`স্বেচ্ছাসেবক আবেদন\nনাম: ${d.name}\nমোবাইল: ${d.phone}\nআগ্রহের ক্ষেত্র: ${d.area}\n${d.note??''}`)}`,'_blank')
const inp='mt-1 w-full rounded-xl border border-black/20 px-4 py-3 min-h-12'
return <><PageHead title="ক্যারিয়ার ও স্বেচ্ছাসেবা" sub="আমাদের সাথে কাজ করুন। সংস্থা একটি স্বেচ্ছাসেবী প্রতিষ্ঠান।"/>
<section className="mx-auto max-w-5xl px-5 py-12 md:py-16"><h2 className="text-2xl font-bold text-navy">চলমান নিয়োগ</h2>
<div className="mt-5">{openings.length?openings.map(o=><div key={o.title} className="mb-3 rounded-2xl border p-5"><p className="text-sm text-primary">{o.type}</p><h3 className="font-bold text-navy">{o.title}</h3><p>{o.desc}</p></div>):<Empty t="এখন কোনো শূন্যপদ নেই" d="নিয়োগ হলে এখানে জানানো হবে। জনবল নিয়োগ তিন সদস্যের নিয়োগ কমিটির মাধ্যমে সরকারি বিধি অনুসারে হয়।"/>}</div>
<h2 className="mt-14 text-2xl font-bold text-navy">স্বেচ্ছাসেবক হিসেবে যুক্ত হওয়ার ক্ষেত্র</h2>
<div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{areas.map(({I,t,d})=><div key={t} className="rounded-2xl bg-primary-soft p-5"><I className="size-8 text-primary"/><h3 className="mt-3 font-bold text-navy">{t}</h3><p className="mt-1 text-sm text-ink/75">{d}</p></div>)}</div>
<form onSubmit={handleSubmit(send)} noValidate className="mx-auto mt-12 max-w-xl rounded-3xl bg-surface p-6 md:p-8"><h2 className="text-2xl font-bold text-navy">স্বেচ্ছাসেবক হতে আগ্রহী?</h2>
{(['name','phone'] as const).map(k=><label key={k} className="mt-4 block font-medium">{k==='name'?'পূর্ণ নাম':'মোবাইল নম্বর'}<input {...register(k)} className={inp}/><span className="text-sm text-red-700">{errors[k]?.message}</span></label>)}
<label className="mt-4 block font-medium">আগ্রহের ক্ষেত্র<select {...register('area')} className={inp}>{areas.map(a=><option key={a.t}>{a.t}</option>)}</select></label>
<label className="mt-4 block font-medium">নিজের সম্পর্কে (ঐচ্ছিক)<textarea {...register('note')} rows={3} className={inp}/></label>
<button className="btn mt-6 w-full bg-primary text-white">আগ্রহ জানান</button></form></section></>}
