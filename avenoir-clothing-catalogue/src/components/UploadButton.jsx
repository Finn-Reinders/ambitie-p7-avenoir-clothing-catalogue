"use client";

import uploadGarment from "@/modules/garmentsData";

export default function UploadButton() {
  return (
    <button
      onClick={uploadGarment}
      className="w-fit h-fit bg-black text-white px-3 py-1.5 mb-2"
    >
      upload
    </button>
  );
}
