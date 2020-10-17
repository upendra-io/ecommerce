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
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/products" component={Home} />
        <Route exact path="/" auth={auth} component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
