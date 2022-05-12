import React, {useState, useEffect } from 'react';

import axios from 'axios'; 
import { Container, Row, Col } from 'react-bootstrap';
import "./PokeShop.css";
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import Pokemon from '../PokeShop/Pokemon';
import Loader from '../PokeShop/Loader';





const PokeShop = () => {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokeList = async () => {
    let pokemonArr = [];
    for(let i = 1; i <= 151; i++){
      pokemonArr.push(await getPokeData(i));
    }
    console.log(pokemonArr);
    setPokemon(pokemonArr);
    setLoading(false);
  }

  const getPokeData = async (id) =>{
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  }
  useEffect(() =>{
    getPokeList();
  }, [])
  

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
        <div>
        {loading ? (
            <Loader/>
          ) : (
            <Container>
              <h1 className='title'>Which Pokemon would you like to add to Cart? Please choose from our Pokedex below</h1>
            
            <Row>
              {pokemon.map(p => (
                <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Pokemon pokemon={p.data}/>

                </Col>
              ))}
            </Row>
            </Container>
          )}
        </div>

      </div>
      // <>
      // <Header/>
      //     {loading ? (
      //       <Loader/>
      //     ) : (
      //       <Row>
      //         {pokemon.map(p => (
      //           <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
      //             <Pokemon pokemon={p.data}/>

      //           </Col>
      //         ))}
      //       </Row>
      //     )}
      // </>
        
    )
}

export default PokeShop;


