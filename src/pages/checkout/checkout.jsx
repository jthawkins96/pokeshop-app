import React from 'react';
import { connect } from 'react-redux';
import './checkout.scss';
import CartHeader from '../../components/cart-header/cart-header';
import CartItem from '../../components/cart-item/cart-item';
import CartFooter from '../../components/cart-footer/cart-footer';

const CheckoutPage = props => {

    let cartItems = props.cart.map(cartItem => <CartItem key={cartItem.id} id={cartItem.id} name={cartItem.name} price={cartItem.price} count={cartItem.count} imageUrl={cartItem.imageUrl}/> )

    return (
        <div className="checkout-page">
            <div className="checkout-page-container">
                <CartHeader/>
                {cartItems}
                <CartFooter/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps)(CheckoutPage);