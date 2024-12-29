import React from "react";
import Header from './header' // Import Header component
import Post from "./post"; // Import Post component
import "./App.css"; // Import CSS file

function App() {
  return (
    <main>
      {/* Header Section */}
      <Header /> 
      
      {/* Blog Entry Section */}
      <div className="posts-container">
        <Post />
        <Post /> {/* Add more Post components if needed */}
      </div>
    </main>
  );
}

export default App;
