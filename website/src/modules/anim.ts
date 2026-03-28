import { Variants } from 'framer-motion';

interface AnimReturn {
  initial: string;
  animate: string;
  exit: string;
  variants: Variants;
}

const anim = (variants: Variants): AnimReturn => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export { anim };