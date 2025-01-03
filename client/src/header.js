import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  function handleLogout() {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update the state
    navigate("/login"); // Redirect to the login page
  }

  return (
    <header>
      <Link to="/" className="logo">
        <h1>- Post Go -</h1>
      </Link>
      <nav>
        {isLoggedIn ? (
          <>
            <Link to="/create">
              <button type="button" className="btn btn-outline-dark">
                Create a Post
              </button>
            </Link>
            <Link>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleLogout} // Use handleLogout here
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button type="button" className="btn btn-outline-dark">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="btn btn-outline-dark">
                Register
              </button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
