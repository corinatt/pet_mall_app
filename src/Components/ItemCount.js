import React from 'react'
import { useState } from 'react'


const ItemCount = ( { onAdd}) => {

    const [contador, setContador] = useState(0)


    const addHandler = () => {
        setContador(contador + 1);
    }

    const restHandler = () => {
        setContador(contador - 1)
    }


    return (
        <>
        <div className='card-text'>
            <div>Cantidad</div>
            <button className='button-menos' onClick={restHandler}> - </button>
            <strong> {contador} </strong>
            <button className='button-mas' onClick={addHandler}> + </button>
        </div>
            <button className='btn-carrito' onClick={onAdd}> Agregar al Carrito</button>
        </>
    )

}

export default ItemCount