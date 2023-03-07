import { useEffect } from "react";
import style from "./CardMisCompras.module.css";
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';

const CardMisCompras = ({fecha,price,productos,direction}) =>{

    const direccion = direction.city +"-"+ direction.direction
    const date = format(new Date(fecha), "EEEE d 'de' MMMM 'de' y, HH:mm:ss", {locale: esLocale});
    const productosCantidad = productos.length

    useEffect(()=>{
       
    },[])

    return(
        <div id={style.CardMisComprasContainer}>
            <div id={style.fechaContainer}>
                <label><p id={style.fecha}>{date}</p></label>
                <label><button><span>Ver Detalles</span></button></label>
            </div>
            <div id={style.mainCardMisCompras}>
                <div>
                    <div id={style.deliveryStatus}>
                        <label><span>Finalizado </span></label>
                    </div>
                    <div id={style.productosCantidad}>
                        <label>
                            <span>Catindas de productos: </span> 
                            <span>{productosCantidad}</span> 
                        </label>
                    </div>
                    <div id={style.direction}>
                        <label>
                            <span>Dirección:</span>
                            <span>{direccion}</span>
                        </label>
                    </div>
                    <div id={style.precioSection}>
                        <label>
                            <span>Monto total:</span>
                            <span>${price}</span>
                        </label>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default CardMisCompras;