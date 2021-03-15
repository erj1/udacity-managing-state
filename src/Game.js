import React, { Component } from "react";

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.updateEquation()
    }
  }

  checkAnswer(answer) {
    this.setState({
      ...this.updateEquation(),
    });
    const {value1, value2, value3, proposedAnswer } = this.state;
    const isEquationCorrect = proposedAnswer === (value1 + value2 + value3);
    this.props.handleAnswer((isEquationCorrect && answer) || (!isEquationCorrect && !answer));
  }

  getRandomValue = multiplier => Math.floor(Math.random() * multiplier);

  updateEquation() {
    const value1 = this.getRandomValue(100);
    const value2 = this.getRandomValue(100);
    const value3 = this.getRandomValue(100);
    const proposedAnswer = this.getRandomValue(3) + value1 + value2 + value3;
    return {value1, value2, value3, proposedAnswer}
  }

  render() {
    return (
      <div>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.checkAnswer(true)}>True</button>
        <button onClick={() => this.checkAnswer(false)}>False</button>
      </div>
    )
  }
}

export default Game;
