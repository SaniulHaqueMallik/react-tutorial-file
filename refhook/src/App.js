
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null)
  const [name,setName] = useState('Saniul')

  const onClick = () =>{
    inputRef.current.focus()
    setName(inputRef.current.value)
  } 
  return (
    <div className="App">
      <h1>{name}</h1>
      <input type="text" placeholder='name...' ref={inputRef}/>
      <button onClick={onClick }>change</button>
    </div>
  );
}

export default App;
