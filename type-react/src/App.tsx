import React from 'react';
import './App.css';
import {Person , Country} from './Person';


function App() {
  return (
    <div className="App">
      hi
      <Person name='saniul' age={23} friends={['Sayan','Raj','Nilotpal','Sudip']} country={Country.India}/>
    </div>
  );
}

export default App;