import React from 'react';
import { connect } from 'react-redux';
import './product.scss'
import CustomButton from '../buttons/custom-button/custom-button';
import { addItemToCart } from '../../redux/cart/cartActions';

const Product = props => {
    return (
        <div className={`product-container ${props.type}-gradient`}>
            <img className="product-image" src={props.imageUrl} alt={props.name} />
            <div className="info-container">
                <div className="info">
                    <div>{props.name}</div>
                    <div>${props.price}</div>
                </div>
            </div>
            <div className={`button-overlay-container ${props.type}-gradient`}>
                <CustomButton click={() => { const {id, type, name, price, imageUrl} = props; props.addToCart({ id, type, name, price, imageUrl }) } } 
                              type="button">Add To Cart</CustomButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(Product); 