import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/logout", { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  localStorage.setItem("auth", false);

  return <Redirect to="/" />;
};

export default Logout;
