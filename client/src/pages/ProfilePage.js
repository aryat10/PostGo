import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileAndPosts = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please login.");
        return;
      }
      try {
        
        const userResponse = await axios.get("https://postgo-8.onrender.com/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(userResponse.data.user);

        // Fetch user's posts
        const postsResponse = await axios.get(
          `https://postgo-8.onrender.com/user/${userResponse.data.user._id}`
        );
        setPosts(postsResponse.data);
      } catch (err) {
        setError("Failed to fetch profile or posts");
      }
    };
    fetchProfileAndPosts();
  }, []);

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
            onClick={handleCreatePost}
            style={{
              padding: "8px 20px",
              fontSize: "1rem",
              color: "#fff",
              background: "linear-gradient(90deg, #4CAF50, #66BB6A)",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
            }}
            onMouseOver={(e) => (
              (e.target.style.transform = "translateY(-3px)"),
              (e.target.style.boxShadow = "0 6px 16px rgba(76, 175, 80, 0.4)")
            )}
            onMouseOut={(e) => (
              (e.target.style.transform = "translateY(0)"),
              (e.target.style.boxShadow = "0 4px 12px rgba(76, 175, 80, 0.3)")
            )}
          >
            Create Post
          </button>
          <button
            onClick={handleLogout}
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
            Logout
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
            Your <span
              style={{
                color: "#007bff",
                background: "linear-gradient(90deg, #007bff, #00c4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Profile
            </span> 👤
          </h2>
          {user ? (
            <div
              style={{
                backgroundColor: "#fff",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e0e0e0",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#007bff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                {user.username[0].toUpperCase()}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "#333",
                  marginBottom: "5px",
                }}
              >
                Username
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#555",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              >
                {user.username}
              </p>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "#333",
                  marginBottom: "5px",
                }}
              >
                User ID
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#555",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                }}
              >
                {user._id}
              </p>
            </div>
          ) : (
            <p
              style={{
                fontSize: "1.1rem",
                color: "#555",
                marginTop: "25px",
                fontWeight: "300",
              }}
            >
              Loading your profile...
            </p>
          )}
          {error && (
            <p
              style={{
                fontSize: "1rem",
                color: "#FF4D4D",
                marginTop: "20px",
                fontWeight: "400",
              }}
            >
              {error}
            </p>
          )}
        </div>

        
        <div style={{ maxWidth: "500px", textAlign: "left" }}>
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Your Posts
          </h3>
          {posts.length === 0 ? (
            <p>You haven't created any posts yet.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "10px" }}>
                  {post.title}
                </h4>
                <p style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}>
                  {post.content}
                </p>
                {post.image && (
                  <img
                    src={`https://postgo-8.onrender.com${post.image}`}
                    alt="Post"
                    style={{
                      maxWidth: "100%",
                      borderRadius: "5px",
                      marginBottom: "10px",
                    }}
                  />
                )}
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                  Posted on {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer Section */}
      <footer
        style={{
          padding: "40px 20px",
          background: "linear-gradient(135deg, #333 0%, #1a1a1a 100%)",
          color: "#fff",
          marginTop: "50px",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: "500",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Made with</span>
            <span style={{ fontSize: "1.5rem" }}>❤️</span>
            <span>by Aryat</span>
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            Transforming ideas into reality, one post at a time.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://github.com/aryat10"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "8px 15px",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseOver={(e) => (
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)"),
                (e.target.style.transform = "scale(1.05)")
              )}
              onMouseOut={(e) => (
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"),
                (e.target.style.transform = "scale(1)")
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aryatsrivastavaweb/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "8px 15px",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseOver={(e) => (
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)"),
                (e.target.style.transform = "scale(1.05)")
              )}
              onMouseOut={(e) => (
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"),
                (e.target.style.transform = "scale(1)")
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3H4.385C3.06 3 2 4.06 2 5.385v14.23C2 20.94 3.06 22 4.385 22h15.23C20.94 22 22 20.94 22 19.615V5.385C22 4.06 20.94 3 19.615 3zM8.15 19.5H5.5v-9.75h2.65v9.75zm-1.325-11.1a1.55 1.55 0 110-3.1 1.55 1.55 0 010 3.1zm12.675 11.1h-2.65v-5.25c0-1.245-.45-2.1-1.575-2.1-.86 0-1.375.585-1.6 1.15-.075.195-.1.465-.1.735v5.465h-2.65s.035-8.865 0-9.75h2.65v1.38c.35-.54.975-.975 1.775-.975 2.3 0 4.025 1.5 4.025 4.725v4.62z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.6)",
              marginTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "15px",
            }}
          >
            © {new Date().getFullYear()} PostGO. All rights reserved. 🧑🏼‍💻
          </p>
        </div>
      </footer>
    </div>
  );
}