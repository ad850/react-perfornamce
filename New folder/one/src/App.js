import React from 'react'
import { Component } from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router';
import ShopPage from './pages/shop/shop.component';
import './App.css'
import Header from './Components/header/header.component';
import SigninandSignUp from './pages/sign-in -and-sign-up/sign-in-and-sign-up';



class App extends Component {

  render() {
    return (<>

      <Header />

      <Switch >

        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SigninandSignUp} />



      </Switch>



    </>);
  }
}
export default App;
