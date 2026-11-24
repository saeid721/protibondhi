import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Phone, MapPin, ChevronDown, Mail } from 'lucide-react'
import SocialLinks from '@/components/common/SocialLinks'
import { groups } from '@/data/menu'
import MobileNav from './MobileNav'
import { nav, moreNav, site } from '@/data/site'
function MoreMenu(){const [o,setO]=useState(false);const {pathname}=useLocation();const r=useRef<HTMLDivElement>(null)
useEffect(()=>setO(false),[pathname])
useEffect(()=>{const c=(e:MouseEvent)=>{if(r.current&&!r.current.contains(e.target as Node))setO(false)};const k=(e:KeyboardEvent)=>e.key==='Escape'&&setO(false);document.addEventListener('mousedown',c);document.addEventListener('keydown',k);return()=>{document.removeEventListener('mousedown',c);document.removeEventListener('keydown',k)}},[])
return <div ref={r} className="relative"><button aria-expanded={o} aria-haspopup="true" onClick={()=>setO(!o)} className="flex items-center gap-1 rounded-full px-4 py-2 font-medium hover:text-primary">আরও<ChevronDown className={`size-4 transition ${o?'rotate-180':''}`}/></button>
{o&&<div className="absolute right-0 top-full mt-3 grid w-[46rem] max-w-[92vw] grid-cols-3 gap-6 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5">{groups.map(g=><div key={g.title}><p className="mb-2 text-sm font-semibold text-primary">{g.title}</p>{g.items.map(({to,label,I})=><Link key={to} to={to} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-primary-soft"><I className="size-5 text-primary"/>{label}</Link>)}</div>)}</div>}</div>}
export default function Layout(){
const cls=({isActive}:{isActive:boolean})=>`rounded-full px-4 py-2 font-medium ${isActive?'bg-primary-soft text-primary':'hover:text-primary'}`
return <><a href="#main" className="sr-only focus:not-sr-only">মূল অংশে যান</a>
<div className="hidden bg-navy text-sm text-white/90 lg:block"><div className="mx-auto flex h-11 max-w-6xl items-center justify-between px-5"><div className="flex items-center gap-6"><a href={`tel:${site.phone.replace(/-/g,'')}`} className="flex items-center gap-2 hover:text-white"><Phone className="size-4"/>{site.phone}</a><a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="size-4"/>{site.email}</a></div><div className="flex items-center gap-3"><span className="text-white/70">আমাদের অনুসরণ করুন</span><SocialLinks tone="dark" className="[&_a]:size-8 [&_a]:min-h-0 [&_svg]:size-4"/></div></div></div>
<header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur"><div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
<Link to="/" aria-label="গাবতলী প্রতিবন্ধী উন্নয়ন সংস্থা – হোম"><img src="/logo.png" alt="গাবতলী প্রতিবন্ধী উন্নয়ন সংস্থার লোগো" width={140} height={57} className="h-11 w-auto md:h-12"/></Link>
<nav aria-label="ডেস্কটপ মেনু" className="hidden items-center gap-1 lg:flex">{nav.filter(n=>!['/transparency','/contact'].includes(n.to)).map(n=><NavLink key={n.to} to={n.to} className={cls} end>{n.label}</NavLink>)}<MoreMenu/></nav>
<Link to="/donate" className="btn hidden bg-primary text-white lg:inline-flex">সহায়তা করুন</Link>
<a href={`tel:${site.phone.replace(/-/g,'')}`} aria-label="ফোন করুন" className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary lg:hidden"><Phone className="size-5"/></a></div></header>
<main id="main"><Outlet/></main>
<footer className="bg-navy pb-24 text-white lg:pb-0"><div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-2"><div><p className="text-xl font-bold">{site.nameBn}</p><p className="mt-2 text-white/70">সমান অধিকার, মর্যাদা ও উন্নয়নের অঙ্গীকার</p><p className="mt-6 text-sm font-semibold text-white/80">আমাদের সাথে থাকুন</p><SocialLinks tone="dark" className="mt-3"/></div>
<div className="space-y-2 text-white/85"><p className="flex flex-wrap gap-x-4">{moreNav.map(n=><Link key={n.to} to={n.to} className="underline">{n.label}</Link>)}</p><p className="flex gap-2"><MapPin className="shrink-0"/>{site.address}</p><p className="flex gap-2"><Phone/>{site.phone}</p></div></div>
<p className="border-t border-white/10 py-4 text-center text-sm text-white/60">© ২০২৬ {site.nameBn}</p></footer><MobileNav/><ScrollRestoration/></>}
