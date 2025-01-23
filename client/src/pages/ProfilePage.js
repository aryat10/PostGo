import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please login.");
        return;
      }
      try {
        const response = await axios.get("http://localhost:4000/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (err) {
        setError("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, []);

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  function handleCreatePost() {
    navigate("/create");
  }

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "#333",
          color: "#fff",
          borderBottom: "2px solid #f5f5f5",
        }}
      >
        <h1 style={{ fontSize: "1.8rem" }}>
          Welcome, {user?.username || "Guest"} to Post Go 📮
        </h1>
        <div>
          <button
            onClick={handleCreatePost}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Create Post
          </button>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#FF4D4D",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e63939")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#FF4D4D")}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Your Profile 👤
        </h2>
        {user ? (
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              maxWidth: "400px",
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Username:</h3>
            <p
              style={{
                backgroundColor: "#f1f1f1",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {user.username}
            </p>
            <h3 style={{ margin: "20px 0 10px" }}>User ID:</h3>
            <p
              style={{
                backgroundColor: "#f1f1f1",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {user._id}
            </p>
          </div>
        ) : (
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              marginTop: "20px",
            }}
          >
            Loading your profile...
          </p>
        )}
        {error && (
          <p
            style={{
              color: "red",
              marginTop: "20px",
            }}
          >
            {error}
          </p>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px",
          backgroundColor: "#333",
          color: "#fff",
          marginTop: "50px",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
          Made with ❤️ by Aryat
        </p>
        <p style={{ fontSize: "0.9rem" }}>
          Transforming ideas into reality, one post at a time.
        </p>
      </footer>
    </div>
  );
}
