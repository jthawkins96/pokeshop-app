import React from 'react';
import './product-preview.scss';

const ProductPreview = props => {
    return (
        <div className="product-preview-container">
            <div className="image-container">
                <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className="product-info">
                <h4>{props.name}</h4>
                <h4>{props.count} x ${props.price}</h4>
            </div>
        </div>
    )
}

export default ProductPreview;