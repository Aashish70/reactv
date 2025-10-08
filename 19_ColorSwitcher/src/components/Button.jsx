import React from 'react'

function Button({color, setColor}) {

    function changColor(){
        setColor(color)
    }
  return (
    <button style={{backgroundColor: color}} onClick={changColor}>{color}</button>
  )
}

export default Button
