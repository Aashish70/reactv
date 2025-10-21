import React, { useState } from "react";

function Controlled() {
  const [state, setState] = useState("");

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">{state}</h1>
      <input
        onChange={(e) => setState(e.target.value)}
        className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
        placeholder="Enter Your name"
        value={state}
      ></input>
      <br></br>
      <button
        onClick={() => setState("")}
        className="mt-6 py-2 px-4 rounded hover:cursor-pointer bg-black text-white"
      >
        Clear
      </button>
    </>
  );
}

export default Controlled;
