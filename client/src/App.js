import React from "react";
// import Header from "./header";
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
// import Post from "./post";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePostPage from "./pages/CreatePost";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route index element={<IndexPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/create" element={<CreatePostPage/>} />
    </Routes>
  );
}

export default App;
