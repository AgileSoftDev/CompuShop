import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './DetalleProducto.module.css'
import axios from "axios";
import shield from "../../assets/detalles_componente/green_shield.svg";
import truck from "../../assets/detalles_componente/delivery_truck.svg"
import check from "../../assets/detalles_componente/green_check.svg";
import url from "../../utils/deploy_back.js";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import Puntuacion from '../../components/Puntuacion/Puntuacion';
import Reseñas from '../../components/Reseñas/Reseñas';
import Reviews from '../../components/Reviews/Reviews';

const rebaja = (price) => {
    return price - (price * 0.35).toFixed(2)
}

const DetalleProducto = () => {

    const reviewsContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
    }

    const { id } = useParams()
    const dispatch = useDispatch()


    const [component, setComponet] = useState({})
    console.log(':c')
    useEffect(() => {
        window.scroll({
            behavior: "smooth",
            top: 0
        });
        const getDetailComponentById = async () => {

            const { data } = await axios.get(`${url}/components/id/${id}`).catch(error => alert("Error al obtener data de detalles del componente"));
            if (data) setComponet(data)
        }

        getDetailComponentById()

    }, [])


    return (
        <><main id={style.ContainerDetailsProduct}>
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
                            <li><div><img src={check} alt="Green Check" id={style.check} /></div> Stock disponible</li>
                            <li><div><img src={truck} alt="Delivery truck" id={style.truck} /></div> Envíos a todo el país</li>
                        </ul>
                    </div>
                    <button className={component.quantityStock <= 0 ? style.noStock : undefined} onClick={component.quantityStock <= 0 ? undefined : () => dispatch(addToCart(component))}>SUMAR AL CARRITO</button>
                </div>
            </div>
            <div style={reviewsContainerStyle}>
                <Puntuacion componentId={id} />
                <Reviews id={id} />
            </div>
        </main></>
    )
}

export default DetalleProducto