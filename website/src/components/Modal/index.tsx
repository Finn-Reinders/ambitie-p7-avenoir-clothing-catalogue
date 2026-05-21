'use client';
import { motion, cubicBezier } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Modal({ garment }: any) {
    const router = useRouter();
  return (
        <motion.section
    //   initial={{ x: "-100%" }}
    //   animate={{ x: "0" }}
    //   exit={{ x: "-100%" }} 
      transition={{ duration: 0.7, ease: cubicBezier(0.76, 0, 0.24, 1) }}
      className="bg-lime-300 w-[50vw] h-screen fixed top-0 left-0"
    >
        <button className='bg-red-300 absolute top-0 right-0' onClick={() => {router.back()}}>close</button>
        <div className='w-100 h-fit'>
      <motion.img className='w-full h-full' layoutId={garment._id} src={garment.image.src} transition={{duration: 1, delay: 0.1}} />
        </div>
      </motion.section>
  )
}
