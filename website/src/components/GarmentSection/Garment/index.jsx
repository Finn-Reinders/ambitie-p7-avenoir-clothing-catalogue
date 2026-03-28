"use client";
import { motion } from "framer-motion";
import { anim } from "@/modules/anim";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Garment({ delay, garment }) {
  const garmentEnter = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, delay } },
    exit: { opacity: 0, y: -20 },
  };

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <motion.div
      {...anim(garmentEnter)}
      onClick={() => setModalOpened(true)}
      className="aspect-square border-2 border-gray-700 rounded-2xl w-60 flex p-4 justify-center items-center bg-black"
    >
      <div className="w-full h-full">
        <Link href="/garment/garmentos">
          <Image
            width={200}
            height={200}
            loading="lazy"
            className="object-contain w-full h-full text-white"
            src={garment.image.src}
            alt={garment.image.alt}
          />
        </Link>
      </div>
    </motion.div>
  );
}
