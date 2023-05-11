import React from 'react'
import { useSelector} from 'react-redux'

function Home() {
  const username = useSelector((state: any)=>state.user.value.username)
  return (
    <div>
      <h1>This is home page {username}</h1>
    </div>
  )
}

export default Home
