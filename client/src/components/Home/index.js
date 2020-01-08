import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';
function Home() {
  return (
    <div>
      <h1>
        Welcome to Typing Tutor 
      </h1>
         
      <Link to="/login">
          <button type="button">
                Login 
          </button>
      </Link>

      <Link to="/signup">
          <button type="button">
                Sign Up 
          </button>
      </Link>
          </div>
  );
}

export default Home;
