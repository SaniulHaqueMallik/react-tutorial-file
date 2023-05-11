import React from 'react'

interface props{
    name : string;
    age ?: number;
    country : string;
}

enum Country{
    India = 'India',
    US = 'USA',
    Spain = 'Spain',
}

function Person(props:props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.country}</h1>
    </div>
  )
}

export {Person , Country}
