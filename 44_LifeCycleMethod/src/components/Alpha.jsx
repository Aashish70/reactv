import React, { useEffect, useState } from "react";

function Alpha() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("re-render...");
  }, [count]);

  useEffect(()=>{
    console.log("mounting..")

    return ()=> {
      console.log("unmounting...")
    }
  },[])

  return (
    <>
      <h1>Alpha: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
}

export default Alpha;
