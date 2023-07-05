import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import { pedirDatos } from '../helpers/pedirDatos';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = (props) => { 
    const [product, setProductos] = useState([]);

    

    useEffect(() => {
      pedirDatos()
        .then((resultado) =>{
                setProductos(resultado);
            
        })
    }, [])
return( 

    <div>
       {product.length === 0 ? <div>Loading... </div>: <ItemDetail product={product}/>} 
    </div>
)
}