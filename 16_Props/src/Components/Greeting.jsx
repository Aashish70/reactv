import React from 'react'


//props as (String, Numbers, Booleans)

function Greeting({name, age, isStudent}) {
  return (
    <div className='card'>
        <h2>{name} is {age} years old. Student: {isStudent ? "Yes" : "No"}</h2>
    </div>
  )
}

export default Greeting