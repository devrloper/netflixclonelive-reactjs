// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js"; 
import Accounts from "../containers/Accounts.js";
import Login from "../containers/Login.js";
import Signup from "../containers/Signup.js";
import Main from "../containers/Main.js";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/accounts" component={Accounts} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/main" component={Main} />
    </Switch>
  );  
};

export default index;
