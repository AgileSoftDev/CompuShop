import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './DetalleProducto.module.css'
import axios from "axios";
import shield from "../../assets/detalles_componente/green_shield.svg";
import truck from "../../assets/detalles_componente/delivery_truck.svg"
import check from "../../assets/detalles_componente/green_check.svg";
import url from "../../utils/deploy_back.js";


const rebaja = (price) => {
    return price - (price * 0.35).toFixed(2)
} 

const DetalleProducto = () => {
    const { id } = useParams()
    
    
    const [component, setComponet] = useState({})

    useEffect( () => {
        window.scroll({
            behavior: "smooth",
            top: 0
          });
        const getDetailComponentById = async () => {

             const {data} = await  axios.get(`${url}/components/id/${id}`).catch(error => alert("Error al obtener data de detalles del componente"));
             setComponet(data)  
        }

        getDetailComponentById()

    }, [])

    console.log(component);

    return (
        <main id={style.ContainerDetailsProduct}>
            <div id={style.top}>
                <div id={style.imageContainer}>
                      <img src={component.img} alt="" />
                </div>
                <div id={style.mainInfo}>
                    <div>
                        <h1>{component.description}</h1>
                    </div>
                    <span>  {'> '} {component.category}</span>

                    <div>
                        <div>
                            <p>PRECIO ESPECIAL</p>
                            <h2>${rebaja(component.price)}</h2>
                        </div>
                        <div>
                            <p>PRECIO LISTA</p>
                            <h2 id={style.discountPrice}>${component.price}</h2>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li><div><img src={shield} alt="Shield Protection" /></div> Garantía - 12 meses</li>
                            <li><div><img src={check} alt="Green Check"  id={style.check}/></div> Stock disponible</li>
                            <li><div><img src={truck} alt="Delivery truck" id={style.truck} /></div> Envíos a todo el país</li>
                        </ul>
                    </div>
                    <button>SUMAR AL CARRITO</button>   
                </div>
            </div>
        </main>
    
  )
}

export default DetalleProducto