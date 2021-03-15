import React, { Component } from "react";


class Score extends Component {
  render() {
    const {correct, questions} = this.props;
    return (
      <p className="text">Your Score: {correct}/{questions}</p>
    );
  }
}

export default Score;
