import { useState } from "react"


function useCounter(initialState) {
    const [count, setCount] = useState(initialState)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const setByValue = (val) => {
        setCount(count + val)
    }

    return {
        count,
        increment,
        decrement,
        setByValue
    }
  
}

export default useCounter