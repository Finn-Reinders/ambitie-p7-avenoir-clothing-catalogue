import Page from "../../../components/Page/index";
import { loadGarments } from '../../../modules/garmentsData';

interface PageProps {
  params: Promise<{ garment: string }>;
}

export default async function garment({ params }: PageProps) {
  const { garment } = await params;
  
  const garments = await loadGarments();
  const pageGarment = garments.find((garm) => garm._id === garment);

  return (
    <Page>
      <img src={pageGarment.image.src} key={pageGarment._id} alt="" />
      <div className='w-screen h-screen'>
        {pageGarment?.description}
      </div>
    </Page>
  );
}
