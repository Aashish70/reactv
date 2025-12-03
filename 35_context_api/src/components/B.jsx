import React from 'react'
import E from './E'
import F from './F'

function B() {
  return (
    <div className='bg-orange-300 h-full text-center p-10 text-3xl rounded-2xl border border-black border-dotted'>
      <h1 className='text-center text-2xl'>B</h1>
      <div className='grid grid-cols-2 gap-3 my-2'>
      <E />
      <F />
    </div>
    </div>
  )
}

export default B