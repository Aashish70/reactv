import { useState } from 'react'
import './App.css'


function App() {

  let status = "success"

  const statusMap = {
    loading: <p className='bg-gray-600 p-6 text-2xl text-black rounded-2xl'>Loading...</p>,
    success: <p className='bg-green-600 p-6 text-2xl text-black rounded-2xl'>Data loaded successfully..</p>,
    error: <p className='bg-slate-600 p-6 text-2xl text-black rounded-2xl'>Somethings went wrong..</p>
  }

  return  statusMap[status] || <p>Idle state....</p>
  
}


export default App
