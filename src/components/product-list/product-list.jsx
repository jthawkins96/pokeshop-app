import React from 'react'
import './product-list.scss'
import Product from '../product/product'

const ProductList = props => {

    let products = [];

    if (props.match.params.category)
        products = props.products[props.match.params.category]
    else {
        for (var key in props.products) {
            products = [...products, ...props.products[key]]
        }
    }

    return (
        <div className="products-container">
            {products.map(product => <Product key={product.id} {...product} />)}
        </div>
    )
}

export default ProductList;