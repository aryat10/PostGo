import React from "react";
import Header from "./header"; 
import Post from './post'
import "./App.css"; 

function App() {
  return (
    <main>
      {/* Header Section */}
      <Header />
      Blog Post section :{/* Blog Entry Section */}
      <div className="posts-container">
        <Post /> {/* Add more Post components if needed */}
      </div>
    </main>
  );
}

export default App;
