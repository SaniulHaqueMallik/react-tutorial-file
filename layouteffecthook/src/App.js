
import './App.css';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';

function App() {
  const inputRef = useRef(null)
  
  useEffect(()=>{
    console.log('useEffect ')
    inputRef.current.value = 'taj'
  })
  useLayoutEffect(()=>{
    console.log('Layout effect', inputRef.current.value)
  },[])
  return (
    <div className="App">
      <input type="text" ref={inputRef} value='Saniul' onChange={()=> console.log('tried to changed but value is given by default')}/>
    </div>
  );
}

export default App;
