import GarmentSection from "../../components/GarmentSection/index";
import Navbar from "../../components/Navbar/index";
import Page from "../../components/Page/index";
import { loadGarments } from "@/modules/garmentsData";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Explore',
  description: 'Explore description',
}

export default async function garmentPage() {
  const garments = await loadGarments();
  return (
    <Page>
      <div className="h-fit w-screen">
        <GarmentSection garments={garments} />
      </div>
    </Page>
  );
}
