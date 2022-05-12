import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';





const Pokemon = ({ pokemon }) => {
  const [cart, setCart] = useState([]);
  

  
  const addToCart = (pokemon) => {
    console.log(pokemon)
    setCart([...cart, pokemon]);
  };
  return (
    <div>
    
    <>
    
      <Card  style={{ padding: '1px '}} className='my-4 p-5 rounded text-center shadow mb-5 bg-white'>
        
          <Card.Img 
            variant='top'
            src={pokemon.sprites.front_default}  
          />
        

      </Card>
      <Card.Body className={`${pokemon.types[0].type.name} rounded text-black`}>
        <div to={`/pokemon/${pokemon.id}`} className='link-name'>
            <Card.Title as='div'>
              <strong>
                #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </strong>
              <Button onClick={() => addToCart(pokemon)} style={{ width: '120px'}} >Add To Cart</Button>
              <Button variant='danger' style={{ width: '120px'}} >Remove</Button>
            </Card.Title>
        </div>
      </Card.Body>
    
    
    </>
  
  </div>
  
)};

export default Pokemon;