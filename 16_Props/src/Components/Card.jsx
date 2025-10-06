import React from 'react'

function Card({name, age}) {
    // console.log(props)
    // props are immutable
  return (
    <div className='card'>
        <div>{name}</div>
        <h1>{age}</h1>
    </div>
  )
}

export default Card