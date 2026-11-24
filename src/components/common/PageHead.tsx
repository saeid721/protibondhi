import SEO from './SEO'
export default function PageHead({title,sub}:{title:string;sub:string}){
return <><SEO title={title}/><section className="bg-navy text-white"><div className="mx-auto max-w-6xl px-5 py-14 md:py-20"><h1 className="text-3xl font-bold md:text-5xl">{title}</h1><p className="mt-3 max-w-2xl text-white/80 md:text-lg">{sub}</p></div></section></>}
