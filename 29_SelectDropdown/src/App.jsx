import React, { useState } from "react";
import dt from "./note/data";
import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  console.log(selectedCountry);
  console.log(selectedCity);

  return (
    <>
      <select
        value={selectedCountry}
        onChange={(e) => {setSelectedCountry(e.target.value); setSelectedCity("")}}
      >
        <option>----select country----</option>
        {Object.keys(dt).map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      {selectedCountry && (
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option>------select city------</option>
          {dt[selectedCountry].map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      )}
    </>
  );
}

export default App;
