'use client';

import React, { ChangeEvent, useEffect } from 'react'
import Page from "../../components/Page";
import { useState } from 'react';

interface UploadedImage {
    _id: string;
    image_url: string;
    public_id: string;
}

export default function imageUpload() {
    const [image, setImage] = useState<File>();
    const [images, setImages] = useState<UploadedImage[]>([]);
    const [loading, setLoading] = useState(false);

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/images");
            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchImages();
    }, []);

    const onSubmit = () => {
        if (!image) {
            alert("No image selected");
            return;
        }

        const formData = new FormData();
        formData.append("image", image);

        fetch("/api/upload-image", {
            method: "POST",
            body: formData
        }).then(response => {
            if (!response.ok) {
                throw new Error("Response not ok");
            }
            return response.json();
        }).then(() => {
            setImage(undefined);
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            if (fileInput) fileInput.value = '';
            fetchImages();
        }).catch(error => {
            console.error("Upload error:", error);
            alert("Error uploading image");
        })
    }

    return (
        <Page>
            <div className='w-screen min-h-screen text-white p-8'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold mb-6'>Image Upload</h1>
                    <div className='flex gap-4 items-center'>
                        <input type="file" accept="image/*" onChange={HandleChange}></input>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSubmit}>
                            Upload Image
                        </button>
                    </div>
                </div>

                <div className='mb-6 flex items-center gap-4'>
                    <h2 className='text-2xl font-bold'>Uploaded Images ({images.length})</h2>
                    <button 
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={fetchImages}
                        disabled={loading}
                    >
                        {loading ? 'Refreshing...' : 'Refresh'}
                    </button>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {images.map((img) => (
                        <div key={img._id} className='bg-gray-900 rounded-lg overflow-hidden'>
                            <img
                                src={img.image_url}
                                alt="Uploaded"
                                className='w-full h-48 object-cover'
                            />
                            <p className='text-gray-400 text-xs p-2 truncate'>{img.public_id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
}