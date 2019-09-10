import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.scss';
import logo from '../../content/pokeball.png';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/user/userSelectors';

const Navbar = props => {
    return (
        <div className="navbar-container">
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="links-container">
                <div className="links">
                    <Link to="/pokemon">Shop</Link>
                    <Link to="/contact">Contact</Link>
                    {props.currentUser ? <Link to="/" onClick={() => auth.signOut()}>Sign Out</Link> : <Link to="/sign-in">Sign In</Link>}
                    {props.currentUser ? null : <Link to="/register">Register</Link>}
                    <CartIcon />
                </div>
                <CartDropdown/>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Navbar);