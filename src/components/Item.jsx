import React from "react"

const Item = ({producto}) => {
  return (
    <div key={producto.id}>
        <img src={producto.image} alt="{producto.title}" />
        <h3>{producto.title}</h3>
        
        </div>
  )
}

export default Item