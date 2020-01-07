import React from "react";
import "./style.css"
// By extending the React.Component class, Counter inherits functionality from it
class ScoreBoard extends React.Component {
  // Setting the initial state of the Counter component


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <div className="gameOver">
          <h1>Game Over</h1>
          <hr />
          <h2>Level: {this.props.lvl}</h2>
          <h2>Highscore: {this.props.score}</h2>
          <h2>Coins Collected:  {this.props.coinsCollected}</h2>
          <h2>Total Words: {this.props.wordCount}</h2>
          <h2>Error Count: {this.props.errCount}</h2>
          <hr />
          <button className="button">Return To Menu</button>
          <button className="button">Replay</button>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;