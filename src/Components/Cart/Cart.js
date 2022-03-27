import React from 'react';
import'./Cart.css'

const Cart = ({cart}) => {
    const {title,img,price} = cart;
    console.log({});
    return (
        
        <div className="cart">
            <img src={img} alt="" />
        <div className="cart-info">
            <h3><small className="color">Name : </small>{title} </h3>
            <h4><small className="color">Price : </small>${price}</h4>
        </div>
        </div>
    );
};

export default Cart;