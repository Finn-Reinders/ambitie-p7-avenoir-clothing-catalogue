interface GarmentImage {
  src: string;
  alt: string;
}

export interface Garment {
  name: string;
  description: string;
  type: string;
  colour: string;
  label: string[];
  image: GarmentImage;
}

export const garment: Garment = {
  name: "Test",
  description: "",
  type: "",
  colour: "",
  label: [],
  image: {
    src: "/placeholder-images/placeholder-pants-garment.webp",
    alt: "Image",
  },
};

export const garmentData: Garment[] = [
    garment,
];

export default function uploadGarment(): void {
    console.log("function gets called");
    garmentData.push(garment);
}