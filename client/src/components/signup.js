import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRequest = async () => {
    try {
      const res = await fetch("http://localhost:3001/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      let response = await res.json();

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="input"
      />
      <div className="error"></div>
      <Link to="/products">
        <button className="submit" onClick={handleRequest}>
          Signup
        </button>
      </Link>
    </div>
  );
};

export default Signup;
