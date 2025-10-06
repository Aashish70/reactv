import React from 'react'

// spread operator for props

function User({name, age}) {
  return (
    <div className='card'>
        <h2>My name is {name} age is {age}</h2>
    </div>
  )
}

export default User