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
    // Clear token from localStorage and redirect to login
    localStorage.removeItem("token");
    navigate("/login");
  }

  function handleCreatePost() {
    // Redirect to the "Create Post" page
    navigate("/create");
  }

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: '#a2a8d3',
          color: "#113f67",
        }}
      >
        <h1>Welcome Back</h1>

        <div>
          <button
            onClick={handleCreatePost}
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Create a Post
          </button>
          <button
            onClick={handleLogout}
            style={{
              padding: "5px 10px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </header>
      <main>
        <h2>Welcome {user?.username || "Guest"} to your profile page!</h2>
        {user ? (
          <div>
            <h5>Username: {user.username}</h5>
            <p>ID: {user._id}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* Add other profile-specific content here */}
      </main>
    </div>
  );
}
