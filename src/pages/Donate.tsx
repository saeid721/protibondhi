import { Link } from 'react-router-dom'
import { HandHeart, Users, Wallet } from 'lucide-react'
import PageHead from '@/components/common/PageHead'
const ways=[{I:Wallet,t:'দাতা সদস্য',d:'একবারে ৩০,০০০ টাকা বা সমমূল্যের সম্পদ। মেয়াদ ২ বছর।'},{I:HandHeart,t:'আজীবন সদস্য',d:'একবারে ৫০,০০০ টাকা। সাধারণ সদস্যের মতো ভোটাধিকার ও নির্বাচনে অংশগ্রহণ।'},{I:Users,t:'স্বেচ্ছাসেবক / সাধারণ সদস্য',d:'ভর্তি ফি ৫০০ টাকা, মাসিক চাঁদা ১০০ টাকা।'}]
const pay=[['বিকাশ (পার্সোনাল)','01XXX-XXXXXX'],['নগদ (পার্সোনাল)','01XXX-XXXXXX'],['ব্যাংক হিসাব','ব্যাংকের নাম, হিসাব নম্বর, শাখা (সভাপতি ও সাধারণ সম্পাদকের যৌথ স্বাক্ষরে পরিচালিত)']]
export default function Donate(){return <><PageHead title="সহায়তা করুন" sub="আপনার প্রতিটি অনুদান নলকূপ, শিক্ষা, চিকিৎসা ও প্রশিক্ষণে ব্যয় হয়। হিসাব স্বচ্ছতা পাতায় দেখুন।"/>
<section className="mx-auto max-w-6xl px-5 py-14"><div className="grid gap-4 md:grid-cols-3">{ways.map(({I,t,d})=><div key={t} className="rounded-2xl border border-primary/20 p-6"><I className="size-9 text-primary"/><h3 className="mt-3 text-xl font-semibold text-navy">{t}</h3><p className="mt-1">{d}</p></div>)}</div>
<div className="mt-10 rounded-3xl bg-navy p-6 text-white md:p-8"><h2 className="text-2xl font-bold">অনুদান পাঠানোর মাধ্যম</h2><dl className="mt-4 space-y-3">{pay.map(([k,v])=><div key={k}><dt className="font-semibold">{k}</dt><dd className="text-white/80">{v}</dd></div>)}</dl><p className="mt-4 text-sm text-white/70">অনুদান পাঠানোর পর ট্রানজেকশন আইডিসহ আমাদের জানান; আমরা রশিদ দেব।</p></div>
<Link to="/membership" className="btn mt-8 bg-primary text-white">সদস্য হিসেবে আবেদন করুন</Link></section></>}
