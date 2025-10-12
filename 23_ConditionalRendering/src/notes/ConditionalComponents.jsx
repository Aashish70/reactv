import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';

function App() {
  let type = ""
  const Component = type === "home" ? Homepage : Aboutpage
  return <Component/>
}


export default App
