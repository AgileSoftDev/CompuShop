import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './DetalleProducto.module.css'
import axios from "axios"

const rebaja = (price) => {
    return price - (price * 0.35)
} 

const DetalleProducto = () => {
    const { id } = useParams()
    
    
    const [component, setComponet] = useState({})

    useEffect( () => {
        const getDetailComponentById = async () => {

             const {data} = await  axios.get(`http://localhost:3001/components/id/${id}`).catch(error => alert("Error al obtener data de detalles del componente"));
             setComponet(data)  
        }

        getDetailComponentById()

    }, [])


    return (
    <div className={style.contenedor}>
        <div className={style.image}>
            <img src={component.img} alt="" />
        </div>
        <main className={style.contenido}>
            <div className={style.header}>
                <h3 className={style.nombreProducto}>{component.name}</h3>
                <h4 className={style.idProducto}>ID: {component._id}</h4>
            </div>
            <div className={style.contenedorPrecios}>
                <div className={style.contenedorPrecioRebaja}>
                    {/* <p>Precio de rebaja</p>  */}
                    <h3>${component.price}</h3>
                </div>
                <div className={style.contenedorPrecioEspecial}>
                    <p>PRECIO ESPECIAL</p>
                    <h3>${rebaja(component.price)}</h3>
                </div>
                {/* <div className={style.contenedorPrecioEspecial}>
                    <p>VER CUOTAS</p>
                    <h3>$242.473</h3>
                </div> */}
            </div>
            <div className={style.listaInfo}>
                <ul>
                    <li>Garantía - 12 meses</li>
                    <li>Stock disponible</li>
                    <li>Envíos a todo el país</li>
                </ul>
            </div>
            <button>SUMAR AL CARRITO</button>   
           
        </main>
        <div className={style.contenedorInfo2}>
            <div className={style.productosRelacionados}>
               
            </div>
        </div>
            
    </div>
  )
}

export default DetalleProducto