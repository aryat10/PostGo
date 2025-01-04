import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const isProfilePage = location.pathname === "/profile";

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Link to="/" className="logo">
        <h1>- Post Go -</h1>
      </Link>
      <nav>
        {isLoggedIn && isProfilePage ? (
          <>
            <Link to="/create">
              <button type="button" className="btn btn-outline-dark">
                Create a Post
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleLogout}
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
          </>
        ) : isLoggedIn ? (
          <>
            <Link to="/profile">
              <button type="button" className="btn btn-outline-dark">
                Profile
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
