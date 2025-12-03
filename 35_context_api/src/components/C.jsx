import React from 'react'
import { contextValue } from '../context/MyContext'


function C() {
  const value = contextValue()
  console.log("Context from C:", value)
  return (
    <div className='bg-blue-300 h-full text-center p-10 text-3xl rounded-2xl border border-black border-dotted'>C</div>
  )
}

export default C