import React from 'react'
import { memo } from 'react'

function Child() {
    console.log("child rendering...")
  return (
    <h1>Child</h1>
  )
}


export default memo(Child)