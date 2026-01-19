import { useState, useCallback } from 'react'
import './App.css'
import Child from './components/Child'


function App() {

  const [count, setCount] = useState(0)
  const [data, setData] = useState('ashish')
  
  console.log("parent re-rendering")

  const handleClick = () => {
    console.log("mai click hua hu", count)
  }

  // useCallback(function, [])
  const memoizedHandleClick = useCallback(()=>{
    return handleClick()
  }, [])

  return (
    <>
      <button onClick={()=>setCount(count + 1)}>Count: {count}</button>
      <Child handleClick={memoizedHandleClick} />
    </>
  )
}

export default App
