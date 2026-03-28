import GarmentSection from "../../components/GarmentSection/index";
import Navbar from "../../components/Navbar/index";
import Page from "../../components/Page/index";

export default async function garmentPage() {

  return (
    <Page>
      <Navbar />
      <div className="h-screen w-screen">
        <GarmentSection />
      </div>
    </Page>
  );
}
