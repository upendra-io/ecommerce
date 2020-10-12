import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/signup" className="signup">
          Signup
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
