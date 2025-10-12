import { useState } from 'react'
import './App.css'

function App() {

   let  isActive = false

   return (
    <button className={`${isActive ? "text-green-500" : "text-yellow-500"}`}>Click Me!</button>
   )
}


export default App
