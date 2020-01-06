import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class ScoreBoard extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 10 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <div className="card-body">
          <p>Score: {this.state.score}</p>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;