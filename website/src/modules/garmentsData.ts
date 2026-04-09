interface GarmentImage {
  src: string;
  alt: string;
}

export interface Garment {
  _id?: string;
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

export let garmentData: Garment[] = [garment];

// Fetch garments from MongoDB directly
export async function loadGarments(): Promise<Garment[]> {
  try {
    const clientPromise = await import("@/lib/mongodb").then(m => m.default);
    const client = await clientPromise;
    const db = client.db("avenoir-clothing-catalogue");
    const garments = await db.collection("garments").find({}).toArray();
    
    // Convert MongoDB documents to plain objects
    const plainGarments = garments.map(doc => ({
      _id: doc._id?.toString(),
      name: doc.name,
      description: doc.description,
      type: doc.type,
      colour: doc.colour,
      label: doc.label,
      image: doc.image,
      bytesize: doc.bytesize,
    })) as Garment[];
    
    console.log("Loaded garments from MongoDB:", plainGarments);
    garmentData = plainGarments;
    return plainGarments;
  } catch (error) {
    return garmentData;
  }
}

export default function uploadGarment(): void {
  garmentData.push(garment);
}