import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth }) => {
  return (
    <Route
      {...auth}
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return <h1>You are not authorized</h1>;
        }
      }}
    />
  );
};

export default ProtectedRoute;
