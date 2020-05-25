import React from 'react';
import { Provider } from 'react-redux'

// import store from './redux/store'
import { configureStore } from "./redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import './assets/css/stylesheet.css';
import './App.css';
import './assets/css/SignIn.css'
import './assets/css/PopularProduct.css'
import './assets/css/product.css'

import Registration from './components/Registration'
import SignIn from './components/signIn'
import HomePage from './components/homepage'
import ForgotPassword from './components/forgotPassword'
import Order from './components/Order'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails';
import Example from "./components/Example";
import Cart from './components/Cart'
const store = configureStore();
//Router 
function App() {
  return (
    // <Provider store={store}>
    
    <Provider store={store}>
    <div className="App">
    {/* <Example/> */}
      <Router>
        
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/HomePage" component={HomePage} /> */}

        <Route path="/Order" component={Order}/>
        <Route path="/Products" component={Products} />
        <Route path="/Registration" component={Registration}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        <Route path="/ProductDetails" component={ProductDetails}/>
        <Route path="/Cart" component={Cart} />
      </Router>
    </div>
    </Provider>
    
  );
}

export default App;
