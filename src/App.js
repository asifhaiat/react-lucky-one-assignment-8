import "./App.css";
import { useEffect, useState } from "react";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";


function App() {
  const [stores, setStores] = useState([]);
  const [cart,setCart] = useState([]);
  <h1>Your Favorite Store</h1>
  

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setStores(data));

  }, []);
  

  const AddToCartHandler = (store) =>{
    const isExist = cart.find(item => item.id === store.id)
    if(!isExist){
      const newCart = [...cart,store]
      setCart(newCart);
      // console.log(newCart);
    }
    if(cart.length >= 4){
      alert('This is out of the cart')
    }
    
    }

    const handleDelete = () => {
      const newOne = [];
      setCart(newOne);
  
    }
    const handleUpdate = () => {
      const random = cart[Math.floor(Math.random()* cart.length)];
      const newCart = [random]
      setCart(newCart);
    
    }
    
  return (
    <div >
    <div>
          <Header></Header>
    </div>
    <div className="main" >
    <div className="cart-container">
      {stores.map((store) => (
        <Main key={store.id} storeData={store} AddToCartHandler={AddToCartHandler}/>
      ))}
      </div>
      <div>
        {cart.map((item) => (
          <Cart key={item.id} cart={item}/>
        ))}
        <button onClick={() =>handleUpdate()} className="btn-cart">Choose one for me <small></small> </button>
        <button onClick={() => handleDelete()} className="btn-cart">Choose again <small></small> </button>
      </div>
    </div>
      
      
    </div>
  );
}
export default App ;