import React from "react"
import Item from "./Item"

const ItemList = ( {productos} ) => {
  return (
    <div>
        

        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList