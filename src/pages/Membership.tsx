import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PageHead from '@/components/common/PageHead'
import { members, site } from '@/data/site'
const schema=z.object({name:z.string().min(3,'পূর্ণ নাম লিখুন'),phone:z.string().regex(/^(\+?88)?01[3-9]\d{8}$/,'সঠিক মোবাইল নম্বর দিন'),type:z.string().min(1),address:z.string().min(5,'ঠিকানা লিখুন')})
type F=z.infer<typeof schema>
const labels={name:'পূর্ণ নাম',phone:'মোবাইল নম্বর',address:'ঠিকানা'}
export default function Membership(){const {register,handleSubmit,formState:{errors}}=useForm<F>({resolver:zodResolver(schema),defaultValues:{type:members[1].t}})
const send=(d:F)=>{const m=encodeURIComponent(`সদস্য আবেদন\nনাম: ${d.name}\nমোবাইল: ${d.phone}\nধরন: ${d.type}\nঠিকানা: ${d.address}`);window.open(`https://wa.me/${site.whatsapp}?text=${m}`,'_blank')}
const inp='mt-1 w-full rounded-xl border border-black/20 px-4 py-3 min-h-12'
return <><PageHead title="সদস্যপদ" sub="সাধারণ সদস্য হতে আবেদন করুন; কার্যনির্বাহী কমিটির অনুমোদনের পর সদস্যপদ কার্যকর হবে।"/>
<section className="mx-auto max-w-6xl px-5 py-14"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{members.map(m=><div key={m.t} className="rounded-2xl border border-primary/20 p-6"><h3 className="text-lg font-semibold text-primary">{m.t}</h3><p className="mt-2 text-sm">{m.d}</p><p className="mt-4 font-semibold text-navy">{m.f}</p></div>)}</div>
<form onSubmit={handleSubmit(send)} noValidate className="mx-auto mt-12 max-w-xl rounded-3xl bg-surface p-6 md:p-8"><h2 className="text-2xl font-bold text-navy">সদস্যপদের আবেদন</h2>
{(['name','phone','address'] as const).map(k=><label key={k} className="mt-4 block font-medium">{labels[k]}<input {...register(k)} className={inp}/><span className="text-sm text-red-700">{errors[k]?.message}</span></label>)}
<label className="mt-4 block font-medium">সদস্যের ধরন<select {...register('type')} className={inp}>{members.map(m=><option key={m.t}>{m.t}</option>)}</select></label>
<button className="btn mt-6 w-full bg-primary text-white">আবেদন পাঠান</button><p className="mt-3 text-sm text-ink/70">আবেদন WhatsApp-এ {site.nameBn}-এর কাছে যাবে।</p></form></section></>}
