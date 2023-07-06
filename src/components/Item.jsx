import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

export const Item = ({producto}) => {
  return (
    <Card className="float-start" key={producto.id} style={{height:'400px', width: '340px', margin: '10px', padding: '15px' }}>
      <Card.Img style={{height:'180px',maxHeight: '180px', width: '320px' }} variant="top" src={producto.image} alt={producto.title} />
      <Card.Body>
        <Card.Title style={{fontSize: '15px'}}>{producto.title}</Card.Title>
        <Card.Text>
          Precio: {producto.price}
        </Card.Text>
        <Link to={`/item/${producto.id}`}>
        <Button style={{width: '100%'}} variant="primary">Ver producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}


export default Item