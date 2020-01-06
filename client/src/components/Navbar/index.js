import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Typing Tutor 
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/howtoplay"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              How to play
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
            >
                    <i className="fa fa-user"></i>       

            </Link>


          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
