import React from 'react'


const ItemCard = (prop) => {

  const { name, color, size } = prop.productos

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl container mx-auto p-4">
        <figure><img src="https://centropet.com/wp-content/uploads/2021/04/666666666666-500x500.png" alt="bolso" /></figure>
        <div className="card-body" >
          <h2 className="card-title">{name}</h2>
          <div className='text-lg'>{color}</div>
          <div className='text-lg'>{size}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ItemCard