import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PageHead from '@/components/common/PageHead'
import { site } from '@/data/site'
const kinds=['শিক্ষা সহায়তা','চিকিৎসা সহায়তা','আর্থিক সহায়তা','নলকূপ','প্রশিক্ষণ/কর্মসংস্থান','অন্যান্য']
const schema=z.object({name:z.string().min(3,'নাম লিখুন'),phone:z.string().regex(/^(\+?88)?01[3-9]\d{8}$/,'সঠিক মোবাইল নম্বর দিন'),kind:z.string(),detail:z.string().min(10,'কমপক্ষে ১০ অক্ষরে সমস্যার বিবরণ দিন')})
type F=z.infer<typeof schema>
const L={name:'আবেদনকারীর নাম',phone:'মোবাইল নম্বর'}
export default function Help(){const {register,handleSubmit,formState:{errors}}=useForm<F>({resolver:zodResolver(schema),defaultValues:{kind:kinds[0]}})
const send=(d:F)=>window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`সহায়তার আবেদন\nনাম: ${d.name}\nমোবাইল: ${d.phone}\nধরন: ${d.kind}\nবিবরণ: ${d.detail}`)}`,'_blank')
const inp='mt-1 w-full rounded-xl border border-black/20 px-4 py-3 min-h-12'
return <><PageHead title="সাহায্য চান" sub="প্রতিবন্ধী ব্যক্তি বা অসহায় পরিবার নিজে বা অন্য কেউ আবেদন করতে পারেন।"/>
<section className="mx-auto max-w-xl px-5 py-14"><form onSubmit={handleSubmit(send)} noValidate className="rounded-3xl bg-surface p-6 md:p-8">
{(['name','phone'] as const).map(k=><label key={k} className="mb-4 block font-medium">{L[k]}<input {...register(k)} className={inp}/><span className="text-sm text-red-700">{errors[k]?.message}</span></label>)}
<label className="mb-4 block font-medium">কী ধরনের সহায়তা দরকার<select {...register('kind')} className={inp}>{kinds.map(k=><option key={k}>{k}</option>)}</select></label>
<label className="block font-medium">সংক্ষেপে বিবরণ<textarea {...register('detail')} rows={4} className={inp}/><span className="text-sm text-red-700">{errors.detail?.message}</span></label>
<button className="btn mt-6 w-full bg-primary text-white">আবেদন পাঠান</button><p className="mt-3 text-sm text-ink/70">আপনার তথ্য শুধু সংস্থার কাছে WhatsApp-এ যাবে। যাচাইয়ের পর কমিটি যোগাযোগ করবে।</p></form></section></>}
