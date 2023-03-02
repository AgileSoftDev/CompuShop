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
            let price = e.price
            if(e.quantity)price=price*e.quantity
            num = num + price
        });
        setTotal(num)
    },[itemsToBuy])


    return(
    <div id={style.ShoppingCart} ref={props.refCart}>
        <div>
            <h1>Carrito de compras</h1>
        </div>
       {itemsToBuy.length?<div style={{maxHeight: '560px',
                overflowY: 'auto',
                overflowX: 'hidden',
                paddingRight: '0px',}} id={style.cardContainer}>
           {itemsToBuy.map(e=> <CardShoppingCart key={e._id} title={e.name} img={e.img} id={e._id}  cantidad={e.quantity} refToTrash={props.refToTrash}/>)}
        </div>:null }
        {!itemsToBuy.length?<div id={style.empty}>
           <p>Tu carrito está vacío :(</p>
        </div>:null}
        {itemsToBuy.length?<div>
            <button><Link ref={props.buttonComprarRef} to={"/shoppingcart"}>Comprar</Link> </button>
            <h3>${total}</h3>
        </div>:null}
    </div>
    )
};

export default ShoppingCart;