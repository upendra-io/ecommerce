import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ items }) => {
  return (
    <nav className="navbar">
      <h1>review</h1>
      <ul>
        {!items && (
          <>
            <li>
              <Link to="/login" className="login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="signup">
                Signup
              </Link>
            </li>{" "}
          </>
        )}
        {items && (
          <li>
            <Link to="/logout" className="logout">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
