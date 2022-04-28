import React from 'react'


const ItemCard = (prop) => {

    const {id, name, color, size } = prop.productos

  return (

    <div>
        <div>{id}</div>
        <div>Producto: {name}</div>
        <div>{color}</div>
        <div>{size}</div>
    </div>

    
  )
}

export default ItemCard