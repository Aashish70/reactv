import { useState } from 'react'
import './App.css'

function App() {

  const isLoggedIn = false;

  return (
    <div>
      {
        isLoggedIn ? <h1>Welcome Back User !</h1> : <h1>Please Login.</h1>
      }
    </div>
  )
}


export default App
