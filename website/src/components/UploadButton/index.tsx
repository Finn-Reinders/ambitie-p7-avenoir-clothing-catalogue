"use client";
import React from 'react';
import uploadGarment from "../../modules/garmentsData";

export default function UploadButton() {
  const handleClick = () => {
    uploadGarment();
  };

  return (
    <button
      onClick={handleClick}
      className="w-fit h-fit bg-black text-white px-3 py-1.5 mb-2"
    >
      upload
    </button>
  );
}
