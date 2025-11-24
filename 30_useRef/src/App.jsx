import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const[count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("re-render cause hua hai")
  }, [])
  

  return (
    <>
      <h1 className='m-6'>Count : {count}</h1>
      <button onClick={handleIncrement}>INCREASE</button>
    </>
  )
}

export default App
