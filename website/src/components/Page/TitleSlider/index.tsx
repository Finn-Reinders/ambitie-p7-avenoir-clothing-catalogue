"use client";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TitleSlider() {
  const [titleSlider, setTitleSlider] = useState(true);

  const sliderVariants = {
    enter: { clipPath: "inset(0%)" },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 1, ease: cubicBezier(0.83, 0, 0.17, 1) },
    },
  };

  const titleVariants = {
    intial: {
      y: '0%'
    },
    enter: {
      y: '-100%',
      transition: {delay: 2, duration: 0.6, ease: cubicBezier(0.83, 0, 0.17, 1)}
    }
  }

  const path = usePathname();
  const title = path.slice(1);

  useEffect(() => {
    setTimeout(() => {
      setTitleSlider(false);
    }, 2000);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {titleSlider && (
        <motion.div
          className="absolute left-0 top-0 h-screen w-screen bg-lime-500 flex justify-center items-center z-100"
          variants={sliderVariants}
          initial="enter"
          animate="enter"
          exit="exit"
          onClick={() => {
            setTitleSlider(false);
          }}
        >
          <h1 className='text-3xl overflow-hidden h-fit flex items-center leading-none uppercase'><motion.span variants={titleVariants} initial='initial' animate='enter'>{title ? title : 'home'}</motion.span></h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
