import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { Garment as GarmentInterface } from "@/modules/garmentsData";
import { UploadImage } from "@/lib/upload-image";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("avenoir-clothing-catalogue");
    const garments = await db.collection("garments").find({}).toArray();
    return NextResponse.json(garments as unknown as GarmentInterface[]);
  } catch (error) {
    console.error("Failed to fetch garments:", error);
    return NextResponse.json(
      { error: "Failed to fetch garments" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as string;
    const colour = formData.get("colour") as string;
    const labels = formData.get("labels") as string;
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    const uploadResult: any = await UploadImage(image, "garments");
    // console.log("Upload Result:", uploadResult);
    console.log("Image Size (bytes):", image.size);
    console.log("Image Size (MB):", image.size / (1024 * 1024));

    // Save to mongodb
    const client = await clientPromise;
    const db = client.db("avenoir-clothing-catalogue");
    const collection = db.collection("garments");

    // Creates new garment object
    const newGarment = {
      name,
      description,
      type,
      colour,
      label: labels ? labels.split(",").map((l) => l.trim()) : [],
      image: {
        src: uploadResult.secure_url,
        alt: name,
      },
      bytesize: image.size / (1024 * 1024),
      public_id: uploadResult.public_id,
      createdAt: new Date(),
    };

    // inserts garment
    const result = await collection.insertOne(newGarment);
    console.log("Garment saved to DB:", newGarment);

    // debugging
    return NextResponse.json(
      { message: "Garment added successfully", garmentId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding garment:", error);
    return NextResponse.json(
      { error: "Failed to add garment" },
      { status: 500 }
    );
  }
}