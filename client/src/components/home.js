import React, { useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  useEffect(() => {
    localStorage.setItem("auth", "true");
  });

  return (
    <>
      <Navbar items="logout" />
      <div className="grid">
        {names.map((name) => (
          <Link to={"/products/" + name} key={name}>
            <div className="card">{name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
