import React from 'react';
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cartActions'
import './cart-icon.scss'
import CartIconImg from '../../content/cart-icon.png'
import { selectCartCount } from '../../redux/cart/cartSelectors';

const CartIcon = props => {
    return (
        <div className="cart-icon-container" onClick={() => props.toggleCart()}>
            <img className="cart-icon" src={CartIconImg} alt="cart-icon" />
            { props.cartCount === 0 ? null : <span className="cart-count">{ props.cartCount }</span> }
        </div>
    )
}

const mapStateToProps = state => ({
    cartCount: selectCartCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);