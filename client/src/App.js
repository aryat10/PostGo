import React from "react";
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePostPage from "./pages/CreatePost";

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route index element={<IndexPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePostPage token={localStorage.getItem("token")} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePostPage token={localStorage.getItem("token")} />} />
    </Routes>
  );
}

export default App;
