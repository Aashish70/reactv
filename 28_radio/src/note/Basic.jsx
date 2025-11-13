import React from "react";
import { useState } from "react";

function App() {
  const [gender, setgender] = useState("");

  console.log(gender)

  return (
    <div className="select-none">
      <label htmlFor="male">
        <input id="male" type="radio" name="gender" checked={gender == 'male'} value={'male'} onChange={(e) => setgender(e.target.value)} />
        Male
      </label>
      <br />
      <label htmlFor="female">
        <input id="female" type="radio" name="gender" checked={gender == 'female'} value={'female'} onChange={(e) => setgender(e.target.value)} />
        Female
      </label>
      <br />
      <label htmlFor="other">
        <input id="other" type="radio" name="gender" checked={gender == 'other'} value={'other'} onChange={(e) => setgender(e.target.value)} />
        Other
      </label>
    </div>
  );
}

export default App;
