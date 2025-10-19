import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import data from './data.json'

function App() {

  return (
    <>
     {
      data.map((item, idx) => (
        <Card key={idx} item={item} />
      ))
     }
    </>
  )
}

export default App
