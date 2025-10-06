import React from 'react'

//props as Array

function List({items}) {
  return (
    <div className='card'> 
        <ul>{items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}</ul>
    </div>
  )
}

export default List