import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  const handleRequest = async () => {
    try {
      const res = await fetch("http://localhost:3001/signup", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.errors) {
        setError({
          emailError: data.errors.email,
          passwordError: data.errors.password,
        });
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Signup</h1>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="input"
        />
        <div className="input error">{error.emailError}</div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input"
        />
        <div className="password error">{error.passwordError}</div>
        <Link>
          <button className="submit" onClick={handleRequest}>
            Signup
          </button>
        </Link>
      </div>
    </>
  );
};

export default Signup;
