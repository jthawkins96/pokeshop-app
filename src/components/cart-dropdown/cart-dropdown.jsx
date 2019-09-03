import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cartActions';
import './cart-dropdown.scss';
import CustomButton from '../buttons/custom-button/custom-button';
import CartItems from '../cart-items/cart-items';
import { selectShowCart } from '../../redux/cart/cartSelectors';

const CartDropDown = props => {
    return (
        <div className={`cart-dropdown-container ${props.showCart ? 'show' : null}`}>
            <div className="cart-items">
                <CartItems />
            </div>
            <CustomButton click={() => { props.history.push('/cart'); props.toggleCart() } } type="button">Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    showCart: selectShowCart(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartDropDown));