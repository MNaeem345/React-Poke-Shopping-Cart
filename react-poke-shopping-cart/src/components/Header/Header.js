import "./header.css";
import "./ResponsiveHeader.css";
import logo from '../../assets/logo.png';
import React from 'react';

import {Link} from "react-router-dom";




export const Header = (props) => {
  

  return (
    <header>
      <div className="wraper">
        <div className="logo">
        <a href='/'><img src={logo} className="App-logo" alt="logo"/></a>
        {/* <img src={logo} className="App-logo" onClick="/" alt="logo"/> */}
        </div>
        <nav>
          <ul>
            <li>
              <a href="/SignInAuth">SIGN IN</a>
            </li>
            <li>
              <Link to="/PokeShop">POKESHOP</Link>
            </li>
            <li>
              <a href="/">CREATE ACCOUNT</a>
            </li>
          </ul>
          
          
        </nav>
      </div>
    </header>
  );
};
