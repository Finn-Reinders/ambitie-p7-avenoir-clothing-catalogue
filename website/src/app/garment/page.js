import GarmentSection from '@/components/GarmentSection';
import Navbar from '@/components/Navbar';
import Page from '@/components/Page';

export default function garmentPage() {
  return (
    <Page>
      <Navbar />
      <div className="h-screen w-screen">
        <GarmentSection />
      </div>
    </Page>
  );
}
