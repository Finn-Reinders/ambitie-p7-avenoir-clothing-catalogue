"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { anim } from "../../../modules/anim";
import Image from "next/image";
import Link from "next/link";
import type { Garment as GarmentType } from "../../../modules/garmentsData";
import "./index.css";
import { garmentAnimation } from "./anim";

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

  const garmentHover = {
    initial: {
      background: "rgb(0 0 0 / 0)",
    },
    enter: {
      background: "rgb(0 0 0 / .5)",
    },
    exit: {
      background: "rgb(0 0 0 / 0)",
    },
  };

  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const [masonry, setMasonry] = useState(true);
  const [randomHeight, setRandomHeight] = useState<string>("");

  useEffect(() => {
    setRandomHeight(Math.random() * 200 + 300 + "px");
  }, []);

  if (!masonry) {
    return (
      <Link className="w-fit h-fit" href={`garment/${garment._id}`}>
        <motion.div
          {...anim(garmentEnter)}
          onClick={() => setModalOpened(true)}
          className="rounded-[30px] w-60 h-82 flex flex-col p-2.5 relative justify-start items-start overflow-hidden bg-black"
          id="garment-card"
        >
          <div
            id="grain"
            className="absolute z-1 left-0 top-0 opacity-100"
          ></div>
          <div className="w-full z-2 h-56 rounded-[20px] relative bg-black/50 ">
            <Image
              width={200}
              height={200}
              loading="lazy"
              className="object-contain w-full h-full text-white"
              src={garment.image.src}
              alt={garment.image.alt}
            />
            <div className="absolute m-2 bottom-0 left-0 gap-1.5 flex">
              {garment.label.map((l, i) => {
                return (
                  <span
                    key={`${l}-${i}`}
                    className="bg-green-500/40 text-white px-1.5 py-0.5 flex justify-center items-center text-sm rounded-full border-white border"
                  >
                    {l}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="z-2">
            <h3 className="text-white text-xl mt-1">{garment.name}</h3>
            <p className="text-white/70 text-sm font-light leading-4.5">
              {garment.description}
            </p>
          </div>
        </motion.div>
      </Link>
    );
  }

  const [garmentHovered, setGarmentHovered] = useState(false);
  return (
    <Link className="w-fit h-fit" href={`garment/${garment._id}`}>
      <motion.div
        {...anim(garmentEnter)}
        className="bg-white w-full flex h-fit relative rounded-md"
        onMouseEnter={() => {
          setGarmentHovered(true);
        }}
        onMouseLeave={() => {
          setGarmentHovered(false);
        }}
      >
        <AnimatePresence mode="wait">
          {garmentHovered && (
            <motion.div
              {...anim(garmentHover)}
              className="w-full h-full absolute left-0 top-0 flex items-end p-2"
            ><motion.h3 initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -20, opacity: 0}} transition={{delay: .1, duration: 0.2}}  className='text-white text-2xl'>{garment.name}</motion.h3></motion.div>
          )}
        </AnimatePresence>
        <Image
          className="w-full"
          src={garment.image.src}
          alt={garment.image.alt}
          width={200}
          height={200}
        />
      </motion.div>
    </Link>
  );
}
