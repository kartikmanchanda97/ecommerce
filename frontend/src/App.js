import { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/nav/nav';
import Home from './components/home/home';
import Product from './components/product/product';
import Checkout from './components/checkout/checkout';
import Category from './components/category/category';
import SignUpPage from './components/auth/signup';
import LoginPage from './components/auth/login';
import Footer from './components/footer/footer';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

export default function App() {
  const [isLoggedIn, checkLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      checkLogin(true)
    } else {
      checkLogin(false);
    }
  }, []);


  return (
    <>

     <BrowserRouter>
      <Nav isLoggedIn={isLoggedIn} />

      <Switch>

       <Route exact path='/' component={Home} />

       <Route exact path='/product/:id' component={Product} />

      
       <Route path='/checkout' >
        { isLoggedIn ? <Checkout /> : <Redirect to='/login' /> }
       </Route> 

       <Route path='/category/:category' component={Category} />

       <Route path='/signup'>
        { isLoggedIn ? <Redirect to='/'/> : <SignUpPage /> }
       </Route>

       <Route path='/login'>
        { isLoggedIn ? <Redirect to='/'/> : <LoginPage /> }
       </Route>

      </Switch>

     </BrowserRouter>

     <Footer />
    
    </>
  );
}
