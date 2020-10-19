import React, { useState } from "react";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Landing from "./components/landing";
import Home from "./components/home";
import ProtectedRoute from "./components/protectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Logout } from "./components/logout";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => <Login auth={auth} setAuth={setAuth} />}
        />
        <Route
          exact
          path="/logout"
          render={() => <Logout auth={auth} setAuth={setAuth} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup auth={auth} setAuth={setAuth} />}
        />
        <ProtectedRoute exact path="/products" component={Home} auth={auth} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
