/* import React from 'react'
import { datosList } from '../datos/datosLista'
import ItemDetailContainer from './ItemDetailContainer'
import { useEffect } from 'react'

const ItemDetail = () => {
    useEffect(() => {
        getItemContainer()

    }, [])

    const getItemContainer = () => {

        fetch(datosList)//que recibe?
            .then(respuesta => {
                return respuesta.json()
            })
            .then(datos => {
                console.log(datos);
            })
    }
    

    
    return (
        <> 
        <div>ItemDetail</div>
        <ItemDetailContainer/>
        </>
        )
    }

    
export default ItemDetail */