import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  async function register(ev) {
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setRegistrationSuccess(true);
    } else {
      alert("Registration failed. Please try again.");
    }
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
          <Link to="/login">
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
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Main Section */}
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
        {/* Left Side - Registration Form or Success Message */}
        <div style={{ maxWidth: "500px", textAlign: "left" }}>
          {registrationSuccess ? (
            <>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.5px",
                }}
              >
                🎉 Registration Successful! 🎉
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
                Let’s get you started with your Post!
              </p>
              <Link to="/login">
                <button
                  style={{
                    padding: "12px 35px",
                    fontSize: "1.1rem",
                    color: "#fff",
                    background: "linear-gradient(90deg, #007bff, #00c4ff)",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
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
                  Go to Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.5px",
                }}
              >
                <span
                  style={{
                    color: "#007bff",
                    background: "linear-gradient(90deg, #007bff, #00c4ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Join
                </span>{" "}
                PostGO!
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
                Start sharing your amazing blogs/posts today!
              </p>
              <form
                onSubmit={register}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div>
                  <label
                    htmlFor="registerUserName"
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      color: "#333",
                      marginBottom: "5px",
                      fontWeight: "500",
                    }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="registerUserName"
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                    placeholder="Enter your username"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "1rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "5px",
                      outline: "none",
                      transition:
                        "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onFocus={(e) => (
                      (e.target.style.borderColor = "#007bff"),
                      (e.target.style.boxShadow =
                        "0 0 5px rgba(0, 123, 255, 0.3)")
                    )}
                    onBlur={(e) => (
                      (e.target.style.borderColor = "#e0e0e0"),
                      (e.target.style.boxShadow = "none")
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="registerPassword"
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      color: "#333",
                      marginBottom: "5px",
                      fontWeight: "500",
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    placeholder="Enter your password"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      fontSize: "1rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "5px",
                      outline: "none",
                      transition:
                        "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onFocus={(e) => (
                      (e.target.style.borderColor = "#007bff"),
                      (e.target.style.boxShadow =
                        "0 0 5px rgba(0, 123, 255, 0.3)")
                    )}
                    onBlur={(e) => (
                      (e.target.style.borderColor = "#e0e0e0"),
                      (e.target.style.boxShadow = "none")
                    )}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="detailsCheck"
                    required
                    style={{ margin: 0, cursor: "pointer" }}
                  />
                  <label
                    htmlFor="detailsCheck"
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      fontWeight: "400",
                    }}
                  >
                    All details are filled ✅
                  </label>
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "12px 35px",
                    fontSize: "1.1rem",
                    color: "#fff",
                    background: "linear-gradient(90deg, #007bff, #00c4ff)",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
                    marginTop: "15px",
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
                  Register
                </button>
              </form>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#0056b3")}
                  onMouseOut={(e) => (e.target.style.color = "#007bff")}
                >
                  Login here
                </Link>
              </p>
            </>
          )}
        </div>

        {/* Right Side - Custom Image */}
        <img
          src="https://img.freepik.com/free-vector/resume-concept-illustration_114360-103.jpg?t=st=1743107549~exp=1743111149~hmac=03d98ead6e9fd656732eaae614ea5df6202d97fb41879430c36462c4f18934be&w=740"
          alt={
            registrationSuccess
              ? "Success illustration"
              : "Register illustration"
          }
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "400px",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            objectFit: "cover",
          }}
        />
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
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
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
