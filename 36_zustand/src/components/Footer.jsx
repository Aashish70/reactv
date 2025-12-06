import React from 'react'
import useBear from '../store'

function Footer() {
    const bears = useBear((state) => state.bears)
    const increasePopulation = useBear((state) => state.increasePopulation)
  return (
    <div className='bg-orange-300 h-screen'>
        <p>{bears}</p>
        <button onClick={increasePopulation}>Increase</button>
    </div>
  )
}

export default Footer