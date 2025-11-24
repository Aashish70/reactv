import { useState } from 'react'
import axios from 'axios'

function App() {

  const [details, setDetails] = useState([])

  // const fetchData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   setDetails(data)
  //   console.log(details)
  // }

  // const fetchData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }


  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data
    console.log(data)
  }


  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      {/* {
        details.map((item)=> {
          return (
            <div key={item.id} className='bg-gray-500 rounded'>
              <p className='my-2 bg-orange-500 w-full rounded'>{item.name}</p>
            </div>
          )
        })
      } */}
    </>
  )
}

export default App
