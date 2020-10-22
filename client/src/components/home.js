import React, { useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../assets/iphone-xr-black-select-201809.jpeg";
import { listProducts } from "../actions/productActions";

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <>
      <Navbar items="logout" />
      <div className="grid">
        {products.map((product) => (
          <Link
            to={"/products/" + product._id}
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
