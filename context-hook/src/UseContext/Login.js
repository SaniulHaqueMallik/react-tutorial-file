import React, { useContext } from 'react'
import {AppContext} from './ContextTutorial'

function Login() {
    const {setUserName} = useContext(AppContext)
  return (
    <div>
      <input type="text" onChange={(event)=> {setUserName(event.target.value)}}/>
    </div>
  )
}

export default Login
