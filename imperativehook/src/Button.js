import React from 'react'
import { useState } from 'react'

function Button() {
    const [toggle, setToggle] = useState(false) 
  return (
    <div>
      <button onClick={()=> setToggle(!toggle)}>Button From Child</button><br/>
      {toggle && <span>Toggle</span>}
    </div>
  )
}

export default Button
