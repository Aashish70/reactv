type statusProp = {
    // status: string //agar ye likhte hai to props me koi bhi string pass karenge to error nhi aayega
    status: 'loading' | 'success' | 'error'
}

function Status(props: statusProp) {
    let message

    if(props.status === 'loading'){
        message = 'loading'
    }else if(props.status === 'success'){
        message = 'Data fetched successfully!'
    }else if(props.status === 'error'){
        message = 'Error fetching data'
    }

  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status