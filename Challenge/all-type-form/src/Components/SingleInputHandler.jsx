import React, { useState } from "react";

function SingleInputHandler() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleClear() {
    setData({
      name: "",
      email: "",
    });
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Name: {data.name}</h1>
      <h1 className="text-3xl font-bold mb-8">Email: {data.email}</h1>
      <input
        name="name"
        onChange={inputHandler}
        value={data.name}
        className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
        placeholder="Enter Your name"
      ></input>
      <br></br>
      <br></br>
      <input
        name="email"
        value={data.email}
        onChange={inputHandler}
        className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
        placeholder="Enter Your email"
      ></input>
      <br></br>
      <button
        onClick={handleClear}
        className="mt-6 py-2 px-4 rounded hover:cursor-pointer bg-black text-white"
      >
        Clear
      </button>
    </>
  );
}

export default SingleInputHandler;
