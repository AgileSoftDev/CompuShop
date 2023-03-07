import { useEffect, useState } from "react";
import axios from "axios"
import Url from "../../utils/deploy_back";
import style from "./MisCompras.module.css"
import CardMisCompras from "./Componentes_mis_compras/Card_misCompras/CardMisCompras"

const MisCompras = (props) =>{
const [orders,setUser] = useState([])

    useEffect(()=>{
        const getUserData=async()=>{
             const {data} = await axios.get(`http://localhost:3001/users/db/${props.currentUser.email}`)
             setUser(data.orders                )
            console.log(data);
        }
        getUserData()
    },[])

    return(
        <div id={style.MisComprasContaier}>
            <div>
                <div id={style.titleMisCompras}>
                    <h1>Compras</h1>
                </div>
            <div id={style.comprasCardContainer}>
                {
                    orders.map(e=> <CardMisCompras fecha={e.fecha} price={e.totalPrice}/>)
                }
            </div>
            </div>
        </div>
    )
};

export default MisCompras;