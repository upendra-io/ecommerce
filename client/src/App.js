import React, { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Landing from "./components/landing";
import Home from "./components/home";
import Product from "./components/product";

import store from "./store/store";

import "./index.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logout from "./components/logout";
import { Provider } from "react-redux";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => <Login setAuth={setAuth} auth={auth} />}
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
          <Route exact path="/products/:product_id" component={Product} />
          <Route exact path="/products" component={Home} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
