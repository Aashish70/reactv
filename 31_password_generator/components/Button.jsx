import React from 'react'

function Button({ name, handler }) {
  return (
    <button onClick={handler} className="bg-blue-700 rounded-2xl">{name}</button>
  )
}

export default Button