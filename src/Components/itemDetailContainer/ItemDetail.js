import React from 'react'
import { useParams } from 'react-router-dom'
import { datosList } from '../../datos/datosLista'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount'


const ItemDetail = () => {
  const onAdd = () => {
    console.log('on add...')
  }

  const { itemId } = useParams()

  const [detail, setItem] = useState({})


  useEffect(() => {
    setItem(datosList.find(e => e.id === itemId))
  }, [itemId])


  return (


    <div className='container card-body mx-auto py-10 list-none'>
      <div>Item: {itemId}</div>
      <li>{detail.name}</li>
      <li>{detail.color}</li>
      <li>{detail.size}</li>
      <li>{detail.img}</li>
      <li><strong>Información:</strong> {detail.info}</li>
      <ItemCount onAdd={onAdd} />
    </div>



  )
}

export default ItemDetail