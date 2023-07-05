import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import { pedirDatos } from '../helpers/pedirDatos';
import { useParams } from "react-router-dom";
import ItemList from './ItemList'

export const ItemListContainer = (props) => { 
    const [productos, setProductos] = useState([]);

    const {id} = useParams()

    useEffect(() => {
      pedirDatos()
        .then((resultado) =>{
            if(id){
                setProductos(resultado.filter(producto => producto.category === id));
            } else{
                setProductos(resultado);
            }
            
        })
    }, [id])
return( 

    <div>
       {productos.length === 0 ? <div>Loading... </div>: <ItemList productos={productos}/>} 
    </div>
)
}