import React from "react";
import { useState } from "react";

function App() {
  const [gender, setgender] = useState("");

  console.log(gender)

  const genders = ["Javascript", "python", "css", "html", "React", "docker"];

  return (
    <div className="select-none">
      {genders.map((item) => {
        return (
          <label key={item} htmlFor={item}>
            <input
              id={item}
              type="radio"
              name="gender"
              checked={gender == item}
              value={item}
              onChange={(e) => setgender(e.target.value)}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
}

export default App;
