import React from 'react';
import './cart-item.scss';
import { removeItemFromCart, addToItemQuantity, removeFromItemQuantity } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

const CartItem = props => {
    return (
        <div className="cart-item-container">
            <div className="image-container">
                <img src={props.imageUrl} alt={props.name} />
            </div>
            <p>{props.name}</p>
            <p>${props.price}</p>
            <div className="quantity-container">
                <div className="quantity-button" onClick={() => props.subtractFromQuantity(props.id)}>{"<"}</div>
                <div>{props.count}</div>
                <div className="quantity-button" onClick={() => props.addToQuantity(props.id)}>{">"}</div>
            </div>
            <div className="remove-button" onClick={() => props.removeItemFromCart(props.id)}>
                <strong>X</strong>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: id => dispatch(removeItemFromCart(id)),
    addToQuantity: id => dispatch(addToItemQuantity(id)),
    subtractFromQuantity: id => dispatch(removeFromItemQuantity(id))
})

export default connect(null, mapDispatchToProps)(CartItem);