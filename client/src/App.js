import React from "react";
// import Header from "./header";
import Layout from "./layout";
import Post from "./post";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <main>
          <Layout />
          <Header />
        </main>
      } />
      <Route index element={<Post />} />

      <Route path={"/login"} element={
        <main>
          <Header />
        </main>
      } />
    </Routes>
  );
}

export default App;
