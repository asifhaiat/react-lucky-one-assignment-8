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
        emptyCart
    } = useCart();
    if(isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                        {items.map((item,index) => {
                            return (
                            <tr key={index}>
                                <td>
                                    <img src={item.img} alt="" style={{height: '6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity: ({item.quantity})</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Cart;    