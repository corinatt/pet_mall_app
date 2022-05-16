import React from 'react'
import { useParams } from 'react-router-dom'
import {datosList} from '../../datos/datosLista'
import { useEffect } from 'react'
import { useState } from 'react'

const ItemDetail = () => {
  const { itemId} = useParams()
  
  const [detail, setItem] = useState( {} )
  
  

  useEffect(() => {
    setItem( datosList.find( e => e.id === itemId ) )
  }, [itemId])
  

  return (
    <> 
    <div>Item: {itemId}</div>
    <li>{detail.id}</li>
    <li>{detail.name}</li> 
    <li>{detail.color}</li>
    <li>{detail.size}</li>
    <li>{detail.img}</li>
    <li>Información: {detail.info}</li>
    </>
  )
}

export default ItemDetail