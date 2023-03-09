
import React, { useState } from "react";
import style from "./ProfileDetail.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";
import Url from "../../utils/deploy_back";
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import succes from "../../views/MisCompras/assets_mis_compras/success-svgrepo-com.svg";
import pending from "../../assets/icons/yellow_clock.png";


const ProfileDetail = () => {    
    const { user} = useAuth0();
    const [orders,setOrders] = useState([])
    const [userName, setUserName] = useState()
    const msPDay = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();

    useEffect(()=>{
        const getUserData=async()=>{
             const {data} = await axios.get(`${Url}/users/db/${user.email}`)
             const lastTwoValues = data.orders.slice(-2);
             setOrders(lastTwoValues)
             setUserName(data.name)
        }
        if(user)getUserData()
    },[user])



    if(!user){
        return(
            <h1>No estás logueado</h1>
        )
    }else{
        return (
            <div className={style.fondo}>
                <div className={style.container}>
                    <div id={style.topProfile}>
                        <p className={style.titulo}><i class="fa-solid fa-user "></i> Mi cuenta</p>
                        <Link to={"/productos"}><p className={style.volver}>🡸</p></Link>
                    </div>
                    <div id={style.mainProfile}>
                    <div className={style.izquierda}>
                        <div className={style.cuadro1}>
                            <h2><i class="fa-solid fa-user-secret"></i> Mi información</h2>
                            <p>Nombre: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Usuario: {user.nickname} </p>
                        </div>
    
                        <div className={style.cuadro2}>
                            <h2><i class="fa-solid fa-bag-shopping"></i> Mis compras</h2>
                           
                            <div id={style.lastComprasContainer}>
                                <div>
                                    <label><h3>Últimas compras:</h3></label>
                                </div>
                                <div>
                                    {orders.length?orders.map(e=>(
                                         <div id={style.CardMisComprasContainer}>
                                         <div id={style.fechaContainer}>
                                             <label id><p id={style.fecha}>{format(new Date(e.fecha), "EEEE d 'de' MMMM 'de' y, HH:mm", {locale: esLocale})}</p></label>
                                         </div>
                                         <div id={style.mainCardMisCompras}>
                                             <div>
                                                 <div id={style.deliveryStatus}>
                                                 <label id={style.compraStatus}>
                                                    {(now-e.fecha)/msPDay>=1?(<label id={style.entregado} ><img src={succes} alt="succes" /><span>Entregado</span></label>):
                                                        (<label id={style.pendiente} ><img src={pending} alt="succes" /><span>Pendiente</span></label>)
                                                    }                                                
                                                </label>
                                                 </div>
                                                 <div id={style.productosCantidad}>
                                                     <label>
                                                         <span>Cantidad de productos: </span> 
                                                         <span>{e.productos.length}</span> 
                                                     </label>
                                                 </div>
                                                 <div id={style.direction}>
                                                     <label>
                                                         <span>Dirección:</span>
                                                         <span>{e.directionDlivery.direction}</span>
                                                     </label>
                                                 </div>
                                                 <div id={style.precioSection}>
                                                     <label>
                                                         <span>Monto total:</span>
                                                         <span>${e.totalPrice}</span>
                                                     </label>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                    )):(<p>No has hecho nigúna compra hasta el momento :(</p>)}
                                </div>
                                <div className={style.containerButtonsToSections}>
                                <Link to={"/profile/miscompras"} className={style.buttonsToSections}>Ver todas mis compras</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>)
    }
    


    }
export default ProfileDetail;