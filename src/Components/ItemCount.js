import React from 'react'
import {useState} from 'react'


const ItemCount = () => {

    const [Contador, setContador] = useState(0)
    
    const addHandler = () =>{ 
    setContador(Contador + 1);
    }

    const restHandler = () => {
        setContador(Contador - 1)    
    }
    

    return (
        <>
            <div>Cantidad</div>
            <button className='button' onClick={restHandler}> - </button>
            <strong> {Contador} </strong>
            <button className='button' onClick={addHandler}> + </button>
        </>
    )
}

export default ItemCount