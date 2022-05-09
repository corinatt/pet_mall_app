import React from 'react'
import {useState} from 'react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)
    
    const addHandler = () =>{ 
    setContador(contador + 1);
    }

    const restHandler = () => {
        setContador(contador - 1)    
    }
    

    return (
        <>
            <div>Cantidad</div>
            <button className='button' onClick={restHandler}> - </button>
            <strong> {contador} </strong>
            <button className='button' onClick={addHandler}> + </button>
        </>
    )
    
}

export default ItemCount