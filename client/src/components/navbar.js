import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>review</h1>
      <ul>
        <li>
          <Link to="/login" className="login">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="signup">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/logout" className="logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
