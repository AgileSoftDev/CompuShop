import style from "./ShoppingCart.module.css"
import { useSelector } from "react-redux";
import CardShoppingCart from "./CardShoppingCart/CardShoppingCart";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";


const ShoppingCart = (props) =>{
    const itemsToBuy = useSelector(e=>e.shoppingCart)
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        let num = 0;
        itemsToBuy.forEach(e => {
            num = num + e.price
        });
        setTotal(num)
    },[itemsToBuy])

    return(
    <div id={style.ShoppingCart}>
        <div>
           {itemsToBuy.map(e=> <CardShoppingCart key={e._id} title={e.name} img={e.img} id={e._id} price={e.price} cantidad={e.quantity} refToTrash={props.refToTrash}/>)}
        </div>
        <div>
            <button><Link ref={props.buttonComprarRef} to={"/pasarela"}>Comprar</Link> </button>
            <h3>${total}</h3>
        </div>
    </div>
    )
};

export default ShoppingCart;