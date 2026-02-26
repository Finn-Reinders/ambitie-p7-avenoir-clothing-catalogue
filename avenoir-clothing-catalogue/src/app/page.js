import GarmentSection from "@/components/GarmentSection";
import UploadButton from "@/components/UploadButton";
import UploadModal from "@/components/UploadModal";

export default function Home() {
  return (
    <>
      <UploadButton />
      <GarmentSection />
      <UploadModal />
    </>
  );
}
