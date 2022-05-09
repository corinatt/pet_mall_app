import React from 'react'
import { useParams } from 'react-router-dom'
import {datosList} from '../../datos/datosLista'
import { useEffect } from 'react'
import { useState } from 'react'

const ItemDetail = () => {
  const { itemId} = useParams()
  
  const [detail, setItem] = useState( {} )
  

  useEffect(() => {
    setItem( datosList.find( e => e.id == itemId ) )
  }, [itemId])
  

  return (
    <> 
    <div>ItemDetail: {itemId}</div>
    <li>{detail.id}</li>
    <li>{detail.name}</li>
    </>
  )
}

export default ItemDetail