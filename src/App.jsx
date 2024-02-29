import React, { Component } from "react";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";
import { Routes, Route } from "react-router-dom";


export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     score:0,
     attemptQuiz:0
  }
}

updateScore=()=>{
  this.setState({score:this.state.score+1})
}

updateAttemptQuiz=()=>{
  this.setState({attemptQuiz:this.state.attemptQuiz+1})
}

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/quiz" element={<QuizComponent updateScore={this.updateScore} updateAttemptQuiz={this.updateAttemptQuiz}/>} />
          <Route path="/result" element={<ResultComponent score={this.state.score} attemptQuiz={this.state.attemptQuiz} />} />
        </Routes>
      </div>
    );
  }
}
