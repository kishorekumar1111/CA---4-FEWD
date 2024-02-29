import React, { Component } from "react";
import "./app.css";
import { Link } from "react-router-dom";
import questions from "./resources/quizQuestion.json";

export default class ResultComponent extends Component {
constructor(props) {
  super(props)
}

  render() {
    const {score,attemptQuiz}=this.props
    return (
      <div className="whole-page">
        <div id="center-div">
          <h1 style={{ color: "lightgreen" }}>Result</h1>
          <div id="result-board">
            <h3>You need practice more!</h3>
            <h1 style={{ color: "blue" }}>Your score is {score/5}</h1>
        
            {/* <div className="results">
              <p>Total number of questions</p>
              <p>{questions.length}</p>
            </div>
            <div className="results">
              <p>Number of attempted questions</p>
              <p>{attemptQuiz}</p>
            </div>
            <div className="results">
              <p>Number of correct answers</p>
              <p>{score}</p>
            </div>
            <div className="results">
              <p>Number of wrong answers</p>
              <p>{attemptQuiz-score}</p>
            </div> */}
                        <div className="results">
              <p>Number of correct answers</p>
              <p>{score}</p>
            </div>
          </div>
          <div>
            <Link to="/quiz">
              {" "}
              <button style={{ color: "black", padding: "6px", margin: "10px" , backgroundColor: "green" }}>
                Play again
              </button>
            </Link>
            {/* <Link to="/">
              <button
                style={{ color: "green", padding: "6px", margin: "10px" , backgroundColor: "green"}}
              >
                Back to home
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
