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
                                    <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>CHOOSE 1 FOR ME</button>
                                    <button className='btn btn-info  ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>CHOOSE AGAIN</button>
                                    <button className='btn btn-warning ms-2' onClick={() => removeItem(item.id)}>Remove Item</button>
                                </td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h3>Total Price: $ {cartTotal}</h3>
                </div>
                <div>
                    <h4>Difference between State and Props</h4>
                    <p>In react, both state and props are used to govern data entering a component; props are often established by the parent and supplied to child components, and they are constant throughout the component. We must utilize state for data that is likely to change. Because props are immutable and states are changeable, you may alter props from the parent component and then pass it on to the child components.</p>
                    <h4>How useState works in React?</h4>
                    <p>useState is a Hook (function) that enables state variables to be used in functional components. This function receives the starting state and returns a variable with the current state value as well as another function to update this value.</p>
                </div>
            </div>
        </section>
    );
};

export default Cart;    