import React from 'react'
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

function Accordian({ title, content, isOpen }) {
  return (
    <>
      <div>
        <div className='flex justify-between bg-blue-600 '>
          <p className='m-4'>{title}</p>
          {isOpen? <IoMdArrowDropupCircle className='m-4' /> : <IoMdArrowDropdownCircle className='m-4' />}
        </div>
        <div className='bg-gray-100 text-gray-800 p-6 hidden'>{content}</div>
      </div>
    </>
  )
}

export default Accordian
