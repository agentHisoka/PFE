import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatDiag from "./containers/whatDiag/WhatDiag";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatDiag />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
