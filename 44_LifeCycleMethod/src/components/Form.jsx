import React, { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState(localStorage.getItem('name') || '');

  console.log(name);


  useEffect(()=>{
    return () => {
      localStorage.clear() //component unmount ho rha hai to clean-up karo
    }
  })

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          localStorage.setItem('name', e.target.value)
        }}
        type="text"
        placeholder="Enter name"
      />
    </div>
  );
}

export default Form;
