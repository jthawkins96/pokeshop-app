import React from 'react';
import './cart-header.scss';

const CartHeader = () => {
    return (
        <div className="cart-info-header">
            <h4>&nbsp;</h4>
            <h4>Name</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Remove from cart</h4>
        </div>
    )
}

export default CartHeader;