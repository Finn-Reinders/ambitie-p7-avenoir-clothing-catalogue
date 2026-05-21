import { cubicBezier, motion } from "framer-motion";
import { loadGarments } from "@/modules/garmentsData";
import Modal from "@/components/Modal";

interface Props {
  params: Promise<{ garment: string }>;
}

export default async function GarmentPage({ params}: Props) {
  const { garment: garmentId } = await params;
    
    const garments = await loadGarments();
    const foundGarment = garments.find((g) => g._id === garmentId);

  return (
    <Modal garment={foundGarment} />
  );
}
