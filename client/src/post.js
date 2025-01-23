import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "#fff",
        color: "#333",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            margin: "0 0 20px",
            fontFamily: "cursive",
          }}
        >
          Post Go📮
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            margin: "0 0 30px",
            maxWidth: "600px",
            marginInline: "auto",
          }}
        >
          Unleash your creativity, connect with the world, and share your voice
          in style!
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/login">
            <button
              style={{
                padding: "12px 30px",
                fontSize: "1.2rem",
                color: "#333",
                backgroundColor: "#fff",
                border: "2px solid #333",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease",
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
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              style={{
                padding: "12px 30px",
                fontSize: "1.2rem",
                color: "#333",
                backgroundColor: "#fff",
                border: "2px solid #333",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease",
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
              Register
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <main style={{ padding: "60px 20px", textAlign: "center" }}>
        <section style={{ margin: "0 auto", maxWidth: "800px" }}>
          <h2
            style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}
          >
            Why Post Go?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Post Go is your one-stop platform for sharing ideas, exploring
            trends, and connecting with a like-minded community. Join us today
            and enjoy:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              padding: "0 20px",
            }}
          >
            {[
              "✍️ Create amazing posts to express yourself.",
              "🌐 Explore trending topics and ideas.",
              "🤝 Connect with like-minded individuals.",
              "📈 Grow your audience effortlessly!",
              "🎨 Personalize your profile to showcase  style",
              "🖼️ Share your moments and ideas with the world",
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
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