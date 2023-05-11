import React from 'react'

interface Props {
    name : string;
    age : number;
    friends: string[];
    country ?: string;
}

enum Country{
    India = 'India',
    US = 'USA',
    Spain = 'Spain'
}

function Person(props:Props) {

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h3>Age: {props.age}</h3>
      {props.friends.map((friend:string) =>(
        <h4>{friend}</h4>
      ))}
      <h1>{props.country}</h1>
    </div>
  )
}

export {Person , Country}
