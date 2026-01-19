import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  console.log(score)

  return (
    <>
      {!isOver ? (
        <div>
          <Timer setIsOver={setIsOver} />
          <Question
            setIsOver={setIsOver}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setScore={setScore}
          />
        </div>
      ) : (
        <Result score={score} setIsOver={setIsOver} setCurrentIndex={setCurrentIndex} />
      )}
    </>
  );
}

export default App;
