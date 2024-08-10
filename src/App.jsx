import { useState } from "react";

function App() {
  //State variables
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  //Quiz question array
  const questions = [
    {
      question: "Where is the Minar-e-Pakistan in pakistan?",
      options: ["Islamabad", "karachi", "peshawar", "lahore"],
      correctAns: "lahore",
    },
    {
      question: "What is the national game of the pakistan?",
      options: ["cricket", "football", "hucky", "kabadhi"],
      correctAns: "hucky",
    },
    {
      question: "Who is the PM of the pakistan now?",
      options: ["imran khan", "shahbaz sharif", "bilawol batto", "nawaz shrif"],
      correctAns: "shahbaz sharif",
    },
    {
      question: "Capital of pakistan?",
      options: ["Islamabad", "karachi", "peshawar", "lahore"],
      correctAns: "islamabad",
    },
  ];
  function handleOptionClick(selectedOption) {
    //score
    if (selectedOption === questions[currentQuestion].correctAns) {
      setScore(score + 1);
    }
    //next
    const nextQuestion = currentQuestion + 1;
    //agr array me aglaa sawal ho to tub
    if (nextQuestion < questions.length) {
      setcurrentQuestion(nextQuestion);
    } else {
      //hamary pass curent q last q ho
      setShowScore(true);
    }
    //if last show score
  }

  return (
    <div className="contanier">
      {/*app heading*/}
      <h1>Quiz Application</h1>
      {/* {`You got ${score} question right out of ${questions.length}.`} */}
      {showScore ? (
        <p>
          You got {score} questions right out of {questions.length}.
        </p>
      ) : (
        <>
          {/*cerunt Question*/}
          <h3>{questions[currentQuestion].question}</h3>

          {/*Creunt Questions Option */}
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <button key={index} onClick={() => handleOptionClick(option)} className="btn">
                {option}
              </button>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
