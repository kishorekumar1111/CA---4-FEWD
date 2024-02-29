import React, { useState } from "react";
import "./app.css";
import quizQuestion from "./resources/quizQuestion.json";
import { Link, useHistory } from "react-router-dom";

const QuizComponent = ({ updateAttemptQuiz, updateScore }) => {
  const history = useHistory();
  const [currentQues, setCurrentQues] = useState(1);
  const [preBtnState, setPreBtnState] = useState(false);
  const [nextBtnState, setNextBtnState] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [highlightQuestion, setHighlightQuestion] = useState(false);

  const handlePrevious = () => {
    setCurrentQues((prev) => (prev > 1 ? prev - 1 : prev));
    setNextBtnState(true);
    if (currentQues <= 2) setPreBtnState(false);
  };

  const handleNext = () => {
    setCurrentQues((prev) => (prev < quizQuestion.length ? prev + 1 : prev));
    setPreBtnState(true);
    if (currentQues === quizQuestion.length - 1) setNextBtnState(false);
    updateAttemptQuiz(); // Assuming this function is passed as a prop to update the attempt quiz
  };

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit ?")) {
      handleNext();
    }
  };
  

  const handleAnswers = (clickedOption) => {
    const correctAnswer = quizQuestion[currentQues - 1].answer;
    if (clickedOption === correctAnswer) {
      updateScore(); // Assuming this function is passed as a prop to update the score
    }
    if (currentQues === quizQuestion.length) {
      history.push("/result");
    } else {
      handleNext();
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleHighlight = () => {
    setHighlightQuestion((prev) => !prev);
  };

  const removeHighlight = () => {
    setHighlightQuestion(false);
  };

  return (
    <div className={`whole-page ${darkMode ? "dark-mode" : ""}`}>
      <div id="whitebox">
        <h1>Question</h1>
        <p>{currentQues} of {quizQuestion.length}</p>
        <h3 style={{ backgroundColor: highlightQuestion ? "#FFFF00" : "transparent" }}>
          {quizQuestion[currentQues - 1].question}
        </h3>
        <div id="answer-box">
          <button onClick={() => handleAnswers(quizQuestion[currentQues - 1].optionA)}>
            {quizQuestion[currentQues - 1].optionA}
          </button>
          <button onClick={() => handleAnswers(quizQuestion[currentQues - 1].optionC)}>
            {quizQuestion[currentQues - 1].optionC}
          </button>
          <button onClick={() => handleAnswers(quizQuestion[currentQues - 1].optionD)}>
            {quizQuestion[currentQues - 1].optionD}
          </button>
          <button onClick={() => handleAnswers(quizQuestion[currentQues - 1].optionB)}>
            {quizQuestion[currentQues - 1].optionB}
          </button>
        </div>
        <div id="option-box">
          <button
            style={{
              backgroundColor: "#3E7DAA",
              cursor: preBtnState ? "pointer" : "not-allowed",
            }}
            onClick={handlePrevious}
            id="preBtn"
          >
            Previous
          </button>
          <button
            style={{
              backgroundColor: "green",
              cursor: nextBtnState ? "pointer" : "not-allowed",
            }}
            onClick={handleNext}
          >
            Next
          </button>
          <button style={{ backgroundColor: "blue" }} onClick={handleQuit}>
            Quit
          </button>

          <button style={{ border: "1px solid white" }} onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            style={{ border: "1px solid white", borderRadius: "1px"  , backgroundColor:"lightblue"}}
          >
            <Link to="/result">Finish</Link>
          </button>

          <button
            style={{ border: "1px solid white", borderRadius: "10px"  , backgroundColor:"lightblue"}}
            onClick={toggleHighlight}
          >
            Highlight Question
          </button>

          <button
            style={{ borderRadius: "10px" , backgroundColor:"lightblue" }}
            onClick={removeHighlight}
          >
            Remove Highlight
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
