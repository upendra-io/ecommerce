import React from "react";
import Navbar from "./navbar";

const Home = () => {
  const names = ["1", "2", "3", "4", "5"];

  return (
    <>
      <Navbar items="logout" />
      <div className="grid">
        {names.map((name) => (
          <div className="card" key={name}>
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
