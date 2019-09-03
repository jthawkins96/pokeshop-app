import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { getProducts } from '../../firebase/firebase.utils'
import './product-list.scss'
import Product from '../product/product'

const ProductList = props => {
    const [products, setProducts] = useState(null);

    useEffect(() => {

        (async function () {
            let category = props.match.params.category;
            if (category) {
                let productsList = await getProducts(category)
                let products = productsList.map(p => <Product key={p.id} {...p} />);
                setProducts(products);
            }
            else {
                let productsList = await getProducts()
                let products = productsList.map(p => <Product key={p.id} {...p} />);
                setProducts(products)
            }
        })()

    }, [props.match.params.category])

    return (
        <div className="products-container">
            {products === null ? "Loading..." : products}
        </div>
    )
}

export default withRouter(ProductList);