import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        cartTotal,
    } = useCart();
    if(isEmpty) return <h3 className='text-center'>Your Cart is Empty</h3>
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                        {items.map((item,index) => {
                            return (
                            <tr key={index} >
                                <td>
                                    <img src={item.img} alt="" style={{height: '6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity: ({item.quantity})</td>
                                <td>
                                    <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Choose One for Me</button>
                                    <button className='btn btn-info  ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Choose Again!</button>
                                    <button className='btn btn-warning ms-2' onClick={() => removeItem(item.id)}>Remove Item</button>
                                </td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total Price: $ {cartTotal}</h2>
                </div>
                {/* <div className='col-auto'>
                    <button className='btn btn-warning' onClick={() => emptyCart()}>Clear Cart</button>
                    <button className='btn btn-success m-2' onClick={() => emptyCart()}>Buy Now</button>
                </div> */}
            </div>
        </section>
    );
};

export default Cart;    