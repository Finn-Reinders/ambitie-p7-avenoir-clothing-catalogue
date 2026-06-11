import { cubicBezier, motion } from "framer-motion";
import { loadGarments } from "@/modules/garmentsData";
import Page from "@/components/Page";
import SplitText from "@/components/Splittext";

interface Props {
  params: Promise<{ garment: string }>;
}

export default async function GarmentPage({ params }: Props) {
  const { garment: garmentId } = await params;

  const garments = await loadGarments();
  const garment = garments.find((g) => g._id === garmentId);

  return (
    <Page>
      <div className="w-screen h-screen">
        <SplitText className="text-7xl text-white">{garment.name}</SplitText>
        <img src={garment.image.src} alt={garment.image.alt} />
      </div>
    </Page>
  );
}
