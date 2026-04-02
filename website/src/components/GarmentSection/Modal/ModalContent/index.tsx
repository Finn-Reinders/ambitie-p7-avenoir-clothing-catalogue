"use client";
import Garment from "../../Garment";

export default function ModalContent({ garments, openedGarment }) {
  if (openedGarment) {
    return (
      <div className='w-122 h-fit'>
        {<Garment garmentActive={true} garment={openedGarment} delay={0} />}
      </div>
    );
  }
  return <div>garment not found</div>;
}
