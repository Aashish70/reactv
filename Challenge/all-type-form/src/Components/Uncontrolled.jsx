import React, { useRef, useState } from 'react'

function Uncontrolled() {
  const [state, setState] = useState("");
  
    const inputRef = useRef(null)
  
    function submit(){
      console.log(inputRef.current.value)
    }
  
    return (
      <>
        <h1 className="text-3xl font-bold mb-8">{state}</h1>
        <input
          ref={inputRef}
          onChange={(e) => setState(e.target.value)}
          className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
          placeholder="Enter Your name"
          value={state}
        ></input>
        <br></br>
        <button
          onClick={submit}
          className="mt-6 py-2 px-4 rounded hover:cursor-pointer bg-black text-white"
        >
          Submit
        </button>
      </>
    );
}

export default Uncontrolled