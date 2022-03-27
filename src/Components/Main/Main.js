import React from "react";
import "./Main.css";



const Main = ({ storeData ,AddToCartHandler }) => {
const { title, img, price } = storeData;

return (
    <div>
    <div className="cart-container">
    <div className="card">
        <img src={img} alt="" />
        <div className="car-info">
        <h4><small className="color">Name : </small>{title}</h4>
        <p><small className="color">Price : </small>${price}</p>
        </div>
        <div>
        <button onClick={ () => AddToCartHandler(storeData)} className="btn-card"><h3>Add to cart <small></small></h3> </button>
        </div>
    </div>
    </div>
    </div>
);
};

export default Main;