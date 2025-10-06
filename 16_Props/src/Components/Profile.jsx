import React from 'react'

// props asa Objects

function Profile({user}) {
    // console.log(user)
  return (
    <div className='card'>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
    </div>
  )
}

export default Profile