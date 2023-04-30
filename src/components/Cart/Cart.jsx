/* eslint-disable */
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart;
    // const { cart } = props;
    // console.log(cart);
    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        shippingCharge += product.shipping;
        quantity += product.quantity;
    }
    const tax = parseFloat((totalPrice * 0.07).toFixed(2));
    const grandTotal = (totalPrice + shippingCharge + tax).toFixed(2);
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;