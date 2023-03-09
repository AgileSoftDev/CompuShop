import style from "./CardMisCompras.module.css";
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import succes from "../../../MisCompras/assets_mis_compras/success-svgrepo-com.svg";
import pending from "../../../../assets/icons/yellow_clock.png";

const CardMisCompras = ({onClickk,compra,fecha,price,productos,direction}) =>{

    const direccion = direction.city +"-"+ direction.direction
    const date = format(new Date(fecha), "EEEE d 'de' MMMM 'de' y, HH:mm", {locale: esLocale});
    const productosCantidad = productos
    const msPDay = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();



    return(
        <div id={style.CardMisComprasContainer}>
            <div id={style.fechaContainer}>
                <label><p id={style.fecha}>{date}</p></label>
                <label><button onClick={()=>onClickk({...compra,visible:true})}><span>Ver Detalles</span></button></label>
            </div>
            <div id={style.mainCardMisCompras}>
                <div>
                    <div id={style.deliveryStatus}>
                    <label id={style.compraStatus}>
                        {(now-fecha)/msPDay>=1?(<label id={style.entregado} ><img src={succes} alt="succes" /><span>Entregado</span></label>):
                            (<label id={style.pendiente} ><img src={pending} alt="succes" /><span>Pendiente</span></label>)
                        }                                                
                    </label>
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
            </div>
        </div>
    )
};

export default CardMisCompras;