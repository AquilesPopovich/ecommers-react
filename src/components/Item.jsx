import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

export const Item = ({producto}) => {
  return (
    <Card className="float-start" key={producto.id} style={{height:'500px', width: '300px', margin: '15px', padding: '15px', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Img style={{height:'300px', width: '290px' }} variant="top" src={producto.image} alt={producto.title} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          Categoria: {producto.category}
          Precio: {producto.price}
        </Card.Text>
        <Link to={`/producto/${producto.id}`}>
        <Button variant="primary">Ver producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}


export default Item