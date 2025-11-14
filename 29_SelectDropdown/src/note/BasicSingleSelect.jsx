import React from 'react'
import { useState } from 'react'

function BasicSingleSelect() {

  const [paymentMode, setPaymentMode] = useState('')
  console.log(paymentMode)
  
    return (
      <>
        <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}> 
          <option value=''>-------Select------</option>
          <option value='upi'>UPI</option>
          <option value='cod'>CoD</option>
          <option value='card'>Card</option>
        </select>
      </>
    )
}

export default BasicSingleSelect