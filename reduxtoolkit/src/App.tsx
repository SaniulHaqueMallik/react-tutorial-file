import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';

import './App.css';
import Contact from './pages/Contact';
import Login from './pages/Login';
import {store} from './store'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>

        <Link to='/'>Home </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/login'> Login</Link>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
        
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
