import './App.css'
import withBorder from './hoc/withBorder'
import Alpha from './components/Alpha';
import Beta from './components/Beta';
import withCardLook from './hoc/withCardLook'
import useCounter from './customHook/useCounter';
import { useState } from 'react';
import useCardLook from './customHook/useCardLook';

// HOC - complex logic & complex ui reuse

function App() {

  const [inputValue, setInputValue] = useState('')
  const { count, increment, decrement, setByValue } = useCounter(0)

  const EnhancedCardLookAlpha = useCardLook(Alpha)

  return (
    <>
     <h1>Count: {count}</h1>
     <button onClick={increment}>Increase</button>
     <button onClick={decrement}>Decrease</button>

     <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type='text' placeholder='Enter value'/>
     <button onClick={()=>setByValue(Number(inputValue))}>SetByValue</button>
     <EnhancedCardLookAlpha/>
    </>
  )
}

export default App
