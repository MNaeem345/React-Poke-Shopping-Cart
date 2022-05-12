import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokeShop from "./components/PokeShop/PokeShop";
import Cart from "./components/Cart/Cart";




ReactDOM.render(
  <React.StrictMode>
    
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Home/>
          </Route>
          
            <Route exact path='/PokeShop'>
              <PokeShop></PokeShop>
            </Route>
          <Route exact path='/Cart'>
            <Cart></Cart>
          </Route>
          {/* <Route exact path='/SignInAuth'>
            <SignInAuth></SignInAuth>
          </Route> */}
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

