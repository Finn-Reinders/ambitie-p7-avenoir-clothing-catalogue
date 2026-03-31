import { cubicBezier } from 'framer-motion';

export const garmentAnimation = {
    initial: {
        clipPath: 'inset(50%)'
    },
    enter: {
        clipPath: 'inset(0%)',
        transition: {
            duration: 1,
            ease: cubicBezier(0.76, 0, 0.24, 1),
        }
    },
    exit: {
        clipPath: 'inset(50%)',
        transition: {
            duration: 1,
            ease: cubicBezier(0.76, 0, 0.24, 1),
        }
    }
}