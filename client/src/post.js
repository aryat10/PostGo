import React from "react";

export default function Post() {
  return (
    <div className="post">
      {/* Post 1 */}
      
      <div className="post-item">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/12/rivian-sirius-xm.jpg?resize=1280,985"
          alt="Rivian EVs software update"
        />
        <div className="description">
          <h2>Rivian EVs finally get YouTube, Google Cast, and SiriusXM</h2>
          <p className="info">
            <button
              className="author"
              onClick={() => console.log("Author clicked")}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
                padding: 0,
              }}
            >
              Sean O'Kane
            </button>{" "}
            <span>1:09 PM PST · December 18, 2024</span>
          </p>
          <p>
            Rivian has released a new software update to its vehicles that
            brings some long-awaited apps to its in-vehicle experience. Owners
            who update their R1S SUV or R1T pickup truck can now use YouTube
            (while parked) or SiriusXM (with a subscription).
          </p>
        </div>
      </div>

      {/* Post 2 */}
      <div className="post-item">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/12/instagram-threads-GettyImages-2159215889.jpg?resize=1280,853"
          alt="Instagram Threads"
        />
        <div className="description">
          <h2>
            Instagram Threads adds ‘Use media’ feature for resharing photos and
            videos
          </h2>
          <p className="info">
            <button
              className="author"
              onClick={() => alert("Author: Sarah Perez")}
            >
              Sarah Perez
            </button>
            11:41 AM PST · December 18, 2024
          </p>
          <p>
            Threads is introducing a new way to reshare photos and videos on its
            social network. Instead of quote-posting the original post and then
            adding commentary, Threads users will instead be able to click a new
            option, “Use media,”
          </p>
          <button type="button" class="btn btn-outline-primary">
            Primary
          </button>
          <button type="button" class="btn btn-outline-secondary">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-success">
            Success
          </button>
          <button type="button" class="btn btn-outline-danger">
            Danger
          </button>
          <button type="button" class="btn btn-outline-warning">
            Warning
          </button>
          <button type="button" class="btn btn-outline-info">
            Info
          </button>
          <button type="button" class="btn btn-outline-light">
            Light
          </button>
          <button type="button" class="btn btn-outline-dark">
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
