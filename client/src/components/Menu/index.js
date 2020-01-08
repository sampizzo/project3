import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Super from "./super.png";
import Typing from "./typing.png";
import Tutor from "./tutor.png";
import Mario from "./MarioProfile.png";
import Coin from "./coin.png";

class Menu extends React.Component {
  state = {
    highscore: "",
    language: "",
    user: "",
    highscore2: "",
    highscore3: "",
    user2: "",
    user3: "",
    userName: "",
    coins: ""
  };
  componentDidMount = () => {
  axios.get("/getuser").then(result => {
      // console.log(result)
      this.setState({userName: result.data.username})
      this.setState({coins: result.data.coins})

      console.log(this.state.userName)
  })
  }
  handleClick = event => {
    this.setState({ language: event.target.innerText });
    // console.log(this.state.language);
    axios.get("/api/scores").then(results => {
      let top10 = results.data;
      console.log(top10);


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
    // console.log("state", this.state);
    return (
      <div className="container">
          <br/>
          <img className="super" src={Super}></img> <br/>
          <img className="img"src={Typing}></img> <br/>
          <img className="img"src={Tutor}></img>

        <div className="userCard">
        <img className="Mario" src={Mario}></img>
          <h1>Welcome Back,</h1>
          <h2>{this.state.userName}!</h2><br/>
          <img className="Coin" src={Coin}></img>
          <h3>x{this.state.coin}'s</h3>

        </div>
        <div className="gameCard">
          <h1>Please Select Your Game</h1>
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
          <Link to={`/${this.state.language}`}>
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
