import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, ProductListing, ProductDetails } from "./pages";

import "./style.css";
import Breadcrumbs from "./Breadcrumbs";
const Bread = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <h1>Christon Store</h1>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Bread;
