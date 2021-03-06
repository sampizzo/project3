import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./style.css";
import logo from "./ssyntaxtut20h.png";
import 'font-awesome/css/font-awesome.min.css';
// import { response } from "express";
import { Redirect } from "react-router-dom";


class Navbar extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.
    state = {
      username: "",
      password: "",
      redirectTo: null
    }
  // }

  handlelogout() {
    Axios.post("/logout").
      then(response => {
        console.log("log out response", response)
        if (response.status === 200) {
          console.log("good to go!")
        }
      })
  }

  render() {
    console.log("state", this.state)
    // if (this.state.redirectTo) {
    //   return <Redirect to={{ pathname: this.state.redirectTo }} />
    // } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/menu">
          <img src={logo} alt="Super Syntax Tutor"/>
      </Link>
        <div style={{position: 'absolute', right: 20}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/login"
                className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
              >
                <i className="fa fa-user" style={{ color: "#009cda" }}></i>

              </Link>
            </li>
            <li>&nbsp;</li>
            <li>
              <Link className="logoutLink" to="/" onClick={this.handlelogout} > Log Out</Link>
              {/* <button onClick={this.handlelogout}>Log Out</button> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
// }



export default Navbar; 