import { useRef } from 'react'
import './App.css'
import UserInput from './components/UserInput';
import Before19UserInput from './components/Before19UserInput';

function App() {

  const inputRef = useRef(null)
  const beforeInputRef = useRef(null)

  return (
    <>
      <UserInput inputRef={inputRef} />
      <Before19UserInput ref={beforeInputRef} />

      <button onClick={()=>{inputRef.current.focus();inputRef.current.value = "Ashish"}}>Click</button>
      <button onClick={()=>{beforeInputRef.current.focus();beforeInputRef.current.value = "Before 19"}}>Before 19</button>
    </>
  )
}

export default App
