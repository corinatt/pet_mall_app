import React from 'react'
import { Link } from 'react-router-dom'


const ItemCard = (prop) => {

  const { id, name, color, size, price, img } = prop.productos
  const defaultImg = 'https://centropet.com/wp-content/uploads/2021/04/666666666666-500x500.png'

  return (
    <div className='flex justify-center '>
      <div className="card card-side w-96 bg-base-50 shadow-x">
        <figure><img src={img ?? defaultImg} alt="imagen" /></figure>
        <div className="card-body" >
          <h2 className="card-title">{name}</h2>
          <div className='text-lg'>{color}</div>
          <div className='text-lg'>{size}</div>
          <div className='text-lg'>${price}</div>
          <div className="card-actions justify-end">
            {<Link to={`/item/${id}`} className="btn btn-primary">Ver + </Link>}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemCard


