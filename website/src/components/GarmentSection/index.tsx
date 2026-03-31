import React from "react";
import Garment from "./Garment/index";
import { Garment as GarmentType } from "../../modules/garmentsData";
import { AnimatePresence } from "framer-motion";

interface GarmentSectionProps {
  garments?: GarmentType[];
}

export default function GarmentSection({ garments = [] }: GarmentSectionProps) {
  return (
    <main className="flex flex-wrap gap-4">
      {garments.map((garment, i) => {
        return (
          <AnimatePresence key={`Garment_${i}`}>
              <Garment
                delay={0.1 * i}
                garment={garment}
              />
          </AnimatePresence>
        );
      })}
    </main>
  );
}
