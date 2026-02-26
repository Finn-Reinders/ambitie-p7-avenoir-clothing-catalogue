import Garment from "@/components/Garment";
import { garmentData } from "@/modules/garmentsData";
import { AnimatePresence } from "framer-motion";

export default function GarmentSection() {
  return (
    <main className="flex flex-wrap gap-4">
      {garmentData.map((garment, i) => {
        return (
          <AnimatePresence key={`Garment_${i}`}>
            <Garment delay={.1 * i} garment={garment} />
          </AnimatePresence>
        );
      })}
    </main>
  );
}
