"use client";
import Page from "../../components/Page";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function board() {
    const screen = useRef(null);
  return (
    <Page>
      <div className="w-screen h-screen">
        <div ref={screen} className='bg-sky-500 w-[50%] h-[90%]'>

        <motion.div dragConstraints={screen} dragElastic={true} drag dragMomentum={true} className='w-40 h-40'>
          <img
          className="object-contain w-full h-full"
            src="/placeholder-images/placeholder-pants-garment.webp"
            alt=""
          />
        </motion.div>
        </div>
      </div>
    </Page>
  );
}
