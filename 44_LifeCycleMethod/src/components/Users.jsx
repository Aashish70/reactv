import React, { useEffect, useState } from 'react'

function Users() {

    const [data, setData] = useState( JSON.parse(localStorage.getItem('data')) || [])

    useEffect(()=>{

        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setData(data)
            localStorage.setItem('data', JSON.stringify(data))
        })()

        return () => {
            setData([]);
            localStorage.clear()
        }

    },[])

    console.log(data)

  return (
    <div>
        {data.map((dt)=>(
            <p key={dt.id}>{dt.name}</p>
        ))}
    </div>
  )
}

export default Users