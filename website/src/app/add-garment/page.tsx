"use client";

import { useState } from "react";

export default function AddGarmentPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [colour, setColour] = useState("");
  const [labels, setLabels] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("type", type);
      formData.append("colour", colour);
      formData.append("labels", labels);
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("/api/garments", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Garment added successfully!");
        setName("");
        setDescription("");
        setType("");
        setColour("");
        setLabels("");
        setImage(null);
      } else {
        setMessage(data.message || "Error adding garment");
      }
    } catch (error) {
      setMessage("Error adding garment");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Add Garment</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Colour"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
        />
        <input
          type="text"
          placeholder="Labels (comma-separated)"
          value={labels}
          onChange={(e) => setLabels(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          required
        />
        <button type="submit" disabled={loading} style={{ width: "100px", height: "40px" }}>
          {loading ? "Uploading..." : "Add Garment"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}
