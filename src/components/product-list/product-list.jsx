import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { productsSelector } from '../../redux/shop/shopSelectors';
import './product-list.scss'

const ProductList = props => {

    let products = [];

    if(props.products) {
        if(props.match.params.category)
            products = props.products[props.match.params.category]
        else {
            for(let key in props.products) {
                products = [...products, ...props.products[key]]
            }
        }
    }

    return (
        <div className="products-container">
            {products.length > 0 ? products : "Loading..."}
        </div>
    )
}

const mapStateToProps = state => ({
    products: productsSelector(state)
})

export default connect(mapStateToProps)(withRouter(ProductList));