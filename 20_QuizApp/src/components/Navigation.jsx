import React from 'react'
import Ques from '../question.json'

function Navigation({ setCurrentIndex }) {

    function handleMove(index){
        setCurrentIndex(index - 1)
    }

  return (
    <div className='flex flex-wrap gap-6 justify-center w-[500px] mb-6 bg-slate-300 p-4 rounded-2xl  '>
        {
            Ques.map((item)=>(
                <button onClick={() => handleMove(item.id)} key={item.id} className='bg-gray-500 '>{item.id}</button>
            ))
        }
    </div>
  )
}

export default Navigation