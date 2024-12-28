export default function Post() {
    return (
      <div className="post">
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
            Rivian has released a new software update to its vehicles that brings
            some long-awaited apps to its in-vehicle experience. Owners who update
            their R1S SUV or R1T pickup truck can now use YouTube (while parked) or
            SiriusXM (with a subscription).
          </p>
        </div>
      </div>
    );
  }
  