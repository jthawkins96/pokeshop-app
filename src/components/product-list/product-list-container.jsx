import { compose } from 'redux';
import ProductList from './product-list';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectProducts } from '../../redux/shop/shopSelectors';

const mapStateToProps = state => ({
    products: selectProducts(state)
})

export default compose(withRouter, connect(mapStateToProps))(ProductList);

