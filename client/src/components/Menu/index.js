import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Super from "./super.png";
import Typing from "./typing.png";
import Tutor from "./tutor.png";


class Menu extends React.Component {
  state = {
    highscore: "",
    language: "",
    user: "",
    highscore2: "",
    highscore3: "",
    user2: "",
    user3: ""
  };
  handleClick = event => {
    this.setState({ language: event.target.innerText });
    console.log(this.state.language);
    axios.get("/api/scores").then(results => {
      let top10 = results.data.slice(0, 10);
      console.log(top10);

      //    for (var i = 0; i < 10; i++) {
      //     console.log(results.data)
      //scores
      this.setState({ highscore: top10[0].highscore });
      this.setState({ highscore2: top10[1].highscore });
      this.setState({ highscore3: top10[2].highscore });

      //users
      this.setState({ user: top10[0].user.username });
      this.setState({ user2: top10[1].user.username });
      this.setState({ user3: top10[2].user.username });
    });
  };
  // {elements.map((value, index) => {
  //     return <li key={index}>{value}</li>
  //   })}

  render() {
    console.log("state", this.state);
    return (
      <div className="container">
          <br/>
          <img className="super" src={Super}></img> <br/>
          <img className="img"src={Typing}></img> <br/>
          <img className="img"src={Tutor}></img>

        <div className="userCard">
          <h1>User Info Goes Here</h1>
        </div>
        <div className="gameCard">
          <h1>Game Pages Go Here</h1>
          <button className="button" onClick={this.handleClick}>
            HTML
          </button>
          <button className="button" onClick={this.handleClick}>
            javascript
          </button>
          <button className="button" onClick={this.handleClick}>
            special
          </button>
        </div>

        <div className="scoreCard">
          <h1 id="hiScore">HIGH SCORE!</h1>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Score</th>
                <th scope="col">User</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{this.state.highscore}</td>
                <td>{this.state.user}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>{this.state.highscore2}</td>
                <td>{this.state.user2}</td>
               
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>{this.state.highscore3}</td>
                <td>{this.state.user3}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/">
            <button className="button">
              Let's Play: {this.state.language}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
