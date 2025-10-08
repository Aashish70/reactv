import { useState } from 'react'
import './App.css'
import ProgressBar from './Components/ProgressBar'
import { useEffect } from 'react'

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    const time = setInterval(()=>{
      if(progress < 100){
        setProgress(p => p+1)
      }
    },20)

    return () => {
      clearInterval(time)
    }
  }, [progress])

  return (
    <div className='flex flex-col jsutify-center items-center bg-[lightseagreen]'>
      <ProgressBar progress={progress} color={'yellow'}/>
      <ProgressBar progress={progress} color={'blue'}/>
    </div>
  )
}

export default App
