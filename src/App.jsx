import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import './App.css';

function App() {

  return (
    <BrowserRouter>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0F172A"
        }}
      >

        <NavBar />

        <div style={{ flex: 1, paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;