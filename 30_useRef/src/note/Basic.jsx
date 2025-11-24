import { useRef, useState } from 'react'
import './App.css'

function App() {
  
  const inputRef = useRef()

  const handleClick = () => {
    // inputRef.current.focus()
    inputRef.current.style.background = "blue"
    inputRef.current.style.borderRadius = "100%"
  }

  return (
    <>
      {/* <input placeholder='Enter your name' ref={inputRef} /> */}
      <div ref={inputRef} className='bg-red-500 w-40 h-40 m-2'></div>
      <button onClick={handleClick} className='bg-red-400'>Click me</button>
    </>
  )
}

export default App
