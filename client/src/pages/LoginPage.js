import { useState } from "react";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(ev) {
    ev.preventDefault();

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
          maxWidth: "450px",
          width: "100%",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center mb-3">Welcome back to Post-Go </h2>
        <p className="text-center text-muted mb-4">
          Let's spread your blog/post again.
        </p>
        <form onSubmit={login}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
