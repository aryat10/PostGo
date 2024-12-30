import React from "react";
import Header from './header' // Import Header component
import Post from "./post"; // Import Post component
import "./App.css"; // Import CSS file

function App() {
  return (
    <main>
      {/* Header Section */}
<<<<<<< HEAD
      <Header />
      Blog Post section
=======
      <Header /> 
>>>>>>> 803502e68af56826b7da1512845c73cb096dd207
      
      {/* Blog Entry Section */}
      <div className="posts-container">
        
        <Post /> {/* Add more Post components if needed */}
      </div>
    </main>
  );
}

export default App;
