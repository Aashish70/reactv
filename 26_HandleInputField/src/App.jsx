import React, { useState } from "react";
import SingleInputHandler from "./notes/SingleInputHandler";

function App() {
  const [index, setIndex] = useState(3);
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
  });

  return (
    <>
      <SingleInputHandler/>
    </>
  );
}

export default App;
