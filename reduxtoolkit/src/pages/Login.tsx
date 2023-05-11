import React from 'react'
import {useState} from 'react'
import {login, logout} from '../store'
import {useDispatch, useSelector} from 'react-redux'

function Login() {
  const [newUserName, setNewUserName] = useState('')

  //we are using useDispatch hook to dispatch the increment and decrement actions
  const dispatch = useDispatch()
  //  we are using the useSelector hook to get the user value from our store
  const username = useSelector((state: any)=>state.user.value.username)


  return (
    <div>
      <h1>This is log in page</h1>
      <h1>{username}</h1>
      <input onChange={(e)=>{
        setNewUserName(e.target.value)
      }}/>

      {/* When we click the buttons, the state will update accordingly. */}
      
      <button onClick={()=>dispatch(login({username: newUserName}))}>Submit Login</button>
      <button onClick={()=>dispatch(logout())}>Log Out</button>
    </div>
  )
}

export default Login
