import { Link, useParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import SEO from '@/components/common/SEO'
import Empty from '@/components/common/Empty'
import { posts } from '@/data/content'
export default function BlogPost(){const {slug}=useParams();const p=posts.find(x=>x.slug===slug)
if(!p)return <section className="mx-auto max-w-3xl px-5 py-20"><Empty t="লেখাটি পাওয়া যায়নি"><Link to="/blog" className="btn bg-primary text-white">সব লেখা দেখুন</Link></Empty></section>
const mins=Math.max(1,Math.ceil(p.body.join(' ').split(/\s+/).length/120));const rel=posts.filter(x=>x.slug!==p.slug).slice(0,2)
return <><SEO title={p.title} desc={p.excerpt}/><article className="mx-auto max-w-3xl px-5 py-12 md:py-16"><Link to="/blog" className="text-primary underline underline-offset-4">← ব্লগ</Link>
<span className="mt-6 inline-block rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">{p.cat}</span><h1 className="mt-3 text-3xl font-bold leading-snug text-navy md:text-5xl">{p.title}</h1><p className="mt-3 text-ink/60">পড়তে সময় লাগবে প্রায় {['১','২','৩','৪','৫'][Math.min(mins,5)-1]} মিনিট</p>
<div className="mt-8 space-y-5 text-lg leading-[1.9]">{p.body.map((t,i)=><p key={i}>{t}</p>)}</div>
<a href={`https://wa.me/?text=${encodeURIComponent(p.title+' – '+location.href)}`} target="_blank" rel="noreferrer" className="btn mt-10 bg-primary text-white"><MessageCircle className="size-5"/>WhatsApp-এ শেয়ার করুন</a></article>
<section className="bg-surface"><div className="mx-auto grid max-w-3xl gap-4 px-5 py-12 sm:grid-cols-2">{rel.map(r=><Link key={r.slug} to={`/blog/${r.slug}`} className="rounded-2xl bg-white p-5 ring-1 ring-primary/15 hover:shadow-lg"><p className="text-sm text-primary">{r.cat}</p><p className="mt-1 font-bold text-navy">{r.title}</p></Link>)}</div></section></>}
