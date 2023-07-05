import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import { pedirDatos } from '../helpers/pedirDatos';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = (props) => { 
    const [product, setProductos] = useState({});
    const { id } = useParams();

    

    useEffect(() => {
      pedirDatos()
        .then((resultado) =>{
            const productEncontrado = resultado.find((product) => product.id == id);
            setProductos(productEncontrado || {});
        })
        .catch((error) => {
            console.log("Error al obtener los datos:", error);
          });
    }, [id])
return( 

    <div>
       {product.length === 0 ? <div>Loading... </div>: <ItemDetail product={product}/>} 
    </div>
)
}