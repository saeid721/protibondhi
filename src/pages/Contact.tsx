import { MapPin, Phone, Mail } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
import { site } from '@/data/site'
import SocialLinks from '@/components/common/SocialLinks'
const rows=[{I:MapPin,t:site.address},{I:Phone,t:site.phone},{I:Mail,t:site.email}]
export default function Contact(){return <><PageHead title="যোগাযোগ" sub="আমাদের সাথে কথা বলুন।"/>
<section className="mx-auto max-w-3xl space-y-4 px-5 py-14">{rows.map(({I,t})=><p key={t} className="flex items-start gap-4 rounded-2xl bg-surface p-5"><I className="shrink-0 text-primary"/>{t}</p>)}
<div className="rounded-3xl bg-navy p-6 text-white md:p-8"><h2 className="text-xl font-bold">সোশ্যাল মিডিয়ায় আমরা</h2><p className="mt-1 text-white/75">খবর, ছবি ও কার্যক্রমের হালনাগাদ পেতে অনুসরণ করুন।</p><SocialLinks tone="dark" labels className="mt-5"/></div></section></>}
