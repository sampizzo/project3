import React from "react";
import "./style.css";
import syntax from "../../utils/html.json"

class Game extends React.Component {
  state = {
    syntax
  }

  render() {
  return (
    <div className="gameDiv container">
        <div className="word">
          asdf
        </div>
    </div>
  );

  }
}
export default Game;
