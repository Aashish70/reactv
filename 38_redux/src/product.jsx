import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Product() {

    const products = useSelector(state => state.productReducer.products)
    console.log(products)

    useEffect(() => {
        console.log("re-render ho gya..")
    })

  return (
    <div>
        {
            JSON.stringify(products)
        }
    </div>
  )
}

export default Product