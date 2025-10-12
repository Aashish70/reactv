import { useState } from 'react'
import './App.css'


function App() {
  let status = "No"

  switch (status) {
    case "loading":
      return <p className='bg-gray-600 p-6 text-2xl font-medium  text-black rounded-2xl'>Loading...</p>

    case "success":
      return <p className='bg-green-600 p-6 text-2xl font-medium  text-black rounded-2xl'>Data Loaded SuccessFully ✅</p>

    case "error":
      return <p className='bg-red-600 p-6 text-2xl font-medium  text-black rounded-2xl'>Something went wrong...</p>

    default :
      return <p className='bg-slate-400 p-6 text-2xl font-medium  text-black rounded-2xl'>Idle state...</p>
  }
}


export default App
