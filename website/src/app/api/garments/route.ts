import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { Garment } from "@/modules/garmentsData";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("avenoir-clothing-catalogue");
    const garments = await db.collection("garments").find({}).toArray();
    return NextResponse.json(garments as unknown as Garment[]);
  } catch (error) {
    console.error("Failed to fetch garments:", error);
    return NextResponse.json(
      { error: "Failed to fetch garments" },
      { status: 500 }
    );
  }
}