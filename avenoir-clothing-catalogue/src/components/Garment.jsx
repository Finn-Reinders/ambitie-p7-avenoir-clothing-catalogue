"use client";
import { motion } from "framer-motion";
import { anim } from "@/modules/anim";
import Image from "next/image";

export default function Garment({ delay, garment }) {
  const garmentEnter = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, delay } },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      {...anim(garmentEnter)}
      className="aspect-square border-2 border-gray-700 rounded-2xl w-60 flex justify-center items-center bg-black p-8"
    >
      <div className='w-full h-full'>
        <Image width={200} height={200} loading="lazy" src={garment.image.src} className='object-cover w-full h-full text-white' alt={garment.image.alt} />
      </div>
    </motion.div>
  );
}
