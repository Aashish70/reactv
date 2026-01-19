import React, { useState } from "react";
import { useEffect } from "react";

function Timer({ setIsOver }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [displayTime, setDisplayTime] = useState("");

  // left time logic
  useEffect(() => {
    let timeId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timeId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  //time format logic
  useEffect(() => {
    if (timeLeft === 0) {
      setIsOver(true);
    }
    let formatedDate = `${Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0")} : ${(timeLeft % 60).toString().padStart(2, "0")}`;
    // console.log(formatedDate)
    setDisplayTime(formatedDate);
  }, [timeLeft]);

  return (
    <div>
      <h2 className="text-3xl mb-7">🕐 Time Left = {displayTime}</h2>
    </div>
  );
}

export default Timer;
