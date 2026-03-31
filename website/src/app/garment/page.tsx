import GarmentSection from "../../components/GarmentSection/index";
import Navbar from "../../components/Navbar/index";
import Page from "../../components/Page/index";
import { loadGarments } from "@/modules/garmentsData";

export default async function garmentPage() {
  const garments = await loadGarments();
  return (
    <Page>
      <div className="h-screen w-screen">
        <GarmentSection garments={garments} />
      </div>
    </Page>
  );
}
