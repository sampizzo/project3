import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamePage from "./pages/game";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/game" component={GamePage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;