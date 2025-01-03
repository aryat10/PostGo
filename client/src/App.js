import React from "react";
// import Header from "./header";
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
// import Post from "./post";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route index element={<IndexPage />} />
      <Route path="/login" element={
        <LoginPage />
      }/>
      <Route path="/register" element={
        <RegisterPage />
      }/>
    </Routes>
  );
}

export default App;
