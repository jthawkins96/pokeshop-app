import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/userActions'
import './App.css';
import Homepage from './pages/home/homepage';
import ShopPage from './pages/shop/shop';
import Navbar from './components/navbar/navbar';
import SignInPage from './pages/sign-in/sign-in';
import RegisterPage from './pages/register/register';
import { auth, createUserDocument } from './firebase/firebase.utils';
import CheckoutPage from './pages/checkout/checkout';
import { selectCurrentUser } from './redux/user/userSelectors';
import { selectRetrievingProducts } from './redux/shop/shopSelectors';
import { getShopProducts } from './redux/shop/shopActions';

const App = props => {
  const [userLoaded, setUserLoaded] = useState(false)

  useEffect(({ getShopProducts, setCurrentUser } = props) => {
    getShopProducts();
    // let unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    //   if (user) {
    //     const userRef = await createUserDocument(user);
    //     userRef.onSnapshot(async snapshot => {
    //       const data = snapshot.data();
    //       let user = { id: snapshot.id, ...data }
    //       setCurrentUser(user)
    //     });
    //   }
    //   else
    //     setCurrentUser(null)
      
    //   setTimeout(() => {
    //     setUserLoaded(true)

    //   },500)
    // })

    // return () => {
    //   unsubscribeFromAuth()
    // };
  }, [])

  let content = <div style={{display:'flex', width:'100%', height:'75vh', alignItems:'center', justifyContent:'center'}}>Loading...</div>;

  if(!props.retrievingProducts) {
    content = <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/pokemon" component={ShopPage} />
            <Route exact path="/pokemon/:category" component={ShopPage} />
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/register" component={RegisterPage} />
            { props.currentUser ? null : <Redirect to="/" component={Homepage}/> }
            <Route exact path="/cart" component={CheckoutPage} />
          </Switch>
        </div>
  }

  return content;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  retrievingProducts: selectRetrievingProducts
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  getShopProducts: () => dispatch(getShopProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
