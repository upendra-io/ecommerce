import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export const Logout = ({ setAuth }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/logout", { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  setAuth(false);

  return <Redirect to="/" />;
};
