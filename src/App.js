import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import './assets/css/stylesheet.css';
import './App.css';
import './assets/css/SignIn.css'

import Registration from './components/Registration'
import SignIn from './components/signIn'
import HomePage from './components/homepage'
import ForgotPassword from './components/forgotPassword'
import Order from './components/Order'
import Products from './components/Products'

//Router 
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/HomePage" component={HomePage} /> */}

        <Route path="/Order" component={Order}/>
        <Route path="/Products" component={Products} />
        <Route path="/Registration" component={Registration}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        
      </Router>
    </div>
  );
}

export default App;
