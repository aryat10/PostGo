import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BlogWorkImage from "../images/BlogWork.png";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    heading: "",
    content: "",
    image: null,
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Get token from localStorage

    const form = new FormData();
    form.append("heading", formData.heading);
    form.append("content", formData.content);
    form.append("image", formData.image);

    try {
      const response = await axios.post(
        "https://postgo-8.onrender.com/create-post",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      setFormData({ heading: "", content: "", image: null });
      setTimeout(() => navigate("/"), 2000); // Redirect to homepage (feed)
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to create post.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "#fff",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#fff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              margin: 0,
              color: "#333",
            }}
          >
            PostGO
          </h1>
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => navigate("/profile")}
            style={{
              padding: "8px 20px",
              fontSize: "1rem",
              color: "#333",
              backgroundColor: "#fff",
              border: "1px solid #333",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseOver={(e) => (
              (e.target.style.backgroundColor = "#333"),
              (e.target.style.color = "#fff")
            )}
            onMouseOut={(e) => (
              (e.target.style.backgroundColor = "#fff"),
              (e.target.style.color = "#333")
            )}
          >
            Back to Profile
          </button>
        </div>
      </header>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 40px",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "500px", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              marginBottom: "15px",
              lineHeight: "1.3",
              letterSpacing: "-0.5px",
            }}
          >
            Create a{" "}
            <span
              style={{
                color: "#007bff",
                background: "linear-gradient(90deg, #007bff, #00c4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              New Post
            </span>{" "}
            📝
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              marginBottom: "25px",
              lineHeight: "1.7",
              fontWeight: "300",
            }}
          >
            Share your thoughts with the world!
          </p>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div>
              <label htmlFor="heading">Heading</label>
              <input
                type="text"
                id="heading"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                placeholder="Enter post heading"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #e0e0e0",
                }}
              />
            </div>
            <div>
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your content here..."
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #e0e0e0",
                  height: "120px",
                }}
              />
            </div>
            <div>
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                accept="image/*"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #e0e0e0",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "12px 35px",
                color: "#fff",
                background: "linear-gradient(90deg,rgb(87, 210, 91),rgb(64, 189, 70))",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Post
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>

        <img
          src={BlogWorkImage}
          alt="Blog work illustration"
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "400px",
            borderRadius: "15px",
          }}
        />
      </main>
    </div>
  );
};

export default CreatePost;
