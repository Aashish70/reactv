import React from "react";
import { useState } from "react";
import Ques from "../question.json";
import Navigation from "./Navigation";

function Question({ setIsOver, setScore, currentIndex, setCurrentIndex }) {
  const hnadleOptionClick = (selectedOptions) => {
    const isCorrect = selectedOptions === Ques[currentIndex].answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Check if it's the last question
    if (currentIndex < Ques.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };

  function handleNext() {
    if (currentIndex < Ques.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <Navigation setCurrentIndex={setCurrentIndex} />
      </div>

      <div className="w-full h-[350px]">
        <h1 className="mb-8">
          {Ques[currentIndex].id}. {Ques[currentIndex].question}
        </h1>

        <div className="flex flex-col items-center gap-2">
          {Ques[currentIndex].options.map((item, idx) => (
            <button
              onClick={() => hnadleOptionClick(item)}
              className="w-[200px] bg-[#1a1a1a]"
              key={idx}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex justify-around gap-5 mt-15 w-[500px]">
          <button onClick={handlePrev} className="bg-red-700">
            Previous
          </button>
          <button onClick={handleNext} className="bg-green-700">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Question;
