import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import data from '../data/data.json';


const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Container style={{ width: '80%' }}>
        <h2>{product.title}</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            style={{
              width: '400px',
              height: '400px',
              border: '2px solid gray',
              borderRadius: '10px',
              padding: '10px',
              margin: '10px 20px',
            }}
            src={product.image}
            alt={product.title}
          />
          <div style={{ textAlign: 'center', alignItems: 'center' }}>
            <p>Descripcion: {product.description}</p>
            <p style={{ color: 'green' }}>Precio: {product.price}</p>
            <div>
              <button onClick={decreaseQuantity}>-</button>
              <span style={{ margin: '0 10px' }}>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button style={{ width: '100%' }} variant="primary">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ItemDetail;

