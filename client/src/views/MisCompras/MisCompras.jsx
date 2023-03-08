import { useEffect, useState } from "react";
import axios from "axios"
import Url from "../../utils/deploy_back";
import style from "./MisCompras.module.css"
import CardMisCompras from "./Componentes_mis_compras/Card_misCompras/CardMisCompras"
import DetailsCardMisCompras from "./Componentes_mis_compras/DetailsCardMisCompras/DetailsCardMisCompras";
const MisCompras = (props) =>{
const [orders,setOrder] = useState([])
const [orderFocus, setOrderFocus] = useState({visible:false})
const [nameUser, setNameUser] = useState()

    useEffect(()=>{
        const getUserData=async()=>{
             const {data} = await axios.get(`${Url}/users/db/${props.currentUser.email}`)
             setOrder(data.orders.reverse())
             setNameUser(data.name)
        }
        getUserData()
    },[])


    return(
        <div id={style.MisComprasContaier}>
            <div>
                <div id={style.titleMisCompras}>
                    <h1>Mis compras</h1>
                </div>
            <div id={style.comprasCardContainer}>
                {
                    orders.map(e=> <CardMisCompras onClickk={setOrderFocus} compra={e} fecha={e.fecha} price={e.totalPrice} productos={e.productos.length} direction={e.directionDlivery}/>)
                }
            </div>
            </div>
            {orderFocus.visible?(<div id={style.compraDetallesContainerRelative}>
                    <div id={style.comprasContainerAbsolute}>
                            <DetailsCardMisCompras setOrderFocus={(value)=>setOrderFocus(value)} name={nameUser} phone={orderFocus.contactPhone} ordenes={orderFocus.productos}/>
                    </div>
            </div>):undefined}
        </div>
    )
};

export default MisCompras;