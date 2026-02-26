export const garment = {
  name: "Test",
  description: "",
  type: "",
  colour: "",
  label: [],
  image: {
    src: "/placeholder-images/placeholder-garment.webp",
    alt: "Image",
  },
};

export const garmentData = [
    garment,
];

export default function uploadGarment() {
    console.log("function gets called");
    garmentData.push(garment);
}