import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ item }) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/products/${item.id}`)
    }
  return (
    <div onClick={handleClick} className='border border-gray-400 rounded py-4 px-8'>
        <img src={item.thumbnail} />
        <p>{item.title}</p>
        <div>
            <p>{item.price}</p>
        </div>
        <button>Add to Cart</button>
    </div>
  )
}

export default Card