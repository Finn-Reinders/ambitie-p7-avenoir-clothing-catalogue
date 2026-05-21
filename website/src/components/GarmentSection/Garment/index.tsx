"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { anim } from "../../../modules/anim";
import Image from "next/image";
import type { Garment as GarmentType } from "../../../modules/garmentsData";
import { useTransitionRouter } from "next-view-transitions";
import "./index.css";
import Link from "next/link";

interface GarmentProps {
  delay: number;
  garment?: GarmentType;
  garmentIndex?: number;
  modalOpened?: boolean;
  garmentActive: boolean;
  modalGarment?: GarmentType;
  setModalGarment?: (value: GarmentType) => void;
  setModalOpened?: (value: boolean) => void;
  setModalGarmentIndex?: (value: number) => void;
  setGarmentHeight?: (value: number) => void;
}

export default function Garment({
  delay,
  garment,
  garmentIndex,
  modalOpened,
  // setModalOpened,
  modalGarment,
  setModalGarment,
  garmentActive,
  setModalGarmentIndex,
  setGarmentHeight,
}: GarmentProps) {
  const garmentEnter = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, delay } },
    exit: { opacity: 0, y: 20 },
  };

  const garmentHover = {
    initial: {
      background: "rgb(0 0 0 / 0)",
    },
    enter: {
      background: "rgb(0 0 0 / .5)",
    },
    exit: {
      background: "rgb(0 0 0 / 0)",
    },
  };

  const [garmentHovered, setGarmentHovered] = useState(false);
  const [garmentFocused, setGarmentFocused] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useTransitionRouter();

  const anchorRef = React.useRef(null);
  return (
    <Link
    href={`/explore/${garment._id}`}
      ref={anchorRef}
      className="w-full h-fit"
      // onClick={(e) => {
      //   if (!garmentActive) {
      //     e.preventDefault();
      //     addEventListener("dblclick", () => {
      //       clearTimeout(timeout);
      //       setSaved(!saved);
      //       setGarmentFocused(false);
      //     });
      //     const timeout = setTimeout(() => {
      //       const height = anchorRef.current?.offsetHeight;
      //       setGarmentHeight(height);
      //       // setModalOpened(true);
      //       setModalGarment(garment);
      //       setModalGarmentIndex(garmentIndex);
      //       clearTimeout(timeout);
      //     }, 275);
      //   }
      // }}
      tabIndex={!garmentActive ? garmentIndex + 1 : undefined}
      onFocus={() => {
        if (!garmentActive) {
          setGarmentFocused(true);
        }
      }}
      onBlur={() => {
        if (!garmentActive) {
          setGarmentFocused(false);
        }
      }}
    >
      <motion.div
        {...anim(garmentEnter)}
        transition={{ duration: 1 }}
        className="bg-white w-full flex h-full max-h-150 relative"
        onMouseEnter={() => {
          if (!garmentActive) {
            setGarmentHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (!garmentActive) {
            setGarmentHovered(false);
          }
        }}
      >
        <AnimatePresence mode="wait">
          {(garmentFocused || garmentHovered) && (
            <motion.div
              {...anim(garmentHover)}
              className="w-full h-full absolute left-0 top-0 flex items-end p-2"
            >
              {saved && (
                <motion.div
                  onMouseMove={(e) => {
                    const posX = e.clientX;
                    const posY = e.clientY;
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=" z-50 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-red-500 w-10 h-10"
                ></motion.div>
              )}
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="text-white text-2xl"
              >
                {garment.name}
              </motion.h3>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.img
          className="w-full object-cover"
          layoutId={garment._id}
          src={garment.image.src}
          alt={garment.image.alt}
        />
      </motion.div>
    </Link>
  );
}
