import React from 'react'

function UserInput({inputRef}) {
  return (
    <div>
        <input ref={inputRef}  type='text'/>
    </div>
  )
}

export default UserInput