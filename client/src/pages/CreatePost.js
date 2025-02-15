import React, { useState } from "react";
import axios from "axios";

const CreatePost = ({ token }) => {
  const [formData, setFormData] = useState({
    heading: "",
    content: "",
    image: null,
  });
  const [message, setMessage] = useState("");

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
    const form = new FormData();
    form.append("heading", formData.heading);
    form.append("content", formData.content);
    form.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:4000/create-post",
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
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to create post.");
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      fontFamily: "'Arial', sans-serif",
      color: "#333",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      fontSize: "16px",
      marginBottom: "5px",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
      height: "100px",
      resize: "vertical",
    },
    button: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      fontSize: "16px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    message: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "16px",
      color: "#333",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.heading}>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="heading">
              Heading
            </label>
            <input
              style={styles.input}
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              placeholder="Enter post heading"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="content">
              Content
            </label>
            <textarea
              style={styles.textarea}
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your content here..."
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="image">
              Upload Image
            </label>
            <input
              style={styles.input}
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </div>
          <button
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Post
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </>
  );
};

export default CreatePost;
