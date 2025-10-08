import React from 'react'

function Card({ color }) {
  return (
    <div style={{backgroundColor: color}} className='mx-auto w-[300px] h-[300px] rounded-2xl text-3xl flex items-center justify-center'>
      {color.toUpperCase()}
    </div>
  )
}

export default Card
