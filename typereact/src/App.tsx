import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Person, Country} from './Person';

function App() {
  return (
    <div className="App">
      <Person name ='saniul'  country={Country.US}/>
    </div>
  );
}

export default App;
