import React from 'react'
import axios from 'axios'

function AxiosBasic() {

    const config = {
        url: '/users',
        baseUrl: 'https://6922ff9909df4a492323f233.mockapi.io',
        headers: {
            Accept: 'Application/json',
            'Content-Type': 'application/json',
            Authority: 'Bearer ashish'
        },
        timeout: '2000', //ms
        data: {
            name: "ashish"
        },
        params: {
            name: 'ashish',
            age: 21
        }
    }

    const fetchData = async () => {
        const response = await axios(config)
        console.log(response)
    }


  return (
    <div>
        <button onClick={fetchData}>FetchData</button>
    </div>
  )
}

export default AxiosBasic