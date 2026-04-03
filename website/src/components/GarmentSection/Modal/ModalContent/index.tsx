"use client";
import Garment from "../../Garment";

export default function ModalContent({ garments, openedGarment, modalGarmentIndex }) {
  console.log(modalGarmentIndex);
  if (openedGarment) {
    return (
      <div className='w-122 h-fit'>
        {<Garment garmentActive={true} key={`garment-${modalGarmentIndex}`} garment={openedGarment} delay={0} />}
      </div>
    );
  }
  return <div>garment not found</div>;
}
