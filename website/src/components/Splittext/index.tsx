"use client";
import { useRef, useEffect, useState, createElement } from "react";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";

interface ChildrenProps {
  children: string;
  className?: string;
  tag?: string;
  delay?: number;
  style?: any;
}

export default function SplitText({ children, style, className, tag = "p", delay = 0 }: ChildrenProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [spanHeight, setSpanHeight] = useState<number>(0);

  const text = children.split(" ");

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.getBoundingClientRect().height;
      setSpanHeight(height);
    }
  }, [children]);

  const variants = {
    initial: {
      y: 100 + "%",
    },
    enter: (custom: number) => ({
      y: 0,
      transition: {
        duration: 0.75,
        delay: delay + custom,
        ease: cubicBezier(0.63, 0.2, 0.19, 0.88),
      },
    }),
    exit: {
      y: -120 + "%",
      transition: {
        duration: 0.75,
        ease: cubicBezier(0.63, 0.2, 0.19, 0.88),
      },
    },
  };

  const content = text.map((word, i) => {
    return (
      <span
        ref={ref}
        className="overflow-hidden inline-block leading-none"
        key={`word-${i}-${word}`}
      >
        <motion.span
          className="inline-block leading-none"
          style={{ paddingBottom: (spanHeight / 100) * 12 }}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={i * 0.05}
        >
          {word}
        {i < text.length - 1 && " "}
        </motion.span>
      </span>
    );
  });

  return createElement(
    tag as any,
    {
      className: `overflow-hidden relative whitespace-pre-wrap h-fit ${className}`,
      style: {...style},
    },
    content
  );
}
