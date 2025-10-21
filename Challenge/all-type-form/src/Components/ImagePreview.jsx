import React from 'react'

function ImagePreview() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-500'>
        <div className='w-[200px] h-[200px] bg-amber-500 rounded-full'>
          <input
            type='file'
            accept='image/*'
          ></input>
        </div>
    </div>
  )
}

export default ImagePreview