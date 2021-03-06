import React from 'react';
import { Provider } from 'react-redux';

// require("bootstrap/less/bootstrap.less")

// import store from './redux/store'
import { configureStore } from "./redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './assets/css/stylesheet.css';
import './App.css';
import './assets/css/SignIn.css'
import './assets/css/PopularProduct.css'
import './assets/css/product.css'
import SnackbarProvider from 'react-simple-snackbar'

import Registration from './components/Registration'
import SignIn from './components/signIn'
import HomePage from './components/homepage'
import ForgotPassword from './components/forgotPassword'
import Order from './components/Order'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails';
import Example from "./components/Example";
import Cart from './components/Cart';
import Profile from './components/Profile'
import PageNotFound from './components/pageNotFound';
import Logout from './components/Logout';
import ProductNotFound from './components/ProductNotFound'

const store = configureStore();
//Router 
function App() {
  return (
    // <Provider store={store}>
    <SnackbarProvider>
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Order" component={Order}/>
        <Route path="/Products" component={Products} />
        <Route path="/Registration" component={Registration}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        <Route path="/ProductDetails" component={ProductDetails}/>
        <Route path="/Cart" component={Cart} />
        <Route path="/Profile" component={Profile}></Route>
        <Route path="/Logout" exact component={Logout}></Route>
        <Route path="/*" exact component={PageNotFound}></Route>
        <Route path="/ProductNotFound" exact component={ProductNotFound}></Route>
        
        </Switch>
      </Router>
    </div>
    </Provider>
    </SnackbarProvider>
  );
}

export default App;
