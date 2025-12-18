import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../store/feature/user/userSlice'

function User() {

    const user = useSelector(state => state.user)
    console.log("User from user:", user)
    const dispatch =  useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div>User</div>
  )
}

export default User