"use client";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function TitleSlider() {
  const [titleSlider, setTitleSlider] = useState(false);
  const isInitialMount = useRef(true);

  const sliderVariants = {
    enter: { clipPath: "inset(0%)" },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 1, ease: cubicBezier(0.83, 0, 0.17, 1) },
    },
  };

  const titleVariants = {
    intial: {
      y: "0%",
    },
    enter: {
      y: "-100%",
      transition: {
        delay: 2.05,
        duration: 0.6,
        ease: cubicBezier(0.83, 0, 0.17, 1),
      },
    },
  };

  const h1Variants = {
    initial: {
      scale: 1,
      filter: "blur(0px)",
    },
    enter: {
      scale: 1.2,
      filter: "blur(3px)",
      transition: {
        duration: 0.6,
        delay: 2.05,
        ease: cubicBezier(0.83, 0, 0.17, 1),
      },
    },
  };

  const path = usePathname();
  const title = path.slice(1);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setTitleSlider(true);

    const preventScroll = (e) => e.preventDefault();
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });

    const timer = setTimeout(() => {
      setTitleSlider(false);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [path]);

  const finalTitle = title.replace('-', ' ')
  return (
    <AnimatePresence mode="wait">
      {titleSlider && (
        <motion.div
          className="absolute left-0 top-0 h-screen w-screen bg-gray-300 flex justify-center items-center z-102"
          variants={sliderVariants}
          initial="enter"
          animate="enter"
          exit="exit"
        >
          <motion.h1
            variants={h1Variants}
            initial="initial"
            animate="enter"
            className="text-4xl overflow-hidden h-fit flex items-center font-['Satoshi-Italic'] leading-none uppercase"
          >
            <motion.span
              variants={titleVariants}
              initial="initial"
              animate="enter"
            >
             {finalTitle || 'Avenoir'}
            </motion.span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
