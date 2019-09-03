import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './cart-footer.scss';
import CustomButton from '../buttons/custom-button/custom-button';
import { selectTotalPrice, selectCartCount } from '../../redux/cart/cartSelectors';

const CartFooter = props => {
    return (
        <div className="cart-footer-container">
            <h3>Total Price: ${props.totalPrice}</h3>
            {props.cartCount == 0 ? null : <CustomButton type="button">Checkout</CustomButton>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    totalPrice: selectTotalPrice,
    cartCount: selectCartCount
})

export default connect(mapStateToProps)(CartFooter);