import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Home></Home>
      <Cart></Cart>
      </CartProvider>
    </div>
  );
}

export default App;
