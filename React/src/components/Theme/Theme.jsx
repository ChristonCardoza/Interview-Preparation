import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Nabar from "./Nabar";

import "./style.css";
import { ThemeProvider } from "./ThemeContext";

const Theme = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Theme;
