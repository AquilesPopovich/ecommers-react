import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import { pedirDatos } from '../helpers/pedirDatos';
import ItemList from './ItemList'

export const ItemListContainer = (props) => { 
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      pedirDatos()
        .then((resultado) =>{
            setProductos(resultado);
        })
    }, [])
return( 

    <div>
       {productos.length === 0 ? <div>Loading... </div>: <ItemList productos={productos}/>} 
    </div>
)
}