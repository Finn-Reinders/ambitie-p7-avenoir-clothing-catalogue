'use client';
import { motion, cubicBezier, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import SplitText from '../Splittext';
import { useState } from 'react';

export default function Modal({ garment }: any) {
  const [open, setOpen] = useState(true);
    const router = useRouter();
  return (

        <motion.section
      initial={{ x: "-100%" }}
      animate={open ?{ x: "0" } : {x: '-100%'}} 
      transition={{ duration: 0.7, ease: cubicBezier(0.76, 0, 0.24, 1) }}
      className="bg-zinc-300 w-[50vw] h-screen fixed top-0 left-0"
      >
      <SplitText className='text-8xl' delay={0.4}>{garment.name}</SplitText>
        <button className='bg-red-300 absolute top-0 right-0' onClick={() => { setOpen(false); setTimeout(() => { router.back();}, 700)}}>close</button>
        <button className='bg-green-500 absolute top-10 right-0' onClick={() => {navigator.clipboard.writeText(window.location.href)}}>share</button>
        <div className='w-100 h-fit'>
      <motion.img className='w-full h-full' src={garment.image.src} transition={{duration: 1, delay: 0.1}} />
        </div>
      </motion.section>
  )
}
