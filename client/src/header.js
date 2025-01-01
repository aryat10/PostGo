import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <h1>- Post Go -</h1>
      </Link>
      <nav>
        <Link to="/login"><h3>Login</h3></Link>
        <Link to="/register"><h3>Register</h3></Link>
      </nav>
    </header>
  );
}