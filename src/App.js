import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from "./Score";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.updateEquation(),
      numQuestions: 0,
      numCorrect: 0
    }
  }

  getRandomValue(multiplier = 100) {
    return Math.floor(Math.random() * multiplier);
  }

  checkAnswer(answer) {
    let isCorrect = false;
    if ((this.state.isEqual && answer) || (!this.state.isEqual && !answer)) {
      isCorrect = true;
    }
    this.setState((currentState) => ({
      numQuestions: ++currentState.numQuestions,
      numCorrect: isCorrect ? ++currentState.numCorrect : currentState.numCorrect,
      ...this.updateEquation(),
    }));
  }

  updateEquation() {
    const value1 = this.getRandomValue(100);
    const value2 = this.getRandomValue(100);
    const value3 = this.getRandomValue(100);
    const proposedAnswer = this.getRandomValue(3) + value1 + value2 + value3;
    const isEqual = proposedAnswer === (value1 + value2 + value3);
    return {value1, value2, value3, isEqual, proposedAnswer}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <Score correct={this.state.numCorrect} questions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
