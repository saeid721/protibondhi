import { motion, useReducedMotion } from 'motion/react'
export default function Reveal({children,className,delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
const rm=useReducedMotion()
return <motion.div className={className} initial={rm?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.55,delay,ease:'easeOut'}}>{children}</motion.div>}
