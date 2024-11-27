// pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate to Success Page

  return (
    <div className="container text-center">
      <h1>Welcome to ShopEasy</h1>
      <p>Your one-stop shop for all your needs!</p>
      <div>
        <img src={logo} alt="" />
      </div>
      <button onClick={() => navigate("/products")} className="btn btn-primary">
        Show me products
      </button>
    </div>
  );
};

export default Home;
