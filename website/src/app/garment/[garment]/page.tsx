"use client"
import Page from "../../../components/Page/index";
import { useParams } from "next/navigation";
import { garmentData } from '../../../modules/garmentsData';

export default function garment() {
  const { garment } = useParams();
  return (
    <Page>
      <div className='w-screen h-screen'>{garment}</div>
    </Page>
  );
}
