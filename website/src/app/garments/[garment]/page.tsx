import { loadGarments } from "@/modules/garmentsData";
import Page from "@/components/Page";

interface Props {
  params: Promise<{ garment: string }>;
}

export default async function garment({ params }: Props) {
  const { garment: garmentId } = await params;
  
  const garments = await loadGarments();
  const foundGarment = garments.find((g) => g._id === garmentId);

  return (
    <Page>
      {foundGarment ? (
        <>
          <img className="text-white" src={foundGarment.image.src} alt={foundGarment.image.alt} />
          <p className="text-white">ID: {foundGarment._id}</p>
          <p className="text-white">Name: {foundGarment.name}</p>
        </>
      ) : (
        <p className="text-white">Garment not found</p>
      )}
    </Page>
  );
}
