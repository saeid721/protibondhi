import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { MapPin, Scale, HeartHandshake } from 'lucide-react'
import { site } from '@/data/site'
const facts=[{I:MapPin,t:'কর্ম এলাকা',d:'সমগ্র বগুড়া জেলা'},{I:HeartHandshake,t:'সংস্থার প্রকৃতি',d:'অরাজনৈতিক ও সেবামূলক'},{I:Scale,t:'পরিচালনা',d:'১৯৬১ সালের ৪৬ নং অধ্যাদেশ অনুযায়ী'}]
const rise=(d:number)=>({initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.6,delay:d,ease:'easeOut' as const}})
export default function Hero(){return <section className="relative overflow-hidden bg-surface">
<div aria-hidden className="absolute -left-32 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-primary-soft"/>
<div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-10 md:grid-cols-12 md:gap-8 md:pb-16 md:pt-16">
<div className="md:col-span-5">
<motion.p {...rise(0)} className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">স্থাপিত ২০২৬ · গাবতলী, বগুড়া</motion.p>
<motion.h1 {...rise(.1)} className="mt-5 text-[2.1rem] font-bold leading-[1.25] text-navy sm:text-5xl md:text-[3.1rem]">{site.tagline}</motion.h1>
<motion.p {...rise(.2)} className="mt-5 max-w-md text-lg leading-relaxed text-ink/80">প্রতিবন্ধী মানুষের সুরক্ষা, শিক্ষা, স্বাস্থ্য ও স্বনির্ভরতার জন্য আমরা নিজেদের অর্থায়নে একসাথে কাজ করছি।</motion.p>
<motion.div {...rise(.3)} className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/membership" className="btn bg-primary text-white shadow-lg shadow-primary/25">সদস্য হোন</Link><Link to="/donate" className="btn border-2 border-navy text-navy">সহায়তা করুন</Link></motion.div></div>
<motion.div {...rise(.15)} className="relative md:col-span-7">
<div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full rounded-br-[4.5rem] rounded-tl-[4.5rem] bg-navy md:-bottom-4 md:-right-4"/>
<img src="/hero.webp" alt="গাবতলী প্রতিবন্ধী উন্নয়ন সংস্থার সদস্যবৃন্দ" width={1122} height={500} fetchPriority="high" className="relative aspect-[16/10] w-full rounded-br-[4.5rem] rounded-tl-[4.5rem] object-cover object-top"/>
<img src="/hero-meeting.webp" alt="কার্যনির্বাহী পরিষদের আলোচনা সভা" width={900} height={516} loading="lazy" className="absolute -bottom-6 -left-3 hidden w-44 rounded-2xl border-4 border-white object-cover shadow-xl sm:block md:-left-8 md:w-56"/>
</motion.div></div>
<div className="relative mx-auto max-w-6xl px-5 pb-12"><dl className="grid gap-px overflow-hidden rounded-2xl bg-primary/15 sm:grid-cols-3">{facts.map(({I,t,d})=><div key={t} className="flex items-start gap-3 bg-white p-5"><I className="mt-1 size-6 shrink-0 text-primary"/><div><dt className="text-sm text-ink/70">{t}</dt><dd className="font-semibold text-navy">{d}</dd></div></div>)}</dl></div></section>}
