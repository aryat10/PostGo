import React from "react";
import "./App.css"; // Import your CSS file

function App() {
  return (
    <main>
      {/* Header Section */}
      <header>
        <a href="/" className="logo">
          My Blog
        </a>
        <nav>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      {/* Blog Entry Section */}
      <div className="post">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/12/rivian-sirius-xm.jpg?resize=1280,985"
          alt="TechCrunch"
        />
        <div className="description">
          <h2>Rivian EVs finally get YouTube, Google Cast, and SiriusXM</h2>
          <p className="info">
            <button className="author" onClick={() => alert('Author: Sean O\' Kane')}>
              Sean O' Kane
            </button>
            1:09 PM PST · December 18, 2024
          </p>
          <p>
            Rivian has released a new software update to its vehicles that brings
            some long-awaited apps to its in-vehicle experience. Owners who
            update their R1S SUV or R1T pickup truck can now use YouTube (while
            parked) or SiriusXM (with a subscription).
          </p>
        </div>
      </div>

      <div className="post">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/12/instagram-threads-GettyImages-2159215889.jpg?resize=1280,853"
          alt="TechCrunch"
        />
        <div className="description">
          <h2>Instagram Threads adds ‘Use media’ feature for resharing photos and videos</h2>
          <p className="info">
            <button className="author" onClick={() => alert('Author: Sarah Perez')}>
              Sarah Perez
            </button>
            11:41 AM PST · December 18, 2024
          </p>
          <p>
            Threads is introducing a new way to reshare photos and videos on its social network.
            Instead of quote-posting the original post and then adding commentary, 
            Threads users will instead be able to click a new option, “Use media,”
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
