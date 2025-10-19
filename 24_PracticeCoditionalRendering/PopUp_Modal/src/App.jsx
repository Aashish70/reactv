import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopUp from './components/PopUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='flex gap-6'>
        <button>Delete</button>
        <button>Edit</button>
      </div> */}
      <PopUp/>
    </>
  )
}

export default App
