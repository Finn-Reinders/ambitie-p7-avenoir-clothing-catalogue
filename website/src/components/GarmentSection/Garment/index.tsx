"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { anim } from "../../../modules/anim";
import Image from "next/image";
import Link from "next/link";
import type { Garment as GarmentType } from "../../../modules/garmentsData";
import './index.css';

interface GarmentProps {
  delay: number;
  garment: GarmentType;
}

export default function Garment({ delay, garment }: GarmentProps) {
  const garmentEnter = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, delay } },
    exit: { opacity: 0, y: -20 },
  };

  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <Link className='w-fit h-fit' href={`garment/${garment._id}`}>
      <motion.div
        {...anim(garmentEnter)}
        onClick={() => setModalOpened(true)}
        className="rounded-[30px] w-60 h-82 flex flex-col p-2.5 relative justify-start items-start overflow-hidden bg-black"
        id='garment-card'
      >
      <div id='grain' className='absolute z-1 left-0 top-0 opacity-100'></div>
        <div className='w-full z-2 h-56 rounded-[20px] relative bg-black/50 '>
          <Image
            width={200}
            height={200}
            loading="lazy"
            className="object-contain w-full h-full text-white"
            src={garment.image.src}
            alt={garment.image.alt}
          />
          <div className='absolute m-2 bottom-0 left-0 gap-1.5 flex'>
          {garment.label.map((l, i) => {
            return (
              <span key={`${l}-${i}`} className='bg-green-500/40 text-white px-1.5 py-0.5 flex justify-center items-center text-sm rounded-full border-white border'>{l}</span>
            )
          })}
          </div>
        </div>
        <div className='z-2'>
        <h3 className='text-white text-xl mt-1'>{garment.name}</h3>
        <p className='text-white/70 text-sm font-light leading-4.5'>{garment.description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
