import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './cart-footer.scss';
import { selectTotalPrice, selectCartCount } from '../../redux/cart/cartSelectors';
import StripeCheckoutButton from '../buttons/stripe-button/stripe-button';

const CartFooter = props => {
    return (
        <div className="cart-footer-container">
            <h3>Total Price: ${props.totalPrice}</h3>
            {props.cartCount == 0 ? null : <StripeCheckoutButton price={props.totalPrice} />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    totalPrice: selectTotalPrice,
    cartCount: selectCartCount
})

export default connect(mapStateToProps)(CartFooter);