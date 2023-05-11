import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [data, setData]=useState('')
  const [count, setCount] = useState(0)


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) =>{
      setData(response.data[count].email);
      console.log('API WAS FETCHED')
    })
  },[count])
  return (
    <div className="App">
      <div>{data}</div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
    </div>
  );
}

export default App;
