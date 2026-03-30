"use client"
import Page from "../../../components/Page/index";
import { useParams } from "next/navigation";
import { garmentData } from '../../../modules/garmentsData';

export default function garment() {
  const { garment } = useParams();
  const garmentData = garmentData.find((p) => p.garment === garment);
  return (
    <Page>
      <div className='w-screen h-screen'>{garment}</div>
    </Page>
  );
}
