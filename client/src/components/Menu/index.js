import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

class Menu extends React.Component {
  render() {
    console.log("state", this.state);
    return (
      <div className="container">
        <div className="card">
          <h1>User Info Goes Here</h1>
        </div>
        <div className="card">
          <h1>Game Pages Go Here</h1>
          <Link to="/game">
          <button>html</button> 
          </Link>
          <Link to="/javascript">
          <button>javascript</button>
          </Link>
          <button>jquery</button>
          <button>special</button>
        </div>
      </div>
    );
  }
}

export default Menu;
