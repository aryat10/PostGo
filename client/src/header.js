import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <h1>- Post Go -</h1>
      </Link>
      <nav>
        <Link to="/login">
          <button type="button" class="btn btn-outline-dark">
            Login
          </button>
        </Link>
        <Link to="/register">
         <button type="button" class="btn btn-outline-dark">
            Register
          </button>
        </Link>
      </nav>
    </header>
  );
}