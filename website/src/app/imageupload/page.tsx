'use client';

import React, { ChangeEvent } from 'react'
import Page from "../../components/Page";
import { useState } from 'react';

export default function imageUpload() {
    const [image, setImage] = useState<File>();

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

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
        })

    }
    return (
        <Page>
            <div className='w-screen h-screen text-white'>
                <p>Image Upload</p>
                <input type="file" accept="image/*" onChange={HandleChange}></input>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSubmit}>
                Upload Image
            </button>
        </Page>
    );
}