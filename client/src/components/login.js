import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = ({ setAuth, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleRequest = async () => {
    try {
      const res = await fetch("http://localhost:3001/login", {
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
      } else {
        setAuth(true);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
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
      <button className="submit" onClick={handleRequest}>
        Login
      </button>
      {auth && <Redirect to="/products" />}
    </div>
  );
};

export default Login;
