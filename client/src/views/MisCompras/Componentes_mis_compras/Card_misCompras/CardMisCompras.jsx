import { useEffect } from "react";
import style from "./CardMisCompras.module.css";
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';

const CardMisCompras = ({fecha,price}) =>{

    const date = format(new Date(fecha), "EEEE d 'de' MMMM 'de' y, HH:mm:ss", {locale: esLocale});

    useEffect(()=>{
       
    },[])

    return(
        <div id={style.CardMisComprasContainer}>
            <div id={style.fechaContainer}><label><p id={style.fecha}>{date}</p></label></div>
            <div id={style.mainCardMisCompras}>
                <div>
                    <div>
                        <h3>${price}</h3>
                    </div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default CardMisCompras;