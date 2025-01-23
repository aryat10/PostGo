import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem("token", data.token);

        // Redirect to profile page
        navigate("/profile");
      } else {
        setError(data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while logging in. Please try again.");
    }
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  };

  const cardStyle = {
    maxWidth: "450px",
    width: "100%",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ced4da",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
  };

  const labelStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#495057",
  };

  const checkboxContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  };

  const errorStyle = {
    color: "#dc3545",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "15px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Welcome back to Post-Go 👽📮
        </h2>
        <p style={{ textAlign: "center", color: "#6c757d", marginBottom: "20px" }}>
          Let's spread your blog/post again.
        </p>
        <form onSubmit={login}>
          {error && <div style={errorStyle}>{error}</div>}
          <div>
            <label htmlFor="username" style={labelStyle}>
              UserName
            </label>
            <input
              type="text"
              id="username"
              style={inputStyle}
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              id="password"
              style={inputStyle}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div style={checkboxContainerStyle}>
            <input type="checkbox" id="detailsCheck" style={{ marginRight: "8px" }} />
            <label htmlFor="detailsCheck">All details are filled ✅</label>
          </div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
