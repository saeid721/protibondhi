import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
const L=(f:()=>Promise<{default:React.ComponentType}>)=>{const C=lazy(f);return <Suspense fallback={<div className="p-20 text-center">লোড হচ্ছে…</div>}><C/></Suspense>}
export const router=createBrowserRouter([{element:<Layout/>,children:[
{path:'/',element:L(()=>import('@/pages/Home'))},
{path:'/about',element:L(()=>import('@/pages/About'))},
{path:'/programs',element:L(()=>import('@/pages/Programs'))},
{path:'/membership',element:L(()=>import('@/pages/Membership'))},
{path:'/transparency',element:L(()=>import('@/pages/Transparency'))},
{path:'/team',element:L(()=>import('@/pages/Team'))},
{path:'/gallery',element:L(()=>import('@/pages/Gallery'))},
{path:'/help',element:L(()=>import('@/pages/Help'))},
{path:'/donate',element:L(()=>import('@/pages/Donate'))},
{path:'/constitution',element:L(()=>import('@/pages/Constitution'))},
{path:'/blog',element:L(()=>import('@/pages/Blog'))},
{path:'/blog/:slug',element:L(()=>import('@/pages/BlogPost'))},
{path:'/news',element:L(()=>import('@/pages/News'))},
{path:'/events',element:L(()=>import('@/pages/Events'))},
{path:'/faqs',element:L(()=>import('@/pages/Faqs'))},
{path:'/annual-report',element:L(()=>import('@/pages/AnnualReport'))},
{path:'/career',element:L(()=>import('@/pages/Career'))},
{path:'/contact',element:L(()=>import('@/pages/Contact'))}]}])
