import React, { useState } from 'react'

function Assignment() {

    const [selectedMode, setSelectedMode] = useState('')
    console.log(selectedMode)

    const payments = [
        { id: "UPI", info: "Instant transfer via UPI apps" },
        { id: "Card", info: "Pay using credit or debit card" },
        { id: "COD", info: "Pay when the order arrives" },
    ]
  return (
    <div className='select-none'>
        {payments.map(item => {
            return (
                <label key={item.id} htmlFor={item.id} >
                    <input id={item.id} name='payments' type='radio' checked={selectedMode === item.id} value={item.id} onChange={(e) => setSelectedMode(e.target.value)}/>
                    {item.id}
                </label>
            )
        })}
        <p>Selected Method: {selectedMode}</p>
        <p>Details: {payments.find(obj => obj.id === selectedMode)?.info}</p>
    </div>
  )
}

export default Assignment