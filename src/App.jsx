import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Success from "./components/Success";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          {/* <Route path="/" element={<Outlet />}> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />{" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
