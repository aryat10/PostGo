export default function RegisterPage() {
  return (
    <div className="register-page">
      <form className="register-form">
        <h2 className="form-heading">Join Us at Post Forge</h2>
        <p className="form-subtext">
          Create your account and share your stories
        </p>
        <input type="text" className="form-input" placeholder="Username" />
        <input type="password" className="form-input" placeholder="Password" />
        <button type="submit" className="form-button">
          Register Now
        </button>
      </form>
    </div>
  );
}
