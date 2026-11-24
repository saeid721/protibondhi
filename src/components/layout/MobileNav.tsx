import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Home, LayoutGrid, HandHeart, UserPlus, Menu, Info, BadgeCheck, Users, Images, LifeBuoy, ScrollText, Mail, Phone, MessageCircle } from 'lucide-react'
import { site } from '@/data/site'
import { groups } from '@/data/menu'
import SocialLinks from '@/components/common/SocialLinks'
const tabs=[{to:'/',label:'হোম',I:Home},{to:'/programs',label:'কার্যক্রম',I:LayoutGrid}]
const tabs2=[{to:'/membership',label:'সদস্যপদ',I:UserPlus}]
const more=groups.flatMap(g=>g.items)
export default function MobileNav(){
const [open,setOpen]=useState(false);const [hidden,setHidden]=useState(false);const {pathname}=useLocation();const rm=useReducedMotion()
const spring=rm?{duration:0}:{type:'spring' as const,stiffness:420,damping:34}
const moreActive=more.some(m=>m.to===pathname)
useEffect(()=>{setOpen(false);setHidden(false)},[pathname])
useEffect(()=>{let last=window.scrollY,busy=false;const on=()=>{if(busy)return;busy=true;requestAnimationFrame(()=>{const y=window.scrollY,d=y-last,end=window.innerHeight+y>=document.documentElement.scrollHeight-40;if(y<80||end)setHidden(false);else if(d>8)setHidden(true);else if(d<-8)setHidden(false);if(Math.abs(d)>8)last=y;busy=false})};window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[])
useEffect(()=>{document.body.style.overflow=open?'hidden':'';const k=(e:KeyboardEvent)=>e.key==='Escape'&&setOpen(false);window.addEventListener('keydown',k);return()=>{document.body.style.overflow='';window.removeEventListener('keydown',k)}},[open])
const Tab=({to,label,I}:{to:string;label:string;I:typeof Home})=><NavLink to={to} end={to==='/'} className="flex flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold">{({isActive})=><><span className="relative flex h-8 w-14 items-center justify-center">{isActive&&<motion.span layoutId="mnav-pill" transition={spring} className="absolute inset-0 rounded-full bg-primary-soft"/>}<I className={`relative size-5 ${isActive?'text-primary':'text-ink/60'}`}/></span><span className={isActive?'text-primary':'text-ink/70'}>{label}</span></>}</NavLink>
return <>
<motion.nav aria-label="প্রধান মেনু" animate={{y:hidden&&!open?'110%':0}} transition={spring} onFocusCapture={()=>setHidden(false)} className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
<div className="grid h-16 grid-cols-5 rounded-3xl bg-white/95 shadow-[0_8px_30px_rgba(18,52,91,.22)] ring-1 ring-navy/10 backdrop-blur">
{tabs.map(t=><Tab key={t.to} {...t}/>)}
<NavLink to="/donate" aria-label="সহায়তা করুন" className="relative flex items-end justify-center pb-2 text-xs font-semibold text-primary"><span className="absolute -top-6 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 ring-4 ring-white"><HandHeart className="size-6"/></span>সহায়তা</NavLink>
{tabs2.map(t=><Tab key={t.to} {...t}/>)}
<button onClick={()=>setOpen(true)} aria-haspopup="dialog" aria-expanded={open} className="flex flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold"><span className="relative flex h-8 w-14 items-center justify-center">{moreActive&&<span className="absolute inset-0 rounded-full bg-primary-soft"/>}<Menu className={`relative size-5 ${moreActive?'text-primary':'text-ink/60'}`}/></span><span className={moreActive?'text-primary':'text-ink/70'}>আরও</span></button></div></motion.nav>
<AnimatePresence>{open&&<><motion.div key="b" className="fixed inset-0 z-50 bg-navy/50 lg:hidden" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}/>
<motion.div key="s" role="dialog" aria-modal="true" aria-label="সব পাতা" className="fixed inset-x-0 bottom-0 z-50 rounded-t-[2rem] bg-white max-h-[88dvh] overflow-y-auto overscroll-contain px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl lg:hidden" initial={{y:'100%'}} animate={{y:0}} exit={{y:'100%'}} transition={spring}>
<div className="mx-auto h-1.5 w-12 rounded-full bg-ink/20"/><p className="mt-4 text-lg font-bold text-navy">সব পাতা</p>
{groups.map(g=><div key={g.title} className="mt-5"><p className="mb-2 text-sm font-semibold text-primary">{g.title}</p><div className="grid grid-cols-3 gap-2.5">{g.items.map(({to,label,I})=><Link key={to} to={to} className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl p-2 text-center text-[13px] font-semibold leading-tight ${pathname===to?'bg-primary text-white':'bg-surface text-navy'}`}><I className="size-6"/>{label}</Link>)}</div></div>)}
<div className="mt-4 grid grid-cols-2 gap-3"><a href={`tel:${site.phone.replace(/-/g,'')}`} className="btn bg-navy text-white"><Phone className="size-5"/>ফোন করুন</a><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn bg-primary text-white"><MessageCircle className="size-5"/>WhatsApp</a></div><div className="mt-6 border-t border-primary/15 pt-5 text-center"><p className="text-sm font-semibold text-ink/60">আমাদের অনুসরণ করুন</p><SocialLinks className="mt-3 justify-center"/></div></motion.div></>}</AnimatePresence></>}
