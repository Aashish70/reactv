import React from 'react'

function Card({ item }) {
    console.log(item)
  return (
    <div className='flex gap-4'>
        <div className='bg-gray-600 w-[250px] mb-14'>
            <img src={item.image}></img>
        </div>
        <div>
            <h2 className='font-bold text-2xl'>{item.title}</h2>
            <div>
              <span className='p-2 rounded bg-green-600'>{item.rating} ⭐</span>
              <span>{item.reviews}</span>
            </div>
            <div>
              <span>{item.price}</span>
              <span>{item.originalPrice}</span>
              <span>{item.discount}</span>
            </div>
            <p>Available offers</p>
        </div>
    </div>
  )
}

export default Card