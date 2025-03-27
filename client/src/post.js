import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "#fff",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
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
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/login">
            <button
              style={{
                padding: "8px 20px",
                fontSize: "1rem",
                color: "#fff",
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
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
              Register
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
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
        {/* Left Side - Text and Buttons */}
        <div style={{ maxWidth: "500px", textAlign: "left" }}>
          {/* Rating and Tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "25px",
            }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: "#ffd700",
                    fontSize: "1.2rem",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  ★
                </span>
              ))}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "1rem",
                color: "#666",
                fontWeight: "400",
              }}
            >
              Join thousands of bloggers worldwide
            </p>
          </div>

          {/* Main Heading with Colored Words */}
          <h2
            style={{
              fontSize: "2.8rem", // Slightly larger for impact
              fontWeight: "700",
              marginBottom: "25px",
              lineHeight: "1.3",
              letterSpacing: "-0.5px", // Tighter letter spacing for a modern look
            }}
          >
            <span
              style={{
                color: "#007bff", // Blue for "Share"
                background: "linear-gradient(90deg, #007bff, #00c4ff)", // Gradient for a modern touch
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Share
            </span>{" "}
            Your Thoughts and{" "}
            <span
              style={{
                color: "#007bff", // Blue for "Connect"
                background: "linear-gradient(90deg, #007bff, #00c4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>{" "}
            with{" "}
            <span
              style={{
                color: "#007bff", // Coral for "the World"
                background: "linear-gradient(90deg, #007bff, #00c4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              the World
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              marginBottom: "25px",
              lineHeight: "1.7",
              fontWeight: "300", // Lighter font weight for a softer look
            }}
          >
            Easily register, create, and share your blogs. Engage with others by
            commenting and exploring diverse perspectives.
          </p>

          {/* Call to Action Text */}
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              marginBottom: "25px",
              fontStyle: "italic",
              fontWeight: "400",
            }}
          >
            Let’s get you started then
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
            <Link to="/login">
              <button
                style={{
                  padding: "12px 35px",
                  fontSize: "1.1rem",
                  color: "#fff",
                  background: "linear-gradient(90deg, #007bff, #00c4ff)", // Gradient background
                  border: "none",
                  borderRadius: "8px", // Softer corners
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)", // Subtle shadow
                }}
                onMouseOver={(e) => (
                  (e.target.style.transform = "translateY(-3px)"),
                  (e.target.style.boxShadow =
                    "0 6px 16px rgba(0, 123, 255, 0.4)")
                )}
                onMouseOut={(e) => (
                  (e.target.style.transform = "translateY(0)"),
                  (e.target.style.boxShadow =
                    "0 4px 12px rgba(0, 123, 255, 0.3)")
                )}
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                style={{
                  padding: "12px 35px",
                  fontSize: "1.1rem",
                  color: "#333",
                  backgroundColor: "#fff",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => (
                  (e.target.style.backgroundColor = "#333"),
                  (e.target.style.color = "#fff"),
                  (e.target.style.transform = "translateY(-3px)"),
                  (e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)")
                )}
                onMouseOut={(e) => (
                  (e.target.style.backgroundColor = "#fff"),
                  (e.target.style.color = "#333"),
                  (e.target.style.transform = "translateY(0)"),
                  (e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)")
                )}
              >
                Register
              </button>
            </Link>
          </div>

          {/* Fine Print */}
          <p
            style={{
              fontSize: "0.9rem",
              color: "#666",
              fontStyle: "italic",
            }}
          >
            *No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Right Side - Custom Image Placeholder */}
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "300px",
            backgroundColor: "#e0e0e0",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(255, 250, 250, 0.1)",
          }}
        >
          <p style={{ color: "#666", fontSize: "1rem" }}>
            [Your Custom Image Here]
          </p>
        </div>
      </main>

      {/* Features Section */}
      {/* <section style={{ padding: "60px 20px", textAlign: "center" }}>
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
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          Post Go is your one-stop platform for sharing ideas, exploring trends,
          and connecting with a like-minded community. Join us today and enjoy:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            padding: "0 20px",
            maxWidth: "1200px",
            marginInline: "auto",
          }}
        >
          {[
            "✍️ Create amazing posts to express yourself.",
            "🌐 Explore trending topics and ideas.",
            "🤝 Connect with like-minded individuals.",
            "📈 Grow your audience effortlessly!",
            "🎨 Personalize your profile to showcase style",
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
      </section> */}

      {/* Footer Section */}
      <footer
        style={{
          padding: "40px 20px",
          background: "linear-gradient(135deg, #333 0%, #1a1a1a 100%)", // Gradient background
          color: "#fff",
          marginTop: "50px",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)", // Subtle top border
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Main Footer Text */}
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

          {/* Tagline */}
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

          {/* Social Links */}
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

          {/* Additional Info */}
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
