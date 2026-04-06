import { UploadImage } from "@/lib/upload-image";
import { connectDB } from "../db/connectDB";
import { Image } from "../models/image.model";

export async function POST (request: Request) {
    await connectDB();

    const formData = await request.formData();

    try {
        const image = formData.get("image") as File;

        if(image) {
            // upload image to cloudinary
            const uploadResult: any = await UploadImage(image, "image-upload");
            console.log("image Result", uploadResult);
            
            // save to mongodb
            const newImage = new Image({
                image_url: uploadResult.secure_url,
                public_id: uploadResult.public_id
            });
            
            await newImage.save();
        }
        return Response.json({ message: "Image uploaded successfully" }, {status: 200 });
    } catch (errors){
        console.log("Error uploading image", errors);
        return Response.json(
            { message: "Error uploading image", error: errors },
            { status: 400 }
        )
    }
}