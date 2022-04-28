import { useEffect } from 'react'
import { datosList } from '../datos/datosLista'
import { useState } from 'react'
import ItemCard from './ItemCard'


const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos()
    }, [])

    const getProductos = () => {
        const getProductoPromise = new Promise((result) => {
            setTimeout(() => {
                result(datosList)
            }, 2000);
        })
        
        getProductoPromise.then( datos=>{
            setProductos(datos)
            console.log(datos)
        })
    }

    return (
        <div>
        {productos.map(p => <ItemCard key={p.id} productos={p}/> )}
        </div>
    )
}

export default ItemList