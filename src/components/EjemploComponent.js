import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {
    // useLayouteffect se ejecuta de manera asincrona
    // despues de hacer la mutaciones y cambios en el DOM

    // useffect una vez que el compoennte termian de renderizarse

    const [mostrar,setMostrar] = useState(false);
    const caja = useRef();
    const boton = useRef();

    // useLayoutEffect(() => {
    //     console.log("useLayoutEffect: Componente cargado !!")
    //     // let caja = document.querySelector("#caja");
    //     // caja.innerHTML = "HOLA"
    //     // console.log(caja.getBoundingClientRect()) // saca al coordenadas del objeto
    // }, [])

    useEffect(() => {
        console.log("useEffect: Componente cargado !!")

        // console.log(boton.current.innerHTML)

        if(caja.current == null) return

        const {bottom} = boton.current.getBoundingClientRect();

        setTimeout(() => {
            caja.current.style.top = `${bottom + 45}px`;
            caja.current.style.left = `${bottom + 45}px`;
        }, 1000);

        
        // let caja = document.querySelector("#caja")
        // caja.innerHTML = "HOLA 2"
        // console.log(caja.getBoundingClientRect()) // saca al coordenadas del objeto
    }, [mostrar])

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
        
        <button ref={boton} onClick={() => setMostrar(prev => {
            console.log(!prev)
            return !prev;
        })}>Mostrar mensaje</button>

        {
            mostrar && (
                <div id='caja' ref={caja}>
                    Hola, soy un mensaje {mostrar}
                </div>
            )
        }
    </div>
  )
}
