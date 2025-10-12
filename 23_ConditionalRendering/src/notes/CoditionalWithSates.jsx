import { useState } from 'react'
import './App.css'

function App() {
   const [show, setShow] = useState(true)

   return (
      <div>
         <button onClick={()=>setShow(!show)}>
            {show ? "Hide" : "Show"} Message
         </button>
         {show && <p className='mt-6'>🍾 This is a secret messages!</p>}
      </div>
   )
}


export default App
