import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
function Home() {
  return (
    <div className="wrapper">
      <div className="center">
        <div id="login" className="rcorners">
          <h4>Welcome to Typing Tutor</h4>

          <Link to="/login">
            <button type="button">Login</button>
          </Link>

          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
