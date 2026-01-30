import { forwardRef } from 'react'

function Before19UserInput(props, ref) {
  return (
    <div>
        <input ref={ref}  type='text'/>
    </div>
  )
}

export default forwardRef(Before19UserInput)