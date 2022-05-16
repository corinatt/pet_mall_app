import React from 'react'

const NoVocales = () => {

    const onKeyDown = (event) => {
        console.log("se ingresa una tecla:", event.key);
        const vocales = 'aeiouAEIOU'; //si el evento es diferente a -1 preventdefault
        if (vocales.search(event.key) !== -1){
            event.preventDefault();
        }

    }


    return (
        <>
            <div>Buscar</div>
            <input onKeyDown={onKeyDown} type="text" placeholder="Search" className="input mt-1 block w-80 px-3 py-2 bg-white border border-slate-300" />
        </>
    )
}

export default NoVocales