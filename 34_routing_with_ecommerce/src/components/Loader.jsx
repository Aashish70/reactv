import React from 'react'

function Loader({ className }) {
  return (
    <div className={`text-center ${className}`}>
        <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto'></div>
        <h2 className='text-zinc-900 dark:text-white mt-4'>Loading...</h2>
        <p className='text-zinc-600 dark:text-white'>Your adventure is about to begin</p>
    </div>
  )
}

export default Loader

