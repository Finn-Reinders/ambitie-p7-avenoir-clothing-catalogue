"use client";
import { AnimatePresence } from "framer-motion";

export default function PresenceProvider({children}: any) {
  return (
    <AnimatePresence mode='wait'>{children}</AnimatePresence>
  )
}
