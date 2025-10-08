import React from 'react'

function ProgressBar({ progress, color }) {

    const styleObject = {
        width: `${progress}%`,
        backgroundColor: color || 'lightgreen',
        height: 30,
        borderRadius: 20
    }
  return (
    <div className='bg-green-500 mt-[40px] w-[400px] h-[50px]'>
      <div className='progress-bar'>
        <div style={styleObject}>
            {`${progress}%`}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
