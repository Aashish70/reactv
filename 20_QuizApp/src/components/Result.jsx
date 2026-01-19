import React from 'react'

function Result({ score, setCurrentIndex, setIsOver }) {

  function handleRestart(){
    setIsOver(false)
    setCurrentIndex(0)
  }

  return (
    <>
      <div className='flex flex-col gap-5 items-center justify-center w-[550px] h-[550px] bg-amber-100 rounded-2xl text-gray-700'>
        <h2 className='text-3xl'>Your score is : {score}</h2>
        <button onClick={handleRestart} className='bg-[#1a1a1a] text-white'>Restart</button>
      </div>
    </>
  )
}

export default Result
