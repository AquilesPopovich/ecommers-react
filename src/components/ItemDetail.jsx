
import { Container } from 'react-bootstrap';
import data from '../data/data.json';


const product = data.map(producto => producto.id);


const ItemDetail = ({product}) => {
  return (
    <>
    <h2>Detalle</h2>
    <Container>

    <div>{product.title}</div>
    <img src={product.image} alt={product.title}></img>
    <div>{product.price}</div>
    <div>{product.description}</div>
    <div>{product.category}</div>
    
  </Container>
  
  </>)

}

export default ItemDetail;
