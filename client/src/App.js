import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamePage from "./pages/game";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup" component={SignUpPage} /> 
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/game" component={GamePage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;