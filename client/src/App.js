import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamePage from "./pages/game";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import BonusPage from "./pages/bonus";
import MenuPage from "./pages/menu";


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route exact path="/signup" component={SignUpPage} /> 
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/bonus" component={BonusPage} />
          <Route exact path="/menu" component={MenuPage} />
          </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;