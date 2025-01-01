import React from "react";
// import Header from "./header";
import Layout from "./layout";
// import Post from "./post";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="/login" element={
        <LoginPage />
      }/>
    </Routes>
  );
}

export default App;
