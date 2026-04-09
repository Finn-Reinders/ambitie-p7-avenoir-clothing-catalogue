import mongoose from "mongoose";

const garmentSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    type: String,
    colour: String,
    label: [String],
    image_url: String,
    public_id: String,
    bytesize: Number,
  },
  { timestamps: true }
);

export const Garment =
  mongoose.models.Garment || mongoose.model("Garment", garmentSchema);
