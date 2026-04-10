"use client";
import { useState } from "react";
import Garment from "../../Garment";

export default function ModalContent({
  garments,
  openedGarment,
  modalGarmentIndex,
}) {
  console.log(modalGarmentIndex);
  const [shareIndicator, setShareIndicator] = useState(false);
  if (openedGarment) {
    return (
      <div className="w-122 h-fit">
        {
          <Garment
            garmentActive={true}
            key={`garment-${modalGarmentIndex}`}
            garment={openedGarment}
            delay={0}
          />
        }
        <div className="absolute bottom-0 right-0  w-fit">

        <button
          className="w-fit h-fit p-2 bg-lime-500"
          onClick={() => {
            navigator.clipboard.writeText(
              `localhost:3000/garments/${openedGarment._id}`,
            );
            setShareIndicator(true);
          }}
          >
          share
        </button>
        {shareIndicator && <div className='absolute w-fit whitespace-nowrap left-[50%] -top-5 translate-x-[-50%]'>Copied to clipboard</div>}
      </div>
          </div>
    );
  }
  return <div>garment not found</div>;
}
