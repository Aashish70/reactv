import { useState } from 'react'
import './App.css'


function App() {
   const [show, setShow] = useState(true)

   if(!show) return null

   return (
      <div className='bg-green-600 text-3xl p-6 border-gray-400 text-black rounded-2xl'>This is an Alert!</div>
   )
}


export default App
