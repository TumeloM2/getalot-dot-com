import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import {Switch, Route} from 'react-router-dom'
import './App.css';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop/hats' component={HatsPage}/>
            <Route exact path =  '/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
