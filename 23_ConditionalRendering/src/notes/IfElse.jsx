import { useState } from 'react'
import './App.css'

function App() {
  const isLoggedIn = false;

  if(isLoggedIn){
    return <h1>Welcome Back!</h1>
  }

  return <h1>Please Login..</h1>
}


export default App
