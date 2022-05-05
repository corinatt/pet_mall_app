import React from 'react'


const ItemCard = (prop) => {

  const { name, color, size, price } = prop.productos

  return (
    <div className='flex justify-center '>
      <div className="card card-side bg-base-100 shadow-x1 w-96 m-5 p-4" >
        <figure><img src="https://centropet.com/wp-content/uploads/2021/04/666666666666-500x500.png" alt="bolso" /></figure>
        <div className="card-body" >
          <h2 className="card-title">{name}</h2>
          <div className='text-lg'>{color}</div>
          <div className='text-lg'>{size}</div>
          <div className='text-lg'>${price}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>

    //card card-side bg-base-100 shadow-xl w-96 m-5 p-4
  )
}

export default ItemCard