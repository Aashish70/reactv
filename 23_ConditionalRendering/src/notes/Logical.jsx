import { useState } from 'react'
import './App.css'

function App() {

  const hasMessage = true;

  return (
    <div>
      {
        hasMessage && <h1>You have new Messages!</h1>
      }
    </div>
  )
}


export default App
