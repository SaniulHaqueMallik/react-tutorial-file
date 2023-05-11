import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Error from './pages/Error';
import Product from './pages/product';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Link class='link' to='/'>Home</Link>
     <Link class='link' to='/contact'>Contact</Link>
     <Link class='link' to='/cart'>Cart</Link>
     <Link class='link' to='/product'>Product</Link>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={ <Cart/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path= '*' element={<Error />} /> 
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
