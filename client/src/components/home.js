import React, { useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

import data from "./data";
import logo from "../assets/iphone-xr-black-select-201809.jpeg";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("auth", "true");
    console.log(data);
  });

  return (
    <>
      <Navbar items="logout" />
      <div className="grid">
        {data.products.map((product) => (
          <Link
            to={"/products/" + product}
            key={product._id}
            className="product"
          >
            <div className="card">
              <img className="product-image" src={logo} alt="u" />
              <div className="details">
                <div className="product-price">{product.price}</div>
                <div className="product-name">{product.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
