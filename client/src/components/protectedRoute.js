import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  return (
    <Route
      render={(props) => {
        const authLocal = localStorage.getItem("auth");
        if (authLocal !== "false") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
