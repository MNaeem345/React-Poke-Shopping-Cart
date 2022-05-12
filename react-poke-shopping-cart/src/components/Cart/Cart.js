import React from 'react'
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { Container, Row, Card } from 'react-bootstrap';
import Pokemon from '../PokeShop/Pokemon';



export default function Cart({ cart, setCart }) {

    return (
        <div >
        <header>
            <div className="wraper">
                <div className="logo">
                <a href='/'><img src={logo} className="App-logo" alt="logo"/></a>
                {/* <img src={logo} className="App-logo" onClick="/" alt="logo"/> */}
                </div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/Cart">VIEW CART</Link>
                        </li>
                    
                        <li>
                        <a href="/">SIGN OUT</a>
                        </li>
                    </ul>
                    
                
                </nav>
            </div>
        </header>
        <Container>
          <h1>Cart</h1>
          
        </Container>
        <div>

            
        </div>
                
        
               
            
        </div>
      
        
        
    )
}



