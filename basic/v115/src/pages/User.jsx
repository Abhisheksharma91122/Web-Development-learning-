import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {username} = useParams()
  return (
    <div>
      this is User is {username}
    </div>
  )
}

export default User
