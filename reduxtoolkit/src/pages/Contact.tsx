import React from 'react'
import { useSelector} from 'react-redux'

function Contact() {
  const username = useSelector((state: any)=>state.user.value.username)

  return (
    <div>
      <h1>This is contact page {username}</h1>
    </div>
  )
}

export default Contact
