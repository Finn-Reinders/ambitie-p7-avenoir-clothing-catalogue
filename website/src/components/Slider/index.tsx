"use client";
import { motion } from 'framer-motion';
import { sliderAnim } from './anim';

export default function Slider() {
  return (
    <motion.div variants={sliderAnim} initial='initial' animate='enter' exit='exit'>index</motion.div>
  )
}
