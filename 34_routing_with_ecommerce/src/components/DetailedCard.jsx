import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'

function DetailedCard() {

   const { id } =  useParams()
   const [products, setProducts] = useState({})
   const [loading, setLoading] = useState(false)

   console.log(id)

   const fetchSingleProduct = async () => {
    setLoading(true)
    const response = await axios(`https://dummyjson.com/products/${id}`)
    setProducts(response.data)
    setLoading(false)
   }
   
   useEffect(() => {
    fetchSingleProduct()
   }, [])

   if(loading) return <Loader className={'p-30'} />


  return (
    <div className='flex gap-4 my-10 mx-20'>
        <div className='border border-gray-500 rounded-2xl'>
            <img src={products.thumbnail} />
        </div>
        <div className='px-10'>
            <h3 className=''>{products.title}</h3>
            <div>
                <span className='bg-green-500 px-2 py-1 rounded'>{products.rating}</span>
                <span></span>
            </div>
            <p>{products.description}</p>
            <p>{products.price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default DetailedCard