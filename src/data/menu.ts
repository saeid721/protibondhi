import { Info, Users, BadgeCheck, ScrollText, FileBarChart, Newspaper, PenLine, CalendarDays, Images, LifeBuoy, HandHeart, Briefcase, CircleHelp, Mail } from 'lucide-react'
export const groups=[
{title:'আমাদের সম্পর্কে',items:[{to:'/about',label:'সংস্থা পরিচিতি',I:Info},{to:'/team',label:'আমাদের টিম',I:Users},{to:'/transparency',label:'স্বচ্ছতা',I:BadgeCheck},{to:'/annual-report',label:'বার্ষিক প্রতিবেদন',I:FileBarChart},{to:'/constitution',label:'গঠনতন্ত্র',I:ScrollText}]},
{title:'মিডিয়া ও তথ্য',items:[{to:'/blog',label:'ব্লগ',I:PenLine},{to:'/news',label:'সংবাদ',I:Newspaper},{to:'/events',label:'ইভেন্ট',I:CalendarDays},{to:'/gallery',label:'ছবি ও ভিডিও',I:Images},{to:'/faqs',label:'প্রশ্নোত্তর',I:CircleHelp}]},
{title:'যুক্ত হোন',items:[{to:'/donate',label:'সহায়তা করুন',I:HandHeart},{to:'/help',label:'সাহায্য চান',I:LifeBuoy},{to:'/career',label:'ক্যারিয়ার',I:Briefcase},{to:'/contact',label:'যোগাযোগ',I:Mail}]}]
