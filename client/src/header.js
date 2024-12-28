export default function Header() {
  return (
    <header>
      <a href="/" className="logo">
        - Post Go -
      </a>
      <nav>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  );
}