import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamePage from "./pages/game";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BonusPage from "./pages/bonus";
import UserPage from "./pages/user";
import Axios from "axios";
import MenuPage from "./pages/menu";
import JavascriptPage from "./pages/javascript";
import SpecialPage from "./pages/special";

class App extends Component {
  state = {
    userId: null,
    loggedIn: false
  };
  componentDidMount() {
    console.log("about to check user");
    Axios.get("/getuser").then(data => {
      console.log(data);
      if (data.data._id) {
        this.setState({
          userId: data.data._id,
          loggedIn: true
        });
      }
    });
  }
  render() {
    console.log("state in app.js", this.state);
    if (this.state.loggedIn) {
      return (
        <Router>
          <Navbar></Navbar>
          <div>
            <Switch>
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/user" component={UserPage} />
              <Route exact path="/HTML" component={GamePage} />
              <Route exact path="/bonus" component={BonusPage} />
              <Route exact path="/menu" component={MenuPage} />
              <Route exact path="/javascript" component={JavascriptPage} />
              <Route exact path="/special" component={SpecialPage} />
            </Switch>
          </div>
          {/* <Footer></Footer> */}
        </Router>
      );
    } else {
      return (
        <Router>
          <Navbar></Navbar>
          <div>
            <Switch>
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/login" component={LoginPage} />
            </Switch>
          </div>
          {/* <Footer></Footer> */}
        </Router>
      );
    }
  }
}

export default App;
