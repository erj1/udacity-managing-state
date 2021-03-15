import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game";
import Score from "./Score";

class App extends Component {

  state = {
    numQuestions: 0,
    numCorrect: 0
  }

  handleAnswer = isCorrect => {
    this.setState((currentState) => ({
      numQuestions: ++currentState.numQuestions,
      numCorrect: isCorrect ? ++currentState.numCorrect : currentState.numCorrect,
    }));
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
          <Game handleAnswer={this.handleAnswer}/>
          <Score correct={this.state.numCorrect} questions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
