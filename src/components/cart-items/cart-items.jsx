import React from 'react'
import { connect } from 'react-redux'
import './cart-items.scss'
import ProductPreview from '../product-preview/product-preview';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartItems = props => {

    let cartItems = props.cart.map(p => <ProductPreview key={p.id} {...p} /> )

    return (
        <div className="cart-items-container">
            {cartItems.length === 0 ? <h3 style={{alignSelf:'center', textAlign:'center'}}>No Items in Cart</h3> : cartItems}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: selectCartItems(state)
})

export default connect(mapStateToProps)(CartItems);