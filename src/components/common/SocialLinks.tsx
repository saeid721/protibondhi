import { Facebook, Youtube, Instagram, Linkedin, Twitter, MessageCircle, Mail } from 'lucide-react'
import { socials } from '@/data/site'
const icons:Record<string,typeof Facebook>={facebook:Facebook,youtube:Youtube,instagram:Instagram,linkedin:Linkedin,x:Twitter,whatsapp:MessageCircle,email:Mail}
export default function SocialLinks({tone='light',labels=false,className=''}:{tone?:'light'|'dark';labels?:boolean;className?:string}){
const base=tone==='dark'?'bg-white/10 text-white':'bg-primary-soft text-primary'
return <ul className={`flex flex-wrap gap-2.5 ${className}`}>{socials.filter(s=>s.url).map(s=>{const I=icons[s.k];return <li key={s.k}><a href={s.url} target={s.k==='email'?undefined:'_blank'} rel="noopener noreferrer" aria-label={s.label} title={s.label} style={{'--c':s.c} as React.CSSProperties} className={`flex min-h-11 items-center justify-center gap-2.5 rounded-full font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--c)] hover:text-white hover:shadow-lg focus-visible:bg-[var(--c)] focus-visible:text-white ${base} ${labels?'px-5':'size-11'}`}><I className="size-5 shrink-0"/>{labels&&s.label}</a></li>})}</ul>}
