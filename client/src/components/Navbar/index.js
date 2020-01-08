import React, {Component} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';

class Navbar extends React.Component {
  state = {username: "", password: ""}
  handlelogout (){
    Axios.post("/logout").then((response)=>{
      console.log("log out response", response)
    }) 
  }

render() {
  console.log("state", this.state)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Syntax Tutor 
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
            >
                    <i className="fa fa-user"></i>       

            </Link>
          </li>
          <li>
            <button onClick= {this.handlelogout}>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
);
}
}
         


export default Navbar; 