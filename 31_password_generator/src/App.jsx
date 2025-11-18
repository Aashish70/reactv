import { useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "../components/Button";

function App() {
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [length, setLength] = useState(8);
  const [savedPassword, setSavedPassword] = useState([]);

  const inputRef = useRef();

  function generatePassword() {
    let str = "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let createdPassword = "";

    if (isNumber) {
      str += "0123456789";
    }

    if (isCharacter) {
      str += "!@#$%^&*";
    }

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      let characterPicked = str.charAt(randomIndex);
      createdPassword += characterPicked;
    }
    setPassword(createdPassword);
  }

  const copyHandler = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
    }
  };

  const resetHandler = () => {
    setLength(8);
    setIsCharacter(false);
    setIsNumber(false);
  };

  const saveHandler = () => {
    setSavedPassword(prevPass => ([...prevPass, password]))
  };

  useEffect(() => {
    generatePassword();
  }, [length, isCharacter, isNumber]);

  return (
    <>
      <div className="mb-16">
        <h1>Password Generator</h1>
      </div>
      <div>
        <input
          className="w-full p-4 border-2 focus:none border-gray-400 rounded-2xl mb-16"
          type="text"
          ref={inputRef}
          readOnly
          value={password}
          placeholder="Generate password"
        />
      </div>

      <div className="flex flex-col gap-6 mb-6">
        {/* Input to show password */}
        <input
          type="range"
          min={0}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        {/* Checkbox for number */}
        <label htmlFor="number" className="flex items-center gap-3 text-xl">
          <input
            id="number"
            type="checkbox"
            checked={isNumber}
            onChange={(e) => setIsNumber(e.target.checked)}
            className="w-6 h-6 select-none"
          />
          <span className="select-none">Number Allowed</span>
        </label>

        {/* Checkbox for character */}
        <label htmlFor="character" className="flex items-center gap-3 text-xl">
          <input
            id="character"
            type="checkbox"
            checked={isCharacter}
            onChange={(e) => setIsCharacter(e.target.checked)}
            className="w-6 h-6"
          />
          <span className="select-none">Character Allowed</span>
        </label>
      </div>

      {/* All button are here */}
      <div className="flex flex-col gap-10">
        <Button handler={copyHandler} name={"Copy password"} />
        <Button handler={resetHandler} name={"Reset password"} />
        <Button handler={saveHandler} name={"Save password"} />
      </div>

      {savedPassword.map((pass) => {
        return <p key={pass} className="m-2">{pass}</p>;
      })}
    </>
  );
}

export default App;
