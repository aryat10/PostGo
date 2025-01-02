import React, { useState } from "react";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    
      console.log(response);
     
   
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center mb-3">Welcome to Post Go</h2>
        <p className="text-center text-muted mb-4">
          Start sharing your amazing blogs/posts today!
        </p>
        <form onSubmit={register}>
          <div className="mb-3">
            <label htmlFor="registerUserName" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="registerUserName"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>

          {/* <div className="mb-3">
            <label htmlFor="registerEmail" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="registerEmail" />
          </div> */}
          <div className="mb-3">
            <label htmlFor="registerPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="registerPassword"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              All details are filled ✅
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
