import React, { useState } from "react";
import axios from "axios";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description || !image) {
      setError("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:4000/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess("Post created successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (err) {
      setError("Failed to create post.");
    }
  };

  return (
    <div>
      <h1>Create a Post</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handlePostSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Upload Image</label>
          <input type="file" onChange={handleImageChange} required />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
