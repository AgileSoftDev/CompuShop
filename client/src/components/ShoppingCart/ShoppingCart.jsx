import style from "./ShoppingCart.module.css"
import { useSelector } from "react-redux";
import CardShoppingCart from "./CardShoppingCart/CardShoppingCart";

const ShoppingCart = () =>{
    const itemsToBuy = useSelector(e=>e.shoppingCart)
    return(
    <div id={style.ShoppingCart}>
        <div>
           {itemsToBuy.map(e=> <CardShoppingCart key={e._id} title={e.name} img={e.img} id={e._id} price={e.price} cantidad={e.quantity}/>)}
        </div>
        <div>
            <button>Comprar</button>
            <h3>$30000</h3>
        </div>
    </div>
    )
};

export default ShoppingCart;