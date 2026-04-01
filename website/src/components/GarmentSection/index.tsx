"use client";

import React, { useState, useEffect } from "react";
import Garment from "./Garment/index";
import { Garment as GarmentType } from "../../modules/garmentsData";
import { AnimatePresence } from "framer-motion";

interface GarmentSectionProps {
  garments?: GarmentType[];
}

export default function GarmentSection({ garments = [] }: GarmentSectionProps) {
  const masonry: boolean = true;
  const [columns, setColumns] = useState<number>(5);

  useEffect(() => {
    const columns = Math.max(1, Math.floor(window.innerWidth / (1080 / 3)));
    setColumns(columns);

    const handleResize = () => {
      const newColumns = Math.max(
        1,
        Math.floor(window.innerWidth / (1080 / 3)),
      );
      setColumns(newColumns);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // if (!masonry) {
  //   return (
  //     <main className="flex flex-wrap gap-4">
  //       {garments.map((garment, i) => {
  //         return (
  //           <AnimatePresence key={`Garment_${i}`}>
  //             <Garment delay={0.1 * i} garment={garment} />
  //           </AnimatePresence>
  //         );
  //       })}
  //     </main>
  //   );
  // }

  return (
    <main className="flex justify-center w-full gap-1.5">
      {[...Array(columns)].map((_, columnIndex) => {
        return (
          <div
            key={`column-${columnIndex}`}
            className="flex flex-col w-75 gap-1.5"
          >
            {garments.map((garment, garmentIndex) => {
              return (
                <AnimatePresence
                  mode="wait"
                  key={garment._id}
                >
                  {garmentIndex % columns === columnIndex && (
                    <Garment garmentIndex={garmentIndex} garment={garment} delay={0.1 * (garmentIndex)} />
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
