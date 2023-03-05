import style from "./ShoppingCart.module.css"
import CardCart from "../CardtShoppingCart/Card";
import {useSelector} from "react-redux";
import { useEffect, useMemo, useState } from "react";


const ShoppingCart = ()=>{

    const items = useSelector(e=>e.shoppingCart);

    const total = useMemo(()=>{
        return items.reduce((total,currrent)=>total+(currrent.price*currrent.quantity),0)
    },[items])


    return(
        <>
            <div id={style.cartContainer}>
                <div>
                    <header><h1 id={style.titulo}>Carrito</h1></header>
                </div>
                <div id={style.cardContainer}>
                    {
                        items.map(e=><CardCart key={e._id} title={e.name} img={e.img} id={e._id}  cantidad={e.quantity}/>)
                    }
                    
                </div>
                <div id={style.totalSection}>
                    <div><span>Total</span></div>
                    <div><span>${total}</span></div>
                </div>
            </div>
        </>
    )
   
};

export default ShoppingCart;
