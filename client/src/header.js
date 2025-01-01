export default function Header() {
  return (
    <header>
      <a href="/" className="logo">
        <h1>- Post Go -</h1>
      </a>
      <nav>
        <a href="/login"><h3>Login</h3></a>
        <a href="/register"><h3>Register</h3></a>
      </nav>
    </header>
  );
}