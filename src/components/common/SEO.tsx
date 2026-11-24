import { Helmet } from 'react-helmet-async'
import { site, socials } from '@/data/site'
export default function SEO({title,desc}:{title?:string;desc?:string}){
const t=title?`${title} | ${site.nameBn}`:site.nameBn
const d=desc??'বগুড়ার গাবতলীতে প্রতিবন্ধী মানুষের অধিকার, শিক্ষা, স্বাস্থ্য ও কর্মসংস্থানে কাজ করা একটি স্বেচ্ছাসেবী সংস্থা।'
return <Helmet><title>{t}</title><meta name="description" content={d}/><meta property="og:title" content={t}/><meta property="og:description" content={d}/><meta property="og:type" content="website"/><meta property="og:locale" content="bn_BD"/>
<script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@type':'NGO',name:site.nameBn,alternateName:site.nameEn,address:site.address,sameAs:socials.filter(s=>s.url.startsWith('http')&&!s.url.includes('wa.me')).map(s=>s.url)})}</script></Helmet>}
