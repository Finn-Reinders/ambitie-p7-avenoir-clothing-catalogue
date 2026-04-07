import { cubicBezier } from "framer-motion";

export const routeEnter = {
    initial: {opacity: 0},
    enter: {opacity: 1, transition: {duration: 2}},
    exit: {opacity: 0},
}

export const variants = {
    initial: { clipPath: "inset(0% 25% 100% 25%)" },
    enter: {
      clipPath: "inset(0%)",
      transition: { duration: 0.8, ease: cubicBezier(0.83, 0, 0.17, 1) },
    },
    exit: {
      clipPath: "inset(100% 25% 0% 25%)",
      transition: { duration: 0.8, ease: cubicBezier(0.83, 0, 0.17, 1) },
    },
  };