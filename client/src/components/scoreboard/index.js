import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
// By extending the React.Component class, Counter inherits functionality from it
class ScoreBoard extends React.Component {
  // Setting the initial state of the Counter component


//Reload the game//////////////////////////////////
  replay = () => {
    window.location.reload(true);
}

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <div className="gameOver">
          <h1 id="gameover">Game Over</h1>
          <hr />
          <h2>Level: {this.props.lvl}</h2>
          <h2>Highscore: {this.props.score}</h2>
          <h2>Coins Collected:  {this.props.coinsCollected}</h2>
          <h2>Total Words: {this.props.wordCount}</h2>
          <h2>Error Count: {this.props.errCount}</h2>
          <hr />
          <Link to="/menu">
          <button className="button" >Return To Menu</button>
          </Link>
          <button className="button" onClick={this.replay}>Replay</button>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;